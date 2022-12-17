import {Component} from '@angular/core';
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shalin Patel';

  icons = {
    maps: faMapMarkerAlt
  }

  email = '';
  fullName = '';
  message = '';

  skills = {
    front: [
      {name: 'HTML', percent: 90},
      {name: 'CSS', percent: 85},
      {name: 'SCSS', percent: 70},
      {name: 'Bootstrap', percent: 70},
      {name: 'Material Bootstrap', percent: 70},
      {name: 'JavaScript', percent: 85},
      {name: 'jQuery', percent: 82},
      {name: 'TypeScript', percent: 65},
      {name: 'Angular 7/8', percent: 90},
      {name: 'ReactJS', percent: 65},
    ],
    middleware: [
      {name: 'Java', percent: 90},
      {name: 'Python', percent: 70},
      {name: 'C', percent: 65},
      {name: 'C++', percent: 65},
      {name: 'XML', percent: 65},
      {name: 'JSON', percent: 65},
      {name: 'JSP', percent: 65},
      {name: 'Servlet', percent: 65},
      {name: 'Tomcat', percent: 65},
      {name: 'Spring Boot', percent: 85},
    ],
    backend: [
      {name: 'MySQL', percent: 65},
      {name: 'Oracle 11g', percent: 65},
      {name: 'MS Access', percent: 65},
      {name: 'ORM', percent: 65},
      {name: 'Oracle 11g', percent: 65},
    ],
    tools: [
      {name: 'Maven', percent: 65},
      {name: 'Jetbrains Intellij, WebStorm, Eclipse', percent: 92},
      {name: 'GitHub / GitLab / SVN / Git', percent: 65},
      {name: 'Jenkins', percent: 65},
      {name: 'AWS', percent: 65},
      {name: 'Jasper', percent: 65},
      {name: 'DBCP', percent: 65},
    ]
  }

  mailTo() {
    const subject = 'ShalinPatel1610.com : Connect From ' + this.fullName;
    this.message = this.message.concat('\n\n');
    window.location.href = 'mailto:ShalinPatel@gmail.com?subject=' + encodeURI(subject) + '&body=' + encodeURI(this.message);
  }

}
