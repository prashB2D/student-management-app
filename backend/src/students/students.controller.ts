import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus
} from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'

@Controller('api/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll() {
    return this.studentsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto)
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto
  ) {
    return this.studentsService.update(id, updateStudentDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.studentsService.remove(id)
  }
}
