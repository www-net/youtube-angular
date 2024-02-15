import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { ICustomCard, postCustomCard } from 'src/app/redux/actions/customCard.actions'
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
  @ViewChild('formDirective') formDirective: ElementRef

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      imageUrl: new FormControl('', [Validators.required, Validators.pattern(urlRegEx)]),
      videoUrl: new FormControl('', [Validators.required, Validators.pattern(urlRegEx)]),
      publishedAt: new FormControl('', [Validators.required, CustomValidators.dateValidation()]),
    })
  }

  get title() {
    return this.form.get('title')
  }

  get titleValid() {
    return {
      required: this.title?.errors?.['required'],
      minLength: this.title?.errors?.['minlength'],
      maxLength: this.title?.errors?.['maxlength'],
    }
  }

  get description() {
    return this.form.get('description')
  }

  get descriptionValid() {
    return {
      maxLength: this.description?.errors?.['maxlength']
    }
  }

  get imageUrl() {
    return this.form.get('imageUrl')
  }

  get imageValid() {
    return {
      required: this.imageUrl?.errors?.['required'],
      pattern: this.imageUrl?.errors?.['pattern']
    }
  }

  get videoUrl() {
    return this.form.get('videoUrl')
  }

  get videoValid() {
    return {
      required: this.videoUrl?.errors?.['required'],
      pattern: this.videoUrl?.errors?.['pattern']
    }
  }

  get publishedAt() {
    return this.form.get('publishedAt')
  }

  get dateValid() {
    return {
      required: this.publishedAt?.errors?.['required'],
      futureDate: this.publishedAt?.errors?.['isFutureDate']
    }
  }

  onSubmit() {
    const { title, description, imageUrl, publishedAt } = <ICustomCard>this.form.value
    const id: string = Math.random().toString()
    const card = {
      id,
      snippet: {
        title,
        description,
        publishedAt,
        thumbnails: {
          medium: {
            url: imageUrl,
          },
          high: {
            url: imageUrl,
          },
        },
      },
      statistics: {
        viewCount: '555',
        likeCount: '444',
        dislikeCount: '111',
        commentCount: '50',
      },
    }
    this.store.dispatch(postCustomCard({ card }))
    this.form.reset()
  }
}
