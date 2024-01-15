import { UserParams } from '../interface/login.request';
import { Authenticator, AuthenticationResponse } from './Authenticator';

// kakao 로그인 로직 기능 담당 클래스 정의

export class KakaoAuthenticator implements Authenticator {
  async authenticate(credential: UserParams): Promise<AuthenticationResponse> {
    console.log(credential, 'Kakao Login');
    return { success: true };
  }
}
