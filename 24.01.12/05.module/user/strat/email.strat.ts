import { UserParams } from '../interface/login.request';
import { AuthenticationResponse, Authenticator } from './Authenticator';

// email login functionality definition class

export class EmailAuthenticator implements Authenticator {
  async authenticate(credential: UserParams): Promise<AuthenticationResponse> {
    console.log(credential, 'Email Login');
    // authentication logic
    return { success: true };
  }
}
