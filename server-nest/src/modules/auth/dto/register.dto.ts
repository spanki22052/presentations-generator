import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { MatchPassword } from '../../../common/validators/match-password.validator';

export class RegisterDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(100, { message: 'Name must not exceed 100 characters' })
  name: string;

  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(100, { message: 'Password must not exceed 100 characters' })
  password: string;

  @IsString()
  @MatchPassword('password', { message: 'Passwords do not match' })
  confirmPassword: string;
}
