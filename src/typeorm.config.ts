import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./users/user.entity";
import { UserPost } from "./posts/post.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_posts',
  entities: [User, UserPost],
  synchronize: true,
};
