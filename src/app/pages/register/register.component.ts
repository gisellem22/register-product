import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  timer: number;
  isLoading: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private productsService: ProductsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.timer = 2000;
    this.isLoading = false;
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value))
    // );
    this.buildForm();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  buildForm() {
    /* eslint-disable */
    this.form = this.formBuilder.group({
      product: ['', [Validators.required]],
      date: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destiny: ['', [Validators.required]],
    });
    /* eslint-enable */
  }

  onSubmit() {
    console.log(this.form.value);

    this.form.valid ? this.saveProduct() : this.invalidForm();
  }

  invalidForm() {
    Swal.fire({
      title: 'Fields Required',
      icon: 'error',
      showConfirmButton: false,
      timer: this.timer,
      heightAuto: false,
    });
  }

  saveProduct() {
    this.isLoading = true;
    const product = {
      product: this.form.controls.product.value,
      date: this.datePipe.transform(
        this.form.controls.date.value,
        Constants.formatDate
      ),
      origin: this.form.controls.origin.value,
      destiny: this.form.controls.destiny.value,
    };
    this.productsService.save(product).subscribe(
      (response) => {
        this.isLoading = false;
        console.log(response);
        Swal.fire({
          title: 'Registered',
          icon: 'success',
          showConfirmButton: false,
          timer: this.timer,
          heightAuto: false,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
