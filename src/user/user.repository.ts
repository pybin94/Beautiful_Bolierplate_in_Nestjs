import { handleError, handleSuccess } from './../config/log.tools.config';
import { UserSignInDto } from './dto/user-sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, InternalServerErrorException, Injectable } from '@nestjs/common';
import { Like, Repository } from "typeorm";
import { User } from './user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {};

    async createUser(userSignInDto: UserSignInDto): Promise<[]> {

        const user = this.repository.create(userSignInDto);
        try {
            await this.repository.save(user);
            return 
        } catch (error) {
            if(error.code === '23505') {
                throw new ConflictException('이미 존재하는 유저입니다.');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async users(body: any): Promise<object> {
        try {
            let limit = body.limit;
            let offset = body.offset;
            let searchValue = body.searchValue;
            let users: any;

            if(searchValue) {
                users = await this.repository.findAndCount({
                    where: [
                      { identity: Like(`%${searchValue}%`) },
                      { user_name: Like(`%${searchValue}%`) }
                    ],
                    take: limit,
                    skip: offset,
                    order: {
                        created_at: "DESC",
                    },
                });
            } else {
                users = await this.repository.findAndCount({
                    take: limit,
                    skip: offset,
                    order: {
                        created_at: "DESC",
                    },
                });
            }

            const [list, total] = users;
           
            return handleSuccess({list, total});
        } catch (error) {
            handleError("allIsers", error, "데이터 조회중 에러가 발생했습니다.")
        }
    }
}