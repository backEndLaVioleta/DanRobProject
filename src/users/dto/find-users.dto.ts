import { IsNotEmpty } from 'class-validator';

export class FindAllUsersDto {
  @IsNotEmpty()
  readonly order: number;

  @IsNotEmpty()
  readonly limit: number;
}
