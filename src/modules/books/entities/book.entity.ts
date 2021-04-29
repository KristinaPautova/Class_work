import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: string;

  @Column(() => Author)
  author: Author;

}