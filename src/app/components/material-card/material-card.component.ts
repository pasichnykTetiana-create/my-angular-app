import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {map} from 'rxjs/operators';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatDividerModule} from '@angular/material/divider';
import {SubmitButtonComponent} from '../submit-button/submit-button.component';
import {DatePipe} from '@angular/common';

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
    SubmitButtonComponent,
    DatePipe,
  ],
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class MaterialCardComponent {
  readonly hideRequiredControl = new FormControl(true);
  readonly floatLabelControl = new FormControl('always' as FloatLabelType);

  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  profileForm = new FormGroup({
    vorName: new FormControl('', Validators.required),
    nachName: new FormControl('', Validators.required),
    stadt: new FormControl('', Validators.required),
    zeit: new FormControl('', Validators.required),
    consentGiven: new FormControl('yes', Validators.required),
  });

  submitInput: any = {};
  isSambit: boolean = true;
  protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map((v) => v || 'always')),
    {initialValue: 'always'}
  );

  constructor(private datePipe: DatePipe) {
  }

  onSubmit() {
    const formData = this.profileForm.value;
    this.submitInput = {...formData};
    this.isSambit = false;

    console.log(this.submitInput);
  }
}
