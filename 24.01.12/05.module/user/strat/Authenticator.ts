import { UserParams } from '../interface/login.request';

// 검증 로직 서비스 담당
// 전략 패턴에서 사용하는 클래스 받아서
// 어떤 기능을 사용하는지 구분하는 역할
// 응답 객체 구조 정의

export interface AuthenticationResponse {
  success: boolean;
  message?: string;
  // Optional property as the message will only be sent on failure
}

// Authentication service object structure

export interface Authenticator {
  // 로그인 검증 서비스 로직
  authenticate(credential: UserParams): Promise<AuthenticationResponse>;
}
