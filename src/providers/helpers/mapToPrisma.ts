import { User as PrismaUser } from "@prisma/client";
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
