import { User } from 'src/user/entity/user.entity';
import { NoticeMessageAdmin } from 'src/notice/entity/notice-message-admin.entity';
import { NoticeMessageBroadcastAdmin } from 'src/notice/entity/notice-message-boradcast-admin.entity';
import { LogUserMoney } from 'src/log/entity/log-user-money.entity';
import { LogAdminRolling } from 'src/log/entity/log-admin-rolling.entity';
import { LogAdminPoint } from 'src/log/entity/log-admin-point.entity';
import { LogAdminSignin } from 'src/log/entity/log-admin-signin.entity';
import { AdminCommissionRate } from './admin-commission-rate.entity';
import { LogUserPoint } from 'src/log/entity/log-user-point.entity';
import { LogAdminMoney } from 'src/log/entity/log-admin-money.entity';
export declare class Admin {
    id: number;
    siteId: number;
    identity: string;
    password: string;
    nickname: string;
    phoneNumber: string;
    balance: number;
    point: number;
    level: number;
    code: string;
    topId: number;
    bank: string;
    accountNumber: number;
    accountHolder: string;
    joinIp: string;
    latestIp: string;
    memo: string;
    createdAt: Date;
    latestAt: string;
    blockedAt: string;
    adminCommissionRate: AdminCommissionRate;
    user: User[];
    noticeMessageAdmin: NoticeMessageAdmin[];
    noticeMessageBroadcastAdmin: NoticeMessageBroadcastAdmin[];
    logAdminMoney: LogAdminMoney[];
    logAdminPoint: LogAdminPoint[];
    logToAdminPoint: LogAdminPoint[];
    logAdminRolling: LogAdminRolling[];
    logAdminSignin: LogAdminSignin[];
    logUserMoney: LogUserMoney[];
    logUserPoint: LogUserPoint[];
    children: Admin[];
}
