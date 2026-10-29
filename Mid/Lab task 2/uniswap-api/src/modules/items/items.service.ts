import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Item } from "@/modules/items/entities/item.entity";
import { CreateItemDto } from "@/modules/items/dto/create-item.dto";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto) {
    const item = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(item);
  }

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    const item = await this.itemRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return item;
  }
}
