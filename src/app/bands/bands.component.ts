import { Component, OnInit } from '@angular/core';
import { Bands } from '../bands.model';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent  {
  bands: Bands[] = [
    new Bands("SmoochKnob", "A grimy gross, down and dirty kind of punk, but just overall terrible band. Based in Portland, OR for their whole entire lifes because they suck.","Donny, Jim, Ed, Greg","Donny","Jim","Ed","Jim"),
    new Bands("Supersoaked", "A fuzzed out pop band masquerading as punk and also some other dumb generes. If you're not in a basement with a bunch of cheap beer you probably shouldn't be listening to our music.","Kevin, Joe, Cameron, Ham","Kevin","Cam","Joe","Ham")
  ]

}
