import { provide } from "inversify-binding-decorators";
import { prismaClient } from "database/prismaClient";
import { IUserRepository } from "./user-repository.interface";
import { IUserDTO } from "./user.dto";

@provide(UserRepository)
class UserRepository implements IUserRepository {
    private readonly repository = prismaClient;

    async find(id: string): Promise<IUserDTO | null> {
        const user = await this.repository.user.findUnique({ where: { id } });
        return user ? this.mapToDTO(user) : null;
    }

    async findAll(): Promise<IUserDTO[]> {
        const users = await this.repository.user.findMany();
        return users.map(this.mapToDTO);
    }

    async create(user: IUserDTO): Promise<IUserDTO> {
        const createdUser = await this.repository.user.create({ data: user });
        return this.mapToDTO(createdUser);
    }

    async update(id: string, user: IUserDTO): Promise<IUserDTO | null> {
        const updatedUser = await this.repository.user.update({
            where: { id },
            data: user,
        });
        return updatedUser ? this.mapToDTO(updatedUser) : null;
    }

    async delete(id: string): Promise<boolean> {
        await this.repository.user.delete({ where: { id } });
        return true;
    }

    private mapToDTO(user: any): IUserDTO {
        return { id: user.id, email: user.email, name: user.name };
    }
}

export { UserRepository };
