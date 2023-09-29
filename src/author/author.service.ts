import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    private readonly dataSouce: DataSource,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = new Author();
    author.name = createAuthorDto.name;

    const res = await this.authorRepository.save(author);

    return res;
  }
}
