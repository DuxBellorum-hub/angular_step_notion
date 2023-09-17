import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit, OnDestroy {

  userList : IUser[] = [];
 private Subscription : Subscription = new Subscription();

  constructor(private userService : UserService) { }

   ngOnInit(): void {
   this.Subscription =  this.userService.getAllUsers().subscribe(
      users => {
        console.log(users)
        this.userList = users.data;
      }
    )
      
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe()
    
  }

async  getUser(uuid: string ){
  const userTest = await this.userService.getUser('4').toPromise(); 
  console.log(userTest.data.prenom)
  console.log(userTest)
  }

}
