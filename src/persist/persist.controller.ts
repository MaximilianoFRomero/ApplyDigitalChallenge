import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersistService } from './persist.service';

@Controller('persist')
export class PersistController {
  constructor(private readonly persistService: PersistService) {}


  @Get()
  findAll() {
    return this.persistService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.persistService.remove(id);
  }
}
