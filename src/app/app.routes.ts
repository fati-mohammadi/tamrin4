import { Routes } from '@angular/router';
import { Login } from './+public/+pages/login/login';
import { PrivateTemplate } from './+private/private-template/private-template';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'private',component:PrivateTemplate,children:[]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'},
];
