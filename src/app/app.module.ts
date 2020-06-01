import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsListComponent } from './profile/details-list/details-list.component';
import { DetailComponent } from './profile/detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component:ProfileComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'blog', component: BlogComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    DetailsListComponent,
    DetailComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
