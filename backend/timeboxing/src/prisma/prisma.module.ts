import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta PrismaService para que otros módulos puedan acceder a él
})
export class PrismaModule {}
