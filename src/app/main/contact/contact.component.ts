import { Component, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit , OnDestroy {

  submitHandler: Function;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.submitHandler = this.renderer.listen(this.elementRef.nativeElement.querySelector('form'), 'submit' , (event) => {
      const data = {
        name: event.target['0'].value,
        email: event.target['1'].value,
        message:  event.target['2'].value
      };
      console.log('%cInput data: ', 'color: blue', data);
      event.preventDefault();
    });
  }

  ngOnDestroy() {
    this.submitHandler();
  }

}
