import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input() public categories;

  @Input() public selectedCategories: FormControl;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  prepareSelectedCategories(categoryValue): void {
    let selected = this.selectedCategories.value;

    if (selected.includes(categoryValue)) {
      selected = selected.filter((c) => c !== categoryValue);
    } else {
      selected.push(categoryValue);
    }

    this.selectedCategories.patchValue(selected);
  }

  toTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
