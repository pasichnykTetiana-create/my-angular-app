import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Output() submit = new EventEmitter<void>();
  @Input() disabled: boolean = false;

  onClick() {
    if (!this.disabled) {
      this.submit.emit();
    }
  }
}
