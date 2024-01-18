import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { CardModule } from '../card/card.module';
import { UserModule } from "@entities/user/user.module";
import { List } from "@entities/lists/list.entity";
import { User } from "@entities/user/user.entity";

@Module({
  providers: [ListService],
  controllers: [ListController],
  imports: [
    TypeOrmModule.forFeature([List,User]),
    forwardRef(()=>UserModule),
    CardModule]
})
export class ListModule {}
