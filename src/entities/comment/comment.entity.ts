import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Card } from "@entities/card/card.entity";

@Entity('comments')
export class Comment {
  @ApiProperty({ example: '1', description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  id: number
  @ApiProperty({ example: 'Комментарий первый...', description: 'Тело комментария' })
  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string
  @ApiProperty({ example: '11.11.2011/14:23', description: 'Время создания' })
  @Column({ name: 'checkLists', type: 'timestamp without time zone', nullable: true })

  @ManyToOne(()=>Card,(card)=> card.comments)
  card: Card
}