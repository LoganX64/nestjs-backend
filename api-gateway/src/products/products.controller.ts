import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'shared/create-product.dto';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private httpService: HttpService) {}

  private readonly productsServiceUrl = process.env.PRODUCTS_SERVICE_URL!;

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  findAll() {
    return this.httpService
      .get(this.productsServiceUrl) // Products Service URL
      .pipe(map((response) => response.data));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param('id') id: string) {
    return this.httpService
      .get(`${this.productsServiceUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiBody({ type: CreateProductDto })
  async createProduct(@Body() body: any) {
    const response = await firstValueFrom(
      this.httpService.post(this.productsServiceUrl, body),
    );
    return response.data;
  }
}
