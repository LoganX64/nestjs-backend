import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Controller('orders')
export class OrdersController {
  constructor(private httpService: HttpService) {}

  @Post()
  create(@Body() orderData: any) {
    return this.httpService
      .post('http://localhost:3002/orders', orderData) // Orders Service URL
      .pipe(map((response) => response.data));
  }

  @Get()
  findAll() {
    return this.httpService
      .get('http://localhost:3002/orders')
      .pipe(map((response) => response.data));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.httpService
      .get(`http://localhost:3002/orders/${id}`)
      .pipe(map((response) => response.data));
  }
}
