import { TPokemonContentEndpoint } from "@providers/interfaces";

interface IPokebattleBattleRequestDTO {
    pokemon1: TPokemonContentEndpoint;
    pokemon2: TPokemonContentEndpoint;
}

interface IPokebattleBattleResponseDTO {
    id?: string;
    userName: string;
    playerId: string;
    pokemon1: string;
    pokemon2: string;
    logs: string[];
    winner: boolean;
}

export { IPokebattleBattleRequestDTO, IPokebattleBattleResponseDTO };
