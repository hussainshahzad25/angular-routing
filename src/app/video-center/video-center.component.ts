import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
// import { VideoService } from '../video.service';

@Component({
  selector: 'video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    { "$key": "1", "title": "This is Title1", "url": "https://www.youtube.com/embed/6JaUPlmsCwI", "description": "d1" },
    { "$key": "2", "title": "Kaun Tujhe & Kuch Toh Hain - Armaan Malik , Amaal Mallik - A Cute Love Story", "url": "https://www.youtube.com/embed/WpGKFfxCq80", "description": "d2" },
    { "$key": "3", "title": "Ro Ro Arzaan Minnat Aur Faryaad Karaa || R Haider Ali || Luvbaaz Music Studio", "url": "https://www.youtube.com/embed/rX2N1VJZKz8", "description": "d3" },
    { "$key": "4", "title": "This is Title4", "url": "https://www.youtube.com/embed/DbX3XgdqSsg", "description": "d4" },
    { "$key": "5", "title": "This is Title5", "url": "https://www.youtube.com/embed/HznzUUMyV1Q", "description": "d5" }
  ];

  selectedVideo: Video;
  employeelist: Video[];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    var x = this.videoService.getFirebaseVideos();
    x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeelist.push(y as Video);
      });
      console.log("Video LIST :: " + JSON.stringify(this.employeelist));
    });
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}
