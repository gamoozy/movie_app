import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { } // Added Router for navigation

  ngOnInit(): void {
    this.userLoggedIn = localStorage.getItem('user') !== null;
  }

  private apiUrl = 'https://docker-backend88-f9aua7dzfpg2h6cf.uaenorth-01.azurewebsites.net/logout';

  logout(): void {

    this.http.get<any>(this.apiUrl,{ withCredentials: true , responseType:'text' as 'json'}).subscribe(
      response => {
        console.log('Logged out:', response);
        localStorage.removeItem('user');
        this.router.navigate(['/']).then(() => {
          window.location.reload(); 
        });
      },
      error => {
        console.error('Error logging out:', error);
        localStorage.removeItem('user'); 
        console.log("error")
        this.router.navigate(['/home']); 
      }
    );

  }

}
