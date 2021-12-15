import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipesService } from 'src/recipes/recipes.service';
import { UsersService } from 'src/users/users.service';
import { getConnection, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDto } from './dto/order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly userService: UsersService,
    private readonly recipeService: RecipesService,
  ) {}
  async create(orderDto: CreateOrderDto) {
    const order = new Order();
    const recipe = await this.recipeService.findOneById(orderDto.recipeId);
    console.log(recipe);
    const user = await this.userService.findOneById(orderDto.userId);
    console.log(user);
    let newOrder: Order;
    try {
      if (!recipe)
        throw new NotFoundException({
          statusCode: 404,
          message: 'Recipe Not Found',
          error: 'Recipe not in the DDBB',
        });

      order[0].recipe = recipe;
      order.user = user;
      Object.assign(order, orderDto);

      await getConnection().transaction(async (manager) => {
        newOrder = await manager.save(order);
        await manager.save(recipe);

        return newOrder;
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
