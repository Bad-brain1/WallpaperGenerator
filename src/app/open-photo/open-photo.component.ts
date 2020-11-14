import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../main-page/ImgInteface';
import downloadjs from 'downloadjs'

@Component({
  selector: 'app-open-photo',
  templateUrl: './open-photo.component.html',
  styleUrls: ['./open-photo.component.css']
})
export class OpenPhotoComponent implements OnInit {

  public url: string;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id: number = +this._route.snapshot.paramMap.get('id');

    this.http.get('assets/datebase.json').subscribe(
      (data: { images: Image[] }) => {
        this.url = data.images.find((image: Image) => image.id === id).url
      }
    );
  }

  // save(url: string, img: HTMLImageElement) {
  //   downloadjs(new Blob(), 'my-image.png', 'image/png');
  // }
}
