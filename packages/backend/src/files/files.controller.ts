import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  FileTypeValidator,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common'
import { FilesService } from './files.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
          new FileTypeValidator({ fileType: /^image\/(jpeg|png)$/ }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    return this.filesService.uploadFile(file)
  }
}
