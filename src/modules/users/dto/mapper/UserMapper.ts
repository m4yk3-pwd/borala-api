import {User} from '@prisma/client';
import {UserResponseDto} from '../UserResponseDto';

export class UserMapper {
  static toResponseDto(user: User): UserResponseDto {
    const dto: UserResponseDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      photoUrl: user.photoUrl ?? null
    };

    return dto;
  }
}
