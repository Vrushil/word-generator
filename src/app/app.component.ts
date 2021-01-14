import { Component } from '@angular/core';
import ArrayWords from "../utils/words"
import CountryNames from "../utils/countries"
import words from '../utils/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words='';
limit=10;
country='';
countryLimit=5;
clength=0;

generateSlideChange(newLimit:number)
{
this.limit= newLimit;


}


generateWords()
{
  this.words=ArrayWords.slice(0,this.limit).join(' ');
 // this.words= ArrayWords.slice(0,Math.random()*ArrayWords.length).join(' ')
}

generateCountries()
{
  //this.clength=CountryNames.slice(0,Math.random()* CountryNames.length).length;
  
  this.country=CountryNames.slice(0,Math.random()* CountryNames.length).join(' ');
  this.clength=this.country.split(' ').length;
}
}
