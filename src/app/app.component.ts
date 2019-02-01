import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BookParking';  

  rounds:number = 10;
  arr = [];

  createSeats(rows, cols) {
    var seatIndex = 0;
    for (var row = 0; row < rows; row++) {
        var seat = {
          id: seatIndex,
          caption: seatIndex,
          booked: seatIndex < 2, // 0 to 5 booked
          active: seatIndex >= 2,
        };
        this.arr[row] = seat;
        seatIndex++;
    }
    return this.arr;
  }

  selectParking(event,isBooked,spotNumber,isActive){
    
    if(!isBooked){
      console.log('spot clicked: ',spotNumber);
      if(isActive){
        event.srcElement.src="/assets/images/car_icon/car_selected_icon_1.png";
        this.arr[spotNumber].active = false;
      }
      else{
        event.srcElement.src="/assets/images/car_icon/car_vacant_icon_3.png";
        this.arr[spotNumber].active = true;
      }
      
    }  
  }

  
   ngOnInit(){
      //           col0 1 2 3 4  5 
      // row 0 seat 0   1 2 3 4  5
      // row 1 seat 6   7 8 9 10 11
    this.createSeats(5, 4) // rows, cols
   }
  
}
