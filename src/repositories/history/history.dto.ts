interface IHistoryDTO {
    id?: string;
    userName: string;
    playerId: string;
    pokemon1: string;
    pokemon2: string;
    logs: string[];
    winner: boolean;
}

export { IHistoryDTO };
