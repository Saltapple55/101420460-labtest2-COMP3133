import { Component } from '@angular/core';
import Flight from '../types/flight';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../service/api-client.service';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-mission-details',
  imports: [MatCardModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {
  public flight: Flight={};
  isClassAvailable = true
  flightNum: any=""


  constructor(private apiClientService: ApiClientService, private activatedRoute: ActivatedRoute){
    this.flightNum=this.activatedRoute.snapshot.paramMap.get('fnum')

  }
  ngOnInit(){
    //get the posts
    this.getFlightById(this.flightNum)
  }
  getFlightById(id: number) {
    this.apiClientService.getFlightByID(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.flight=response
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
