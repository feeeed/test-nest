import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "@entities/user/user.entity";
import { Card } from "@entities/card/card.entity";

@Entity('lists')
export class List{
  @ApiProperty({example:'1',description:'Primary Key'})
  @PrimaryGeneratedColumn()
  id:number
  @ApiProperty({example:'List 1',description:'Название листа'})
  @Column({ name:'name', type:'varchar', nullable:true})
  name:string

  @ManyToMany(()=>User,(user)=>user.lists)
  @JoinTable()
  users: User[]
  @OneToMany(()=>Card,(card)=>card.list )
  cards: Card[]
}


