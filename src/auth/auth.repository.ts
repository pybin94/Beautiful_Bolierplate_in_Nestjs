import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { ConflictException, UnauthorizedException, InternalServerErrorException, Injectable } from '@nestjs/common';
import { DataSource, Repository } from "typeorm";
import { Admin } from '../admin/admin.entity';

@Injectable()
export class AuthRepository {
    constructor(
        @InjectRepository(Admin)
        private readonly repository: Repository<Admin>,
    ) {};

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<[]> {
        const { identity, password } = authCredentialsDto;
        const user = this.repository.create({ identity, password });
        try {
            await this.repository.save(user);
            return 
        } catch (error) {
            if(error.code === '23505') {
                throw new ConflictException('Existing');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async checkAdmin(authCredentialsDto: AuthCredentialsDto): Promise<Admin> {
        const { identity, password } = authCredentialsDto;
        return await this.repository.findOne({ where: { identity } });
    }
}