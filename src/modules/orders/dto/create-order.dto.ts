import { IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  itemId!: number;

  @IsNotEmpty()
  @IsInt()
  buyerId!: number;

  @IsNotEmpty()
  @IsString()
  meetupLocation!: string;

  @IsNotEmpty()
  @IsIn(["Cash", "bKash"])
  paymentMethod!: string;
}
