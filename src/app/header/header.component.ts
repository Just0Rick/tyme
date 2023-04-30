import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public icnMore = faAngleDown;

  public submenu = [
    {
      title: 'Asesorías',
      id: '1'
    },
    {
      title: 'Edición/Corrección',
      id: '2'
    },
    {
      title: 'Análisis de datos',
      id: '3'
    },
    {
      title: 'Diseño gráfico',
      id: '4'
    },
    {
      title: 'Cursos',
      id: '5'
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onServiceClick(serviceId: string){
    this.router.navigate(['servicios'], { relativeTo: this.activatedRoute, queryParams: { serviceId } });
  }

}
