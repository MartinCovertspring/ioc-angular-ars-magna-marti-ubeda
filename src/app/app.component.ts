import { Component, signal } from '@angular/core';


@Component({
  imports: [],
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
