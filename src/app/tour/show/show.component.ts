import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tour} from "../../model/Tour";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit,OnChanges {
  tours: Tour[] = []
  constructor(private tourService:TourService) { }

  ngOnInit(): void {
    this.tourService.getAll().subscribe((data)=>{
      this.tours = data
    })

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  search(input:any) {
    let tour: Tour[] = []
    this.tourService.getAll().subscribe((data) => {
      for (const d of data) {
        if (d.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
          tour.push(d)
        }
      }
      console.log(tour)
      this.tours = tour;
    })
  }
}
