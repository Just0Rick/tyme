import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faThLarge } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input('icon')
  public icn: IconDefinition = faThLarge;

  @Input('icon-accent')
  public accentIcnColor: string = "var(--color-celestial-blue)";

  @Input('icon-color')
  public currentIcnColor: string = "var(--color-onyx)";

  public bckpColor: string = "";

  @Input()
  public title: string = "Corrección";

  @Input()
  public content: string = "Corrección en inglés de la mas alta calidad, hecha por un experto en su campo, para garantizar que su texto esté listo para enviarlo a la revista";

  @Input('action-text')
  public actionText: string = "Seguir";

  @Output()
  public cta: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


  @HostListener("mouseover")
  onMouseOver(){
    this.currentIcnColor = this.accentIcnColor;
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.currentIcnColor = this.bckpColor;
  }

  constructor() { }

  ngOnInit(): void {
    this.bckpColor = this.currentIcnColor;
  }

  onClick(evt: MouseEvent){
    this.cta.emit(evt);
  }
}
