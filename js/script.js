const executeOrder = () => {
    let orderID = document.getElementById("order-id-input").value;
    document.getElementById("order-id-input").value = "";

	if(orderID.length >=1){
    createOrderCard(orderID);
    document.getElementById(orderID).innerText = 'Order Placed';

    chefReceived(orderID)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(handedOver)
		.catch((err) => console.log("error"));
	} 

	else{
		alert("Kindly enter your ORDER ID")
	}

}




//  <div class="row" id="order-Card-Wrapper" >
// <div class="col-md-3 order-status-card">
//   <div class="card text-center">
//     <div class="card-header">
//       Order ID: <b>  #1231323 </b>
//     </div>
//     <div class="card-body">
//       <h5 class="card-title">Bill Amount: $22</h5>
//       <p class="card-text">Medium size pizza - 2 Nos</p>
//       <p class="card-text">
//         <span class="badge rounded-pill bg-success">First layer of cheeze added</span>
//       </p>
//     </div>
//     <div class="card-footer">
//       18-08-2022 10:24 PM
//     </div>
//   </div>
// </div>
// </div> 
            



