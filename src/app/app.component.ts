import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';


@Component({
  imports: [CommonModule, RouterOutlet, LlistaElementsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public appTitle = 'Ars Magna';
  public studentName = 'Martí Úbeda';
  public projectStatus = 'Projecte base llest';
  public currentVersion = '1.0.0-ra1';
}
