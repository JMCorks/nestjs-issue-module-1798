"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const metadata_controller_1 = require("./controllers/metadata/metadata.controller");
const metadata_service_1 = require("./services/metadata/metadata.service");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [metadata_controller_1.MetadataController],
        providers: [metadata_service_1.MetadataService],
        exports: [metadata_service_1.MetadataService],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map