import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: any) {
    return this.prisma.user.create({
      data,
    });
  }

  // Método de validación de usuario
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Verificar si el usuario existe y la contraseña coincide
    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
