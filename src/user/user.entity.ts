import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['identity'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    identity: string;

    @Column()
    password: string;

    @Column()
    user_name: string;

    @Column()
    set1: string;

    @Column()
    set2: string;

    @Column()
    set3: string;

    @Column()
    set4: string;

    @Column()
    memo: string;

    @CreateDateColumn()
    created_at: Date;
}