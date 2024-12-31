import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class RepeatContext {
  constructor(
    public index = 0,
    public nbIteration = 0,
    public isOdd = false,
    public isEven = true,
    public isFirst = true,
    public isLast = false
  ) {
    if (this.index != 0) {
      this.isFirst = false;
    }
    if (this.index == this.nbIteration - 1) {
      this.isLast = true;
    }
    this.isOdd = !(this.index % 2);
    this.isEven = !!(this.index % 2);
  }
}

@Directive({
  selector: '[libRepeat]',
})
export class RepeatDirective implements OnChanges {
  @Input() appRepeat = 0;
  @Input() maxVal = 10;
  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    const borne = this.appRepeat <= this.maxVal ? this.appRepeat : this.maxVal;
    for (let i = 0; i < borne; i++) {
      const repeatContext = new RepeatContext(i, borne);
      this.vcr.createEmbeddedView(this.template, repeatContext);
    }
  }
}
