import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  university!: string;

  @IsNotEmpty()
  @IsString()
  department!: string;
}
