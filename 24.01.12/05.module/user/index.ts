// 유저 서비스 로직 클래스
import { Strategy } from './strat/strategy';
import { UserService } from './service/user.service';
import { EmailAuthenticator } from './strat/email.strat';
import { UserController } from './user.controller';
import { KakaoAuthenticator } from './strat/kakao.strat';

// 전략패턴 객체 생성

const strategy = new Strategy();
// strategy = {strategy = {}, set(), login()}

strategy.set('email', new EmailAuthenticator());

strategy.set('kakao', new KakaoAuthenticator());

const userService = new UserService(strategy);

const userController = new UserController(userService);

userController.signin('email');

userController.signin('kakao');
