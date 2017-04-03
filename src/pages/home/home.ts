import { Component, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit{
	public player:any;
	public volume:number = 100;
	public playning:boolean = false;
	constructor(public navCtrl: NavController,public splashScreen:SplashScreen) {
		
	}

	ngAfterViewInit(){
		setTimeout(()=>{
			this.splashScreen.hide();
		},500);
	}

	updateVolume(){
		if(this.player != undefined)
			this.player.volume = this.volume / 100;
	}

  	play(){
  		if(this.player == undefined){
	  		this.player = new Audio('http://fmvida.radio.rosario3.com:8000/fmvida.mp3');
	  		this.player.volume = this.volume / 100;
	  		this.player.onplay = ()=>{
	  			console.log('play');
	  			this.playning = true;
	  		}
	  		this.player.onpause = ()=>{
	  			console.log('pause');
	  			this.playning = false;
	  		}
  		}
	  	if(this.player.paused)
	  		this.player.play();
	  	else
	  		this.player.pause();
  	}

}
