import { Controller, Get, Param } from '@nestjs/common';
import { CommitHistoryBackService } from './commit-history-back.service';

@Controller('commit-history-back')
export class CommitHistoryBackController {
  constructor(private commitHistoryBackService: CommitHistoryBackService) {}

  @Get(':repoName')
  async getCommitHistoryBack(@Param('repoName') repoName: string) {
    return this.commitHistoryBackService.getCommitHistoryBack(
      'fasaldana',
      repoName,
      process.env.GITHUB_ACCESS_TOKEN,
    );
  }
}
