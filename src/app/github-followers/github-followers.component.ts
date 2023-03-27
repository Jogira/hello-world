import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap((combined: any) => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.service.getAll()
      // .subscribe((followers: any) => this.followers = followers);
    }))
    .subscribe((followers: any) => this.followers = followers)
    



    // obs.subscribe();

    // this.route.paramMap.subscribe(params => {

    // });
    // // this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe(params => {

    // });
    // let page = this.route.snapshot.queryParamMap.get('page');


  }
}
