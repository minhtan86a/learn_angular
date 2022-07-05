import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string ="";
  
  //ElementRef give us access to the DOM object
  constructor(private el: ElementRef) {
    
  }

  // @HostListener('focus') onFocus() {
  //   console.log("on Focus");
  // }

  @HostListener('blur') onBlur() {
    console.log("on Blur");
    //nativeElement access to the actual DOM object
    //nativeElement.value value is property of DOM
    let value: string = this.el.nativeElement.value;
    //console.log(value);
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
