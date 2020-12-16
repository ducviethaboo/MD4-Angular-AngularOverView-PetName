import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent {
  petName = 'puppie';
  petImage = null;
  constructor() {}

  updateName(name: any) {
    this.petName = name;
  }

  updateImage(image:any) {
    this.petImage = image;
  }
}
