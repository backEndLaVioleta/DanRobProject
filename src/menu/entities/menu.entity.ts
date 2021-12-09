import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Menu {
  @ObjectIdColumn() id: ObjectID;
  @Column() recipeId: ObjectID[] = [];
  @Column() menuItemName: string;
  @Column((type) => Recipe) menuItemRecipe: Recipe;
  @Column() menuItemDescription: string;
  @Column() menuItemPhoto: string;
  @Column() menuItemType: string;
  @Column() menuItemPrice: number;
  @Column() menuItemAllergens: string[] = [];
  @Column() menuItemExtrasAvailable: string[] = [];
}
