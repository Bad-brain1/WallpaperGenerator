import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-open-photo',
  templateUrl: './open-photo.component.html',
  styleUrls: ['./open-photo.component.css']
})
export class OpenPhotoComponent implements OnInit {

  public url:string;
  
  constructor(
    private http:HttpClient,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  
  ngOnInit(): void {
    this.url = this._route.snapshot.paramMap.get('url');
  }

}
