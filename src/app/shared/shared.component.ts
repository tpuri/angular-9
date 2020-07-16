import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  @Input() isFormValid;
  @Input() isSubmitButtonClicked;
  @Input() hideMe;
  @Output() resetForm = new EventEmitter();
  @Output() autoFill = new EventEmitter();

  ngOnInit(): void {
  }

  resetLoginForm() {
    this.resetForm.emit(null);
  }

  patchFormValues() {
    this.autoFill.emit();
  }

}
