import { Controller, Get } from '@nestjs/common';
import { CommitHistoryBackService } from './commit-history-back.service';

@Controller('commit-history-back')
export class CommitHistoryBackController {
  constructor(private commitHistoryBackService: CommitHistoryBackService) {}

  @Get()
  async getCommitHistoryBack() {
    return this.commitHistoryBackService.getCommitHistoryBack(
      'fasaldana',
      'commitHistoryApp_backend',
      process.env.GITHUB_ACCESS_TOKEN,
    );
  }
}
