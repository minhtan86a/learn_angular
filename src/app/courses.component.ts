import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses', 
    template: `
        <h2>{{ title }}</h2>
        <!-- [textContent] is property of H2 -->
        <h2 [textContent]="title"></h2>

        <!-- <ul>
            <li *ngFor="let course of courses" >
                 {{ course }}
            </li>
        </ul> -->

        <img src="{{ imageUrl }}" />
        <!-- [src] is property of img -->
        <img [src]="imageUrl" />

        <!-- attribute binding-->
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>

        <!-- Class binding -->
        <button 
            class="btn btn-primary" 
            [class.active]="isActive">Class binding</button>

        <!-- Style binding -->
        <div>
            <button 
                class="btn btn-success" 
                [style.backgroundColor]="isActive ? 'blue' : 'white'"
            >
                Style Binding
            </button>
        </div>

        <!-- Event binding -->
        <div (click)="onDivClicked()">
            <button 
                class="btn btn-success" 
                (click)="onSave($event)"
            >
                Event Binding
            </button>
        </div>

        <!-- Event Filtering -->
        <!-- keyup.enter is event filtering -->
        <div>
            <input (keyup.enter)="onKeyUp($event)" />
        </div>
        <!-- Template variable and Two way binding-->
        <!-- #email is template variable -->
        <div>
            <!-- <input #email (keyup.enter)="onKeyUpTemplate(email.value)" /> -->

            <!-- add FormsModule for twoway binding -->
            <input 
                [(ngModel)]="email" 
                (keyup.enter)="onKeyUpTemplate()" />
        </div>

        <!-- PIPES -->
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>

        <!-- CUSTOM PIPE -->
        {{ text | summary: 30}}
        `
})
export class CoursesComponent {
    title = "List of courses A";
    imageUrl = "https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60";
    colSpan = 2;
    isActive = true;

    email = "me@example.com"; //Two way biding

    //custom pipe
    text = `loremasdlj sd jflsdfklsdf sdifjslk djflsdjhflksdj lkjslkjf lskdjfljsdl kfjsdlf loremasdlj sd jflsdfklsdf sdifjslk djflsdjhflksdj lkjslkjf lskdjfljsdl kfjsdlf loremasdlj sd jflsdfklsdf sdifjslk djflsdjhflksdj lkjslkjf lskdjfljsdl kfjsdlf loremasdlj sd jflsdfklsdf sdifjslk djflsdjhflksdj lkjslkjf lskdjfljsdl kfjsdlf loremasdlj sd jflsdfklsdf sdifjslk djflsdjhflksdj lkjslkjf lskdjfljsdl kfjsdlf`

    //Pipes
    course = {
        title : "Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.9555,
        releaseDate: new Date(2016, 3, 1)
    }

    onDivClicked() {
        console.log('Div was clicked');
    }

    onSave($event:any) {
        $event.stopPropagation(); //stop bubble up event of div element
        console.log('Button was clicked', $event);
    }

    onKeyUp($event:any) {
        console.log($event);
        console.log($event.target.value);
    }

    onKeyUpTemplate() {
        console.log(this.email);
    }

    // getTitle() {
    //     return this.title;
    // }

    //courses = ['course1', 'course2', 'course3'];

    //Logic for calling an http service
    //courses;

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }
}

