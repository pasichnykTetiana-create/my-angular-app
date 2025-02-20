import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-material-card',
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
  ],
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialCardComponent {
  readonly hideRequiredControl = new FormControl(true);
  readonly floatLabelControl = new FormControl('always' as FloatLabelType);
  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  protected readonly hideRequired = toSignal(
    this.hideRequiredControl.valueChanges
  );
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map((v) => v || 'always')),
    { initialValue: 'always' }
  );

  profileForm = new FormGroup({
    vorName: new FormControl(''),
    nachName: new FormControl(''),
    stadt: new FormControl(''),
    zeit: new FormControl(''),
  });

  submitInput: any = {};
  isSambit:boolean = true;

  onSubmit() {
    const formData = this.profileForm.value;

    if (formData.zeit) {
      const dateObj = new Date(formData.zeit);
      formData.zeit = dateObj.toLocaleDateString('de-Uk');
    }

    this.submitInput = formData;
    this.isSambit = false;
    console.log(this.submitInput);
  }
}
