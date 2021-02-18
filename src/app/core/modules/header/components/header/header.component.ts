import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'EW-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  logged: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logged = localStorage.getItem('User') == null;
  }

  ngOnChanges() {
    this.logged = localStorage.getItem('User') == null;
  }

  onSignOut() {
    localStorage.clear();
    this.router.navigate(['/register/sign-in']);
    this.ngOnInit();
  }
}
