import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "@/modules/items/entities/item.entity";
import { ItemsController } from "@/modules/items/items.controller";
import { ItemsService } from "@/modules/items/items.service";

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
