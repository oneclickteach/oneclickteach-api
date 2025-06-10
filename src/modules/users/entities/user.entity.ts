import { AbstractEntity } from 'src/shared/database';
import { Entity, Column } from 'typeorm';
import { Gender, UserRole } from '../enums/user.enum';

@Entity('users')
export class User extends AbstractEntity<User> {
  @Column({ unique: true })
  email: string;

  @Column()
  email_is_verified: boolean;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'enum', enum: Gender, default: Gender.UNKNOWN })
  gender: Gender;

  @Column({ nullable: true })
  mobile_phone?: string;

  @Column({ default: false })
  mobile_phone_is_verified: boolean;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  user_role: UserRole;
}
