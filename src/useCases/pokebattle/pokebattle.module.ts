import { CreateModule } from "@expressots/core";
import { PokebattleBattleController } from "./battle/pokebattle-battle.controller";

const PokebattleModule = CreateModule([PokebattleBattleController]);

export { PokebattleModule };
