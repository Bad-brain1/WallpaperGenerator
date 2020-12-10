import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-searcbar',
  templateUrl: './searcbar.component.html',
  styleUrls: ['./searcbar.component.css']
})
export class SearcbarComponent implements OnInit {
  @Input() public categories;

  @Input() public selectedCategories: FormControl;

  constructor(private viewportScroller: ViewportScroller,) { }

  ngOnInit(): void {
  }

  prepareSelectedCategories(categoryValue) { 
    let selected = this.selectedCategories.value;  

    if (selected.includes(categoryValue)) {
      selected = selected.filter((c) => c !== categoryValue)
    } else {
      selected.push(categoryValue);
    }

    this.selectedCategories.patchValue(selected); 
  }

  toTop() {
    console.info('work');
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
