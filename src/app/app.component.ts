import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-forms';
	// @ViewChild('templateForm') templateForm!: NgForm;

	// onSubmit() {
	// 	console.log(this.templateForm.value);
	// 	this.templateForm.reset();
	// }

	// reactiveForm: FormGroup = new FormGroup({
	// 	name: new FormControl('', Validators.required, Validators.pattern('^[a-zA-Z]+$')),
	// 	age: new FormControl(''),
	// 	city: new FormControl('')
	// });

	reactiveForm!: FormGroup

	constructor(private formBuilder: FormBuilder) {
		this.reactiveForm = this.formBuilder.group({
			name: [''],
			age: [''],
			city: ['']
		})
	}
	onSubmit() {
		// console.log(this.reactiveForm.value);
		// this.reactiveForm.reset();
	}
}
