import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs'

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const { user } = context.switchToHttp().getRequest()
    if(user?.id==1){
      return true
    }
    throw new HttpException("权限不够",HttpStatus.FORBIDDEN)
  }
}
