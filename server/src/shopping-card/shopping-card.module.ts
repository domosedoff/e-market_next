import { Module } from '@nestjs/common';
import { ShoppingCardController } from './shopping-card.controller';
import { ShoppingCardService } from './shopping-card.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCard } from 'src/shopping-card/shopping-card.model';
import { UsersModule } from 'src/users/users.module';
import { Ingrids } from 'src/ingrids/ingrids.model';
import { IngridsModule } from 'src/ingrids/ingrids.module';

@Module({
  imports: [
    SequelizeModule.forFeature([ShoppingCard]),
    UsersModule,
    IngridsModule,
  ],
  controllers: [ShoppingCardController],
  providers: [ShoppingCardService],
})
export class ShoppingCardModule {}
