import { UserParams } from '../interface/login.request';
import { AuthenticationResponse } from './Authenticator';
import { Authenticator } from './Authenticator';

// Strat Pattern Object structure

// interface Strategy {
//   email: Email
//   kakao: Kakao
// }

interface IStrategy {
  // Key를 미리 정의하지않고 동적으로 할당
  [key: string]: Authenticator;
}

export class Strategy {
  // 서비스 로직 기능 담을 객체
  // email, kakao, google 등의 로그인 기능을 가지고 있는 클래스로 동적 할당한 객체들을 담아줄 strategy
  private strategy: IStrategy = {};

  // 기능을 전략 객체에 추가해줄 함수
  public set(key: string, authenticate: Authenticator) {
    // 동적 키 할당,
    this.strategy[key] = authenticate;
  }

  public async login(
    type: string,
    credentials: UserParams
  ): Promise<AuthenticationResponse> {
    const result = await this.strategy[type].authenticate(credentials);
    return result;
  }
}
