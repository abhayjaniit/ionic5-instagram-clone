import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  acitvites = [
    {
      duration: 'This Month',
      activities: [
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'liked your post',
          duration: '2min'
        },
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'started following you',
          duration: '1h'
        },
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'liked your post',
          duration: '1w'
        },
      ]
    },
    {
      duration: 'Last Month',
      activities: [
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'liked your post',
          duration: '2min'
        },
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'started following you',
          duration: '1h'
        },
        {
          user: {
            name: 'john Doe',
            place: 'Lorem ipsum',
            avatar: 'https://i.picsum.photos/id/306/200/200.jpg?hmac=_MA2OQbvCf09ghW0BrkSYh9mOhP-xpHqg2c5joDIRFg'
          },
          activity: 'liked your post',
          duration: '1w'
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
