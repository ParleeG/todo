import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  text=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.text=this.route.snapshot.params['name']
  }

}
