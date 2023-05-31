import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ingrid } from 'src/ingrid/ingrid.model';
import { IIngridQuery } from 'src/ingrid/types';
import { Op } from 'sequelize';

@Injectable()
export class IngridService {
  constructor(
    @InjectModel(Ingrid)
    private ingridModel: typeof Ingrid,
  ) {}

  async paginateAngFilter(
    query: IIngridQuery,
  ): Promise<{ count: number; rows: Ingrid[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    return this.ingridModel.findAndCountAll({
      limit,
      offset,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: Ingrid[] }> {
    return this.ingridModel.findAndCountAll({
      where: { bestsellers: true },
    });
  }

  async new(): Promise<{ count: number; rows: Ingrid[] }> {
    return this.ingridModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number): Promise<Ingrid> {
    return this.ingridModel.findOne({
      where: { id },
    });
  }

  async findOneByName(id: number): Promise<Ingrid> {
    return this.ingridModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: Ingrid[] }> {
    return this.ingridModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
