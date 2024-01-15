import { UserParams } from './interface/login.request';
import { UserService } from './service/user.service';

// 사용자 서비스 로직 담당할 클래스 정의

export class UserController {
  constructor(private readonly userService: UserService) {}

  // 로그인
  signin(type: string) {
    // Dummy user request
    const loginParams: UserParams = {
      email: 'email@subin.kr',
      password: 'subin1234',
    };

    this.userService.login(type, loginParams);
  }
}
