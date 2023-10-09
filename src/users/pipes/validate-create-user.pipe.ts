import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { UserDTO } from '../dtos/User.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: UserDTO, metadata: ArgumentMetadata) {
    console.log('validation pipe is running...')
    console.log(value, metadata)
    const ageToInteger = parseInt(value.age.toString());
    console.log(ageToInteger)
    if(!ageToInteger){
      console.log('please provide a valid age. It must be a number');
      throw new HttpException('The provided age is not a number', HttpStatus.BAD_REQUEST)
    }else{
      return {...value, age:ageToInteger}
    }
  }
}
