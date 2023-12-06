import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-forms';

	itemsTitles = [
		'Category',
		'Item',
		'GL Code',
		'Amount',
		'Sales Tax',
		'Total'
	]

	localItems = [
		{
			id: 1,
			name: 'Test Category',
			items: [{
				id: 1,
				name: 'Test Item',
				glCode: null,
				amount: null,
				salesTax: null
			}]
		}
	]

	onSubmit(form: NgForm) {
		// console.log(this.reactiveForm.value);
		// this.reactiveForm.reset();
	}
}
