import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
}
