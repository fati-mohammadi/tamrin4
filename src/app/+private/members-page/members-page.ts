import { Component, inject, OnInit } from '@angular/core';
import {  MembersService } from './members-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {
  action: string | undefined;
  members: membersItem | undefined;
  


  save() {
    if(this.action=='add'){
       const newItem = Object.assign({}, this.item);
       this.membersService.add(this.item);
    }
    else if(this.action=='edit'){
       this.membersService.update(this.item); 
    }
    else if(this.action=='remove'){
      this.membersService.remove(this.item);
    }
   
    this.dataRefrsh();
    this.state = 'list';

  }
  ngOnInit(): void {
    this.dataRefrsh();
  }
  data: membersItem[] = [];
  item: membersItem = {
     id: 0,
      name: '',
      family: '',
      code: 0,
      phone: 0,
  }
  membersService = inject(MembersService);
  state: string = 'list';
  dataRefrsh() {
    this.data = this.membersService.list();
  }
  add() {
    this.state = 'add';
    this.action = 'add';
    this.item = {
      id: 0,
      name: '',
      family: '',
      code: 0,
      phone: 0,
    };

  }
  cansel() {
    this.state = 'list';
  }
   edit(members:membersItem){
      this.state='form';
      this.item={...members};
      this.action='edit';
    }
     remove(members:membersItem){
        this.state='form';
        this.item={...members};
        this.action='remove';
      }
}
export interface membersItem {
  id: number;
  name: string;
  family: string;
  code: number;
  phone: number;
}