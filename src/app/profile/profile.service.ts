import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Crud operation using MEAN stack',
      desc: '',
      
      githurl: 'https://github.com/Mouadh-kaabi/backendMeanApp',
     
      imgUrl: 'assets/images/git1.png',
      tech: 'MongoDB , Ewpress , Angular , Node'
    },

    {
      id: 2,
      title: 'Ecomerce App Using MEAN Stack',
      desc: '',
     
      githurl: 'https://github.com/Mouadh-kaabi/frontend-node-app-angular',
  
      imgUrl: 'assets/images/git2.png',
      tech: 'MongoDB , Ewpress , Angular , Node'
    },


 

    {
      id: 3,
      title: 'snake game  using JavaScript',
      desc: '',
      
      githurl: 'https://github.com/Mouadh-kaabi/jeu_serpent',
      
      imgUrl: 'assets/images/git3.png',
      tech: 'JavaScript'
    },

    {
      id: 4,
      title: 'stock management  using Spring Boot',
      desc: '',
      
      githurl: 'https://github.com/Mouadh-kaabi/gestionStock',
      
      imgUrl: 'assets/images/git4.png',
      tech: 'Spring boot , Mysql'
    },

    {
      id: 5,
      title: ' management of doctors appointments DOCTPRIF using Spring Boot , Angular ',
      desc: '',
      
      githurl: 'https://github.com/Mouadh-kaabi/gestionStock',
      
      imgUrl: 'assets/images/git5.png',
      tech: 'Spring boot , Spring cloud , Microservices, Angular , Postgresql'
    },

    {
      id: 6,
      title: ' bank account management  using Spring Boot , Angular ',
      desc: '',
      
      githurl: 'https://gitlab.com/MouadhKaabi/springboot-back-gestioncomptebancaire',
      
      imgUrl: 'assets/images/git6.png',
      tech: 'Spring boot , Angular , Mysql'
    },

   



  

  ]
  about2 = `Software Developer with 1.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, Spring Boot , Javascript,  Node JS and Express JS  .
  Have good understanding of java, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1KHlYxet1oBYAIgKrbSMMSQBffZbIQ17K/edit?usp=sharing&ouid=111238293858054412117&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT Html Css',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Spring boot , J2EE ',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'JAVA , Blockchaine',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
     
      
    },
    {
      
    },
    {
      
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'SOTRAS',
      location: 'Mateur, Bizerte',
      timeline: 'Aug 2020 to Present',
      role: 'Software Developer',
      work: 'Working as a full stack developer .Analyze user needs, create specifications, design and develop a system architecture and specifications.'

    },
    {
      id: 3,
      company: 'Freelance ',
      location: 'Remote',
      timeline: 'Nov 2020 to Dec 2020',
      role: 'Software Developer',
      work: `Technologies : Spring Boot , Angular , Postqresql . 
      Develop the backend part of the application (make payments, assign types of accounts for clients).`
    },

    {
      id: 2,
      company: 'Rassemblement des ingénieurs francophone	',
      location: 'Remote',
      timeline: 'Avr 2020 to Dec 2020',
      role: 'Full Stack  Developer',
      work: `Technologies : Angular , Spring Boot , Spring Eureka , Spring cloud  , postgresql , Micro services . 
      Research, design and develop the micro-service architecture . Develop a web application made appointments for doctors . 
      Maintenance and correction of bugs `
    },

   

  ]


  skills(): Observable<any> {
   
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    
    return this.projects;
  }
  education(): Observable<any> {
    
    return this.educationData;
  }

  exprience(): Observable<any> {
   
    return this.exprienceData;
  }
}
