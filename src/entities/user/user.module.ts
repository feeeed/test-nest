import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import {UserController} from "@entities/user/user.controller";
import { UserService } from "@entities/user/user.service";
import { Role } from "../roles/roles.entity";
import { RolesModule } from "@entities/roles/roles.module";
import { AuthModule } from "@entities/auth/auth.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([User,Role]),
    RolesModule,
    forwardRef(()=> AuthModule),
  ],
  controllers:[UserController],
  providers: [UserService],
  exports:[
    UserService,
  ]
})

export class UserModule{}