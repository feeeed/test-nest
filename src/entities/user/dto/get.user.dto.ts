import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto{
  @ApiProperty({example:'asd123@gmail.ru',description:'email'})
  readonly email: string;
  @ApiProperty({example:'+7*-***-***-**-**',description:'Номер телефона'})
  readonly phone: string;

}