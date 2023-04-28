import { Component, OnInit } from '@angular/core';
import { IconDefinition, faGlobeAmericas, faGraduationCap, faPenNib, faSearch, faThLarge, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public services: ServicesModel[] = [
    {
      icn: faUserFriends,
      title: 'Asesorías',
      content: 'Podemos ayudarle con su proyecto de investigación desde la elección del tema, la pregunta de investigación, el protocolo, hasta el informe final, si fuera necesario'
    },
    {
      icn: faSearch,
      title: 'Edición/Corrección',
      content: 'Nuestros expertos revisarán el lenguaje de su manuscrito asegurando la gramática, ortografía, precisión, claridad, brevedad, coherencia y consistencia'
    },
    {
      icn: faThLarge,
      title: 'Análisis de datos',
      content: 'El equipo de análisis de datos le ayuda a analizar los datos de la mejor manera posible ya que son expertos en el área de estadeistica y de ciencias sociales'
    },
    {
      icn: faPenNib,
      title: 'Diseño gráfico',
      content: 'Nuestros diseñadores gráficos te darán ideas y/o harán propuestas de los gráficos o imágenes que mejor reflejen el mensaje que quieres transmitir de acuerdo con tus posibles lectores.'
    },
    {
      icn: faGraduationCap,
      title: 'Cursos',
      content: 'Si tu interés es hacer una carrera en investigación o prepararte para desarrollar tu propia investigación, nuestro equipo estará realizando cursos virtuales dos veces al año o por demanda de grupos específicos.'
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
