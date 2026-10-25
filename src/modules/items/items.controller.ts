import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ItemsService } from "@/modules/items/items.service";
import { CreateItemDto } from "@/modules/items/dto/create-item.dto";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.itemsService.findOne(id);
  }
}
