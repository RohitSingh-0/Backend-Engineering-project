import { user } from "./auth.model.js";
import type { SignupData, User } from "./auth.types.js";

export const authRepository = {
  async findByEmail(email: string): Promise<User | null> {
    const foundUser = await user.findOne({email : email})
    return foundUser;
  },

  async createUser(data: SignupData): Promise<User> {
    const newUser = await user.create(data)
    return newUser; 
  },
};
