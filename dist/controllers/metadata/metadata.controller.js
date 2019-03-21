"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const metadata_service_1 = require("../../services/metadata/metadata.service");
let MetadataController = class MetadataController {
    constructor(metadataService) {
        this.metadataService = metadataService;
    }
    query() {
        return this.metadataService.query();
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({ status: 200, type: String, isArray: false }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MetadataController.prototype, "query", null);
MetadataController = __decorate([
    common_1.Controller('metadata'),
    __metadata("design:paramtypes", [metadata_service_1.MetadataService])
], MetadataController);
exports.MetadataController = MetadataController;
//# sourceMappingURL=metadata.controller.js.map