import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class ShoppingCard extends Model {
  @Column
  userId: number;

  @Column
  brand: string;

  @Column
  partId: number;

  @Column
  name: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  vendorCode: number;

  @Column
  image: string;

  @Column({ defaultValue: 0 })
  inStocks: number;

  @Column({ defaultValue: 0 })
  count: number;

  @Column({ defaultValue: 0 })
  totalPrice: number;
}
