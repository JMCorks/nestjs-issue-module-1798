import { Module } from '@nestjs/common';

import { MetadataController } from './controllers/metadata/metadata.controller';
import { MetadataService } from './services/metadata/metadata.service';

@Module({
  imports: [],
  controllers: [MetadataController],
  providers: [MetadataService],
  exports: [MetadataService],
})
export class CommonModule {}
