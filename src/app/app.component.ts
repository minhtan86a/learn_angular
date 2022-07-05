import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'hello-world ANG';
  // post = {
  //   title: "Title",
  //   isFavorite: false
  // }

  //nhan data from $event object here 
  //FavoriteChangedEventArgs interface of data pass
  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
  //   console.log("Favorite changed: ", eventArgs.newValue);
  // }

  //courses = [1, 2];

  // viewMode = 'map';

  courses: { id: number, name: string }[] = [];

  // onAdd(){
  //   this.courses.push({ id: 4, name: 'course4'});
  // }

  // onRemove(course:any){
  //   let index = this.courses.indexOf(course);  
  //   this.courses.splice(index, 1);
  // }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ]
  }

  trackCourse(index: number, course: any){
    return course ? course.id : undefined;
  }

  // task = {
  //   title: 'Review app',
  //   assignee: {
  //     name: null
  //   }
  // }
}
