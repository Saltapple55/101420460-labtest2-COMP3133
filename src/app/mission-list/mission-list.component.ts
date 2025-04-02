import { Component } from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { RouterLink, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

import Flight from '../types/flight';
@Component({
  selector: 'app-mission-list',
  imports: [RouterLink, MissionFilterComponent, MatCardModule, MatButtonModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  public flights: Flight[] = [];
  public filteredFlights: Flight[]=[];
    isClassAvailable = true
  
    constructor(private apiClientService: ApiClientService, private router: Router){}
  
    ngOnInit(){
      //get the posts
      this.getFlights()
    }
  
    getFlights(){
      this.apiClientService.getFlights().subscribe({
  
        next: (response: any) => {
          //response should be available
          //take necessary steps to use the response
          console.log('Response:', response)
          this.flights = response
          this.filteredFlights=response
        },
        error: (error: any) => {
          console.error('There was an error!', error)
        },
      })
    }
    goToFlightDetails(n: number){
      this.router.navigate(['flight-details', n])
    }
    onFilterFlights(selectedYear: string): void {
      this.filteredFlights = this.flights.filter(
        (flight) => flight.launch_year === selectedYear
      );
    }
  

}
