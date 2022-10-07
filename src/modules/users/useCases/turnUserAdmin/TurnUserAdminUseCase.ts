import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const currentUser = this.usersRepository.findById(user_id);
    if (!currentUser) {
      throw new Error(`User ${user_id} does not exist!`);
    }

    this.usersRepository.turnAdmin(currentUser);

    return currentUser;
  }
}

export { TurnUserAdminUseCase };
