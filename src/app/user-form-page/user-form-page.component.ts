import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  private userID?: number

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private readonly userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.userID = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userID) {
      this.fetchUser(this.userID)
    }
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
    if (this.userID)
      this.userService.updateUser(this.userID, user).subscribe()
    else
      this.userService.createUser(user).subscribe();
    this.router.navigate(['user-list'])
  }

  private fetchUser(userID: number) {
    this.userService.getUserByID(userID)
      .subscribe((user) => {
        this.userFormGroup.patchValue(user)
        this.canEdit = user.canEdit;
        this.canDelete = user.canDelete;
        if (!user.canEdit)
          this.userFormGroup.disable();
      })
  }

}
