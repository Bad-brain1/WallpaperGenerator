import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Image } from './ImgInteface'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public images: Image[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/datebase.json').subscribe(
      (data: { images: Image[] }) => {
        this.images = data.images
      }
    );
  }

}

