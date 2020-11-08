import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../../imgbase'
import { Img } from './ImgInteface'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  image = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    console.info(this.image);
  }
}

