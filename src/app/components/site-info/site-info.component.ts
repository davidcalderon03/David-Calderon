import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-site-info',
  template: `
  <div class="project">
  <h4 class="site-title">{{name}}</h4>
  <a href={{webLink}} target="_blank">
  <img class="web-img" src={{pictureLink}} alt="" />
  </a>
    
  <button #btn class="detail-btn" (mouseup)="this.openContent(); this.createFocus(this.name);">
    {{highlighted? 'Go Back': 'Details'}}
  </button>

  <div #col class="collapsible-content" style="display: {{display}};">

  <p #date class="collapsible-child">Date Finished: {{dateFinished}}</p>
  <p #purpose class="collapsible-child"><strong>Purpose: </strong>{{description}}</p>
  
  <div #feat class='features-parent collapsible-child'>
  <p><strong>Features: </strong></p>
  <ul>
    <li *ngFor="let item of features;" style="text-align: left;">{{item}}</li>
  </ul>
  </div>
  <div #tools class='tools-parent collapsible-child'>
    <p>Made With:</p>
  <div class="tools">
    <div class="tool" *ngFor="let tool of madeWith;" [ngSwitch]="tool">
      <p class="tool-name">{{tool}}</p>
      <img *ngSwitchCase="'React'" class="logo" src="../../assets/images/react-img.png" />
      <img *ngSwitchCase="'Angular'" class="logo" src="../../assets/images/angular-img.png" />
      <img *ngSwitchCase="'MongoDB'" class="logo" src="../../assets/images/mongodb-img.png" />
      <img *ngSwitchCase="'NodeJS'" class="logo" src="../../assets/images/node-img.png" />
      <img *ngSwitchCase="'C#'" class="logo" src="../../assets/images/c-sharp-img.png" />
      <img *ngSwitchCase="'Unity'" class="logo" src="../../assets/images/unity-img.jpg" />
    </div>
    </div>
</div>
  </div>
  </div>
  `,
  styles: [`
   .project{
    margin: 1rem 1rem 3rem;
    height: 30%;
    width: 90%;
    position: relative;
  }
  .collapsible-child{
    font-family: Monserrat, serif;
    font-weight: bold;
    font-size: 16px;
    text-align: left;
    & p{
      margin-bottom: 4px;
    }
  }
  .tools{
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }
  .tool{
    margin: 0 1rem;
  }
  .tool-name{
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
  .logo{
    width: 4rem;
    height: 4rem;
  }
  .site-title{
    width: 100%;
    white-space: nowrap;
    font-family: Lobster;
  }
  .web-img{
    width: 20rem;
    height: 15rem;
    border: 2px solid #5a058f8f;
    box-shadow: 4px 3px 8px 0px #ab8133;
    transition-duration: 0.3s;
    &:hover{
       box-shadow: 4px 3px 11px 5px #ab8133;
    }
   }
   .detail-btn{
    z-index: 3;
    background-color: #8c773b;
    color: #ffffff;
    font-family: Monserrat, sans-serif;
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    margin-top: 0.5rem;
    padding: 5px 8px;
    &:hover{
      box-shadow: 0px 0px 11px 5px rgb(255, 255, 255, 0.7);
      color: black;
      transition-duration: 0.4s;
    }
   }
   .collapsible-content{
    position: absolute;
    left: 0;
    top: 0;
   }
   .collapsible-child{
    white-space: nowrap;
    position: absolute;
    top: 260px;
    left: 10px;
   }
  `]
})
export class SiteInfoComponent implements OnInit {

  public display = "none";
  public prevLeft = 0;
  public prevTop = 0;
  public prevScroll = 0;

  public openContent() {
    if(this.display === 'none'){
      this.display='block';
      this.dateRef.nativeElement.style.display = 'none';
      this.purposeRef.nativeElement.style.display = 'none';
      this.featuresRef.nativeElement.style.display = 'none';
      this.toolsRef.nativeElement.style.display = 'none';
      setTimeout( () => {
        this.dateRef.nativeElement.style.display = 'block'; //delay between display: block and movement, since display: block is a prerequisite for transform
      }, 1000);
      setTimeout( () => {
        if(window.innerWidth > 787){
          this.dateRef.nativeElement.style.transform = "translate(375px, -250px)";
        } else {
          this.dateRef.nativeElement.style.transform = "translate(0px, 80px)";
        }
        this.dateRef.nativeElement.style.transitionDuration = '1s';
      }, 1100);
      setTimeout( () => {
        this.purposeRef.nativeElement.style.display = 'block';
      }, 1600);
      setTimeout( () => {
        if(window.innerWidth > 787){
          this.purposeRef.nativeElement.style.transform = "translate(375px, -220px)";
        } else {
          this.purposeRef.nativeElement.style.transform = "translate(0px, 105px)";
        }
        this.purposeRef.nativeElement.style.transitionDuration = "1s";
      }, 1700);
      setTimeout( () => {
        this.featuresRef.nativeElement.style.display = 'block';
      }, 2200);
      setTimeout( () => {
        if(window.innerWidth > 787) {
          this.featuresRef.nativeElement.style.transform = "translate(375px, -190px)";
        } else {
        this.featuresRef.nativeElement.style.transform = "translate(0px, 130px)";
        }
        this.featuresRef.nativeElement.style.transitionDuration = "1s";
      }, 2300);
      setTimeout( () => {
        this.toolsRef.nativeElement.style.display = 'block';
      }, 2800);
      setTimeout( () => {
        if(window.innerWidth > 787) {
          this.toolsRef.nativeElement.style.transform = "translate(375px, -60px)";  
        } else {
        this.toolsRef.nativeElement.style.transform = "translate(0px, 240px)";
        }
        this.toolsRef.nativeElement.style.transitionDuration = "1s";
      }, 2900);
    } else { 
      // this.dateRef.nativeElement.attributeStyleMap.clear();
      // this.purposeRef.nativeElement.attributeStyleMap.clear();
      // this.featuresRef.nativeElement.attributeStyleMap.clear();
      // this.toolsRef.nativeElement.attributeStyleMap.clear();
      this.dateRef.nativeElement.style = {};
      this.purposeRef.nativeElement.style = {};
      this.featuresRef.nativeElement.style = {};
      this.toolsRef.nativeElement.style = {};
      this.display = 'none';
      this.dateRef.nativeElement.style.display = 'none';
      this.purposeRef.nativeElement.style.display = 'none';
      this.featuresRef.nativeElement.style.display = 'none';
      this.toolsRef.nativeElement.style.display = 'none';
    }
  }

  @ViewChild("col", {read: ElementRef}) collapsible: ElementRef; 

  @ViewChild("date", {read: ElementRef}) dateRef: ElementRef;
  @ViewChild("purpose", {read: ElementRef}) purposeRef: ElementRef;
  @ViewChild("feat", {read: ElementRef}) featuresRef: ElementRef;
  @ViewChild("tools", {read: ElementRef}) toolsRef: ElementRef;
  @ViewChild("btn", {read: ElementRef}) btnRef: ElementRef;


  @Input() public highlighted = false;
  @Input() public name = "";
  @Input() public pictureLink = "";
  @Input() public webLink = "";
  @Input() public description = "";
  @Input() public features = [""];
  @Input() public madeWith = [""];
  @Input() public dateFinished = "";

  @Output() focusEvent = new EventEmitter<string>();

  public createFocus(name: string) {
    var top = this.element.nativeElement.getBoundingClientRect().top;
    var left = this.element.nativeElement.getBoundingClientRect().left;
    left += window.scrollX;
    top += window.scrollY;
    this.prevLeft = left;
    this.prevTop = top;
    if(!this.highlighted){
      this.focusEvent.emit(name);
      if(window.innerWidth > 787) {
        this.prevScroll = window.scrollY;
        window.scrollTo(0, 0);
        this.element.nativeElement.style.transform = "translate(" + (-1* left + 50) + "px," +  (-1* top + 350) + "px)";
        this.element.nativeElement.style.transitionDuration = "1s";
      }
    } 
    else {
      if(this.element.nativeElement.style.transform) {
      this.element.nativeElement.style.transform = "translate(" + (this.prevLeft - 50) + "px, " +  (this.prevTop - 350) +   "px)";
      window.scrollTo(0, this.prevScroll);
      }
      setTimeout( () => { //let the parent component know the image has moved back after the 1s transition
        this.focusEvent.emit(name);
        this.element.nativeElement.attributeStyleMap.clear();
        this.element.nativeElement.style.display = 'block'; 
        this.collapsible.nativeElement.style.display = 'none';
      }, 1000);
    }
  }
  constructor(private element: ElementRef, btnRef: ElementRef) {
   }

  ngOnInit(): void {
    this.element.nativeElement.style.display = 'block';
  }
  ngAfterViewInit() {
  }

}
