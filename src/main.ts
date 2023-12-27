import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { request } from "express";

async function bootstrap(){
  const PORT = 3000;
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Test nest api')
    .setDescription('doc nest test api')
    .setVersion('v1')
    .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/docs',app,document)
  await app.listen(PORT,() => console.log(`Server start on ${PORT}`))


}

bootstrap()