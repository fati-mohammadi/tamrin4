import { Injectable } from '@angular/core';
import { membersItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: membersItem[] = [
      { id: 1, name: 'مهسا ', family: 'احمدی', code: 3859621475, phone: 935864215, },
      { id: 2, name: 'علی ', family: 'موسوی  ', code: 38965421056, phone:986253147 },
      { id: 3, name: 'مریم ', family: 'حسینی ', code: 38965420169, phone:9183081838},
      { id: 4, name: 'سیما', family: 'مهرابی ', code: 39520678942, phone:9021674339 },
      { id: 5, name: 'زهرا ', family: ' ملکی', code: 398562145628, phone:9123046985 }  
    ];
    list() {
      return [...this.data];
    }
     add(members: membersItem) {
      
        members.id=Math.max(...this.data.map(m=>Number(m.id)))+1;
    
        this.data.push(members);
      }
      update(members:membersItem){
         const index=this.data.findIndex(b=>b.id==members.id);
         if(index!=-1){
          this.data[index].name=members.name;
          this.data[index].family=members.family;
          this.data[index].code=members.code;
          this.data[index].phone=members.phone;
    
    
         }}
         remove(members:membersItem) {
             this.data=this.data.filter(m=>m.id!=members.id);
           }
  
}
