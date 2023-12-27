import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
  @ApiProperty({example:'asd123@gmail.ru',description:'email'})
  readonly email: string;
  @ApiProperty({example:'ff23f@df24',description:'Пароль'})
  readonly password: string;

}