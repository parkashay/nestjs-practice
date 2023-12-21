import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from '../dtos/createuser.dto';
import { LoginUserDto } from 'src/dtos/logindata.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  // create new user
  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  loginUser(@Body() loginData: LoginUserDto) {
    return this.usersService.login(loginData);
  }
}
