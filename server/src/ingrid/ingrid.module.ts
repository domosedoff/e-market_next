import { Module } from '@nestjs/common';
import { IngridController } from './ingrid.controller';
import { IngridService } from './ingrid.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ingrid } from 'src/ingrid/ingrid.model';

@Module({
  imports: [SequelizeModule.forFeature([Ingrid])],
  controllers: [IngridController],
  providers: [IngridService],
  exports: [IngridService],
})
export class IngridModule {}
