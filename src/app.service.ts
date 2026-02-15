import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Helloooooo Worlddddd! from ' + (process.env.DATABASE_USER ?? 'No Database User')
    };
  }
}
