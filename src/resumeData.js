import clients from '../src/img/ico/clientesICO.png'
import income from '../src/img/ico/incomeICO.png'
import reputation from '../src/img/ico/reputationICO.png'
import saveMoney from '../src/img/ico/savemoneyICO.png'
import gifPF from "../src/img/projects/pf.gif"
import wun from "../src/img/projects/shutterstock_519514441-1024x683.jpg"

let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "SOTEC",
    "role": "Soluciones Tecnologicas, ",
    "linkedinId":"Your LinkedIn Id",
    "skypeid": "Your skypeid",
    "roleDescription": "Diseño de páginas y aplicaciones web  ",


    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/rahul-bhatia-67ba08121/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"http://github.com/rbhatia46",
          "className":"fa fa-github"
        },
        {
          "name":"skype",
          "url":"http://twitter.com/rbhatia46",
          "className":"fa fa-twitter"
        }
      ],
    "aboutme":"SOTEC es una empresa que se encarga de diseñar y desarrollar sitios web para sus clientes. Esto incluye la creación del diseño y la estructura de la página, la implementación de funcionalidades y características específicas, y la integración con otras plataformas y herramientas en línea. SOTEC trabaja con sus clientes para entender sus necesidades y objetivos, y luego utiliza sus habilidades técnicas y creativas para crear una página web que sea atractiva, fácil de usar y efectiva para alcanzar los objetivos del cliente.",
    "address":"Spain - Argentina",
    "email":"sotecorg@gmail.com",
    "education":[
      {
        "UniversityName":"The LNM Insitute of Information Technology",
        "specialization":"Some specialization",
        "MonthOfPassing":"Aug",
        "YearOfPassing":"2020",
        "Achievements":"Some Achievements"
      },
      {
        "UniversityName":"Some University",
        "specialization":"Some specialization",
        "MonthOfPassing":"Jan",
        "YearOfPassing":"2018",
        "Achievements":"Some Achievements"
      }
    ],
    "work":[
      {
        "title":"Más Clientes ",
        "description":"Gracias a un sitio web diseñado por nosotros puedes convertir a tus visitantes en clientes",
        "img": clients
      },
      {
        "title":"Mejor Reputación",
        "description":"Una página web profesional hará diferenciarte de tu competencia y que tus clientes perciban tu calidad. ",
        "img": reputation

      },
      {
        "title":"Ahorra Tiempo ",
        "description":"Muestra tu empresa de la mejor forma y ahorra tiempo automatizando procesos y obteniendo clientes. ",
        "img": saveMoney
  
      },
      {
        "title":"Más Ingresos ",
        "description":"Todo pensado para el objetivo principal de generar más ingresos para tu empresa y hacerla crecer. ",
        "img": income
  
      }
    ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"Reactjs"
      }
    ],
    "projects":[
      {
        "name":"E-Commerce",
        "description":"Es una aplicación web dedicada a la venta de videojuegos, de complejo desarrollo en sus funcionalidades y adaptada 100% a las necesidades del cliente",
        "imgurl": gifPF
      },
      {
        "name":"WUN",
        "description":"WUN es una aplicación direccionada en su comienzo para programadores que inician o continuan sus estudios, para luego ser una herramienta de estudios para otras ciencias",
        "imgurl": wun
      }
    ],
    "testimonials":[
      {
        "description":"Trabajar con SOTEC, fue una buena experiencia",
        "name":"New York, USA"
      },
      {
        "description":"Entiende las necesidades del cliente",
        "name":"Buenos Aires, Argentina"
      },
      {
        "description": "Nos gustó trabajar con SOTEC",
        "name": "Madrid, Spain"
      }
    ]
  }
  
  export default resumeData