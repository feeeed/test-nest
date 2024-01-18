import {Module} from "@nestjs/common";
import { UserModule } from "@entities/user/user.module";
import { TypeOrmModule } from "./db/typeorm.module";
import { ConfigModule } from "./config.module";
import { RolesModule } from './entities/roles/roles.module';
import { AuthModule } from "./entities/auth/auth.module";
import { ListModule } from "@entities/lists/list.module";
import { CardModule } from "@entities/card/card.module";

@Module({
  imports:[
    ConfigModule,
    UserModule,
    TypeOrmModule,
    RolesModule,
    AuthModule,
    ListModule,
    CardModule
  ],

})
export class AppModule{}