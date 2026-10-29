import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "@/modules/students/entities/student.entity";
import { StudentsController } from "@/modules/students/students.controller";
import { StudentsService } from "@/modules/students/students.service";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
