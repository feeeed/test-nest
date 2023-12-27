import {ManyToMany, Column, Entity, PrimaryGeneratedColumn, JoinTable } from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "@entities/user/user.entity";



@Entity('roles')
export class Role {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn()
  id:number

  @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли '})
  @Column({ name:'role_str', type: 'varchar', unique: true })
  role_str: string;

  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  @Column({name:'description',type: 'varchar'})
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable()
  users: User[];
}