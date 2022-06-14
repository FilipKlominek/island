import { Component } from '@angular/core';
import {Island} from "./services/generator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly island: Island = new Island();

  get getIsland(): number[][] {
    return this.island.get(32, 32);
  }


}
