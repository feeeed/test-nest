import {Module} from "@nestjs/common";
import { UserModule } from "@entities/user/user.module";
import { TypeOrmModule } from "./db/typeorm.module";
import { ConfigModule } from "./config.module";
import { RolesModule } from './entities/roles/roles.module';
import { AuthModule } from "./entities/auth/auth.module";

@Module({
  imports:[
    ConfigModule,
    UserModule,
    TypeOrmModule,
    RolesModule,
    AuthModule
  ],

})
export class AppModule{}