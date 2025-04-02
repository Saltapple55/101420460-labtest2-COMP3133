import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Flight from '../types/flight';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private API_BASE_URL = "https://api.spacexdata.com/v3/launches"


  constructor(private httpClient: HttpClient) { }


  public getFlights(): Observable<Flight[]>{
    return this.httpClient.get<any[]>(this.API_BASE_URL).pipe(map((flights: any[])=>
      flights.map(flight=>({
        flight_number: flight.flight_number,
        mission_name: flight.mission_name,
        launch_year: flight.launch_year,
        details: flight.details,
        rocket_name: flight.rocket.rocket_name,
        rocket_type: flight.rocket.rocket_type,
        mission_patch: flight.links.mission_patch_small,
        article_link: flight.links.article_link,
        wikipedia: flight.links.Wikipedia,
        video_link: flight.links.video_link,
      }) as Flight)
    )

    )
  }
  public getFlightByID(id:number): Observable<Flight>{
    return this.httpClient.get<any>(`${this.API_BASE_URL}/${id}`).pipe(map(flight=>
      ({
        flight_number: flight.flight_number,
        mission_name: flight.mission_name,
        launch_year: flight.launch_year,
        details: flight.details,
        rocket_name: flight.rocket.rocket_name,
        rocket_type: flight.rocket.rocket_type,
        mission_patch: flight.links.mission_patch_small,
        article_link: flight.links.article_link,
        wikipedia: flight.links.Wikipedia,
        video_link: flight.links.video_link,
      }) as Flight)
    )
 
  }
}
