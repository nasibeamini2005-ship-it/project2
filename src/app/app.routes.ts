import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { HomePage } from './+pages/+public/home-page/home-page';
import { AboutPage } from './+pages/+public/about-page/about-page';
import { ContactPage } from './+pages/+public/contact-page/contact-page';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { LogoutPage } from './+pages/+private/logout-page/logout-page';

export const routes: Routes = [
    {path:'public', component:PublicTemplate,children:[
        {path:'home', component:HomePage},
        {path:'about', component:AboutPage},
        {path:'contact', component:ContactPage},
        {path:'', redirectTo:'home',pathMatch:'prefix'},
        {path:'**', redirectTo:'home'}
    ]},
{path:'private', component:PrivateTemplate, children:[
    {path:'dashboard', component:DashboardPage},
    {path:'users', component:UsersPage},
    {path:'logout', component:LogoutPage},
    {path:'', redirectTo:'dashboard',pathMatch:'prefix'},
    {path:'**',redirectTo:'dashboard'}
   
]},
{path:'',redirectTo:'public', pathMatch:'full'},
{path:'**',redirectTo:'public'}
];
