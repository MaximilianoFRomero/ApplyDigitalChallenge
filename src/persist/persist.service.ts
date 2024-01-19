import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Seed, SeedDocument } from 'src/seed/entity/seed.entity';
import { Model } from 'mongoose';

@Injectable()
export class PersistService {

  constructor(
    @InjectModel(Seed.name)
    private readonly seedModel = Model<SeedDocument>,
  ){}

  async findAll() {
    const dbData = await this.seedModel.find().sort({created_at_i: -1});
    return dbData;
  }

  async remove(id: string) {
    const {deletedCount} = await this.seedModel.deleteOne({_id: id});
    if(deletedCount===0){
      throw new BadRequestException(`Id not found`);
    }
    return;
  }  
}

