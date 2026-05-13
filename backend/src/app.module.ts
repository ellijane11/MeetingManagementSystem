import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MeetingsModule } from './meetings/meetings.module';
import { AgendasModule } from './agendas/agendas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, MeetingsModule, AgendasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
