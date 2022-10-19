import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../service/mok-service';
import { Service } from '../service/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  title = 'spvie';
  services!: Service[]

  constructor() { }

  ngOnInit(): void {
    this.services = SERVICES
  }

  selectService(event: MouseEvent ){
    const index: number = +(event.target as HTMLInputElement).value
    const service = this.services.find((service) => service.id === index)
    service ? console.log(service) : console.log(`Le service avec l'index ${index} n'existe pas.`);
  }

  selectedService(serviceId: string){
    const service = this.services.find(service => service.id === +serviceId);
    service ? console.log(service.name) : console.log(`Le service avec l'id ${+serviceId} n'existe pas.`);
  }

  getServiceById(id: number) {
    const service = this.services.find(service => service.id === +id)
    service ? console.log(service) : console.log(`Le service avec l'id ${id} n'existe pas.`);
  }

}
