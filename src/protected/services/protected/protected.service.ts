import { Injectable } from '@nestjs/common';

@Injectable()
export class ProtectedService {
  private protectedData = [
    'This data is protected by a middleware',
    {
      title: 'Protected Data',
      content: 'There are the nuke codes, 112, 224, 6767',
    },
  ];
  getProtectedData() {
    return this.protectedData;
  }
}
