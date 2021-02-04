import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../services/auth/auth.service';
import {FileLoad} from '../../../interfaces/models/file-load.model';
import {RegisterInterface} from '../../../interfaces/requests/register.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();

  public files: FileList;
  public currentFile: FileLoad;
  public urlImage: string | ArrayBuffer | null;
  public percentage = 0;
  public hidePassword = true;
  public hidePasswordConfirm = true;
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.maxLength(255), Validators.required]],
    name: ['', [Validators.maxLength(255), Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    password_confirmation: ['', [Validators.minLength(8), Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  public ngOnInit(): void {
  }

  public register(): void {
    if (this.form.valid) {
      const model: RegisterInterface = {
        avatar: this.urlImage,
        password: this.form.get('password')?.value,
        email: this.form.get('email')?.value,
        name: this.form.get('name')?.value,
        password_confirmation: this.form.get('password_confirmation')?.value,
      };
      this.subscription$.add(this.authService.register(model)
        .subscribe((response) => {
        }));
    }
  }


  public selectFile(event: any): void {
    this.files = event.target.files;
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload = (event) => {
      this.urlImage = reader.result;
    };
  }

  public deleteAvatar(): void {
    this.urlImage = '';
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
