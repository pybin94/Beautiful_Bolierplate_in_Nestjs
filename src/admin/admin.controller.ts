import { Admin } from './entity/admin.entity';
import { Token } from './../user/user.decorator';
import { JwtAuthGuard } from './../gaurds/jwt-auth.gaurd';
import { AdminService } from './admin.service';
import { Controller, Get, Post, Body, UseGuards, Patch, Delete, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
    constructor(
        private readonly adminService: AdminService
    ) {}

    @Post("/")
    async admin(@Body() body: any, @Token() token: any): Promise<object> {
        const adminResult = await this.adminService.admin(body, token);
        return adminResult;
    }

    @Get('/tree')
    async adminTree(@Body() body: any, @Token() token: any): Promise<object> {
        const adminTreeResult = await this.adminService.adminTree(body, token);
        return adminTreeResult;
    }

    @Post('/check/identity')
    async checkAdminIdentity(@Body() body: any): Promise<object> {
        const checkAdminIdentityResult = await this.adminService.checkAdminIdentity(body);
        return checkAdminIdentityResult;
    }

    @Post('/check/code')
    async checkAdminCode(@Body() body: any): Promise<object> {
        const checkAdminCodeResult = await this.adminService.checkAdminCode(body);
        return checkAdminCodeResult;
    }

    @Post('/create')
    async createAdmin(@Body() body: any, @Token() token: any, @Req() req: Request): Promise<object> {
        const createAdminResult = await this.adminService.createAdmin(body, token, req);
        return createAdminResult;
    }

    @Post('/admins')
    async admins(@Body() body: any, @Token() token: any): Promise<object> {
        const adminsResult = await this.adminService.admins(body, token);
        return adminsResult;
    }

    @Patch('/update')
    async updateAdmin(@Body() body: any, @Token() token: any): Promise<object> {
        const updateAdminResult = await this.adminService.updateAdmin(body, token);
        return updateAdminResult;
    }

    @Patch('/update/password')
    async updateAdminPassword(@Body() body: any, @Token() token: Admin): Promise<object> {
        const updateAdminResult = await this.adminService.updateAdminPassword(body, token);
        return updateAdminResult;
    }

    @Delete('/delete')
    async deleteAdmin(@Body() body: any): Promise<object> {
        const deleteAdminResult = await this.adminService.deleteAdmin(body);
        return deleteAdminResult;
    }
    
    @Post('/top')
    async adminTop(@Body() body: any, @Token() token: any): Promise<object> {
        const adminTopResult = await this.adminService.adminTop(body, token);
        return adminTopResult;
    }

    @Post('/transaction')
    async transaction(@Body() body: any, @Token() token: any): Promise<object> {
        const adminPaymentResult = await this.adminService.adminTransaction(body, token);
        return adminPaymentResult;
    }

    @Post('/payment')
    async payment(@Body() body: any, @Token() token: any): Promise<object> {
        const adminPaymentResult = await this.adminService.adminPayment(body, token);
        return adminPaymentResult;
    }
}
