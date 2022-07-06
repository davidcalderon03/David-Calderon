import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-projects',
  template: `
  <div class="projects-section">
    <div class='wrapper'>
  <h1 class="projects-title">Projects:</h1>
  <div class="projects">

  <div *ngFor="let project of projects">
  <app-site-info [ngStyle]="{'visibility': (!focus || focusName===project.name)? 'visible': 'hidden' }                 " (focusEvent)="createFocus($event)"
  [highlighted]="focus && focusName === project.name"
  [name]="project.name" 
  [pictureLink]="project.pictureLink"
  [webLink]="project.webLink"
  [description]="project.description"
  [features]="project.features"
  [dateFinished]="project.dateFinished"
  [madeWith]="project.madeWith"
  ></app-site-info>
  </div>
  </div>
  </div>
</div>
`,
  styles: [`
  .projects-section{
    background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(188,77,4,0.53) 55%);
  }
  .wrapper{
      max-width: 1280px;
      text-align: center;
      margin: 0 auto;
      padding: 2rem 10px 4rem;
    }
  .projects-title{
    text-align: center;
    font-family: "Lobster", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 30px;
  }
    .projects{
      display: grid;
      grid-template-columns: repeat(auto-fill, 375px);
      justify-content: center;
    }
  `]
})
export class ProjectsComponent implements OnInit {

  public projects: any = [];
  public focus = false;
  public focusName = "";

  public createFocus(name: string): void {
    this.focus=!this.focus;
    this.focusName = name;
  }

  constructor(private httpClient: HttpClient) { 
  }
  ngOnInit(): void {
    this.httpClient.get("../../assets/projects.json").subscribe( data => {
      this.projects = data;
    });
    }

}
