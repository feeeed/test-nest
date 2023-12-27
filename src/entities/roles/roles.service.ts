import {CreateRoleDto} from "./dto/create.role.dto";
import { Injectable } from "@nestjs/common";
import {Role} from "./roles.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return await this.roleRepository.save(role);
  }

  async getRoleByValue(role_str: string) {
    const role = await this.roleRepository.findOne({
      where: {role_str},
    })
    return role;
  }

}