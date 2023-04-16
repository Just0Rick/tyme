import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faThLarge } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input('icon')
  public icn: IconDefinition = faThLarge;

  @Input()
  public title: string = "Corrección";

  @Input()
  public content: string = "Corrección en inglés de la mas alta calidad, hecha por un experto en su campo, para garantizar que su texto esté listo para enviarlo a la revista";

  @Input('action-text')
  public actionText: string = "Seguir";

  @Output()
  public cta: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(evt: MouseEvent){
    this.cta.emit(evt);
  }
}
