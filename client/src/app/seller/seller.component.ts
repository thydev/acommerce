import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  // sellerForm: FormGroup;
  sellerForm = new FormGroup ({
    // 'name': new FormControl(this.hero.name, [
    //   Validators.required,
    //   Validators.minLength(4),
    //   forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    // ]),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  products = [
    {name: 'Mouse', price: 232, keyword: 'Hardware, computer, accessory'},
    {name: 'Keyboard', price: 23, keyword: 'Hardware, computer, accessory, what more'},
  ]

  results$: Observable<any>;
  results: any;

  constructor(
    private fb: FormBuilder,
    private _sellerService: SellerService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(event) {
    console.log(event);
    console.log(this.sellerForm);
    console.log(this.sellerForm.value)
    this.createSeller(this.sellerForm.value);
  }

  createForm() {
    this.sellerForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: ''
    });
  }

  filterProduct(keyword: string) {

    this.results = this.products.filter(x => x.name === keyword);
    const squareOdd2 = of(this.products);
    const pfilter = pipe(
      filter(x => x['price'] > 50),
      map(n => n)
    );
    this.results$ = pfilter(of(this.products));

    console.log(keyword);
    // Subscribe to get values
    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );
    console.log(squareOdd);
    console.log(this.results$);
    squareOdd.subscribe(x => console.log(x));
    // squareOdd2.subscribe(x => console.log(x));
    this.results$.subscribe(x => {
      console.log(x);
    })
  }

  getSellers() {
    this._sellerService.getAll().subscribe(data => {
      console.log(data);
    });
  }

  getProducts() {
    this._sellerService.getSellerProducts().subscribe(data => {
      console.log(data);
    })
  }
  createSeller(item: any) {
    this._sellerService.createSeller(item).subscribe(data => {
      console.log(data);
    });
  }
}
