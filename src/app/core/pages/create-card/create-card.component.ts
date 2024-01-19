import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CustomValidators } from 'src/app/shared/validators/date-validation.validator'


const urlRegEx = '^(https?://)?([\\w./]+)\\.(\\w){2,6}/?'
// '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      image: new FormControl('', [Validators.required, Validators.pattern(urlRegEx)]),
      video: new FormControl('', [Validators.required, Validators.pattern(urlRegEx)]),
      date: new FormControl('', [Validators.required, CustomValidators.dateValidation()]),
    })
  }

  onSubmit() {
    console.log('click on submit')
  }

  get titleValid() {
    return {
      required: this.form.get('title')?.errors?.['required'],
      minLength: this.form.get('title')?.errors?.['minlength'],
      maxLength: this.form.get('title')?.errors?.['maxlength'],
    }
  }

  get descriptionValid() {
    return {
      maxLength: this.form.get('description')?.errors?.['maxlength']
    }
  }

  get imageValid() {
    return {
      required: this.form.get('image')?.errors?.['required'],
      pattern: this.form.get('image')?.errors?.['pattern']
    }
  }

  get videoValid() {
    return {
      required: this.form.get('video')?.errors?.['required'],
      pattern: this.form.get('video')?.errors?.['pattern']
    }
  }

  get dateValid() {
    return {
      required: this.form.get('date')?.errors?.['required'],
      futureDate: this.form.get('date')?.errors?.['isFutureDate']
    }
  }
}
