import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  AfterInsert,
  AfterUpdate,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Recipe {
  @ObjectIdColumn() id: ObjectID;
  @Column() recipeId: string = uuidv4();
  @Column() recipeName: string;
  @Column() description: string;
  @Column() photo: string;
  @Column() type: 'starters' | 'salads' | 'mains' | 'desserts';
  // TODO: maybe add ingredients as embedded entities
  @Column() ingredients: string[] = [];
  @Column() extrasAvailable: string[] = [];
  @Column() instructions: string;
  @Column() prepTime: number;
  @Column() cookTime: number;
  @Column() totalTime: number;
  @Column() timesMade: number;
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
      this.id,
      'and recipeId',
      this.recipeId,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      'Inserted Recipe with MongoId',
      this.id,
      'and recipeId',
      this.recipeId,
    );
  }
}
