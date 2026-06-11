import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";
import type { SignupData, User, UserResponse } from "../../types/auth.types.js";

export const authService = {
  async signup(data: SignupData): Promise<UserResponse> {
    const { email, password } = data;
    const existingUser: User | null = await authRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await authRepository.createUser({
      email,
      password: hashedPassword,
    });

    return {
      email: newUser.email,
    };
  },

  async login(data: { email: string; password: string }) {
    const { email, password } = data;
    const user = await authRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found. Please sign up.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }
    console.log(user.id);

    const token = JWT.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return {
      token,
    };
  },

  async profile(userId: string) {
    const existingUser = await authRepository.findById(userId);

    if (!existingUser) {
      throw new Error("profile not found");
    }
    return existingUser;
  },

  async updateProfile(userId: string, updateData: any) {

    if (Object.keys(updateData).length === 0) {
      throw new Error("No update updateData provided");
    }
    if (!updateData.email) {
      throw new Error("Email field is required");
    }
    if (updateData.email.trim() === "") {
      throw new Error("Email cannot be empty");
    }
    const existingUser = await authRepository.findById(userId);
    if (!existingUser) {
      throw new Error("user not found")
    }
    if (existingUser.email == updateData.email) {
      throw new Error("You enter same mail ")
    }

    const updatedData = await authRepository.updateProfile(userId, updateData);
    return updatedData;

  }
};
