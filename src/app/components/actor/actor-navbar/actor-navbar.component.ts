import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-actor-navbar',
  imports: [],
  templateUrl: './actor-navbar.component.html',
  styleUrl: './actor-navbar.component.scss'
})
export class ActorNavbarComponent {

  @ViewChild('modalForm') modalButton!: ElementRef;

  showModal() {
    if (this.modalButton) {
      this.modalButton.nativeElement.style.display = 'block';
    }
  }

  closeModal() {
    if (this.modalButton) {
      this.modalButton.nativeElement.style.display = 'none';
    }
  }
  
}
