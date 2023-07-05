import { Controller, Get, Param, UseGuards, Post, Body } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCardDto } from 'src/shopping-card/dto/add-to-card.dto';
import { ShoppingCardService } from 'src/shopping-card/shopping-card.service';

@Controller('shopping-card')
export class ShoppingCardController {
  constructor(private readonly shoppingCardService: ShoppingCardService) {}

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  getAll(@Param('id') userId: string) {
    return this.shoppingCardService.findAll(userId);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/add')
  addToCard(@Body() addToCardDto: AddToCardDto) {
    return this.shoppingCardService.add(addToCardDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/count/:id')
  updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCardService.updateCount(count, partId);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/total-price/:id')
  updateTotalPrice(
    @Body() { total_price }: { total_price: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCardService.updateTotalPrice(total_price, partId);
  }
}
