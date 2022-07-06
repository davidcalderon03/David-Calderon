import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="home-section">
    <div class="wrapper">
      <div class="main-content">
        <div class="details">
          <h1 class="name">Hi, I'm David, A...</h1>
          <h3 class="desc">Computer Science Student and Software Developer</h3>
          <p class="summary">As a CS student at the Georgia Institute of Technology, I specialize in 
            web development and a variety of other CS fields as can be seen with my projects. Feel free to explore!
          </p>
        </div>
        <div class="img-div">
          <img src="../../assets/images/me-img.jpg" alt="Image of Me">
        </div>
      </div>
    </div>
  </div>


  `,
  styles: [`
    .home-section{
      height: 100%;
      background: rgb(255,255,255);
      background: linear-gradient(340deg, rgba(255,255,255,0.5917717428768383) 0%, rgba(201,194,194,1) 60%);
    }
    .wrapper{
      max-width: 1280px;
      text-align: center;
      margin: 0 auto;
      padding: 2rem 10px 4rem;;
      /* border: 3px dotted red; */
    }
    .main-content{
      margin: 1rem 10rem 0;
      /* border: 3px dotted green; */
      display: grid;
      grid-template-columns: repeat(auto-fill, 400px);
      justify-content: center;
    }
    .details{
      font-family: Lobster;
      color: rgb(0, 0, 0, 0.7);
      padding: 1rem;
    }
    .img-div{
      padding: 1rem;
    }
    .name{
      
    }
    .desc{
      margin-bottom: 2rem;
    }
    .summary{
      font-family: Montserrat, serif;
      font-weight: bold;
    }
    img{
      display: flex;
      width: 300px;
      height: 300px;
      margin: 0 auto;
      border-radius: 50%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
