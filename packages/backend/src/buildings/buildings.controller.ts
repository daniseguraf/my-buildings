import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { BuildingsService } from './buildings.service'
import { CreateBuildingDto } from './dto/create-building.dto'
import { UpdateBuildingDto } from './dto/update-building.dto'
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { Building } from 'src/buildings/entities/building.entity'

@ApiTags('Buildings')
@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new building' })
  @ApiResponse({
    status: 201,
    description: 'The building has been successfully created.',
    type: Building,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingsService.create(createBuildingDto)
  }

  @ApiOperation({ summary: 'Get all buildings' })
  @ApiResponse({
    status: 200,
    description: 'The buildings have been successfully retrieved.',
    type: [Building],
  })
  @Get()
  findAll() {
    return this.buildingsService.findAll()
  }

  @ApiOperation({ summary: 'Get a building by id' })
  @ApiResponse({
    status: 200,
    description: 'The building has been successfully retrieved.',
    type: Building,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingsService.findOne(+id)
  }

  @ApiOperation({ summary: 'Update a building by id' })
  @ApiResponse({
    status: 200,
    description: 'The building has been successfully updated.',
    type: Building,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBuildingDto: UpdateBuildingDto
  ) {
    return this.buildingsService.update(+id, updateBuildingDto)
  }

  @ApiOperation({ summary: 'Delete a building by id' })
  @ApiResponse({
    status: 200,
    description: 'The building has been successfully deleted.',
    type: Building,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingsService.remove(+id)
  }
}
