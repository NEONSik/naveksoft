import {AnswerInterface} from '../models/answer.interface';
import {MetaInterface} from '../models/meta.interface';
import {LinksInterface} from '../models/links.interface';

export interface AnswerResponseInterface {
  data: AnswerInterface[];
  links: LinksInterface;
  meta: MetaInterface;
}
