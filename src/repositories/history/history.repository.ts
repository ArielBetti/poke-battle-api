import { provide } from "inversify-binding-decorators";
import { prismaClient } from "@providers/database/prismaClient";
import { IHistoryRepository } from "./history-repository.interface";
import { IHistoryDTO } from "./history.dto";
import { History } from "@entities/history.entity";

import { mapHistoryToPrisma } from "@providers/helpers/mapToPrisma";

@provide(HistoryRepository)
class HistoryRepository implements IHistoryRepository {
    private readonly repository = prismaClient;

    async findAll(id: string): Promise<IHistoryDTO[]> {
        const historys = await this.repository.history.findMany({
            where: {
                id,
            },
        });

        return historys.map((history) => this.mapToDTO(history));
    }

    async create(history: IHistoryDTO): Promise<History> {
        const createHistory = await this.repository.history.create({
            data: mapHistoryToPrisma({
                ...history,
            }),
        });
        return this.mapToDTO(createHistory);
    }

    private mapToDTO(history: IHistoryDTO): History {
        const newHistory = new History(
            history.logs,
            history.userName,
            history.playerId,
            history.winner,
            history.pokemon1,
            history.pokemon2,
        );
        return newHistory;
    }
}

export { HistoryRepository };
