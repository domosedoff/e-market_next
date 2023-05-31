import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

import { IngridService } from 'src/ingrid/ingrid.service';

@Controller('ingrid')
export class IngridController {
  constructor(private readonly ingridService: IngridService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.ingridService.paginateAngFilter(query);
  }
}
