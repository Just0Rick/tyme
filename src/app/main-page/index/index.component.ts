import { Component, OnInit } from '@angular/core';
import { IconDefinition, faGlobeAmericas, faThLarge, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public services: ServicesModel[] = [
    {
      icn: faThLarge,
      title: 'Corrección',
      content: 'Corrección en inglés de la mas alta calidad, hecha por un experto en su campo, para garantizar que su texto esté listo para enviarlo a la revista'
    },
    {
      icn: faGlobeAmericas,
      title: 'Traducción',
      content: 'Traducción de su manuscrito del español a inglés, con calidad de publicación'
    },
    {
      icn: faUserFriends,
      title: 'Formateo',
      content: 'Formateo de las referencias y de todo el manuscrito según las especificaciones de la revista seleccionada'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onServicePressed(service: ServicesModel){
    alert(`${service.title} presionado!`);
  }

}

interface ServicesModel{
  icn: IconDefinition;
  title: string;
  content: string;
}
