import {PostInterface} from '../models/post.interface';
import {LinksInterface} from '../models/links.interface';
import {MetaInterface} from '../models/meta.interface';

export interface PostResponseInterface {
  data: PostInterface[];
  links: LinksInterface;
  meta: MetaInterface;
}
