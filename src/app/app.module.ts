import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './MyComponents/nav/nav.component';
import { CarouselComponent } from './MyComponents/carousel/carousel.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { OurVisionComponent } from './MyComponents/our-vision/our-vision.component';
import { OurMissionComponent } from './MyComponents/our-mission/our-mission.component';
import { OurServiceComponent } from './MyComponents/our-service/our-service.component';
import { WhyUsComponent } from './MyComponents/why-us/why-us.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ServiceComponent } from './MyComponents/service/service.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { MissionComponent } from './MyComponents/mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    AboutUsComponent,
    OurVisionComponent,
    OurMissionComponent,
    OurServiceComponent,
    WhyUsComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
