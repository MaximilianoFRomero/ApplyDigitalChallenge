import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seed, SeedSchema } from './entity/seed.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
  MongooseModule.forFeature([
    {
    name:Seed.name,
    schema: SeedSchema
  }])],
  exports: [MongooseModule]
})
export class SeedModule {}
