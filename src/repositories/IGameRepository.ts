import { IGameDTO } from "../entities/Games";

interface IGameRepository {
  register(game: IGameDTO): Promise<void>;
}

export { IGameRepository };
