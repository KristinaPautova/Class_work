import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { Book } from '../entities/book.entity';

@Injectable()
export class BooksRepository {
  async createBook(book: Book) {
     const repository = getMongoRepository(Book);
     return await repository.save(book)
  }
}