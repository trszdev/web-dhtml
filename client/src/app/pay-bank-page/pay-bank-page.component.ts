import { Component, OnInit } from '@angular/core';
import { padRight, splitGroups } from '../mask';
import setupValidation from '../validation';


@Component({
  selector: 'app-pay-bank-page',
  templateUrl: './pay-bank-page.component.html',
  styleUrls: ['./pay-bank-page.component.css']
})
export class PayBankPageComponent implements OnInit {
  props = {
    from: {
      regex: /^(\d{10}|\d{12})$/,
      placeholder: 'ИНН или название плательщика',
      errorHint: 'ИНН - 10 или 12 цифр',
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
      placeholder: 'от 1000 до 75000₽',
      errorHint: 'Введите число от 1000 до 75000',
      format: x => `${x}₽`,
      min: 1000,
      max: 75000,
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
      await fetch('/api/pay-bank', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(toBeSent),
      });
      alert('Sent');
      const link = document.createElement('a');
      link.href = 'data:application/json,' + encodeURIComponent(JSON.stringify(toBeSent, null, 2));
      link.download = 'paybank.json';
      link.click();
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
