import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Image } from './ImgInteface';
import { category, Icategory } from '../category-array'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  public images: Image[] = [];
  public filteredImages: Image[] = [];
  public categories: Icategory[] = category;

  // public categories = [
  //   {
  //     id: 1,
  //     title: 'Auto',
  //     value: 'auto'
  //   },
  //   {
  //     id: 2,
  //     title: 'City',
  //     value: 'city'
  //   },
  //   {
  //     id:3,
  //     title:'People',
  //     value:'people'
  //   }
  // ];

  public form = new FormGroup({
    categories: new FormControl(['auto', 'city', 'people', 'nature', 'game', 'space']), // new FormArray([new FormControl('auto'), new FormControl('city')])
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/datebase.json').subscribe(
      (data: { images: Image[] }) => {
        this.images = data.images;
        this.filteredImages = this.images;
        // this.selectedCategories(this.categories);
      }
    );

    this.form.valueChanges.subscribe(
      (formValues) => {
        // console.info('FORM CHANGED');
        // formValues.categories // ['city]
        // formValues.searchText
        this.filteredImages = this.images
          .filter((image) => {
            return formValues.categories.includes(image.category) // ['city'] image.category -> true
          })
      }
    )
  }
}

