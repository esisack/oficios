import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryComponent, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from "src/app/services/image.service";
import { Incidence } from 'src/app/model/incidence';
import { Image } from "src/app/model/image";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Input() inncidence: Incidence
  @ViewChild('gallery') gallery: NgxGalleryComponent;

  imgUrl: string = "ba-fdd.jpg";
  currVerifiedLoanOfficerPhoto: any;
  imageToShow: any;
  image: SafeUrl | null = null;
  isImageLoading: boolean;


  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private service: ImageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    //  this.imgUrl = this.inncidence.images[0].id + '.jpg'
    console.log(this.imgUrl)
    console.log("")
    //this.getImageFromService()

    this.galleryOptions =
      [

        { "thumbnails": false },
        { "width": "100%", "height": "600px" }

      ];

    // [
    //   { 
    //     "previewZoom": true, 
    //     "previewRotate": true 
    //   },
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     arrowPrevIcon: 'fa fa-chevron-left',
    //     arrowNextIcon: 'fa fa-chevron-right',
    //     fullscreenIcon: 'fa fa-arrows-alt',
    //     spinnerIcon: 'fa fa-spinner fa-pulse fa-3x fa-fw',
    //     zoomInIcon: 'fa fa-search-plus',
    //     zoomOutIcon: 'fa fa-search-minus',
    //     rotateLeftIcon: 'fa fa-undo',
    //     rotateRightIcon: 'fa fa-repeat',
    //     downloadIcon: 'fa fa-arrow-circle-down',
    //     imageAnimation: NgxGalleryAnimation.Rotate
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false,
    //     previewRotate: true
    //   }
    // ];

    this.galleryImages = [
      {
        small: "../../../../../assets/1-big.jpg",
        medium: "../../../../../assets/1-big.jpg",
        big: "../../../../../assets/1-big.jpg"
      },
      {
        small: 'assets/2-big.jpg',
        medium: 'assets/2-big.jpg',
        big: 'assets/2-big.jpg'
      },
      {
        small: 'assets/3-big.jpg',
        medium: 'assets/3-big.jpg',
        big: 'assets/3-big.jpg'
      },
      {
        small: 'assets/4-big.jpg',
        medium: 'assets/4-big.jpg',
        big: 'assets/4-big.jpg'
      }
    ];
    // this.downloadUnsafe()
  }


  download() {
    const mediaType = 'application/image';
    this.service.getImage(this.imgUrl).subscribe(value => {
      const blob = new Blob([value], { type: mediaType });
      const unsafeImg = URL.createObjectURL(blob);
      this.image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    }, error1 => {

    });
  }

  downloadUnsafe() {
    const mediaType = 'application/image';
    this.service.getImage(this.imgUrl).subscribe(value => {
      const blob = new Blob([value], { type: mediaType });
      const unsafeImg = URL.createObjectURL(blob);
      this.addImage(unsafeImg)
    }, error1 => {

    });
  }

  addImage(unsafeImg: any): void {
    this.galleryImages.push({
      small: unsafeImg,
      medium: unsafeImg,
      big: unsafeImg
    })
  }

}
