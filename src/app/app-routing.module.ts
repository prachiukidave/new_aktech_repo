
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import{AboutUsComponent} from './MyComponents/about-us/about-us.component'
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { OurMissionComponent } from './MyComponents/our-mission/our-mission.component';
import { ServiceComponent } from './MyComponents/service/service.component';
import { OurVisionComponent } from './MyComponents/our-vision/our-vision.component';
import { WhyUsComponent } from './MyComponents/why-us/why-us.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'our-vision',component:OurVisionComponent},
  {path:'our-mission',component:OurMissionComponent},
  {path:'service',component:ServiceComponent},
  {path:'why-us',component:WhyUsComponent},
  {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


