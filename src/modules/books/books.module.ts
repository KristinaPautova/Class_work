import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksRepository } from './repositories/books.repository';


@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService, BooksRepository],

})
export class BooksModule {}