const createOrderCard = (orderID) => {
    let orderCardWrapper = document.getElementById("order-Card-Wrapper");

    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardbody = document.createElement("div");
    let cardText1 = document.createElement("h5");
    let cardText2 = document.createElement("p");
    let cardText3 = document.createElement("p");
    let cardSpan = document.createElement("span");
    let cardFooter = document.createElement("div");
    

    colDiv.classList = "col-md-3 order-status-card";
    cardDiv.classList = "card text-center";
    cardHeader.classList = "card-header";
    cardbody.classList = "card-body";
    cardText1.classList = "card-title";
    cardText2.classList = "card-text";
    cardText3.classList = "card-text";
    cardSpan.classList = "badge rounded-pill bg-success status-Text";
    cardFooter.classList = "card-footer";

    cardHeader.innerHTML = `Order ID: <b>  ${orderID} </b>`
    cardText1.innerText = `Bill Amount: $22`
    cardText2.innerText = `Medium size pizza - 2 Nos`
    cardSpan.innerText = `First layer of cheeze added`
    cardFooter.innerText  = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }); 


    cardSpan.id = orderID;

    
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardHeader);
    orderCardWrapper.appendChild(colDiv);
    cardDiv.appendChild(cardbody);
    cardbody.appendChild(cardText1);
    cardbody.appendChild(cardText2);
    cardbody.appendChild(cardText3);
    cardText3.appendChild(cardSpan);
    cardDiv.appendChild(cardFooter);

}