"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recipe_repository_1 = require("./recipe.repository");
let RecipesService = class RecipesService {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async findAll() {
        try {
            return await this.recipeRepository.find();
        }
        catch (error) {
            throw new common_1.NotFoundException({
                statusCode: 404,
                message: 'List Not Found',
                error: 'Recipe List not founded',
            });
        }
    }
    async findOneById(id) {
        try {
            const recipe = await this.recipeRepository.find({
                where: { recipeId: id },
            });
            if (!recipe) {
                throw new common_1.NotFoundException('Recipe not found');
            }
            return recipe;
        }
        catch (error) {
            throw new common_1.NotFoundException({
                statusCode: 404,
                message: 'Recipe Not Found',
                error: 'Recipe seems to be not in the DDBB ',
            });
        }
    }
    async saveRecipe(body) {
        const exists = await this.recipeRepository.find({
            where: { recipeName: body.recipeName },
        });
        if (exists.length > 0) {
            throw new common_1.ConflictException('Recipe already exists');
        }
        const recipe = await this.recipeRepository.saveRecipe(body);
        return recipe;
    }
    async updateRecipe(id, updateRecipeDto) {
        try {
            const recipe = await this.recipeRepository.findOne({ recipeId: id });
            if (!recipe) {
                throw new common_1.NotFoundException('recipe not found');
            }
            Object.assign(recipe, updateRecipeDto);
            return this.recipeRepository.save(recipe);
        }
        catch (error) {
            throw new common_1.BadRequestException({
                statusCode: 400,
                message: 'Bad Request',
                error: 'Recipe NOT updated.',
            });
        }
    }
    async removeRecipe(id) {
        const recipe = await this.recipeRepository.findOne({ recipeId: id });
        if (!recipe) {
            throw new common_1.NotFoundException('Recipe not found');
        }
        try {
            return this.recipeRepository.remove(recipe);
        }
        catch (error) {
            throw new common_1.NotFoundException('Recipe not found');
        }
    }
};
RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_repository_1.RecipeRepository)),
    __metadata("design:paramtypes", [recipe_repository_1.RecipeRepository])
], RecipesService);
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map