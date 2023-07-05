import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IngridsService } from 'src/ingrids/ingrids.service';
import { AddToCardDto } from 'src/shopping-card/dto/add-to-card.dto';
import { ShoppingCard } from 'src/shopping-card/shopping-card.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ShoppingCardService {
  constructor(
    @InjectModel(ShoppingCard)
    private shoppingCardModel: typeof ShoppingCard,
    private readonly usersService: UsersService,
    private readonly ingridsService: IngridsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCard[]> {
    return this.shoppingCardModel.findAll({ where: { userId } });
  }

  async add(addToCardDto: AddToCardDto) {
    const card = new ShoppingCard();
    const user = await this.usersService.findOne({
      where: { username: addToCardDto.username },
    });
    const part = await this.ingridsService.findOne(addToCardDto.partId);

    card.userId = user.id;
    card.partId = part.id;
    card.brand = part.brand;
    card.price = part.price;
    card.inStocks = part.inStocks;
    card.image = JSON.parse(part.images)[0];
    card.name = part.name;
    card.totalPrice = part.price;

    return card.save();
  }

  async updateCount(
    count: number,
    partId: number | string,
  ): Promise<{ count: number }> {
    await this.shoppingCardModel.update({ count }, { where: { partId } });

    const part = await this.shoppingCardModel.findOne({ where: { partId } });
    return { count: part.count };
  }

  async updateTotalPrice(
    totalPrice: number,
    partId: number | string,
  ): Promise<{ totalPrice: number }> {
    await this.shoppingCardModel.update({ totalPrice }, { where: { partId } });

    const part = await this.shoppingCardModel.findOne({ where: { partId } });
    return { totalPrice: part.totalPrice };
  }

  async removeAll(userId: number): Promise<void> {
    await this.shoppingCardModel.destroy({ where: { userId } });
  }
}
