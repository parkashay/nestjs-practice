import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { App } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm.config';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    PostsModule,
  ],
  controllers: [App],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
