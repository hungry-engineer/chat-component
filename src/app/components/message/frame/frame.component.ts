import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MAX_WIDTH_IMAGES,} from '../../../utils/constants';
@Component({
  selector: 'tiledeskwidget-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  @Input() metadata: any;
  @Input() width: string;
  @Input() height: string;
  
  url: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.metadata.src);
    // this.width = this.getSizeImg(this.metadata).width;
    // this.height = this.getSizeImg(this.metadata).height;
  }

  ngOnDestroy(){
    this.url = null;
  }

  // url(path){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  // }

}
