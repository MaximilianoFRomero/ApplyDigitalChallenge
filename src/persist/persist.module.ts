import { Module } from '@nestjs/common';
import { PersistService } from './persist.service';
import { PersistController } from './persist.controller';
import { SeedService } from 'src/seed/seed.service';
import { SeedModule } from 'src/seed/seed.module';

@Module({
  imports: [SeedModule],
  controllers: [PersistController],
  providers: [PersistService],
})
export class PersistModule {}
