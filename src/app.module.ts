import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommitHistoryBackService } from './commit-history-back/commit-history-back.service';
import { CommitHistoryBackController } from './commit-history-back/commit-history-back.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CommitHistoryBackController],
  providers: [AppService, CommitHistoryBackService],
})
export class AppModule {}
