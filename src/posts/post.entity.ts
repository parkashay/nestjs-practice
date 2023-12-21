import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
 
  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
