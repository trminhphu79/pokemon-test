import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pagination: number[] = [10, 20, 50, 100];
  @Output() valueChanges = new EventEmitter()
  paginator: FormControl = new FormControl(20);

  constructor() { }
  ngOnInit(): void {
    this.paginator.valueChanges.subscribe((response) => {
      this.valueChanges.next(response)
    })
  }
}
