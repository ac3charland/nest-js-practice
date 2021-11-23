import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger'
import { Public } from '../common/decorators/public.decorator'
import { PaginationQueryDto } from '../common/dto/pagination-query.dto'
import { ParseIntPipe } from '../common/pipes/parse-int.pipe'
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @ApiForbiddenResponse({ description: 'Forbidden.' })
    @Public()
    @Get()
    async findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.coffeeService.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        return this.coffeeService.findOne(id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.coffeeService.remove(id)
    }
}
