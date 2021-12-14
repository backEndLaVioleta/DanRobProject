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
  @ObjectIdColumn() _id: ObjectID;
  @PrimaryColumn() recipeId: string;

  @Column()
  @Index({ unique: true })
  recipeName: string;

  @Column() description: string;
  @Column() photo: string;
  @Column() type: 'starters' | 'salads' | 'mains' | 'desserts';
  // TODO: maybe add ingredients as embedded entities
  @Column() ingredients: string[];
  @Column() extrasAvailable: string[] = [];
  @Column() timesMade: number;
  @Column() instructions: string;
  @Column() prepTime: number;
  @Column() cookTime: number;
  @Column() totalTime: number;
  @Column() allergens: string[] = [];
  @Column() isVegan: boolean;
  @Column() isVegetarian: boolean;
  @Column() isGlutenFree: boolean;
  @Column() isDairyFree: boolean;
  @Column() isLactoseFree: boolean;
  @Column() isNutFree: boolean;
  @Column() isPescatarian: boolean;
  @Column() isPaleo: boolean;
  @Column() isKetogenic: boolean;
  @Column() isQuick: boolean;
  @Column() isHealthy: boolean;
  @Column() isLowFodmap: boolean;
  @Column() isSpicy: boolean;
  @Column() isEggFree: boolean;
  @Column() isSoyFree: boolean;
  @Column() isFishFree: boolean;
  @Column() isShellfishFree: boolean;
  @Column() isPorkFree: boolean;
  @Column() isBeefFree: boolean;
  @Column() isAlcoholFree: boolean;
  @Column() isClean: boolean;
  @Column() isSustainable: boolean;
  @Column() isLowCarb: boolean;
  @Column() isLowSodium: boolean;
  @Column() isLowFat: boolean;
  @Column() isLowSugar: boolean;
  @Column() isWheatFree: boolean;
  @Column() onMenu: boolean;

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
