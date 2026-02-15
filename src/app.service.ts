import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World - 4 from ' + (process.env.DATABASE_USER ?? 'No Database User')
    };
  }
}
