import { Module } from "@nestjs/common";
import {TypeOrmModule as NestTypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports:[
    NestTypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: "postgres",
      password: "gr123123123",
      database: "test_db",
      entities:['dist/entities/**/*.entity.js'],
      //migrations:['dist/db/migrations/**/*.js'],
      synchronize:true,
      //cli:{}


    })
  ]
})
export class TypeOrmModule {}