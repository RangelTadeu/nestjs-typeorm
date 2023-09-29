import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Article } from './article.entity';
import { Author } from '../author/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article-dto';

@Injectable()
export class ArticleService {
  constructor(
    private readonly dataSouce: DataSource,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const article = new Article();
    article.title = createArticleDto.title;
    article.description = createArticleDto.description;

    const author = new Author();
    author.id = createArticleDto.authorId;
    article.author = author;

    const res = await this.articleRepository.save(article);

    return res;
  }
}
