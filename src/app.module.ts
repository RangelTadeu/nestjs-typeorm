import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    AuthorModule,
    ArticleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true, // not ok for production
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
