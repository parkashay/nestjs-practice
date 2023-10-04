import { Controller, Get } from "@nestjs/common";

@Controller()
export class App {
    @Get()
    homeData(){
        return {
            message: "welcome to the rice field motherfucker"
        }
    }
}