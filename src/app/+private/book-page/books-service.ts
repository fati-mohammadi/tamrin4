import { Injectable } from '@angular/core';
import { BookItem } from './book-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  remove(book:BookItem) {
    this.data=this.data.filter(m=>m.id!=book.id);
  }
  private data: BookItem[] = [
    { id: 1, title: 'کیمیاگر', writer: 'پائولوکوئیلو', publisher: 'حسین نعیمی', price: 280000, img: "/images/1.jpg" },
    { id: 2, title: 'هری پاتر', writer: 'جی کی رولینگ', publisher: 'فهیمه شاه محمدی', price: 200000, img: '/images/2.jpg' },
    { id: 3, title: 'معجزه شکرگزاری', writer: 'راندا برن', publisher: 'الهام امیری زاده', price: 340000, img: '/images/3.jpg' },
    { id: 4, title: 'تکه هایی از یک کل منسجم', writer: 'پونه مقیمی', publisher: 'رضا احدی', price: 860000, img: '/images/4.jpg' },
    { id: 5, title: 'کتابخانه نیمه شب', writer: 'مت هیگ', publisher: 'محمد نورانی', price: 950000, img: '/images/5.jpg' },
    { id: 6, title: '  سفر به پاریس', writer: 'جوجو مویز', publisher: 'میلاد عباسی', price: 740000, img: '/images/6.jpg' },
    { id: 7, title: '  شازده کوچولو', writer: 'کاترین وودز', publisher: 'میثم احمدی', price: 250000, img: '/images/7.jpg' },
    { id: 8, title: '  سفر به فضا', writer: 'محیا اسدی', publisher: 'علی امینی', price: 360000, img: '/images/8.jpg' },


  ];
  list() {
    return [...this.data];
  }
  add(book: BookItem) {
    book.id=Math.max(...this.data.map(m=>Number(m.id)))+1;

    this.data.push(book);
  }
  update(book:BookItem){
     const index=this.data.findIndex(b=>b.id==book.id);
     if(index!=-1){
      this.data[index].title=book.title;
      this.data[index].writer=book.writer;
      this.data[index].publisher=book.publisher;
      this.data[index].price=book.price;


     }
  }
}
