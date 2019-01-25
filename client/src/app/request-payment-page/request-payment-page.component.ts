import { Component, OnInit } from '@angular/core';
import { padRight, splitGroups } from '../mask';
import setupValidation from '../validation';


@Component({
  selector: 'app-request-payment-page',
  templateUrl: './request-payment-page.component.html',
  styleUrls: ['./request-payment-page.component.css']
})
export class RequestPaymentPageComponent implements OnInit {
  props = {
    from: {
      regex: /./,
      placeholder: 'ИНН или название плательщика',
      errorHint: 'Это поле нужно обязательно заполнить',
    },
    bik: {
      type: 'number',
      format: x => splitGroups(padRight(x, 9), [2, 5]).join('-'),
      placeholder: '',
      errorHint: 'Введите 9 цифр',
      min: 0,
      max: 999_999_999,
    },
    account: {
      regex: /./,
      placeholder: '',
      errorHint: 'Это поле нужно обязательно заполнить',
    },
    nds: {
      regex: /./,
      placeholder: '',
      color: 'red',
      value: 'НДС 18%',
      readonly: true,
      errorHint: 'Это поле нужно обязательно заполнить',
    },
    nds2: {
      regex: /./,
      placeholder: '',
      color: 'yellow',
      value: 'НДС 10%',
      readonly: true,
      errorHint: 'Это поле нужно обязательно заполнить',
    },
    nds3: {
      regex: /./,
      placeholder: '',
      color: 'green',
      value: 'Без НДС',
      readonly: true,
      errorHint: 'Это поле нужно обязательно заполнить',
    },
    amount: {
      type: 'number',
      placeholder: '',
      errorHint: 'Это поле нужно обязательно заполнить',
      format: x => `${x}₽`,
      min: 1,
      max: 10000000000,
    },
    email: {
      regex: /@/,
      placeholder: 'Для уведомлений об оплате',
      errorHint: 'Введите почту в формате example@mail.ru',
    },
    phone: {
      regex: /^(.*(\+7|8).*)(.*\d.*){10}$/,
      placeholder: 'например +7 999 9999 999',
      format: (x, valid) => {
        if (!valid) return x;
        const numbers = padRight(x.replace(/[^\d]/g, ''), 11, '?').split('');
        const p1 = numbers[0] == '7' ? '+7' : '8';
        const p2 = numbers[1] + numbers[2] + numbers[3];
        const p3 = numbers[4] + numbers[5] + numbers[6] + numbers[7];
        const p4 = numbers[8] + numbers[9] + numbers[10];
        return [p1, p2, p3, p4].join(' ');
      },
      errorHint: 'Введите номер телефона в формате +7 999 9999 999',
    },
  }
  nds = 2

  async onSubmit() {
    const toBeSent = {};
    for (let [key, value] of Object.entries(this.props)) {
      if (key.includes('nds')) continue;
      value['color'] = value['valid'] ? 'gray' : 'red-all';
      value['hint'] = value['valid'] ? '' : value['errorHint'];
      toBeSent[key] = value['valueMasked'];
    }
    toBeSent['nds'] = this.nds;
    if (this.isFormValid) {
      alert(`Form is valid, request can be sent: ${JSON.stringify(toBeSent, null, 2)}`);
      await fetch('/api/request-payment', {
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
