import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserInterface } from '../interfaces/user.interface';

const getCurrentUserByContext = (context: ExecutionContext): UserInterface => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
