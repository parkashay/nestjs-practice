import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createuser.dto';
import { compare, hash } from 'bcrypt';
import { LoginUserDto } from 'src/dtos/logindata.dto';
import { ErrorMessage, LoginResponse } from 'src/schema/types';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async login(loginCreds: LoginUserDto): Promise<LoginResponse | ErrorMessage> {
    const user = await this.usersRepository.findOne({
      where: {
        email: loginCreds.email,
      },
    });

    if (!user) return { message: 'Invalid email.' };

    const valid = await compare(loginCreds.password, user.password);
    if (!valid) return { message: 'Credentials do not match.' };

    const payload = { id: user.id };
    const accessToken = await this.jwtService.signAsync(payload);

    return { user: user, accessToken: accessToken };
  }

  /**
   * Register a new user
   *
   * @param  newUser
   * @returns loggedInUser with json web token
   * 
   */
  async createUser(newUser: CreateUserDto) {
    const fullname = newUser.fullname;
    const email = newUser.email;
    const password = newUser.password;
    const hashedPassword = await hash(password, 7);
    try {
      const saved = await this.usersRepository.save({fullname, email, password: hashedPassword});
      if (saved) {
        // auto login with the provided credentials
        const loggedIn = await this.login({
          email: saved.email,
          password: password,
        });
        return loggedIn;
      }
    } catch (err) {
      throw new HttpException(err.sqlMessage || err, HttpStatus.BAD_REQUEST);
    }
  }
}
