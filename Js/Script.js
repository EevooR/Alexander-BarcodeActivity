// Variables
const productList = document.querySelector('#productList');
const priceTotal = document.querySelector('#priceTotal');
const barcodeEntry = document.querySelector('#barcodeEntry');
const corectCost = document.querySelector('#corect_Cost');
const savings = document.querySelector('#Savings');
const yousaved = document.querySelector('#yousaved');
const barcodeEntryArea = document.querySelector('#barcodeEntryArea');
const teacherTools = document.querySelectorAll('.teacherTools');
const colormap = document.querySelector('#colormap');
const productDisplay = document.querySelector('#productDisplay');
const payment = document.querySelector('#Payment');
const studentBarcodes = async () => {
  // const studentBarcodeList = await fetch('Json/barcodes.json');
  const studentBarcodeList = await fetch('https://eevoor.github.io/Alexander-BarcodeActivity/Json/barcodes.json');
  const studentBarcodedata = await studentBarcodeList.json();
  return studentBarcodedata;
};
let runningtotal = 0.00;
let trueTotal = 0.00;
let errorMax = document.querySelector('#errorMax').value;
let errorCount = 0;
let errorRateMax = document.querySelector('#errorRate').value;

let minimumScans = document.querySelector('#barcodeMin').value;
let minimumProducts = document.querySelector('#productMin').value;
let minimumCupons = document.querySelector('#cuponMin').value;
let maximumScans = document.querySelector('#barcodeMax').value;
let maximumPruducts = document.querySelector('#productMax').value;
let maximumCupons = document.querySelector('#cuponMax').value;

let scancount = 0;
let productcount = 0;
let cuponcount = 0;

let teachcheat = 0;

let yay = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// ChatGPT Array

const fallbackPrices = [
  1.29, 3.49, 0.99, 2.19, 4.79, 1.89, 7.99, 5.49, 2.99, 6.29,
  3.19, 8.49, 9.99, 1.79, 12.99, 2.59, 10.49, 4.59, 14.99, 0.89,
  3.99, 2.39, 11.29, 1.49, 6.79, 5.19, 7.39, 1.19, 9.59, 3.79,
  4.09, 0.79, 8.19, 2.79, 15.49, 6.49, 7.29, 5.89, 13.99, 2.49,
  4.29, 10.99, 3.39, 1.99, 8.79, 6.09, 9.29, 3.69, 2.89, 4.99,
  7.19, 12.49, 0.99, 5.09, 6.39, 1.69, 11.99, 2.19, 8.29, 7.59,
  3.89, 4.49, 9.19, 2.69, 14.29, 10.19, 1.59, 6.89, 4.69, 8.99,
  3.29, 5.79, 13.49, 1.39, 7.09, 6.19, 9.89, 5.39, 15.99, 2.09,
  12.79, 4.39, 3.59, 11.49, 0.89, 8.59, 5.69, 14.49, 1.99, 2.39,
  7.49, 9.39, 4.19, 3.49, 6.59, 10.29, 12.19, 1.09, 7.89, 24.99,
  25.49, 26.19, 26.99, 27.59, 27.99, 28.49, 28.79, 29.19, 29.59, 29.99,
  30.49, 30.99, 31.29, 31.79, 32.39, 32.89, 33.19, 33.69, 33.99, 34.49,
  34.99, 35.39, 35.79, 36.29, 36.89, 37.49, 37.99, 38.39, 38.89, 39.49,
  39.99, 40.49, 41.29, 41.79, 42.19, 42.99, 43.49, 44.19, 44.79, 45.29,
  45.99, 46.39, 47.29, 48.19, 49.99, 52.49, 55.99, 59.49, 64.99, 68.79,
  69.49, 72.99, 74.29, 76.39, 78.49, 79.99
];

const fallbackDiscounts = [
  0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
  0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19,
  0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29,
  0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39,
  0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49,
  0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59,
  0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69,
  0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
  0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89,
  0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
  1
]

let exhastedBarcodes = [

]

//Window.onload

window.onload = async (event) => {
  productList.innerHTML = "";
  priceTotal.innerHTML = "Running Total: $0.00";
  const data = await studentBarcodes(); // await the async function
  console.log(data);
  corectCost.value = "";
  barcodeEntry.value = "";
};

barcodeEntry.addEventListener('change', async (event) => {
  if (["80761377"].includes(barcodeEntry.value)) {
    if (teachcheat == 0) {
          // Since teacherTools is a NodeList (from querySelectorAll),
          // we use its .forEach() method to iterate over the elements (t).
          teacherTools.forEach((t) => {
              t.style.width = "auto"; // Make the element visible
              t.style.height = "auto";
          });
          payment.style.width = "80vw";
          payment.style.overflowY = "scroll";
          productDisplay.style.width = "18vw;"
          barcodeEntry.value = "";
          teachcheat = 1;
        } else {
          teacherTools.forEach((t) => {
              t.style.width = "0px"; // Make the element visible
              t.style.height = "0px";
              payment.style.width = "18vw";
              productDisplay.style.width = "80vw;"
              payment.style.overflowY = "visible";
          });
          barcodeEntry.value = ""
          teachcheat = 0;
        }
    //  } else if (barcodeEntry.value = "") {

    } else {
        try {
  if (scancount >= maximumScans) {
    console.log(scancount);
    console.log(maximumScans);
    alert('Item Limit Reached, Please proceed to calculate your final price.');
      barcodeEntry.value = "";
  }  else if (cuponcount >= maximumCupons) {
    alert('Cupon Limit Reached, Please proceed to calculate your final price.');
      barcodeEntry.value = "";
  }else {
      const data = await studentBarcodes();
      console.log(data);
      const barcodesdata = data[0];
      console.log(barcodesdata);
      const scanbar = barcodeEntry.value.trim();
      console.log(barcodesdata[scanbar]);
      // console.log(barcodesdata[scanbar].Price);
      // runningtotal = runningtotal + barcodesdata[scanbar].Price;

      if (barcodesdata[scanbar].type == "Product") {
        if (productcount >= maximumPruducts) {
          alert('Product Limit Reached, Please proceed to calculate your final price.');
            barcodeEntry.value = "";
          } else if (cuponcount <= 1) {
            let errorcalc;
            if (errorCount < errorMax) {
              errorcalc = getRandomInt(errorRateMax);
            } else {
              errorcalc = 0
              console.log('Max errors reached.')
            }
              if (errorcalc == 1) {
                console.log('Error Intended price failure');
                errorCount = errorCount + 1;
                let fallbackcalc = getRandomInt(150);

                // Calculate and round the price to be added from fallbackPrices
                let fallbackPrice = fallbackPrices[fallbackcalc];
                console.log(fallbackPrice);
                // Update runningtotal and round *after* addition
                runningtotal = runningtotal + fallbackPrice;
                runningtotal = Math.round(runningtotal * 100) / 100;

                // Calculate and round the price to be added from true price
                let truePrice = barcodesdata[scanbar].Price;

                // Update trueTotal and round *after* addition
                trueTotal = trueTotal + truePrice;
                trueTotal = Math.round(trueTotal * 100) / 100;

              } else {
                // Calculate the price to be added
                let priceToAdd = barcodesdata[scanbar].Price;

                // Update runningtotal and round *after* addition
                runningtotal = runningtotal + priceToAdd;
                runningtotal = Math.round(runningtotal * 100) / 100;

                // Update trueTotal and round *after* addition
                trueTotal = trueTotal + priceToAdd;
                trueTotal = Math.round(trueTotal * 100) / 100;
              }
              scancount = scancount + 1;
              productcount = productcount + 1;
              console.log(productcount);
              priceTotal.innerHTML = "Running Total: $" + runningtotal;
              barcodeEntry.value = "";

              const newPurchase = document.createElement('div');
              newPurchase.classList.add('product');

              const nPimage = document.createElement('img');
              const nPname = document.createElement('p');
              const nPcost = document.createElement('p');

              nPimage.classList.add('productImg');
              nPimage.alt = barcodesdata[scanbar].Name;
              nPimage.src = "Assets/" +  barcodesdata[scanbar].AssetName;
              newPurchase.appendChild(nPimage)

              nPname.classList.add('productName');
              nPname.innerHTML = barcodesdata[scanbar].Name;
              newPurchase.appendChild(nPname);

              nPcost.classList.add('productCost');
              nPcost.innerHTML = "$" + barcodesdata[scanbar].Price;
              newPurchase.appendChild(nPcost);

              productList.appendChild(newPurchase);
          } else {
            alert('Cupon has been used, Additional products can not be added.')
            barcodeEntry.value = ""
          }


      }
      else if (barcodesdata[scanbar].type == "Cupon") {
        if (!exhastedBarcodes.includes(barcodeEntry.value)) {
          let errorcalc;
          if (errorCount < errorMax) {
            errorcalc = getRandomInt(errorRateMax);
          } else {
            errorcalc = 0
            console.log('Max errors reached.')
          }
            if (errorcalc == 1) {
              console.log('Error Intended price failure');
              errorCount = errorCount + 1;
              let fallbackcalc = getRandomInt(100);

              // Calculate and round the price to be added from fallbackPrices
              let fallbackdiscount = fallbackDiscounts[fallbackcalc];
              console.log(fallbackdiscount);
              // Update runningtotal and round *after* addition
              discountOff = runningtotal * fallbackdiscount
              rtDiscount = discountOff
              runningtotal = runningtotal - fallbackdiscount;
              runningtotal = Math.round(runningtotal * 100) / 100;

              // Calculate and round the price to be added from true price
              let trueDiscount = barcodesdata[scanbar].Discount;

              // Update trueTotal and round *after* addition
              trueDiscountSum = trueTotal * trueDiscount
              trueTotal = trueTotal - trueDiscountSum;
              trueTotal = Math.round(trueTotal * 100) / 100;

            } else {
              // Calculate the price to be added
              let discoff = barcodesdata[scanbar].Discount;

              // Update runningtotal and round *after* addition
              rtDiscount = runningtotal * discoff;
              console.log(rtDiscount)
              runningtotal = runningtotal - rtDiscount;
              runningtotal = Math.round(runningtotal * 100) / 100;

              // Update trueTotal and round *after* addition
              ttDiscount = trueTotal * discoff;
              trueTotal = trueTotal - ttDiscount;
              trueTotal = Math.round(trueTotal * 100) / 100;
            }
            scancount = scancount + 1;
            cuponcount = cuponcount + 1;
            console.log(cuponcount);
            priceTotal.innerHTML = "Running Total: $" + runningtotal;
            barcodeEntry.value = "";

            const newPurchase = document.createElement('div');
            newPurchase.classList.add('product');

            const nPimage = document.createElement('img');
            const nPname = document.createElement('p');
            const nPcost = document.createElement('p');

            nPimage.classList.add('productImg');
            nPimage.alt = barcodesdata[scanbar].Name;
            nPimage.src = "Assets/" +  barcodesdata[scanbar].AssetName;
            newPurchase.appendChild(nPimage)

            nPname.classList.add('productName');
            nPname.innerHTML = barcodesdata[scanbar].Name;
            newPurchase.appendChild(nPname);

            nPcost.classList.add('productCost');
            adjrtdiscount = Math.round(rtDiscount * 100) / 100;
            nPcost.innerHTML = "- $" + adjrtdiscount;
            newPurchase.appendChild(nPcost);

            productList.appendChild(newPurchase);
            exhastedBarcodes.push(barcodesdata[scanbar].Barcode)
        } else {
          alert('Discount in use, please use another')
          barcodeEntry.value = ""
        }
      } else {
        console.log(barcodesdata[scanbar].type)
      };




};
    } catch (error) {
      console.log(error)
      const scanbar = barcodeEntry.value.trim();
        barcodeEntry.value = "";
    }


    };
});


//
// corectCost.addEventListener('change', async (event) => {
//   corectCost.value =
// }




function querySubmit() {
  if (scancount < minimumScans) {
    alert('Please scan an Object to get started!')
  } else if (productcount < minimumProducts) {
    alert('Please scan a product!')
  } else if (cuponcount < minimumCupons) {
    alert('Would you like to apply a cupon?')
  } else {
    if (corectCost.value == trueTotal) {
      savings.style.width = "auto";
      savings.style.height = "auto";
      savings.style.overflow = "visible";
      let savingscalc = runningtotal - trueTotal;

      // Multiply by 100, round, and then divide by 100 to round to two decimal places
      let roundedSavings = Math.round(savingscalc * 100) / 100;

      yousaved.innerHTML = "You saved $" + roundedSavings + "!";
      barcodeEntryArea.style.width = "0px";
      if (yay == 0) {
        const audio = new Audio('Assets/PVZwin.mp3');
        audio.play();
        yay = 1;
      };
    } else {
      alert('Something Is not right with your calculations or formating! Rememeber just put the price without the "$", use "." instead of ",", and make sure there are no spaces!')
    };
  };
};

function save() {
   errorMax = document.querySelector('#errorMax').value;
   errorRateMax = document.querySelector('#errorRate').value;
   minimumScans = document.querySelector('#barcodeMin').value;
   minimumProducts = document.querySelector('#productMin').value;
   minimumCupons = document.querySelector('#cuponMin').value;
   maximumScans = document.querySelector('#barcodeMax').value;
   maximumPruducts = document.querySelector('#productMax').value;
   maximumCupons = document.querySelector('#cuponMax').value;
};



function reset() {
  productList.innerHTML = "";
  priceTotal.innerHTML = "Running Total: $0.00";
  runningtotal = 0.00;
  trueTotal = 0.00;
  errorMax = document.querySelector('#errorMax').value;
  errorCount = 0;
  errorRateMax = document.querySelector('#errorRate').value;

  minimumScans = document.querySelector('#barcodeMin').value;
  minimumProducts = document.querySelector('#productMin').value;
  minimumCupons = document.querySelector('#cuponMin').value;
  maximumScans = document.querySelector('#barcodeMax').value;
  maximumPruducts = document.querySelector('#productMax').value;
  maximumCupons = document.querySelector('#cuponMax').value;
  savings.style.width = "0px"
  savings.style.height = "0px"
  savings.style.overflow = "hidden"
  scancount = 0;
  productcount = 0;
  cuponcount = 0;
  corectCost.value = "";
  barcodeEntry.value = "";
  barcodeEntryArea.style.width = "95%";
  yay = 0;
};


function theme(themename) {
  colormap.href = "Css/" + themename + ".css";
};
