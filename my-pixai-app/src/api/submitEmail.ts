// src/api/submitEmail.ts

import { Octokit } from '@octokit/rest';

interface EmailSubmissionResponse {
  success: boolean;
  message: string;
}

interface GitHubError {
  status: number;
  message: string;
}

export async function submitEmailToGithub(email: string): Promise<EmailSubmissionResponse> {
  try {
    console.log('Starting email submission process...');
    console.log('GitHub Token exists:', !!import.meta.env.VITE_GITHUB_TOKEN);

    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN
    });

    try {
      console.log('Attempting to get current file content...');
      const { data } = await octokit.repos.getContent({
        owner: 'helen-jin8',
        repo: 'PixAI_WebApp',
        path: 'emails.txt',
        ref: 'main'
      });

      if (!('content' in data) || !('sha' in data)) {
        throw new Error('Invalid file data received from GitHub');
      }

      console.log('Successfully got file content. SHA:', data.sha);

      // Decode existing content and append new email
      const existingContent = window.atob(data.content.replace(/\n/g, ''));
      console.log('Current content:', existingContent);
      
      const updatedContent = existingContent ? `${existingContent}\n${email}` : email;
      console.log('New content will be:', updatedContent);

      // Update the file
      console.log('Attempting to update file...');
      await octokit.repos.createOrUpdateFileContents({
        owner: 'helen-jin8',
        repo: 'PixAI_WebApp',
        path: 'emails.txt',
        message: `Add email subscription: ${email}`,
        content: window.btoa(updatedContent),
        sha: data.sha,
        branch: 'main'
      });

      console.log('File updated successfully!');
      return {
        success: true,
        message: 'Email saved successfully'
      };

    } catch (error: unknown) {
      console.error('Detailed error:', error);
      // Type guard to check if error is GitHubError
      if (error && typeof error === 'object' && 'status' in error) {
        const gitHubError = error as GitHubError;
        // If getting the file failed, try creating it
        if (gitHubError.status === 404) {
          console.log('File not found, attempting to create...');
          await octokit.repos.createOrUpdateFileContents({
            owner: 'helen-jin8',
            repo: 'PixAI_WebApp',
            path: 'emails.txt',
            message: `Create email subscription list with: ${email}`,
            content: window.btoa(email),
            branch: 'main'
          });
          console.log('File created successfully!');
          return {
            success: true,
            message: 'Email saved successfully'
          };
        }
      }
      throw error;
    }
  } catch (error: unknown) {
    console.error('Final error catch:', error);
    let errorMessage = 'Unknown error occurred';
    if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = error.message as string;
    }
    return {
      success: false,
      message: errorMessage
    };
  }
}