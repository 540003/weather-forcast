import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    userForm: FormGroup = new FormGroup({}); 
    showSuccessAlert: boolean = false; // variable to show success alert
    showErrorAlert: boolean = false; // variable to show error alert
    editMode: boolean = false; // variable to indicate edit mode 
    constructor(private route:ActivatedRoute, private formBuilder: FormBuilder,private userService:UserService) {
     }
    ngOnInit() {
      /* 
          user Form is being initialised
       */
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        website: [''],
    })
    /* 
        below block is for edit mode,  when the user clicks on  the name in user list to open the form with espective data 
     */
      this.route.queryParamMap.subscribe((params:ParamMap) => {
        // this.editMode = true;
        if(params.get('name')){
          this.editMode=true;
        }
        this.userForm.setValue({
          name: params.get('name'),
          email: params.get('email'),
          phone: params.get('phone'),
          website: params.get('website'),
        })
    })
    }
    get f() { return this.userForm.controls; }
/*
      below method is used to create user,since the api is not giving expected response, setitme out is used to show the success alert
 */
  createUser(){
    let userData={
        name:this.userForm.controls['name'].value,
        phone:this.userForm.controls['phone'].value,
        email:this.userForm.controls['email'].value,
        website:this.userForm.controls['website'].value,
        editMode: this.editMode
    }
    setTimeout(() => {
      this.showSuccessAlert = true;
    }, 1000);
    this.userService.createUser(userData).subscribe(res=>{
      console.log(res);
    })
  }

}
