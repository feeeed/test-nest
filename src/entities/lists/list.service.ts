import { Injectable, ExecutionContext } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { List } from "@entities/lists/list.entity";
import { Repository } from "typeorm";
import {CreateListDto} from "@entities/lists/dto/create.list.dto";

@Injectable()
export class ListService {

  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
    // user service probably ??
    ){}




  async createList(dto: CreateListDto){
    const list = await this.listRepository.create(dto);
    return await this.listRepository.save(list);

  }
}
