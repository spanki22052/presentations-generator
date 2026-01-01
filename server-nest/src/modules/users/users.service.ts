import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Normalize email to lowercase for consistency
    const normalizedEmail = createUserDto.email.toLowerCase().trim();

    const existingUser = await this.userRepository.findOne({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const rounds = this.configService.get<number>('bcrypt.rounds') || 12;
    const hashedPassword = await bcrypt.hash(createUserDto.password, rounds);

    const user = this.userRepository.create({
      email: normalizedEmail,
      name: createUserDto.name.trim(),
      password: hashedPassword,
    });

    return await this.userRepository.save(user);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    // Normalize email to lowercase for consistent lookup
    const normalizedEmail = email?.toLowerCase().trim();
    if (!normalizedEmail) {
      return null;
    }
    return await this.userRepository.findOne({ where: { email: normalizedEmail } });
  }

  async updateRefreshToken(userId: string, refreshToken: string | null): Promise<void> {
    await this.userRepository.update(userId, { refreshToken });
  }

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    if (!password || !hashedPassword) {
      return false;
    }
    
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      // If bcrypt comparison fails (e.g., invalid hash format), return false
      return false;
    }
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(userId);

    // Update name if provided
    if (updateUserDto.name !== undefined) {
      user.name = updateUserDto.name.trim();
    }

    // Update surname if provided
    if (updateUserDto.surname !== undefined) {
      user.surname = updateUserDto.surname.trim() || null;
    }

    // If email is being updated, check for conflicts
    if (updateUserDto.email) {
      const normalizedEmail = updateUserDto.email.toLowerCase().trim();
      
      // Check if email is different from current email
      if (normalizedEmail !== user.email.toLowerCase()) {
        const existingUser = await this.userRepository.findOne({
          where: { email: normalizedEmail },
        });

        if (existingUser) {
          throw new ConflictException('User with this email already exists');
        }

        // Update email with normalized value
        user.email = normalizedEmail;
      }
    }

    return await this.userRepository.save(user);
  }
}
