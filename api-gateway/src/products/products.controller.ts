import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private httpService: HttpService) {}

  private readonly productsServiceUrl = 'http://localhost:3001/products';

  @Get()
  findAll() {
    return this.httpService
      .get('http://localhost:3001/products') // Products Service URL
      .pipe(map((response) => response.data));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.httpService
      .get(`http://localhost:3001/products/${id}`)
      .pipe(map((response) => response.data));
  }
  @Post()
  async createProduct(@Body() body: any) {
    const response = await firstValueFrom(
      this.httpService.post(this.productsServiceUrl, body),
    );
    return response.data;
  }
}
