import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts = [
    // {
    //   title: 'Lorem Ipsum',
    //   user: {
    //     name: 'john Doe',
    //     place: 'Lorem ipsum',
    //     avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //   },
    //   image: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg',
    //   commentsCounter: 333,
    //   likes: 333,
    //   comments: [
    //     {
    //       user: {
    //         name: 'john Doe',
    //         place: 'Lorem ipsum',
    //         avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //       },
    //       comment: 'Lorem ipsum'
    //     }
    //   ],
    //   post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   title: 'Lorem Ipsum',
    //   user: {
    //     name: 'john Doe',
    //     place: 'Lorem ipsum',
    //     avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //   },
    //   image: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg',
    //   commentsCounter: 333,
    //   likes: 333,
    //   comments: [
    //     {
    //       user: {
    //         name: 'john Doe',
    //         place: 'Lorem ipsum',
    //         avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //       },
    //       comment: 'Lorem ipsum'
    //     }
    //   ],
    //   post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   title: 'Lorem Ipsum',
    //   user: {
    //     name: 'john Doe',
    //     place: 'Lorem ipsum',
    //     avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //   },
    //   image: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg',
    //   commentsCounter: 333,
    //   likes: 333,
    //   comments: [
    //     {
    //       user: {
    //         name: 'john Doe',
    //         place: 'Lorem ipsum',
    //         avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //       },
    //       comment: 'Lorem ipsum'
    //     }
    //   ],
    //   post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   title: 'Lorem Ipsum',
    //   user: {
    //     name: 'john Doe',
    //     place: 'Lorem ipsum',
    //     avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //   },
    //   image: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg',
    //   commentsCounter: 333,
    //   likes: 333,
    //   comments: [
    //     {
    //       user: {
    //         name: 'john Doe',
    //         place: 'Lorem ipsum',
    //         avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //       },
    //       comment: 'Lorem ipsum'
    //     }
    //   ],
    //   post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // },
    // {
    //   title: 'Lorem Ipsum',
    //   user: {
    //     name: 'john Doe',
    //     place: 'Lorem ipsum',
    //     avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //   },
    //   image: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg',
    //   commentsCounter: 333,
    //   likes: 333,
    //   comments: [
    //     {
    //       user: {
    //         name: 'john Doe',
    //         place: 'Lorem ipsum',
    //         avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
    //       },
    //       comment: 'Lorem ipsum'
    //     }
    //   ],
    //   post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    // }
  ]
  stories = [
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    {
      user: {
        name: 'john Doe',
        place: 'Lorem ipsum',
        avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
      },
      storyImage: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
    },
    
  ]
  slidesOpt = {
    slidesPerView: 4.3
  }
  pageNo = 1;
  @ViewChild(IonInfiniteScroll) infinteScroll: IonInfiniteScroll;
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(){
    this.getFeed();
  }

  getFeed(ev?){
    this.apiService.getRandomuserData(this.pageNo, 5).subscribe((res: any)=>{
      if(res && res.results && res.results.length > 0){
        const userData = res.results;
        for(let user of userData){
            let post = {
              title: 'Lorem Ipsum',
              user: user,
              image: 'https://picsum.photos/300/300.jpg',
              commentsCounter: 333,
              likes: 333,
              comments: [
                {
                  user: {
                    name: 'john Doe',
                    place: 'Lorem ipsum',
                    avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
                  },
                  comment: 'Lorem ipsum'
                }
              ],
              post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              hashtags: '#Instagram #clone #infinite #coding'
            }
            this.posts.push(post)
          }
          if(ev){
            this.infinteScroll.complete();
          }
        }
    })
  }

  loadData(ev){
    this.pageNo++;
    this.getFeed(ev);
  }

}
