import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() userProfile: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');
      // Aqui você pode fazer a chamada à API do GitHub para buscar o perfil do usuário com o username fornecido
      // e atribuir o resultado à variável userProfile
    });
  }

  openWebsite() {
    if (this.userProfile.blog) {
      window.open(this.userProfile.blog, '_blank');
    }
  }

  openTwitter() {
    if (this.userProfile.twitter_username) {
      window.open(`https://twitter.com/${this.userProfile.twitter_username}`, '_blank');
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
