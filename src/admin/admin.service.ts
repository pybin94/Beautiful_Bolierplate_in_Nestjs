import { AdminRepository } from './admin.repository';
import { AdminSignInDto } from './dto/admin-sign-in.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor(
        private readonly adminRepository: AdminRepository,
    ) {}

    async createAdmin(adminSignInDto: AdminSignInDto): Promise<[]> {
        return await this.adminRepository.createAdmin(adminSignInDto);
    }
}
