import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { StudentsService } from "@/modules/students/students.service";
import { CreateStudentDto } from "@/modules/students/dto/create-student.dto";

@Controller("students")
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.studentsService.findOne(id);
  }
}
