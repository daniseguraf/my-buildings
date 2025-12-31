import { Injectable, Logger } from '@nestjs/common'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { CreateUserDto } from 'src/auth/dto/create-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prismaService.user.create({
        data: {
          ...createUserDto,
          password: bcrypt.hashSync(createUserDto.password, 10),
        },
      })

      return user
    } catch (error) {
      this.logger.error(error)
      throw error
    }
  }

  findAll() {
    return `This action returns all auth`
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }
}
