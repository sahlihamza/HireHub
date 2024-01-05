import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-freelancers',
  templateUrl: './favorite-freelancers.component.html',
  styleUrls: ['./favorite-freelancers.component.css']
})
export class FavoriteFreelancersComponent {
  favorites = [
    { first_name: 'malek', last_name: 'naamen', skills: ['html','css','javascript'] , bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.'},


  ];
}
