import { IsString, IsEmail, IsNumber, IsEnum, Min, Max } from 'class-validator'

export class CreateStudentDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsNumber()
  @Min(1)
  @Max(120)
  age: number

  @IsEnum(['Male', 'Female', 'Other'])
  gender: string
}
