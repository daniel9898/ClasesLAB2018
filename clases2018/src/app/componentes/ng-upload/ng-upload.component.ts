import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
  selector: 'app-ng-upload',
  templateUrl: './ng-upload.component.html',
  styleUrls: ['./ng-upload.component.css']
})
export class NgUploadComponent {

  //npm install --save ng2-cloudinary
 
  person : any = {
    name : '',
    lastName: '',
    email:'',
    picture:''
  };

  imageId: string;

  uploader: CloudinaryUploader = new CloudinaryUploader(
      new CloudinaryOptions({ cloudName: 'dnhvtb5nw', uploadPreset: 'ca0xtfzp' })
  );

  constructor(){
    //Override onSuccessItem to retrieve the imageId
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
        let res: any = JSON.parse(response);
        this.imageId = res.public_id;
        this.person.picture = res.secure_url;
        return { item, response, status, headers };
    };
  }

  upload() {
    this.uploader.uploadAll();
  }

  save(){
    console.log(this.person);
  }

 

}
