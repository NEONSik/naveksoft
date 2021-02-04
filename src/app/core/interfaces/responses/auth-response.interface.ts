import {UserInterface} from '../models/user.interface';
import {TokenInterface} from '../models/token.interface';

export interface AuthResponseInterface {
  user: UserInterface;
  token: TokenInterface;
}
