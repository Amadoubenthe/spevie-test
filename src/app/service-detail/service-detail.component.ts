import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVICES } from '../service/mok-service';
import { Service } from '../service/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  id!: number
  service!: Service | undefined

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.params
    this.id = param['id']
    console.log(this.id);
    this.service = SERVICES.find(service => service.id === +this.id)
    console.log(this.service);
  }

}
