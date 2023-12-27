import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { List } from "@entities/lists/list.entity";
import { Comment } from "@entities/comment/comment.entity";

@Entity('cards')
export class Card {
  @ApiProperty({ example: '1', description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  id: number
  @ApiProperty({ example: 'label example', description: 'Название лейбла' })
  @Column({ name: 'label', type: 'varchar', nullable: true })
  label: string
  @ApiProperty({ example: 'Описание для карточки', description: 'Описание' })
  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string
  @ApiProperty({ example: '{1:asdasd,2:asdasd}', description: 'Чек лист' })
  @Column({ name: 'checkLists', type: 'varchar', nullable: true })
  checkLists: string
  @ManyToOne(()=>List,(list)=> list.cards)
  list: List
  @OneToMany(()=>Comment,(comment)=>comment.card)
  comments: Comment[]
}