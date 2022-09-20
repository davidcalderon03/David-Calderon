import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class='contact-section'>
    <div class='wrapper'>
      <h1 class="contact-title">Contact Me!</h1>
      <div class="main-container">
        <div class="flex-container">
          <img src="../../assets/images/outlook-img.png" alt="">
          <h2>Email</h2>
          <a href="mailto:davidcalderon03@hotmail.com" target="_blank">
            <h5>davidcalderon03@hotmail.com</h5>
          </a>
        </div>  
        <div class="flex-container">
          <img src="../../assets/images/github-img.png" alt="">
          <h2>Github</h2>
          <a href="https://github.com/davidcalderon03" target="_blank">
            <h5>github.com/davidcalderon03</h5>
          </a>
        </div>
        <div class="flex-container">
          <img src="../../assets/images/linkedin-img.png" alt="">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/davidcalderon03" target="_blank">
            <h5>www.linkedin.com/in/davidcalderon03</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .contact-section{
    height: 100%;
    background: rgb(47,47,47);
    background: linear-gradient(340deg, rgba(47,47,47,0.5917717428768383) 0%, rgba(121,0,0,0.8) 50%);
    color: rgb(255, 255, 255, 0.8);
  }
  .wrapper{
    max-width: 1280px;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 10px 0;
  }
  img{
    height: 100px;
    width: 100px;
    margin-bottom: 2rem;
  }
  .contact-title{
    font-family: Lobster, serif;
    margin-bottom: 4rem;
  }
  .main-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: center;
  }
  .flex-container{
    padding-bottom: 6rem;
    & h2{
      font-family: Lobster, serif;
      margin-bottom: 1rem;
    }
    & a{
      font-family: Montserrat, serif;
      text-decoration: none;
      color: rgb(255, 255, 255, 0.8);
    }
  }
  h5:hover{
    transition-duration: 0.2s; 
    color: #4a6ea8;
  }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
