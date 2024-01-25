import { CommonModule, NgIf, NgSwitchCase, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../../module/klasa';



@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule, NgIf, NgSwitchCase, NgClass, NgStyle],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit{

  @Input()
  ime:String="";

  @Input()
  vozac:Driver = {}as Driver;

  @Input()
  reden:Number | undefined;

  @Output()

  cuci = new EventEmitter<any>();

  ngOnInit() {}

  klasi(){
    return {'poz':this.vozac.category=='BEGINNER', 'course-card':true}
  }

  boja(){
    return{'boja':this.vozac.points>200, 'course-color':true}
  }

  klik(){
    var link = this.vozac.iconUrl;
    window.open(link, "_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }
}