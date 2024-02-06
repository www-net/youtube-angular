import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DetailedInformationComponent } from './detailed-information.component'

describe('DetailedInformationComponent', () => {
  let component: DetailedInformationComponent
  let fixture: ComponentFixture<DetailedInformationComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedInformationComponent]
    })
    fixture = TestBed.createComponent(DetailedInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
