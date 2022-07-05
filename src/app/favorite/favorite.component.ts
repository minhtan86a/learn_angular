import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

//use for app component
export interface FavoriteChangedEventArgs {
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  //@Input making fields and properties as input properties
  //input is exposed to the outside and can binding to somewhere
  //should use alias easy to maintain
  @Input('isFavorite') isSelected: boolean = false;

  //('is-favorite') is alias name
  //@Input('is-favorite') isFavorite: boolean = false;

  //@Output making event using EventEmitter
  //should use alias easy to maintain
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    
    //raise or publish an event
    //passing event data this.isSelected to onFavoriteChanged function of app.component
    //this.change.emit(this.isSelected);

    //pass an object
    this.click.emit({ newValue: this.isSelected });
  }

}


