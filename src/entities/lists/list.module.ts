import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { CardModule } from '../card/card.module';

@Module({
  providers: [ListService],
  controllers: [ListController],
  imports: [CardModule]
})
export class ListModule {}
