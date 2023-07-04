import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red'
  private _errors?: ValidationErrors | null | undefined

  @Input() set color( value: string ){
    this._color = value
    this.setStyle()
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value
    // console.log({ value })
    this.setErrorMessage()
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    // console.info('Constructor de la directiva')
    this.htmlElement = el
    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo'
  }

  ngOnInit(): void {
      // console.info('On init en la directiva')
      this.setStyle()
  }

  setStyle() {
    if (!this.htmlElement) return
    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrorMessage() {
    if (!this.htmlElement) return
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = ''
      return
    }

    const errors = Object.keys(this._errors)

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido'
      return
    }

    if (errors.includes('minlength')) {
      const errorMinLength = this._errors['minlength']
      this.htmlElement.nativeElement.innerText = `Este campo requiere ${ errorMinLength.requiredLength } caracteres, te faltan ${  errorMinLength.requiredLength - errorMinLength.actualLength }`
      return
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Este campo debe ser un email'
      return
    }
  }

}
