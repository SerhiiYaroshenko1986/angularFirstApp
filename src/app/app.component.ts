import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-angular-app';
  isInfo = true;
  isContact = false;
  select(e): void {
    if (e.currentTarget.id === 'info') {
      this.isContact = false;
      this.isInfo = true;
    }
    if (e.currentTarget.id === 'contact') {
      this.isContact = true;
      this.isInfo = false;
    }
  }
}
