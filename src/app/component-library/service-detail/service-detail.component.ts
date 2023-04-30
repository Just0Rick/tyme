import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  public icnCheck = faCheck;

  @Input('item-id')
  public itemId: number = 0;

  @Input('service-name')
  public serviceName: string = "Asesorías";

  @Input('service-title')
  public serviceTitle: string = "";

  @Input('service-descriptors')
  public serviceDescriptors: string[] = [];

  @Input('service-tiers')
  public serviceTiers: ServiceTier[] = [];

  @Output()
  public cta = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.cta.emit(`serItem_${this.itemId}`);
  }

}

export interface ServiceTier{
  tierName: string,
  tierPrice: number,
  tierDetails: string[]
}
