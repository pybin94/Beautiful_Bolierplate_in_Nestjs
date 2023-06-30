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
exports.NoticeUser = void 0;
const site_entity_1 = require("../../site/entity/site.entity");
const typeorm_1 = require("typeorm");
let NoticeUser = class NoticeUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoticeUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => site_entity_1.Site, site => site.id),
    (0, typeorm_1.JoinColumn)({ name: 'site_id' }),
    __metadata("design:type", Number)
], NoticeUser.prototype, "siteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], NoticeUser.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext' }),
    __metadata("design:type", String)
], NoticeUser.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_fixed', type: 'tinyint', comment: '0: 일반, 1: 고정' }),
    __metadata("design:type", Number)
], NoticeUser.prototype, "isFixed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', comment: '0: 숨김, 1: 보임' }),
    __metadata("design:type", Number)
], NoticeUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', comment: '0: 공지, 1: 이벤트' }),
    __metadata("design:type", Number)
], NoticeUser.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], NoticeUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], NoticeUser.prototype, "updatedAt", void 0);
NoticeUser = __decorate([
    (0, typeorm_1.Entity)({ name: 'notice_user' }),
    (0, typeorm_1.Unique)(['id'])
], NoticeUser);
exports.NoticeUser = NoticeUser;
//# sourceMappingURL=notice-user.entity.js.map