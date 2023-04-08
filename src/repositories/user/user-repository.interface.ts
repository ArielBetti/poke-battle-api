import { IUserDTO } from "./user.dto";

interface IUserRepository {
    find(id: string): Promise<IUserDTO | null>;
    findAll(): Promise<IUserDTO[]>;
    create(user: IUserDTO): Promise<IUserDTO>;
    update(id: string, user: IUserDTO): Promise<IUserDTO | null>;
    delete(id: string): Promise<boolean>;
}

export { IUserRepository };
