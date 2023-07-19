import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  list = [
    {      
      img: '../../assets/images/person1',
      activity:"Project Noname ",
      time: "13 minutes ago "
    },
    {
      img: '../../assets/images/person2',
      activity:"Income calculation ",
      time: "29 minutes ago "
    },
    {
      img: '../../assets/images/person3',
      activity:" New members on Payment project",
      time: "44 minutes ago "
    },
    {
      img: '../../assets/images/person4',
      activity:"Updated activity ",
      time: "2 hours ago "
    },
    {
      img: '../../assets/images/person5',
      activity:"New chart on page visits ",
      time: "3 hours ago "
    },
    {
      img: '../../assets/images/person6',
      activity:"Project GP",
      time: "12 hours ago "
    }

  ]; 
 

}