import {
  Component
} from '@angular/core';

import {
  NavController
} from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  character: any;

  constructor(public navCtrl: NavController) {
    this.character = {
      image: 'assets/images/github_pic.PNG',
      name: 'Yu Zheng',
      quote: 'Find yzhe554 on github',
      items: [{
          title: 'Email',
          note: 'lynnzheng1989@gmail.com'
        },
        {
          title: 'Phone',
          note: '0450660369'
        },
        {
          title: 'Address',
          note: 'Rhodes'
        }
      ]
    }
  }

  launch(url) {
       window.open(url, '_system', 'location=yes');
    }

}
