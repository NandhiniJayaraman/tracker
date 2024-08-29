import { Component } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {


  logout(){
    console.log('Logout page is work')
  }

}
