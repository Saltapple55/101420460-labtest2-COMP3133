import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { MissionFilterComponent } from './mission-filter/mission-filter.component';
export const routes: Routes = [
    { path: 'missionlist', component: MissionListComponent },
    {path: 'mission-filter', component: MissionFilterComponent},
    { path: 'mission-details/:fnum', component: MissionDetailsComponent },
    { path: '**', component: MissionListComponent } // Wildcard route for 404
  ];
