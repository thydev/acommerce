import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages = [{product: 'Iron shoes', owner: 'Tim'}, {product: 'Product2', owner: 'toto'}];

  constructor(private _httpServie: HttpService) { }

  ngOnInit() {
    this.getMessages();
  }
  async getMessages() {
    const response = await this._httpServie.getMessages();
    console.log(response);
    // this._httpServie.getMessages().subscribe(data => {
    //   this.messages = data;
    // });
  }
}
