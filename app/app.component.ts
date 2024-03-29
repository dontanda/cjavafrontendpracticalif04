import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsuperiorComponent } from './csuperior/csuperior.component';
import { CinferiorComponent } from './cinferior/cinferior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CsuperiorComponent,CinferiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicalif04';
}
