import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios, { AxiosInstance } from 'axios';
import { Seed, SeedDocument } from './entity/seed.entity';
import { Model } from 'mongoose';




@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios

  constructor(
    @InjectModel(Seed.name)
    private readonly seedModel = Model<SeedDocument>,
  ){}

  @Cron(CronExpression.EVERY_HOUR)
  async executeSeed() {
    await this.seedModel.deleteMany();
    const {data} = await this.axios.get(process.env.APIURL);
    const {hits} = data;

    /*const newArray: [] = hits.map((item)=> {
    })*/
    for(let i in hits){
      delete hits[i]._highlightResult;
      delete hits[i]._tags;
    }
    console.log(hits);
    this.seedModel.insertMany(hits)
    console.log('Seed executed');
    return hits;
  }


}
