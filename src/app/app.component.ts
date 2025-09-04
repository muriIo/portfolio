import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div style="display: flex; align-items: center; justify-content: center;" i18n>
      Under construction
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
