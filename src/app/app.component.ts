import { Component, OnInit} from '@angular/core';
import { ApiClientService } from './service/api-client.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { MissionFilterComponent} from './mission-filter/mission-filter.component';
import { MissionListComponent } from './mission-list/mission-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MissionDetailsComponent, MissionFilterComponent, MissionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101420460_lab_test2';
  public flights: any[] = [];
  isClassAvailable = true

  constructor(private apiClientService: ApiClientService){}

  ngOnInit(){
    //get the posts
    this.getPosts()
  }

  getPosts(){
    this.apiClientService.getFlights().subscribe({

      next: (response: any) => {
        //response should be available
        //take necessary steps to use the response
        console.log('Response:', response)
        this.flights = response
      },
      error: (error: any) => {
        console.error('There was an error!', error)
      },
    })
  }

}
