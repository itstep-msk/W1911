var home = { template: '#home' }
var catalog = { template: '#catalog' }
var about = { template: '#about' }
var cart = { template: '#cart' }

// Связываем ссылки с компонентами
var myRoutes = [
	{ path: '/', component: home },
	{ path: '/catalog', component: catalog },
	{ path: '/about', component: about },
	{ path: '/cart', component: cart }
]
// Инициализация VueRouter
var myRouter = new VueRouter({
	routes: myRoutes
})

Vue.component("card", {
	props: ["item","index"],
	methods: {
		getIndex: function(i) {
			var cart = this.$root.cart;
			var resulution = false;
			var indexEl;

			if(cart.length <= 0) {
				 cart.push({id: i, count: 1});
			} else {
				cart.forEach(function(item, index){
					if(item.id == i) {
						resulution = true;
						indexEl = index;
						return;
					}
				})
				
				if(resulution) {
					cart[indexEl].count++;
				} else {
					cart.push({id: i, count: 1});
				}
			}
			console.log(cart)
		}
	},
	template:`
		<div class="uk-card uk-card-default uk-card-body uk-width-1-3">
			<div class="uk-width-1-1 uk-height-small uk-background-contain" v-bind:style="'background-image: url(' + item.pic + ')'"></div>
			<h3 class="uk-card-title">{{ item.caption }}</h3>
			<p>{{ item.price }}</p>
			<input type="submit" value="Купить" class="uk-align-right uk-button uk-button-default" @click="getIndex(index)">
		</div>`
})

Vue.component("cart-item", {
	props: ["item", "index"],
	methods: {
		removeGoods: function(i) {
			this.$root.cart.splice(i, 1);
		}
	},
	template: `
		<div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-margin-top">
			<img v-bind:src="this.$root.carList[item.id].pic" width="100px">
			<div class="uk-display-inline-block uk-margin-medium-left">{{ item.count }}</div>
			<div class="uk-flex-inline uk-flex-wrap uk-text-middle uk-margin-medium-left">
				<div class="uk-width-1-1">{{ this.$root.carList[item.id].caption }}</div>
				<div class="uk-width-1-1">{{ this.$root.carList[item.id].price }}</div>
			</div>
			<div class="uk-flex uk-height-1-1 uk-align-right uk-flex-middle">
				<button href="#" uk-icon="icon: close" v-on:click="removeGoods(index)"></button>
			</div>
		</div>`
})

var carList = [
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Daewoo nexia",
		price: "100 000 P",
		brand: "daewoo"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Daewoo nexia",
		price: "50 000 P",
		brand: "daewoo"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Daewoo matiz",
		price: "200 000 P",
		brand: "daewoo"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "Mersedes",
		price: "500 000 P",
		brand: "mersedes"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	},
	{
		pic: "https://cars.imgsmail.ru/catalogue/generations/1/9/1941a19de86e9a409025eb37a42b73eb_240x150.png",
		caption: "BMW",
		price: "600 000 P",
		brand: "bmw"
	}
]

var app = new Vue({
	el: "#app",
	data: {
		cars: carList,
		carList: carList,
		search: "",
		brands: [],
		price: [],
		tempArray: [],
		cart: []
	},
	router: myRouter,
	watch: {
		search: function() {
			var self = this;

			if(this.search == "") {
				this.cars = carList;
			}

			if(this.tempArray.length == 0) {
				this.tempArray = carList;
			}

			this.cars = this.tempArray.filter(function(item) {
				var cardItem = item.caption.toLowerCase();
				var searchItem = self.search.toLowerCase();

				if(cardItem.includes(searchItem)) {
					return true;
				}
			})
		},
		brands: function() {
			this.filter();
		},
		price: function() {
			this.filter();
		}
	},
	methods: {
		filter: function() {
			var self = this;
			this.tempArray = [];

			function findBrand() {
				if(self.brands.length != 0) {
					for(var i = 0; i < self.brands.length; i++) {
						self.tempArray = self.tempArray.concat(self.cars.filter(function(item) {
								if(self.brands[i] == item.brand) {
									return true;
								}
							})
						)
					}

					self.cars = self.tempArray;
				}
			}

			function findPrice() {
				self.cars = carList.filter(function(item) {
					var priceFrom = +self.price[0] || 0;
					var priceTo = +self.price[1] || Number.MAX_VALUE;
					var priceCar = +item.price.replace(/\D/gi,"");

					if(priceFrom <= priceCar && priceTo >= priceCar && priceTo > priceFrom) {
						return true;
					}
				})
			}

			if(self.price.length == 0) {
				self.cars = carList;

				findBrand()

			} else {
				self.cars = [];

				findPrice();
				findBrand();
			}
		}
	},
	computed: {
		getCountGoods: function () {
			var count = 0;

			this.cart.forEach(function(item) {
				count += item.count;
			})

			return count;
		},
		getPriceGoods: function() {
			var price = 0;

			this.cart.forEach(function(item) {
				price += +this.carList[item.id].price.replace(/\D/gi,"") * item.count;
			})

			return String(price).replace(/./g, function(l, i, s) {
				return (s.length - i) % 3 == 0 ? " " + l : l;
			});
		}
	}
})