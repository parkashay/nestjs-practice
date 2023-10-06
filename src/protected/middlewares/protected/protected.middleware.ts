import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ProtectedMiddleware implements NestMiddleware {
  // pass this string as a authorization header while requesting for the data
  private authToken: string = 'Give Me Access';
  use(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    console.log('endpoint hit via middleware');
    if(authToken){
      if(authToken === this.authToken){
        next();
      }
      else{
        throw new HttpException('Invalid Token', HttpStatus.BAD_REQUEST);
      }
    }
    else{
      throw new HttpException('UnAuthorized Access', HttpStatus.UNAUTHORIZED);
    }
  }
}
