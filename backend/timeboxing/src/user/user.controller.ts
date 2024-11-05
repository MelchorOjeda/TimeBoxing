import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  async create(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  // Método de login
  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    const user = await this.userService.validateUser(email, password);
    return user ? { success: true, user } : { success: false, message: 'Correo o contraseña incorrectos' };
  }
}
