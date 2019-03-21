import { Injectable } from '@nestjs/common';

@Injectable()
export class MetadataService {
  constructor() {}

  public query(): string {
    return 'Return something...';
  }
}
