import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CommentController } from '../comment/comment.controller';
import { CommentModule } from '../comment/comment.module';

@Module({
  controllers: [CardController, CommentController],
  providers: [CardService],
  imports: [CommentModule]
})
export class CardModule {}
