import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

import { IngridsService } from 'src/ingrids/ingrids.service';

@Controller('ingrids')
export class IngridsController {
  constructor(private readonly ingridsService: IngridsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.ingridsService.paginateAngFilter(query);
  }
}
