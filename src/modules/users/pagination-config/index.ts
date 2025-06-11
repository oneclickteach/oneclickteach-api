import { PaginateConfig } from 'nestjs-paginate';
import { User } from '../entities/user.entity';

export const USER_PAGINATION_CONFIG: PaginateConfig<User> = {
  sortableColumns: ['id', 'email', 'email_is_verified', 'mobile_phone', 'mobile_phone_is_verified', 'first_name', 'last_name'],
  nullSort: 'last',
  defaultSortBy: [['id', 'DESC']],
  searchableColumns: ['first_name', 'last_name', 'email', 'mobile_phone'],
  filterableColumns: {
    email: true,
    email_is_verified: true,
    mobile_phone: true,
    mobile_phone_is_verified: true,
    first_name: true,
    last_name: true,
  },
  maxLimit: 100,
};
