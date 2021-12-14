"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRepository = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const recipe_entity_1 = require("./entities/recipe.entity");
let RecipeRepository = class RecipeRepository extends typeorm_1.Repository {
    async saveRecipe(body) {
        const newRecipe = __rest(body, []);
        const recipe = this.create();
        recipe.recipeId = (0, uuid_1.v4)();
        Object.assign(recipe, newRecipe);
        return await this.save(recipe);
    }
};
RecipeRepository = __decorate([
    (0, typeorm_1.EntityRepository)(recipe_entity_1.Recipe)
], RecipeRepository);
exports.RecipeRepository = RecipeRepository;
//# sourceMappingURL=recipe.repository.js.map