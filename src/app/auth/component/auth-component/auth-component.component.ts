import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, startWith, switchMap, tap, map, shareReplay } from 'rxjs';

@Component({
  selector: 'auth-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.scss'
})
export class AuthComponentComponent {


  public authForm = new FormGroup(
    {
      username: new FormControl('', Validators.pattern(/\w+\.\w+/),),
      password: new FormControl('', Validators.pattern(/^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^a-z]*[a-z]){2})(?=(?:\D*\d){2}).{8,}$/))
    }
  );

  public authFormValid$ = this.authForm.statusChanges.pipe(
    map((status) => status === 'VALID'),
    startWith(false),
    shareReplay({ bufferSize: 1, refCount: true })

  )


}
