import { Component, OnInit } from '@angular/core';
import { pad, padRight, splitGroups } from '../mask';
import setupValidation from '../validation';


@Component({
  selector: 'app-pay-card-page',
  templateUrl: './pay-card-page.component.html',
  styleUrls: ['./pay-card-page.component.css']
})
export class PayCardPageComponent implements OnInit {
  props = {
    card: {
      type: 'number',
      format: x => splitGroups(padRight(x, 16), [3, 7, 11]).join(' '),
      placeholder: 'Номер карты',
      errorHint: 'Введите 16 цифр',
      min: 0,
      max: 9999_9999_9999_9999,
    },
    mmyy: {
      regex: /^(1[012]|0[1-9])(1[789]|2[0-9]|3[0-5])$/,
      placeholder: 'ММ/ГГ',
      errorHint: 'Введите 4 цифры',
      format: (x, valid) => valid ?
        splitGroups(x, [1]).join('/') : '??/??',
    },
    cvc: {
      type: 'number',
      format: x => pad(x, 3),
      placeholder: 'CVC',
      errorHint: 'Введите 3 цифры',
      min: 0,
      max: 999,
    },
    amount: {
      type: 'number',
      placeholder: 'от 1000 до 75000₽',
      errorHint: 'Введите число от 1000 до 75000',
      format: x => `${x}₽`,
      min: 1000,
      max: 75000,
    },
    comment: {
      placeholder: 'До 150 символов',
    },
    email: {
      regex: /@/,
      placeholder: 'Для квитанций об оплате',
      errorHint: 'Введите почту в формате example@mail.ru',
    },
  }

  async onSubmit() {
    const toBeSent = {};
    for (let [key, value] of Object.entries(this.props)) {
      value['color'] = value['valid'] ? 'gray' : 'red-all';
      value['hint'] = value['valid'] ? '' : value['errorHint'];
      toBeSent[key] = value['valueMasked'];
    }
    if (this.isFormValid) {
      alert(`Form is valid, request can be sent: ${JSON.stringify(toBeSent, null, 2)}`);
      await fetch('/api/pay-card', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toBeSent),
      });
      alert('Sent');
    }
  }

  constructor() { }

  getInvalids = () => ({})
  get isFormValid() {
    return Object.keys(this.getInvalids()).length === 0;
  }

  ngOnInit() {
    this.getInvalids = setupValidation(this.props);
  }
}
