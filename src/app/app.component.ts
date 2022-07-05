import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'hello-world ANG';
  post = {
    title: "Title",
    isFavorite: false
  }

  //nhan data from $event object here 
  //FavoriteChangedEventArgs interface of data pass
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs.newValue);
  }
}
