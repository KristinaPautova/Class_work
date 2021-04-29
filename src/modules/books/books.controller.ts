import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks()
  }

  @Get(':id')
  getBook(@Param() params) {
    console.log('Get book, ', params);
    return this.booksService.getBook(params.id)
  }

  @Get('/author/:name')
  getByAuthor(@Param() params) {
    console.log('Get book by author, ', params);
    return this.booksService.getBookByAuthorName(
      params.name)
  }

  @Post()
  createBook(@Body() book: Book) {
    console.log('Greate book, ', book);
    return this.booksService.createBook(book)
  }

  @Put()
  updateBook(@Body() book: Book){
    console.log('Update book, ', book);
    console.log(book);
    return this.booksService.updateBook(book);
  }

  @Delete(':id')
  deleteBook(@Param() params) {
    console.log('Delete book, ', params);
    return this.booksService.deleteBook(params.id)
  }
}