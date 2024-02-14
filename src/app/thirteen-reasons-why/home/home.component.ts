import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    // anime.timeline().add(
    //   {
        
    //     duration: 1000,
    //     delay: 1000,
    //     endDelay: 2200
    //   }
    // )

    var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});
var heading = document.getElementById('heading');
var typewriter2 = new Typewriter(heading, {
  loop: false,
  delay: 75,
});
typewriter2
  .pauseFor(2500)
  .typeString(`<span style="color:#ff3333; font-size: 32px; font-weight: 900;">13 Reasons Why!</span>`)
  .callFunction(() => {
    typewriter.start()
    typewriter2.stop()
  })
  .start()

typewriter
  .pauseFor(2500)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>You're Beautiful:</b> Let's start with the obvious. Your beauty is not just skin deep; it radiates from within.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Sense of Humor:</b> Your sense of humor is infectious. You have a knack for turning even the gloomiest day into a barrel of laughs.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>Crush:</b> You've been the highlight of my thoughts. You've made me believe in the power of long-lasting admiration.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Engaging Conversations:</b> Talking to you is effortless. Our conversations flow like a river, and I find myself getting lost in them.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>Chemistry:</b> There's something special about the connection we share. It's like our souls recognize each other, even before our minds do.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Supportive:</b> I've noticed how supportive you are of your friends and loved ones. I believe that same kindness would extend to a relationship.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>Adventure:</b> Life with you promises to be an adventure. Whether it's trying new things or exploring new places, I know we'd make incredible memories together.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Shared Interests:</b> We have so much in common. It's like we're two pieces of the same puzzle.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>Respect:</b> I respect you for who you are and what you stand for. Your independence and strength are incredibly admirable.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Growth:</b> I believe being in a relationship with you would inspire personal growth and self-discovery for both of us.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color:  #E0FFFF; font-weight:600;"><b>Unconditional Care:</b> My feelings for you are genuine, and I would always prioritize your happiness and well-being.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #dcd427; font-weight:600;"><b>Potential:</b> Finally, I see a future with you. A future filled with love, laughter, and endless possibilities.</span>`)
  .pauseFor(2500)
  .deleteAll(10)
  .typeString(`<span style="color: #22af4b; font-size:28px; font-weight:700;"><b>Heyyy!!! You still here? Maybe there is a reason. Lets find out together.</b></span>`)
  }

}
