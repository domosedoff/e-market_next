import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class Ingrids {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '7044' })
  price: string;

  @ApiProperty({ example: 'Poland' })
  brand: string;

  @ApiProperty({ example: null })
  packing: number;

  @ApiProperty({
    example:
      'Distinctio dicta eos unde error sunt voluptas enim aperiam quia atque harum ad omnis nisi.',
  })
  info1: string;

  @ApiProperty({
    example:
      'Optio nobis odit vel modi nostrum esse dolor ipsam error et nostrum id magnam magnam.',
  })
  info2: string;

  @ApiProperty({
    example:
      'Alias optio distinctio consectetur nostrum atque omnis nesciunt eaque autem ea illum vitae rem ad.',
  })
  info3: string;

  @ApiProperty({
    example:
      'Nihil quod reprehenderit soluta cum autem nisi sapiente nostrum exercitationem.',
  })
  info4: string;

  @ApiProperty({ example: '_bRwFruDVGRTQyG' })
  vendorCode: string;

  @ApiProperty({
    example:
      '["https://loremflickr.com/640/480?lock=1974657947271168?ramdom=007010258786897571212552031523","https://loremflickr.com/640/480?lock=3238438144835584?ramdom=090968414220583494764307681714","https://picsum.photos/seed/5MvHp/640/480?ramdom=707973565073052375759959737898","https://picsum.photos/seed/TfcVa/640/480?ramdom=890474803461522220094497370488","https://picsum.photos/seed/zNWuOLH/640/480?ramdom=763889642009540695998707820749","https://picsum.photos/seed/3nhquk1snq/640/480?ramdom=897118901072992868802490846589","https://loremflickr.com/640/480?lock=7146812353806336?ramdom=228503296208172926948005500477"]',
  })
  images: string;

  @ApiProperty({ example: 3 })
  inStocks: number;

  @ApiProperty({ example: false })
  bestsellers: boolean;

  @ApiProperty({ example: true })
  new: boolean;

  @ApiProperty({ example: 976 })
  popularity: number;

  @ApiProperty({
    example: 'Mollitia consectetur dolor a voluptas impedit quos.',
  })
  compatibility: string;

  @ApiProperty({ example: '2023-06-01T04:14:15.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-06-01T04:14:15.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Ingrids, isArray: true })
  rows: Ingrids;
}

export class Bestsellers extends Ingrids {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Ingrids, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends Ingrids {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Ingrids, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends Ingrids {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends Ingrids {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class FindOneResponse extends Ingrids {}

export interface IIngridQuery {
  limit: string;
  offset: string;
  ingrid: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IIngridPartsFilter {
  brand: string | undefined;
  price: { [Op.between]: number[] };
}
