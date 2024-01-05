import { Component } from '@angular/core';

@Component({
  selector: 'app-interested-offers',
  templateUrl: './interested-offers.component.html',
  styleUrls: ['./interested-offers.component.css']
})
export class InterestedOffersComponent {
  interested_offers = [
    { commpany_name: 'company x', catrgory:'design', skills: ['html','css','javascript'] , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
    { commpany_name: 'company y', catrgory:'development', skills: ['spring boot','laravel'] , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
    { commpany_name: 'company z', catrgory:'Finance & Accounting', skills: ['excel'] , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
  ];
}
