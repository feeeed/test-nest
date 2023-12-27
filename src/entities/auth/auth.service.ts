import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto } from "@entities/user/dto/create.user.dto";
import {UserService} from "@entities/user/user.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "@entities/user/user.entity";

@Injectable()
export class AuthService {

  constructor(private userService: UserService,
              private jwtService: JwtService) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const tempUser = await this.userService.getUserByEmail(userDto.email);
    if (tempUser) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({...userDto, password: hashPassword})
    return this.generateToken(user)
  }

  private async generateToken(user: User) {
    const payload = {email: user.email, id: user.id, roles: user.roles}
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({message: 'Некорректный емайл или пароль'})
  }
}