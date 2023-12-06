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

	localItems: any = [
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

	salesTaxArray = [
		{ id: 1, name: 'GST', value: 0.1 },
		{ id: 2, name: 'PST', value: 0.15 },
		{ id: 3, name: 'HST', value: 0.2 }
	]

	onSubmit(form: NgForm) {
		console.log(form.value);
		// this.reactiveForm.reset();
	}
}
