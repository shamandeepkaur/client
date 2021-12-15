import { Component, OnInit } from '@angular/core';

import { TeeTimeService } from "../tee-time.service";

@Component({
  selector: 'app-tee-time',
  templateUrl: './tee-time.component.html',
  styleUrls: ['./tee-time.component.css']
})
export class TeeTimeComponent implements OnInit {
teeTime: any

  constructor(private service: TeeTimeService) { }

  ngOnInit(): void {
  }

  getTeeTime(): void{
    this.service.getArtists().subscribe(teeTime =>{
      this.teeTime = teeTime
    })
  }
}
