import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GradeComponent } from './main/grade/grade.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { LostPointComponent } from './main/lost-point/lost-point.component';
import { ResolveMissionComponent } from './main/resolve-mission/resolve-mission.component';

const routes:Routes = [  
  { path:'',component:MainComponent,children:[
    { path:'grade',component:GradeComponent},
    { path:'homePage',component:HomePageComponent},
    { path:'lostPoint',component:LostPointComponent},
    { path:'resolveMission',component:ResolveMissionComponent},
    { path:'',redirectTo:'homePage'}
  ]}  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MainRoutingModule { }
