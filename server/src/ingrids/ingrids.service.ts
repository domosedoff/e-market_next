import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ingrids } from 'src/ingrids/ingrids.model';
import { IIngridQuery } from 'src/ingrids/types';
import { Op } from 'sequelize';

@Injectable()
export class IngridsService {
  constructor(
    @InjectModel(Ingrids)
    private ingridsModel: typeof Ingrids,
  ) {}

  async paginateAngFilter(
    query: IIngridQuery,
  ): Promise<{ count: number; rows: Ingrids[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    return this.ingridsModel.findAndCountAll({
      limit,
      offset,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: Ingrids[] }> {
    return this.ingridsModel.findAndCountAll({
      where: { bestsellers: true },
    });
  }

  async new(): Promise<{ count: number; rows: Ingrids[] }> {
    return this.ingridsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<Ingrids> {
    return this.ingridsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<Ingrids> {
    return this.ingridsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: Ingrids[] }> {
    return this.ingridsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
