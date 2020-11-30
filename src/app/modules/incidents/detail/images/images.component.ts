import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from "src/app/services/image.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  slides = [
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];

  imgUrl: string ="";
  currVerifiedLoanOfficerPhoto: any;
  imageToShow: any;
  isImageLoading: boolean;
  
  constructor(private service: ImageService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getImageFromService()
  }

  transform(item: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(item);
}

  createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = this.transform(reader.result);
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }

  getImageFromService() {
      this.isImageLoading = true;
      this.service.getImage(this.imgUrl).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }
}
