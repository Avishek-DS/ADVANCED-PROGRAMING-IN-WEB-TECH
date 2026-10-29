import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "@/modules/orders/entities/order.entity";
import { OrdersController } from "@/modules/orders/orders.controller";
import { OrdersService } from "@/modules/orders/orders.service";

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
