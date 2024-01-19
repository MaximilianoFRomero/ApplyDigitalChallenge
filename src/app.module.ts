import { Module } from '@nestjs/common';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PersistModule } from './persist/persist.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
    ScheduleModule.forRoot(),
    SeedModule,
    PersistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
