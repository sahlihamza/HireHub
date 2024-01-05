import { Component } from '@angular/core';

@Component({
  selector: 'app-freelancers-cc',
  templateUrl: './freelancers-cc.component.html',
  styleUrls: ['./freelancers-cc.component.css']
})
export class FreelancersCcComponent {
  freelancers = [
    { first_name: 'malek', last_name: 'naamen', skills: ['html','css','javascript'] , bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.'},
    { first_name: 'hamza', last_name: 'sahli', skills: ['html','css','bootstrap','angular'] , bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.'},
    { first_name: 'rayen', last_name: 'ben hssin', skills: ['python','spring boot','laravel','angular'] , bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.'},

  ];
}
