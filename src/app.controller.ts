import { Controller, Get, UploadedFile, UseInterceptors, Post } from '@nestjs/common';
import { diskStorage } from 'multer'
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (rel, file, callback) => {
          callback(null, file.originalname)
        }
      })
    })
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return;
  }
}
