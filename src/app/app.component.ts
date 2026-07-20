import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from "./components/hero/hero.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { BlueprintsComponent } from "./components/blueprints/blueprints.component";
import { CuratorComponent } from "./components/curator/curator.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    CollectionComponent,
    BlueprintsComponent,
    CuratorComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alexs-atelier';
}
