import { Injectable } from '@nestjs/common';
import { Card } from "@entities/card/card.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCardDto } from './dto/create.card.dto'



@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,

  ) {}

  async getCardByListId(id:number){
    const card = await this.cardRepository.findOne({
      where:{id},
      relations:{list:true}
    })
    return card
  }


  async createCard(dto:CreateCardDto,listId){
    const newCard = await this.cardRepository.create(dto);
    newCard.list = listId

    return await this.cardRepository.save(newCard)
  }

}
