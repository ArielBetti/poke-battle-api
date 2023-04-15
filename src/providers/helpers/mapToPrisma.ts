import { User as PrismaUser, History as PrismaHistory } from "@prisma/client";
import { IHistoryDTO } from "@repositories/history/history.dto";
import { IUserDTO } from "@repositories/user/user.dto";

export function mapToPrisma(user: IUserDTO): PrismaUser {
    const toMap = {
        name: user.name,
        email: user.email,
        password: user.password,
        id: user.id,
    };

    return toMap;
}

export function mapHistoryToPrisma(history: IHistoryDTO): PrismaHistory {
    const toMap = {
        id: history.id,
        logs: history.logs,
        userName: history.userName,
        playerId: history.playerId,
        pokemon1: history.pokemon1,
        pokemon2: history.pokemon2,
        winner: history.winner,
    };

    return toMap;
}
