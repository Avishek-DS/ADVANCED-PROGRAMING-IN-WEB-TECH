import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "@/modules/products/entities/product.entity";
import { CreateProductDto } from "@/modules/products/dto/create-product.dto";
import { UpdateProductDto } from "@/modules/products/dto/update-product.dto";

// সব database-এর কাজ এখানে
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return { message: `Product with id ${id} deleted successfully` };
  }
}
