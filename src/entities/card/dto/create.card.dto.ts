import { ApiProperty } from "@nestjs/swagger";

export class CreateCardDto{
  @ApiProperty({example:'label example',description:'Название лейбла'})
  readonly label: string;
  @ApiProperty({example:'Описание для карточки',description:'Описание'})
  readonly description: string;
  @ApiProperty({ example: '{1:asdasd,2:asdasd}', description: 'Чек лист' })
  readonly checkLists: string

}