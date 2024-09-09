import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Soy una serpiente que anda por el bosque';
  }
}
