import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import { AppComponent }  from './app.component';
import { MobileListComponent }  from './mobiles/mobile-list.component';
import { RatingComponent } from './shared/rating.component';
import { MobileFilterPipe } from './mobiles/mobile-mobilepipe';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileDetailComponent } from './mobiles/mobile-detail.component';

    const appRoutes : Routes =[
      {path:'home',component : HomeComponent},
      {path:'mobilelist',component : MobileListComponent},
      {path:'app' , component : AppComponent },
      {path:'mobiledetail/:id' , component : MobileDetailComponent}
    ]

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, MobileListComponent, MobileFilterPipe, RatingComponent,HomeComponent,MobileDetailComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
