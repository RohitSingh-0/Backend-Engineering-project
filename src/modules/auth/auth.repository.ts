import { user } from "./auth.model.js";
import type { SignupData, User } from "../../types/auth.types.js";

export const authRepository = {
  async findByEmail(email: string): Promise<User | null> {
    const foundUser = await user.findOne({ email: email })
    return foundUser;
  },

  async createUser(data: SignupData): Promise<User> {
    const newUser = await user.create(data)
    return newUser;
  },
  async findById(id: string) {
    const existingUser = await user.findById(id);
    return existingUser;
  },
  async updateProfile(userId: string, data: any) {
    const returnProfile = await user.findByIdAndUpdate(userId, data, {new : true});
    return returnProfile;
  },
  async updatePassword(userId: string , hashedPassword: string) {
    const updatedUser = await user.findByIdAndUpdate(userId, {password: hashedPassword}, {new : true});
    return updatedUser;
  },

};
