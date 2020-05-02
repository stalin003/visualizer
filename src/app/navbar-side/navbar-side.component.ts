
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.css']
})
export class NavbarSideComponent implements OnInit {


  constructor(private location: Location) {
    
   }


  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  toggleSlider(blckScreen, siderNav, menu){

    let menu1 = menu.children[0];
    let menu2 = menu.children[1];
    let menu3 = menu.children[2];

    menu1.classList.toggle('menu-cross1');
    menu2.classList.toggle('menu-cross3');
    menu3.classList.toggle('menu-cross2');

    blckScreen.classList.toggle('blk');
    siderNav.classList.toggle('sider')

  }

  removeSlider(blckScreen, siderNav, menu) {

    let menu1 = menu.children[0];
    let menu2 = menu.children[1];
    let menu3 = menu.children[2];



    blckScreen.classList.remove('blk');
    siderNav.classList.remove('sider')


    menu1.classList.remove('menu-cross1');
    menu2.classList.remove('menu-cross3');
    menu3.classList.remove('menu-cross2');
  }


}
