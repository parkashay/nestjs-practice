import { Controller, Get, Param, Req } from '@nestjs/common';
import users from 'src/data/users';
import { User } from 'src/schema/types';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return users;
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
