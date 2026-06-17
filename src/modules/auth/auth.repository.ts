import { user } from "./auth.model.js";
import type { SignupData, User, UpdateProfileData} from "../../types/auth.types.js";

export const authRepository = {
  async findByEmail(email: string): Promise<User | null> {
    const foundUser = await user.findOne({ email: email })
    return foundUser;
  },

  async createUser(data: SignupData): Promise<User> {
    const newUser = await user.create(data)
    return newUser;
  },
  async findById(id: string):  Promise<User | null> {
    const existingUser = await user.findById(id);
    return existingUser;
  },
  async updateProfile(userId: string, data: UpdateProfileData): Promise<User | null> {
    const updateUser = await user.findByIdAndUpdate(userId, data, {new : true});
    return updateUser;
  },
  async updatePassword(userId: string , hashedPassword: string): Promise<User | null> {
    const updatedUser = await user.findByIdAndUpdate(userId, {password: hashedPassword}, {new : true});
    return updatedUser;
  },

};
