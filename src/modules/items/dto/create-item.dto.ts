import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  // description ঐচ্ছিক, তাই @IsOptional
  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsIn(["Book", "Component"])
  category!: string;

  @IsNotEmpty()
  @IsString()
  courseCode!: string;

  @IsNotEmpty()
  @IsIn(["New", "Like New", "Used"])
  condition!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price!: number;

  @IsNotEmpty()
  @IsInt()
  sellerId!: number;
}
