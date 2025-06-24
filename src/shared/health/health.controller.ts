import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('api/')
export class HealthController {
  @Get()
  health() {
    return true;
  }
}
