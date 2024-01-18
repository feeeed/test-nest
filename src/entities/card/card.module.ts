import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CommentController } from '../comment/comment.controller';
import { CommentModule } from '../comment/comment.module';
import { Card } from "@entities/card/card.entity";
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  controllers: [CardController, CommentController],
  providers: [CardService],
  imports: [
    TypeOrmModule.forFeature([Card]),
    CommentModule
  ]
})
export class CardModule {}
