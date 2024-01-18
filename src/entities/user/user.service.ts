import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@entities/user/user.entity";
import { Repository } from "typeorm"
import { CreateUserDto } from "@entities/user/dto/create.user.dto";
import { GetUserDto } from "@entities/user/dto/get.user.dto";
import { RolesService } from "@entities/roles/roles.service";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private rolesService: RolesService

  ) {}

  availableFields = [
    'email',
    'phone'
  ]
  async createUser(body: CreateUserDto){
    const newUser = await this.userRepository.create(body);
    const role = await this.rolesService.getRoleByValue("User")
    newUser.roles = [role]

    return await this.userRepository.save(newUser);

  }

  async getAllUsers(){
    return await this.userRepository.find({
      select:{
        email:true,
        phone:true,

      },
      relations:{
        roles:true,
      }
    });
  }

  async getUserByEmail(email:string){
    const user = await this.userRepository.findOne({
      where:{email},
      relations:{
        roles:true,
      }
    })
    return user

  }

  async getAllColumnsByUserId(id:number){
    return await this.userRepository.find({
      where:{id},
      select:{
        id:true,
        email:true,
      },
      relations:{lists:true},
    })
  }
}