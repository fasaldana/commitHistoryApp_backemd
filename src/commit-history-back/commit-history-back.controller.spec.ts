import { Test, TestingModule } from '@nestjs/testing';
import { CommitHistoryBackController } from './commit-history-back.controller';

describe('CommitHistoryBackController', () => {
  let controller: CommitHistoryBackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitHistoryBackController],
    }).compile();

    controller = module.get<CommitHistoryBackController>(
      CommitHistoryBackController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
