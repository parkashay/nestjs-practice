import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Hash, randomUUID } from 'crypto';
import users from 'src/data/users';
import { User } from 'src/schema/types';
import { UserDTO } from 'src/users/dtos/User.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return users;
  }

  // create new user
  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) newUser: UserDTO) {
    const id = randomUUID();
    const fullname = newUser.fullname;
    const email = newUser.email;

    users.push({ id, fullname, email });
    return {
      success: true,
      newUser,
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    const user: User = users.find((user) => user.id == id);
    if (user) {
      return {
        user,
      };
    } else {
      return {
        message: 'No users with id: ' + id,
      };
    }
  }
}
