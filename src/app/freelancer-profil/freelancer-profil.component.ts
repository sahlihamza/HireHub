import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-freelancer-profil',
  templateUrl: './freelancer-profil.component.html',
  styleUrls: ['./freelancer-profil.component.css']
})

export class FreelancerProfilComponent {
  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }
}

