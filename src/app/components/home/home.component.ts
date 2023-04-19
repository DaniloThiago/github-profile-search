import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username!: string;
  userProfile: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {}

  searchProfile() {
    this.githubService.searchProfile(this.username).subscribe(
      (response: any) => {
        this.userProfile = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
