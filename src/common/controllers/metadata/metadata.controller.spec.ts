import { Test, TestingModule } from '@nestjs/testing';
import { MetadataController } from './metadata.controller';

describe('Metadata Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MetadataController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MetadataController = module.get<MetadataController>(
      MetadataController,
    );
    expect(controller).toBeDefined();
  });
});
