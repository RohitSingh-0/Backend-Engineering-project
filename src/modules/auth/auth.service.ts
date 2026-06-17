import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";
import type { SignupData, User, UserResponse, UpdateProfileData } from "../../types/auth.types.js";
import { isPasswordValid, isValidEmail } from "../../utils/validation.js";

export const authService = {
  async signup(signupData: SignupData): Promise<UserResponse> {
    const { email, password } = signupData;
    if (!isValidEmail(signupData.email)) {
      throw new Error("Invalid email format");
    }
    if (!isPasswordValid(signupData.password)) {
      throw new Error("Password must contain at least 8 characters, one uppercase letter, one lowercase letter,one number and one special character")
    }
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

  async login(loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    const user = await authRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found. Please sign up.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const token = JWT.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      },
    );

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

  async updateProfile(userId: string, updateData: UpdateProfileData) {
    if (Object.keys(updateData).length === 0) {
      throw new Error("No updateData provided");
    }
    if (!updateData.email) {
      throw new Error("Email field is required");
    }
    if (updateData.email.trim() === "") {
      throw new Error("Email cannot be empty");
    }
    if (!isValidEmail(updateData.email)) {
      throw new Error("Invalid email format");
    }
    const existingUser = await authRepository.findById(userId);
    if (!existingUser) {
      throw new Error("user not found");
    }
    if (existingUser.email === updateData.email) {
      throw new Error("New email must be different from current email");
    }

    const updatedData = await authRepository.updateProfile(userId, updateData);
    if (!updatedData) {
      throw new Error("Profile update failed");
    }
    return updatedData;
  },
  async changePassword(userId: string, oldPassword: string, newPassword: string) {

    if (newPassword.trim() === "") {
      throw new Error("Enter new password");
    }
    if (oldPassword.trim() === "") {
      throw new Error("Enter old password");
    }
    if (!isPasswordValid(newPassword)) {
      throw new Error("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character");
    }

    const existingUser = await authRepository.findById(userId);

    if (!existingUser) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, existingUser.password);

    if (!isPasswordMatch) {
      throw new Error("Incorrect old password");
    }
    if (oldPassword === newPassword) {
      throw new Error("New password must be different from current password");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await authRepository.updatePassword(userId, hashedPassword);
    return {
      message: "Password updated successfully"
    }
  },
};
