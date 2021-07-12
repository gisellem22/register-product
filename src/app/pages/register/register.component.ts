import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Constants } from 'src/app/utils/constants';
import { Address, Product } from 'src/app/models/product.model';

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
  originAddress: Address;
  destinationAddress: Address;

  constructor(
    public formBuilder: FormBuilder,
    private productsService: ProductsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.timer = 2000;
    this.isLoading = false;
    this.buildForm();
  }

  public AddressChange(address: any, type: string) {
    //setting address from API to local variable
    const formattedaddress = {
      address: address.formatted_address,
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
    };
    console.log('formattedaddress--->', formattedaddress);

    switch (type) {
      case 'O':
        this.form.controls.origin.setValue(formattedaddress.address);
        this.originAddress = formattedaddress;
        break;
      case 'D':
        this.form.controls.destination.setValue(formattedaddress.address);
        this.destinationAddress = formattedaddress;
        break;
    }
    console.log('lat--->', address.geometry.location.lat());
    console.log('lon--->', address.geometry.location.lng());
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
      destination: ['', [Validators.required]],
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
    const product: Product = {
      product: this.form.controls.product.value,
      date: this.datePipe.transform(
        this.form.controls.date.value,
        Constants.formatDate
      ),
      origin: this.originAddress,
      destination: this.destinationAddress,
    };
    this.productsService.save(product).subscribe(
      (response) => {
        this.isLoading = false;
        // this.originAddress = null;
        // this.destinationAddress = null;
        console.log(response);
        this.form.reset();
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
