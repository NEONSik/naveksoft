import {UserInterface} from './user.interface';

export interface PostInterface {
  id: number;
  user_id: number;
  title: string;
  message: string;
  created_at: string;
  updated_at: string;
  user: UserInterface;
  answers: any;
  answers_count: number;
}
