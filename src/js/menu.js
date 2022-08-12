'use strict';

// CARD BTN
let btn_products = document.getElementsByClassName("card-btn");
// BACKGROUND PRICE
let bg_price = document.getElementById("bg-price");
// CARD RICE
let card_price = document.getElementById("card-price");
// PRODUCT NAME PRICE CONTAINER
let product_NAME_cont = document.getElementById("product-name-cont");
// PRODUCT PRICE CONTAINER
let product_PRICE_cont = document.getElementById("product-price-cont");
// PRODUCT TOTAL CONTAINE
let product_TOTAL = document.getElementById("p-total");
// VARIABLE SUM
let sum = 0;
// VARIABLE TOTAL
let total = 0;


// ONCLICK GET THE PRICE OF PRODUCTS
for (let i = 0; i < btn_products.length; i++) {

    btn_products[i].addEventListener("click", function () {
        let values = Number(parseFloat(btn_products[i].value).toFixed(2));

        //CONFIRM ALERT TO SHOW PRICE
        let result = confirm("WOULD YOU LIKE TO ADD " + this.name.toUpperCase() + " TO YOUR ORDER?");
        bg_price.style.display = "block";
        card_price.style.display = "block";

        //SUM PRICE CONDITION
        if (result) {
            // VAR SUM VALUES
            total = sum += values;

            // CREATE ELEMENT NAME
            const product_name = document.createElement("h2");
            product_name.classList.add('name');
            product_name.innerHTML = this.name.toUpperCase();
            product_NAME_cont.append(product_name);

            // CREATE ELEMENT PRICE
            const product_price = document.createElement("h2");
            product_price.classList.add('price');
            product_price.innerHTML = "$ " + values.toFixed(2);
            product_PRICE_cont.append(product_price);

            // CREATE ELEMENT TOTAL
            product_TOTAL.classList.add('price');
            product_TOTAL.innerHTML = "TOTAL: " + "$ " + total.toFixed(2);

            // PRODUCT REMOVE ONCLICK NAME FUNCTION
            product_name.onclick = function () {

                total = sum -= values;
                alert("Product removed");
                product_name.remove();
                product_price.remove();

                //CONDITION TO REMOVE THE VALUES 
                if (total < 1) {
                    total = 0;
                    product_TOTAL.innerHTML = "TOTAL: " + "$ " + total.toFixed(2);
                }
                else {
                    product_TOTAL.innerHTML = "TOTAL: " + "$ " + total.toFixed(2);
                }
            }

            // PRODUCT REMOVE ONCLICK PRICE FUNCTION
            product_price.onclick = function () {

                total = sum -= values;

                alert("Product removed");
                product_price.remove();
                product_name.remove();

                //CONDITION TO REMOVE THE VALUES 
                if (total < 1) {
                    total = 0;
                    product_TOTAL.innerHTML = "TOTAL: " + "$ " + total.toFixed(2);
                }
                else {
                    product_TOTAL.innerHTML = "TOTAL: " + "$ " + total.toFixed(2);
                }
            }

        } else {
            // INITIALIZE TOTAL IN 0
            total = 0;
        }
    });
}

// ONCLICK BACKGROUND PRICE FUNCTION
bg_price.onclick = function () {
    bg_price.style.display = "none";
    card_price.style.display = "none";
}




