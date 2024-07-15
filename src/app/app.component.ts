import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: '<router-outlet></router-outlet><br><h1 i18n="@@testingTranslate">Here is a text in english</h1><h2>{{ 1000 | currency:"BRL" }}</h2>'
})
export class AppComponent { }
