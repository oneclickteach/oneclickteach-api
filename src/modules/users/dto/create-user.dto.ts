export class CreateUserDto {
  email: string;
  first_name: string;
  last_name: string;
  google_id: string;
  email_is_verified: boolean;
  mobile_phone?: string;
  mobile_phone_is_verified: boolean;
}
