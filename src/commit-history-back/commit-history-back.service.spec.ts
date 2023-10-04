import { Test, TestingModule } from '@nestjs/testing';
import { CommitHistoryBackService } from './commit-history-back.service';

describe('CommitHistoryBackService', () => {
  let service: CommitHistoryBackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitHistoryBackService],
    }).compile();

    service = module.get<CommitHistoryBackService>(CommitHistoryBackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
