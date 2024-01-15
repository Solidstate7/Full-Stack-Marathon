// 유저 서비스 로직 클래스
import { UserParams } from '../interface/login.request';
import { AuthenticationResponse } from '../strat/Authenticator';
import { Strategy } from '../strat/strategy';

export class UserService {
  // 전략 패턴 유저 로그인 서비스 로직들을 가지고 있는 객체
  constructor(private readonly strategy: Strategy) {}

  async login(
    type: string,
    credentials: UserParams
  ): Promise<AuthenticationResponse> {
    const result = await this.strategy.login(type, credentials);
    return result;
  }
}
