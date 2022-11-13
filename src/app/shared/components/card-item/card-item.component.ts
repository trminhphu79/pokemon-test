import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelCard } from '../../services/model/card.model';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item!: ModelCard;
  @Input() content: string =
    "The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best."
  @Output() change = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

}
