import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-mission-filter',
  imports: [FormsModule,  MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {
  searchDetails={
    num: "",
  }
  @Output() yearFilter = new EventEmitter<string>();
  search(form: any){
    if(form.valid){
      // alert(`${this.userDetails.username} ${this.userDetails.password}` )
      //this.goToEmployeeForm(+this.searchDetails.num)
      this.yearFilter.emit(this.searchDetails.num)
    }
  }
  

}
