const chefReceived = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            document.getElementById(orderID).innerText = 'Chef received the order and started preparing';
			resolve(orderID)
		}, 2000)
	})
}

const pizzaSauceAdded = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Pizza Sauce added'
			resolve(orderID)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'First layer of cheeze added'
			resolve(orderID)
		}, 5000)
	})
}

const toppingsAdded = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Toppings added'
			resolve(orderID)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Second layer of cheeze added'
			resolve(orderID)
		}, 5000)
	})
}

const pizzaBaked = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Pizza baked!'
			resolve(orderID)
		}, 15000)
	})
}

const oreganoAddedAndPacked = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Oregano added and packed'
			resolve(orderID)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderID).innerText = 'Package received at counter'
			resolve(orderID)
		}, 2000)
	})
}

const handedOver = (orderID) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			document.getElementById(orderID).innerText = 'The order is ready and handed over to the Zomato delivery guy!'
			resolve(orderID);
		}, 1000)
	})
}

