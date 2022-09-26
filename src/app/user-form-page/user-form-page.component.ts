import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  public userFormGroup: FormGroup;
  public canEdit = true;
  public canDelete = true;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) {

    this.userFormGroup = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      citizenID: new FormControl('', Validators.pattern('^[0-9]{13}$')),
      phoneNumber: new FormControl('', Validators.pattern('^0[0-9]{9}$')),
      address: new FormControl(''),
      career: new FormControl(''),
      salary: new FormControl('', Validators.pattern('^[0-9]+$')),
    })
  }

  ngOnInit(): void {
  }

  public checkError(key: string): boolean {
    return this.userFormGroup.controls[key].invalid &&
      this.userFormGroup.controls[key].touched
  }

  public changeStatus(state: string): void {
    if (state === 'canEdit')
      this.canEdit = !this.canEdit
    if (state === 'canDelete')
      this.canDelete = !this.canDelete
  }
  public navigateBack(): void {
    this.location.back()
  }

  public submit(): void {
    const user = this.userFormGroup.value
    user.canEdit = this.canEdit;
    user.canDelete = this.canDelete;
    this.userService.createUser(user).subscribe();
    this.router.navigate(['user-list'])
  }

}
