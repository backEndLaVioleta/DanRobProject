import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  AfterInsert,
  AfterUpdate,
  PrimaryColumn,
  Index,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Recipe extends BaseEntity {
  @ApiProperty({ example: 'as-1234h73' })
  @ObjectIdColumn()
  _id: ObjectID;

  @ApiProperty({ example: 'as-1234h73' })
  @PrimaryColumn()
  recipeId: string;

  @ApiProperty({ example: 'blossh burger' })
  @Column()
  @Index({ unique: true })
  recipeName: string;

  @ApiProperty({ example: 'description of the dish' })
  @Column()
  description: string;

  @ApiProperty({ example: 'https://imgur.com/W8ElPlZ' })
  @Column()
  photo: string;

  @ApiProperty({ example: "'starters' | 'salads' | 'mains' | 'desserts'" })
  @Column({ type: 'enum' })
  type: 'starters' | 'salads' | 'mains' | 'desserts';
  // TODO: maybe add ingredients as embedded entities
  @ApiProperty({ example: '["tomatoes", "mixed salad", "parmesan chez"]' })
  @Column()
  ingredients: string[];

  @ApiProperty({ example: '["tomatoes", "mixed salad", "parmesan chez"]' })
  @Column()
  extrasAvailable: string[] = [];

  @ApiProperty({ example: 'description of cooking method' })
  @Column()
  instructions: string;

  @ApiProperty({ example: '8' })
  @Column()
  prepTime: number;

  @ApiProperty({ example: '8' })
  @Column()
  cookTime: number;

  @ApiProperty({ example: '8' })
  @Column()
  totalTime: number;

  @ApiProperty({ example: '8' })
  @Column()
  timesMade: number;

  @ApiProperty({ example: '["nuts", "fishshell", "gluten"]' })
  @Column()
  allergens: string[] = [];

  @ApiProperty({ example: 'true' })
  @Column()
  isVegan: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isVegetarian: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isGlutenFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isDairyFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isLactoseFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isNutFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isPescatarian: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isPaleo: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isKetogenic: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isQuick: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isHealthy: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isLowFodmap: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isSpicy: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isEggFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isSoyFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isFishFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isShellfishFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isPorkFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isBeefFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isAlcoholFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isSustainable: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isLowCarb: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isLowFat: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isLowSugar: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  isWheatFree: boolean;

  @ApiProperty({ example: 'true' })
  @Column()
  onMenu: boolean;

  @AfterInsert()
  logInsert() {
    console.log(
      'Inserted Recipe with MongoId',
      this._id,
      'and name',
      this.recipeName,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      'Updated Recipe with MongoId',
      this._id,
      'and name',
      this.recipeName,
    );
  }
}
