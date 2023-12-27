import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.entity";
import { List } from "../lists/list.entity"

@Entity('users')
export class User {
  @ApiProperty({ example: '1', description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'asd123@gmail.ru', description: 'email' })
  @Column({ name: 'email', type: 'varchar' })
  email: string

  @ApiProperty({ example: '+7*-***-***-**-**', description: 'Номер телефона' })
  @Column({ name: 'phone', type: 'varchar', nullable: true })
  phone: string

  @ApiProperty({ example: 'ff23f@df24', description: 'Пароль' })
  @Column({ name: 'password', type: 'varchar' })
  password: string

  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя' })
  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];

  @ManyToMany(() => List, (list) => list.users)
  lists: List[];
}