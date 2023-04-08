import { AppError, Report, StatusCode } from "@expressots/core";
import { provide } from "inversify-binding-decorators";
import { ICreateUserDTO, ICreateUserResponseDTO } from "./create-user.dto";
import { UserRepository } from "@repositories/user/user.repository";
import { User } from "@entities/user.entity";
import { IUserDTO } from "@repositories/user/user.dto";

@provide(CreateUserUseCase)
class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(
        data: ICreateUserDTO,
    ): Promise<ICreateUserResponseDTO | null> {
        try {
            const { name, email } = data;

            const user: User = await this.userRepository.create(
                new User(name, email),
            );

            if (!user) {
                Report.Error(
                    new AppError(
                        StatusCode.BadRequest,
                        "User already exists",
                        "create-user-usecase",
                    ),
                );
            }

            let response: ICreateUserResponseDTO;

            if (user !== null) {
                response = {
                    name: user.name,
                    email: user.email,
                    status: "success",
                };
                return response;
            }

            return null;
        } catch (error: any) {
            throw error;
        }
    }
}

export { CreateUserUseCase };
