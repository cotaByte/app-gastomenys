import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, map, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'auth-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.scss',
})
export class AuthComponentComponent {
  //#region AUTH FORM
  public authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/\w+\.\w+/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  //#endregion AUTH FORM

  //#region FORM VALIDATOR
  public authFormValid$ = this.authForm.statusChanges.pipe(
    map(status => status === 'VALID'),
    startWith(false),
    shareReplay({ bufferSize: 1, refCount: true })
  );
  //#endregion FORM VALIDATOR

  //#region ON AUTH
  public auth = new Subject<void>();
  public readonly onAuth$ = this.auth
    .pipe(
      switchMap(() => this.authService.logIn(this.authForm.getRawValue())),
      tap(res => {
        console.log('res ', res.ok);
        res.ok && localStorage.setItem('user', res.ouser);
        res.ok && this.route.navigate(['home']);
      })
    )
    .subscribe();
  //#endregion ON AUTH

  constructor(public route: Router, public authService: AuthServiceService) {}
}
