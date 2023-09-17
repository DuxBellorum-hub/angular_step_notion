import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: IUser = {
    id: 0,
    nom: '',
    prenom: '',
    password: '',
    email: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null


  }

  constructor(private activated: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    //2 moyen de choper l'id
    let id = this.activated.snapshot.params['id'];
    this.userService.getUser(id).subscribe(
      data => {
        console.log(data.data)
        this.user = data.data
      }
    )
  }

  onSubmit(): void {
    console.log(this.user)
  }

}
