import { UserPost } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  fullname: string;

  @Column({nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @OneToMany(() => UserPost, (post) => post.user)
  posts: UserPost[];
}
