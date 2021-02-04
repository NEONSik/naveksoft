import {UserInterface} from './user.interface';

export interface AnswerInterface {
  created_at: string;
  id: number;
  message: string;
  post_id: number;
  updated_at: string;
  user: UserInterface;
  user_id: number;
}
