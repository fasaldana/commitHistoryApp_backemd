import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CommitHistoryBackService {
  async getCommitHistoryBack(
    username: string,
    repoName: string,
    accessToken: string,
  ) {
    const url = `https://api.github.com/repos/${username}/${repoName}/commits`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });
    const commits = response.data;
    const commitHistoryBack = commits.map((commit) => {
      return {
        sha: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: commit.commit.author.date,
      };
    });
    return commitHistoryBack;
  }
}
