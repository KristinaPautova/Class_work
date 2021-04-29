import { Injectable } from '@nestjs/common';
import { Book } from './books.interface';
import { ObjectID } from 'mongodb'
import { getMongoManager } from 'typeorm';
import { Book as BookEntity } from './entities/book.entity';
import { Author } from './entities/author.entity';
import { BooksRepository } from './repositories/books.repository';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {

  }
  // private books: Book[] = [
  //   {
  //     id: 1,
  //     author: 'John Doe',
  //     title: "My firs book",
  //   },
  //   {
  //     id: 2,
  //     author: 'John Snow',
  //     title: "Legens",
  //   }
  // ];

  async getBooks() {
    const manager = getMongoManager();
    return await manager.findOne(BookEntity)
  }

  async getBook(id: string) {
    const manager = getMongoManager();
    return await manager.findOne(BookEntity, { _id: new ObjectID(id) })
  }

  async getBookByAuthorName(name: string) {
    const manager = getMongoManager();
    return await manager.findOne(BookEntity, {
      where: {
        ['author.name']: name,
      }
    })
  }

 async createBook(book: Book) {
    const newBook = new BookEntity();

    newBook.author = new Author();
    newBook.author.name = book.author;
    newBook.title = book.title;

    return await this.booksRepository.createBook(newBook)
  }

  async updateBook(book: Book){
    const manager = getMongoManager();
    const existingBook = await manager.findOne(BookEntity, { _id: new ObjectID(book.id)})

    existingBook.author = new Author();
    existingBook.author.name = book.author;
    existingBook.title = book.title;

    return await manager.save(existingBook);
  }

  async deleteBook(id: string) {
    const manager = getMongoManager();
    return await manager.deleteOne(BookEntity, { _id: new ObjectID(id)})

  }
}