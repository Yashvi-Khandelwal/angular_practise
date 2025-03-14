import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  
  @Input() username: string = 'yashvi_k';
  followers: number = 100;

  constructor() {
    console.log('Constructor: Profile page initialized 🚀');
  }

  ngOnInit(): void {
    console.log(`ngOnInit: Welcome ${this.username} to your profile!`);
    console.log('✅ Followers Count:', this.followers);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges: Profile details updated!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Checking for any changes...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Profile page fully loaded ✅');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Thanks for visiting! 🛑');
  }

  follow() {
    this.followers++;
    console.log('You followed! Followers count:', this.followers);
  }

  unfollow() {
    this.followers--;
    console.log('You unfollowed! Followers count:', this.followers);
  }
}
