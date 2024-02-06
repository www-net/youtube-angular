import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core'

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24
const SIX_MONTH = Math.floor(365 / 2)
const ONE_MONTH = 30

function getColor(numberOfDays: number): string {
  let color: string

  switch (true) {
    case numberOfDays < 7:
      color = '#3f51b5'
      break
    case numberOfDays >= 7 && numberOfDays < ONE_MONTH:
      color = '#27AE60'
      break
    case numberOfDays >= ONE_MONTH && numberOfDays < SIX_MONTH:
      color = '#F2C94C'
      break
    default:
      color = '#EB5757'
  }

  return color
}

@Directive({
  selector: '[appBorderBottomColor]',
})
export class BorderBottomColorDirective implements AfterViewInit {
  @Input('appBorderBottomColor') date!: string

  constructor(private elRef: ElementRef, private renderer2: Renderer2) {
  }

  ngAfterViewInit(): void {
    const receiveDate: Date = new Date(this.date)
    const now: Date = new Date()
    const diffMilliseconds: number = now.getTime() - receiveDate.getTime()
    const numberOfDays = Math.floor(diffMilliseconds / MILLISECONDS_IN_DAY)
    this.renderer2.setStyle(this.elRef.nativeElement, 'border-bottom', '10px solid transparent')
    this.renderer2.setStyle(this.elRef.nativeElement, 'border-color', getColor(numberOfDays))
  }
}
