import {AbstractControl} from '@angular/forms';

export interface RegisterInterface {
  password: string|AbstractControl;
  password_confirmation: string|AbstractControl;
  avatar: any;
  email: string|AbstractControl;
  name: string|AbstractControl;
}
