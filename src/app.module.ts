import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
<<<<<<< HEAD
import { StudentsModule } from "@/modules/students/students.module";
import { ItemsModule } from "@/modules/items/items.module";
import { OrdersModule } from "@/modules/orders/orders.module";
=======
>>>>>>> 873e0bf01aa00f509301cf863db73ee5d30eae4d

@Module({
  imports: [
    PostgresDatabaseProviderModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
<<<<<<< HEAD
    StudentsModule,
    ItemsModule,
    OrdersModule,
=======
>>>>>>> 873e0bf01aa00f509301cf863db73ee5d30eae4d
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
