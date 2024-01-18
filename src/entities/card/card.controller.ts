import { Body, Controller, Param, Post } from "@nestjs/common";
import { CardService } from "@entities/card/card.service";
import { CreateCardDto } from "@entities/card/dto/create.card.dto";

@Controller('card')
export class CardController {

  constructor(private readonly cardService: CardService) {

  }

  @Post('/:id')
  create(@Body()dto:CreateCardDto,@Param('id') id:number){
    return this.cardService.createCard(dto,id);

  }


}
