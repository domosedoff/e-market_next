import { Module } from '@nestjs/common';
import { IngridsController } from './ingrids.controller';
import { IngridsService } from './ingrids.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ingrids } from 'src/ingrids/ingrids.model';

@Module({
  imports: [SequelizeModule.forFeature([Ingrids])],
  controllers: [IngridsController],
  providers: [IngridsService],
  exports: [IngridsService],
})
export class IngridsModule {}
