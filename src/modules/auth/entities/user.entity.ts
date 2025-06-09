import { AbstractEntity } from 'src/shared/database';
import { Column, Entity } from 'typeorm';
import { Gender, UserRole } from '../enums/user.enum';

@Entity()
export class User extends AbstractEntity<User> {
  @Column({ unique: true })
  mobile_phone: string;

  @Column({ default: false })
  mobile_phone_is_verified: boolean;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  email_is_verified: boolean;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'enum', enum: Gender, default: Gender.UNKNOWN })
  gender: Gender;

  @Column()
  hashed_password: string;

  @Column({ default: false })
  created_by_system: boolean;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  role: UserRole;
}
