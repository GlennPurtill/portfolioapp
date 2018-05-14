import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './routes/header.component';
import { GalleryComponent } from './routes/gallery.component';
import { NavComponent } from './routes/nav.component';
import { Routes, RouterModule } from '@angular/router';

import { P1Component } from './routes/portfoliopages/p1.component';
import { P2Component } from './routes/portfoliopages/p2.component';
import { P3Component } from './routes/portfoliopages/p3.component';
import { P4Component } from './routes/portfoliopages/p4.component';
import { P5Component } from './routes/portfoliopages/p5.component';
import { P6Component } from './routes/portfoliopages/p6.component';
import { P7Component } from './routes/portfoliopages/p7.component';
import { P8Component } from './routes/portfoliopages/p8.component';
import { P9Component } from './routes/portfoliopages/p9.component';
import { AboutComponent } from './routes/about.component';

const routes: Routes = [
  {
      path: '',
      component: GalleryComponent,
  },
  {
    path: 'p1',
    component: P1Component,
  },
  {
    path: 'p2',
    component: P2Component,
  },
  {
    path: 'p3',
    component: P3Component,
  },
  {
    path: 'p4',
    component: P4Component,
  },
  {
    path: 'p5',
    component: P5Component,
  },
  {
    path: 'p6',
    component: P6Component,
  },
  {
    path: 'p7',
    component: P7Component,
  },
  {
    path: 'p8',
    component: P8Component,
  },
  {
    path: 'p9',
    component: P9Component,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    NavComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
    P9Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
