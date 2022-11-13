import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() valueChanges = new EventEmitter();
  search: FormControl = new FormControl('');
  paginator: FormControl = new FormControl(20);

  constructor() { }
  ngOnInit(): void {
    this.search.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(200)).subscribe((value) => {
        this.valueChanges.next(value);
      })
  };

}
