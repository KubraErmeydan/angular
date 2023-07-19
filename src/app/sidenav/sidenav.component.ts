import {Component} from '@angular/core';

@Component({
    selector:'sidenav',
    templateUrl:'./sidenav.component.html',
    styleUrls:['./sidenav.component.css']
})

export class SidenavComponent {

    selectedMenu:any= 'Home';

  goTo(paramText:string){
    this.selectedMenu = paramText;
  }
}