import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

// নতুন product বানাতে client কী পাঠাবে এবং তার নিয়ম
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsInt()
  @Min(0)
  quantity!: number;
}
