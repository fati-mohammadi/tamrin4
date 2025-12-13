import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // فقط RouterOutlet را وارد می‌کنید

@Component({
  selector: 'app-private-template',
  standalone: true,  // تنظیم standalone برای این کامپوننت
  imports: [RouterOutlet],  // RouterOutlet را به طور مستقیم وارد می‌کنید
  templateUrl: './private-template.html',
  styleUrls: ['./private-template.css']
})
export class PrivateTemplate {}
