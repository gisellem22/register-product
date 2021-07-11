import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss'],
})
export class ModalMapComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  closeModal(value: string): void {
    this.activeModal.close(value);
  }
}
