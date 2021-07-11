import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';

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

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.timer = 2000;
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
    Swal.fire({
      title: 'Registered',
      icon: 'success',
      showConfirmButton: false,
      timer: this.timer,
      heightAuto: false,
    });
  }
}
