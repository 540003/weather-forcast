import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userService:UserService) { }
  users: any = [];
  ngOnInit(): void {
    this.users = [{ name: "Rajeev", email: "xyz@gmail.com", phone: 34353535, website: "dsss.com" },
    { name: "Rohit", email: "xy12312z@gmail.com", phone: 34353535, website: "dssserer.com" },
    { name: "Ankit", email: "xyzq2ewqq@gmail.com", phone: 34353535, website: "dsssreww.com" },
    { name: "Swati", email: "xyz224@gmail.com", phone: 34353535, website: "dsss3434.com" },
    { name: "Kundan", email: "xyz224@gmail.com", phone: 34353535, website: "dbss3434.com" },
    { name: "Lav Kush", email: "xyz224@gmail.com", phone: 34353535, website: "dbss3434.com" }
    ]



 /*    this.userService.fetchUser().subscribe(res=>{
      this.users =  res;
    })
  } */

}
}
