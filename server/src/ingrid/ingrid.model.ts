import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Ingrid extends Model {
  @Column
  name: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  brand: string;

  @Column
  packing: string;

  @Column
  info1: string;

  @Column
  info2: string;

  @Column
  info3: string;

  @Column
  info4: string;

  @Column
  vendorCode: number;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  inStocks: number;

  @Column({ defaultValue: false })
  bestsellers: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  compatibility: string;
}
