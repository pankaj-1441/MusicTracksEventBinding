import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrandComponent } from './grand/grand.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music.service';

@NgModule({
  declarations: [
    AppComponent,
    GrandComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Application name	mnvm
// API key	d124dfd581888ee0166576dfe548b558
// Shared secret	e3789cb89b3d83e19e3401781f7ac2bb
// Registered to	pankaj-1441