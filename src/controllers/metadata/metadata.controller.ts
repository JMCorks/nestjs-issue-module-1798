import { ApiResponse } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { MetadataService } from '../../services/metadata/metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get()
  @ApiResponse({ status: 200, type: String, isArray: false })
  public query(): string {
    return this.metadataService.query();
  }
}
