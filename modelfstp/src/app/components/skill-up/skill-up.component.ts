import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-up',
  templateUrl: './skill-up.component.html',
  styleUrls: ['./skill-up.component.css']
})
export class SkillUpComponent implements OnInit {

  logoUrl = '../../assets/img/team.jpg';
  logoUrl1 = '../../assets/img/SkillsUp (2).png';
  greeting1 = "We believe\n Team work\n  Continuous learning  ";


  animatedGreeting = "";

  ngOnInit(): void {
    this.animateGreeting();
  }

  animateGreeting() {
    if (this.animatedGreeting.length < this.greeting1.length) {
      this.animatedGreeting += this.greeting1.charAt(this.animatedGreeting.length);

      setTimeout(() => this.animateGreeting(), 100);
    }
  }

}
