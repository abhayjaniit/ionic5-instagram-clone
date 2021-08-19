import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input('post') post: any;
  likeFlag: boolean = false;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {}

  goToUserProfile(){
    let navParam : NavigationExtras = {
      queryParams: {
        user: JSON.stringify(this.post.user),
        callFrom: 'post'
      }
    }
    this.route.navigate(['/tab5'], navParam);
  }

  likeDislike(){
    this.likeFlag = !this.likeFlag;
  }
}
