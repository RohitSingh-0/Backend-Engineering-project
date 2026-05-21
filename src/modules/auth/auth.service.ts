import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";
import type { SignupData, User, UserResponse } from "./auth.types.js";

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

    const token = JWT.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return {
      token,
    };
  },
};
