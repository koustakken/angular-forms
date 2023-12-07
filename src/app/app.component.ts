import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';


interface IlocalItems {
	id: number;
	name: string;
	items: Iitems[];
}

interface Iitems {
	id: number;
	name: string;
	glCode: number;
	amount: number;
	salesTax: IsalesTax;
}
interface IsalesTax {
	id: number;
	name: string;
	value: number;
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-forms';

	totalAmount!: number;
	totalTax!: number;


	itemsTitles = [
		'Category',
		'Item',
		'GL Code',
		'Amount',
		'Sales Tax',
		'Total'
	]

	salesTaxArray: IsalesTax[] = [
		{ id: 1, name: 'GST', value: 0.1 },
		{ id: 2, name: 'PST', value: 0.15 },
		{ id: 3, name: 'HST', value: 0.2 }
	]

	localItems: IlocalItems[] = [
		{
			id: 1,
			name: 'Test Category',
			items: [{
				id: 1,
				name: 'Test Item',
				glCode: 0,
				amount: 0,
				salesTax: this.salesTaxArray[0]
			}]
		}
	]



	onSubmit(form: NgForm) {
		console.log(form.value);
		// this.reactiveForm.reset();
	}

	addCategory() {
		this.localItems.push({
			id: this.localItems.length + 1,
			name: 'Category ' + this.localItems.length + 1,
			items: [{
				id: this.localItems.length + 1,
				name: 'Item ' + this.localItems.length + 1,
				glCode: 0,
				amount: 0,
				salesTax: this.salesTaxArray[0]
			}]
		})
		console.log(this.localItems);
	}

	removeCategory(id: number) {
		const idx = this.localItems.findIndex((item) => item.id === id);
		if (idx !== -1) {
			this.localItems.splice(idx, 1);
		}
	}

	addItem(id: number) {
		const idx = this.localItems.findIndex((item) => item.id === id);
		if (idx !== -1) {
			this.localItems[idx].items.push({
				id: this.localItems[idx].items.length + 1,
				name: 'Item ' + this.localItems[idx].items.length + 1,
				glCode: 0,
				amount: 0,
				salesTax: this.salesTaxArray[0]
			})
		}
	}

	removeItem(id: number) {
		const idx = this.localItems.findIndex((item) => item.id === id);
		if (idx !== -1) {
			this.localItems[idx].items.splice(idx, 1);
		}
	}

	getTotal(type: string) {
		if (type === 'amount') {
			this.totalAmount = 0;
			this.localItems.forEach((item) => {
				item.items.forEach((child) => {
					this.totalAmount += +child.amount;
				})
			})
		}

		if (type === 'tax') {
			this.totalTax = 0;
			this.localItems.forEach((item) => {
				item.items.forEach((child) => {
					this.totalTax += +child.salesTax.value;
				})
			})
		}
	}
}
