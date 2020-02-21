import moment from 'moment';
import numeral from 'numeral';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

export class App {

  items = [];
  constructor(){
  	this.heading = 'Add a new item';
  	this.todos= [''];
  	this.todoDescription = '';
  	this.items= [''];
  	/*this.items.push(new Item("1234", "Random brand", 		"box of toys", 				"42",  "02-12-2020", "02-21-2020"));
  	this.items.push(new Item("2345", "Another brand", 		"DIY tools", 				"180", "12-01-2019", "01-11-2020"));
  	this.items.push(new Item("3456", "Socks brand", 		"The famous green socks", 	"835", "08-10-2019", "10-10-2019"));
  	this.items.push(new Item("4567", "Chocolate Factory", 	"Box of Chocolates", 		"450", "01-02-2020", "01-08-2020"));*/
  	this.setCurrentDateAndID();
  	setInterval(() => this.setCurrentDateAndID(), 1000);
  }

  addTodo(){
  	if(this.todoDescription){
  		this.todos.push({
  			description: this.todoDescription,
  			done: false
  		});
  		this.todoDescription = '';
  	}
  }

  addItem(){
  	if(this.items){
  		this.items.id= numeral(Math.random() * 10000).format('0000');
  		this.items.push({
  			id: this.items.id,
  			brand: this.items.brand,
  			content: this.items.content,
  			quantity: this.items.quantity,
  			country: this.items.country,
  			date_received: moment(this.items.date_received).format('MM/DD/YYYY H:mm:ss'),
  			done: false
  		});
  		// this.items=[''];
  		this.items.id='';
  		this.items.brand='';
  		this.items.content='';
  		this.items.quantity='';
  		// this.items.date_received='';
  	}
  }

  removeTodo(todo){
  	let index = this.todos.indexOf(todo);
  	if(index!== -1){
  		this.todos.splice(index,1);
  	}
  }

  setCurrentDateAndID(){
  	this.currentDate = moment(new Date()).format('MM/DD/YYYY H:mm:ss');
  	this.displayID = numeral(Math.random() * 10000).format('0000');
  }

  travelItem(info){
  		if(info=='receipt'){
  			this.items.push({
  				date_received: moment(this.items.date_received).format('MM/DD/YYYY H:mm:ss'),
  				done: false
  			});
  		}
  		else if(info=='dispatch'){
  			this.items.push({
  				date_sent: moment(this.items.date_sent).format('MM/DD/YYYY H:mm:ss'),
				done: false
  			});
  		}
  }
}

class Item{
	constructor(id, brand, content, quantity,date_received, date_sent){
		this.id = id;
		this.brand = brand;
		this.content = content;
		this.quantity = quantity;
		this.date_received = moment(date_received).format('MM/DD/YYYY H:mm:ss');
		this.date_sent = moment(date_sent).format('MM/DD/YYYY H:mm:ss');
	}
}

