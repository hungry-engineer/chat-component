import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

// services
import { ImageRepoService } from '../abstract/image-repo.service';
// firebase
import * as firebase from 'firebase/app';
import 'firebase/storage';
// @Injectable({ providedIn: 'root' })
@Injectable()
export class FirebaseImageRepoService extends ImageRepoService {

    // private params
    private urlStorageBucket = environment.firebaseConfig.storageBucket + '/o/profiles%2F';
    private baseImageURL: string;
    
    constructor() {
        super();
    }

    /**
     *
     */
    getImagePhotoUrl(uid: string): string {
        this.baseImageURL = this.getImageBaseUrl()
        let sender_id = '';
        if (uid.includes('bot_')) {
            sender_id = uid.slice(4)
        } else {
            sender_id = uid
        }
        const firebase_photo = '/o/profiles%2F'+ sender_id + '%2Fphoto.jpg?alt=media'
        const firebase_thumbnail = '/o/profiles%2F'+ sender_id + '%2Fthumb_photo.jpg?alt=media'
        const imageurl = this.baseImageURL + firebase.storage().ref().bucket + firebase_thumbnail
        return imageurl;
    }
}
