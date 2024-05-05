import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  todos=[
  new Todo(1,'kya hai',true,new Date()),
  new Todo(2,'km bol',false,new Date()),
  new Todo(3,'chup reh',true,new Date()),
]

  constructor() { }

  ngOnInit() {
  }

}
