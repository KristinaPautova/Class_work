import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Author {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name:string

}