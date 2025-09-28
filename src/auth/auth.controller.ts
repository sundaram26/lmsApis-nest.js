import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
    constructor(private readonly authService: AuthService) {
        this.authService = authService;
    }

    @Post('register')
    //DTO:- "Data Transter Object" it is used for transfering data between two services 
    register(@Body() registerUserDto: RegisterDto) {
        const result = this.authService.registerUser(registerUserDto);
        return result;
    }

}
