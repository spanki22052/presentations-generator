import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    // Normalize email to lowercase for consistency
    const normalizedEmail = email?.toLowerCase().trim();
    
    if (!normalizedEmail || !password) {
      this.logger.warn('Login attempt with missing email or password');
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = await this.authService.validateUser(normalizedEmail, password);
    if (!user) {
      this.logger.warn(`Failed login attempt for email: ${normalizedEmail}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log(`Successful login for user: ${user.id}`);
    return user;
  }
}
