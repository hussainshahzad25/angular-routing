import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoService } from '../video.service';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-save-video',
  templateUrl: './save-video.component.html',
  styleUrls: ['./save-video.component.css'],
  providers: [VideoService]
})
export class SaveVideoComponent implements OnInit {


  constructor(private videoService: VideoService, vcr: ViewContainerRef) {

  }

  // videoList: AngularFireList<any>;
  // getFirebaseObjects() {
  //   this.videoList = this.firebase.list('videos');
  //   console.log('VideoList :: ', this.videoList);
  //   return this.videoList;
  // }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    console.log("form.value:: " + JSON.stringify(form.value));
    this.videoService.saveObjectToFirebase(form.value);
    if (form.value.$key == null) {

      // let toastNotificationConfiguration: ToastNotificationConfiguration = {
      //   message: 'Save Successfully',
      //   displayDuration: 3000,
      //   autoHide: true,
      //   showCloseButton: true,
      //   toastType: ToastType.SUCCESS
      // };
      // this.toasterService.showToastMessage(toastNotificationConfiguration);
    }
    else {
      this.videoService.updateObjectToFirebase(form.value);
      // let toastNotificationConfiguration: ToastNotificationConfiguration = {
      //   message: 'Update Successfully',
      //   displayDuration: 2000,
      //   autoHide: true,
      //   showCloseButton: true,
      //   toastType: ToastType.INFORMATION
      // };
      // this
      //   .toasterService
      //   .showToastMessage(toastNotificationConfiguration);
      this.videoService.getFirebaseVideos();
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.videoService.selectedVideo = {
      $key: null,
      title: '',
      url: '',
      description: ''
    };
  }
}
