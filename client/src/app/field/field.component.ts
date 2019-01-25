import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @ViewChild('input') input;
  fieldMask: String

  @Input() props: any = {}
  _fieldText: String
  set fieldText(newValue: String) {
    const cb = this.props.onChange || (() => { });
    const fmt = this.props.format || (x => x);
    if (this.props.type === 'number' && !newValue) {
      this.input.nativeElement.value = '';
    }
    this.props.value = newValue;
    this.props.valid = this.props.type === 'number' ?
      (!isNaN(parseInt(String(newValue))) && this.props.min <= Number(newValue) && this.props.max >= Number(newValue)) :
      (this.props.regex ? !!this.props.regex.exec(newValue) : true);
    this.props.valueMasked = fmt(newValue, this.props.valid);
    this.fieldMask = newValue ? this.props.valueMasked : '';
    cb({ id: this.props.id, newValue });
    this._fieldText = newValue;
  }

  get fieldText(): String {
    return this._fieldText;
  }

  constructor() { }

  ngOnInit() {
    this.fieldText = this.props.value || '';
  }
}
