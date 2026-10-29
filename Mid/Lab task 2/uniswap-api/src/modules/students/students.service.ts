import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "@/modules/students/entities/student.entity";
import { CreateStudentDto } from "@/modules/students/dto/create-student.dto";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    // একই email দিয়ে দুইজন student থাকতে পারবে না
    const exists = await this.studentRepository.findOneBy({
      email: createStudentDto.email,
    });
    if (exists) {
      throw new ConflictException("Email already registered");
    }

    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }
}
