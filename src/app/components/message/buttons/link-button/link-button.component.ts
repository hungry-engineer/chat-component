import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'chat-link-button-attachment',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

  @Input() button: any;
  @Input() fontSize: string;
  @Input() themeColor: string;
  @Input() foregroundColor: string;
  @Output() onButtonClicked = new EventEmitter();
  public type: string = "url"
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    //decomment if element should have same color of themeColor and fregroundColor
    if(this.fontSize) this.elementRef.nativeElement.querySelector('.url').style.setProperty('--buttonFontSize', this.fontSize);
    if(this.themeColor) this.elementRef.nativeElement.querySelector('.url').style.setProperty('--themeColor', this.themeColor);
    if(this.foregroundColor) this.elementRef.nativeElement.querySelector('.url').style.setProperty('--foregroundColor', this.foregroundColor);
  }

  onMouseOver(event){
    if(this.themeColor) this.elementRef.nativeElement.querySelector('.url').style.background = this.themeColor
    if(this.foregroundColor) this.elementRef.nativeElement.querySelector('.url').style.color = this.foregroundColor
  }

  onMouseOut(event){
    this.elementRef.nativeElement.querySelector('.url').style.color = '';
    this.elementRef.nativeElement.querySelector('.url').style.background = ''
  }

  actionButtonUrl(){
    if ( this.button && this.button.link && this.button.link !== '') {
      const event = { target: this, currentTarget: this}
      this.onButtonClicked.emit(event);
    }
  }

}
