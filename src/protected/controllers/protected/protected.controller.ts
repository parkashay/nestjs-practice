import { Controller, Get } from '@nestjs/common';
import { ProtectedService } from 'src/protected/services/protected/protected.service';

@Controller('protected')
export class ProtectedController {
    private protectedService = new ProtectedService();
   
    @Get()
    getData(){
        return this.protectedService.getProtectedData();
    }
    
}
