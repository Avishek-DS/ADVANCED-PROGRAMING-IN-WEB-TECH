import { PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "@/modules/products/dto/create-product.dto";

// Create-এর সব field, কিন্তু সবগুলো optional (PATCH-এর জন্য)
export class UpdateProductDto extends PartialType(CreateProductDto) {}
