import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({} as any);
  }

  async onModuleInit() {
    // This will stay red until you run the 'generate' command below
    await this.$connect();
    console.log('--- MongoDB Connected Successfully ---');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}