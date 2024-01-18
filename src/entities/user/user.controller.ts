import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Response, Request, request, response } from "express";
import {UserService} from "./user.service"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "@entities/user/user.entity";
import { CreateUserDto } from "@entities/user/dto/create.user.dto";
import {GetUserDto} from "@entities/user/dto/get.user.dto";
import {JwtGuard} from "@entities/auth/jwt.guard";

@ApiTags('Пользователи')
@Controller('users')
export class UserController{
  constructor(
    private readonly userService: UserService,) {

  }
  @ApiOperation({summary:'Получение всех пользователей'})
  @ApiResponse({status:200,type:[GetUserDto]})
  @Get('/')
  async getAllUsers(
    @Res() res: Response,){
    const users = await this.userService.getAllUsers()

    return res.send({
      status:'ok',
      data:users,
    })
  }

  @ApiOperation({summary:'Создание пользователя'})
  @ApiResponse({status:200,type: User})
  @Post('/')
  async createUser(
    @Body() body: CreateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ){
     await this.userService.createUser(req.body)
    return res.send({
      status:'ok',
    })
  }

  @Get('/:id/columns')
  async getAllListsByUser(@Param('id') id:number){
    return this.userService.getAllColumnsByUserId(id);
  }


}
