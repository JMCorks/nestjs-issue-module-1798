import { MetadataService } from '../../services/metadata/metadata.service';
export declare class MetadataController {
    private readonly metadataService;
    constructor(metadataService: MetadataService);
    query(): string;
}
