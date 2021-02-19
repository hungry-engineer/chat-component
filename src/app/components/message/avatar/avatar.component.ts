import { Component, Input, OnInit } from '@angular/core';
import { ImageRepoService } from '../../../../chat21-core/providers/abstract/image-repo.service';
import {FIREBASESTORAGE_BASE_URL_IMAGE} from '../../../utils/constants'
@Component({
  selector: 'tiledeskwidget-avatar-image',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() senderID: string;
  @Input() senderFullname: string;
  @Input() baseLocation: string;
  url: string;
  constructor(private imageRepoService: ImageRepoService) { }

  ngOnInit() {
    if(this.senderID){
      this.url = this.imageRepoService.getImagePhotoUrl(FIREBASESTORAGE_BASE_URL_IMAGE, this.senderID)
      if(!this.url){
        this.url =  this.baseLocation +'/assets/images/avatar_bot_tiledesk.svg'
      }
    }
    
  }

  onBotImgError(event){
    event.target.src = this.baseLocation +'/assets/images/avatar_bot_tiledesk.svg'
  }
  onHumanImgError(event) {
    event.target.src = this.baseLocation + "/assets/images/light_avatar_placeholder.svg"
  }

  // getBaseLocationWidget(): string{
  //   if (this.baseLocation) {
  //     console.log('»»»» avatarComponent baseLocation', this.baseLocation);
  //     return this.baseLocation
  //   }
  // }

}
