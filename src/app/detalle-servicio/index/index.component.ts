import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public serviceItems = [
    {
      serviceName: "Asesorías",
      serviceTitle: "Nuestro grupo de asesores lo llevaran al éxito de su investigación",
      serviceDescriptors: [
        "En A&I contamos con planes que se adaptan a sus necesidades y/o objetivos de su proyecto de investigación. ",
        "Podemos ayudarle con su proyecto de investigación desde la elección del tema, la pregunta de investigación, el protocolo, hasta el informe final, si fuera necesario, le brindamos apoyo para facilitar la escritura, el uso de gestores de bibliografía, el análisis de datos. Adicionalmente, le asesoramos con la presentación de su trabajo cumpliendo con los parámetros que le pide su universidad o centro de formación. "
      ],
      serviceTiers: [
        {
          tierName: 'Básico',
          tierPrice: 40,
          tierDetails: [
            "Llamada de 30 min. con un profesional especializado en tu área de estudio",
            "Correo electrónico con sugerencias",
            "Reporte de plagio",
            "Citaciones bibliográficas según normas APA y vancouver",
            "Búsqueda de bibliografía en bases indexadas"
          ]
        },
        {
          tierName: 'Premium',
          tierPrice: 60,
          tierDetails: [
            "Llamada de 40 min. con un profesional especializado en tu área de estudio",
            "Correo electrónico con sugerencias",
            "Reporte de plagio",
            "Citaciones bibliográficas según normas APA y vancouver",
            "Búsqueda de bibliografía en bases indexadas"
          ]
        },
        {
          tierName: 'Gold',
          tierPrice: 80,
          tierDetails: [
            "Llamada de 60 min. con un profesional especializado en tu área de estudio",
            "Correo electrónico con sugerencias",
            "Reporte de plagio",
            "Citaciones bibliográficas según normas APA y vancouver",
            "Búsqueda de bibliografía en bases indexadas"
          ]
        }
      ]
    },
    {
      serviceName: "Edición/Corrección",
      serviceTitle: "",
      serviceDescriptors: [
        "Nuestros expertos revisarán el lenguaje de su manuscrito asegurando la gramática, ortografía, precisión, claridad, brevedad, coherencia y consistencia. De la misma manera, aplicarán un detector de plagio y revisarán la coherencia entre texto, ilustración y artículos citados."
      ],
      serviceTiers: [
        {
          tierName: 'Básico',
          tierPrice: 0,
          tierDetails: [
            "Edición lingüística y gramatical del trabajo terminado. Desde la Introducción hasta la Discusión de resultados",
            "Revisión de coherencia entre objetivos, metodología, Discusión, Conclusiones y Recomendaciones",
            "Sugerencias de mejoras a la redacción o reducción de párrafos manteniendo el significado del trabajo original si se apega a los objetivos",
            "Sugerencias para mejorar la claridad de cuadros, gráficos e ilustraciones"
          ]
        },
        {
          tierName: 'Premium',
          tierPrice: 0,
          tierDetails: [
            "Edición lingüística y gramatical del trabajo terminado. Desde la Introducción hasta la Discusión de resultados",
            "Revisión de coherencia entre objetivos, metodología, Discusión, Conclusiones y Recomendaciones",
            "Mejoras a la redacción o reducción de párrafos manteniendo el significado del trabajo original si se apega a los objetivos",
            "Mejoras de claridad de cuadros, gráficos e ilustraciones",
            "Cotejo de citaciones bibliográficas según normas APA o Vancouver",
            "Edición y formateo de documento de acuerdo con lo requerido por la institución formadora"
          ]
        }
      ]
    },
    {
      serviceName: "Análisis de datos",
      serviceTitle: "Nuestro grupo de asesores en análisis de datos te ayudarán sacarle el máximo provecho a los datos que has recolectados",
      serviceDescriptors: [
        "El equipo de análisis de datos le ayuda a analizar los datos de la mejor manera posible ya que son expertos en el área de estadística y de ciencias sociales.",
        "Los datos son el alma de todo proyecto de investigación y tesis, por lo cual nuestro equipo de expertos le ofrece una gama de tipos de análisis para datos cualitativos y cuantitativos ajustados a las necesidades de cada uno de uds."
      ],
      serviceTiers: [
        {
          tierName: 'Cuantitativo básico',
          tierPrice: 300,
          tierDetails: [
            "Estadística descriptiva a nivel univariado que incluye",
            "\tMedidas de tendencia central y dispersión",
            "\tFrecuencias absolutas y relativas",
            "\tTasas",
            "\tPrueba de chi cuadrado y t-student"
          ]
        },
        {
          tierName: 'Cuantitativo avanzado',
          tierPrice: 500,
          tierDetails: [
            "Medidas de asociación e impacto",
            "Análisis multivariado",
            "\tRegresión lineal",
            "\tRegresión binaria múltiple",
            "\tRegresión logística de Poisson",
            "\tAnálisis de supervivencia de Kaplan - Meier"
          ]
        },
        {
          tierName: 'Cualitativo básico',
          tierPrice: 250,
          tierDetails: [
            "Análisis temático",
            "Análisis de contenido",
            "Análisis narrativo"
          ]
        },
        {
          tierName: 'Cualitativo avanzado',
          tierPrice: 500,
          tierDetails: [
            "Generación de códigos",
            "Creación de categorías",
            "Propiedades y dimensiones",
            "Modelo final explicativo"
          ]
        }
      ]
    },
    {
      serviceName: "Diseño gráfico",
      serviceTitle: "",
      serviceDescriptors: [
        "Nuestros diseñadores gráficos te darán ideas y/o harán propuestas de los gráficos o imágenes que mejor reflejen el mensaje que quieres transmitir de acuerdo con tus posibles lectores."
      ],
      serviceTiers: [
      ]
    },
    {
      serviceName: "Cursos",
      serviceTitle: "",
      serviceDescriptors: [
        "Si tu interés es hacer una carrera en investigación o prepararte para desarrollar tu propia investigación, nuestro equipo estará realizando cursos virtuales dos veces al año o por demanda de grupos específicos. Los cuatro cursos están preparados para que sean dinámicos con un contenido práctico muy alto, para que el conocimiento sea aplicado inmediatamente."
      ],
      serviceTiers: [
      ]
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    
  }

  onElementClick(element: HTMLElement){
    element.scrollIntoView();
  }

}
