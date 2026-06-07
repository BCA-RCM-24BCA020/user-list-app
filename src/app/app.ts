import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class App {
  users: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private user: User) {}

  ngOnInit() {
    this.user.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
