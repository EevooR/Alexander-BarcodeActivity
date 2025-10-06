// Variables
const productList = document.querySelector('#productList');
const priceTotal = document.querySelector('#priceTotal');
const studentBarcodes = async () => {
  const studentBarcodeList = await fetch('/Json/barcodes.json');
  const studentBarcodedata = await studentBarcodeList.json();
  return studentBarcodedata;
};





/*
const cardZoomImg = document.querySelector('#BigCard');


// Corrected function declaration
const orFullCards = async () => {
  const orresponse = await fetch('https://eevoor.github.io/EnzoTCG-JSONDatabase/json/ORfull.json');
  // const orresponse = await fetch('ORfull.lnk');
  const ordata = await orresponse.json();
  return ordata;
};

window.onload = async (event) => {
  try {

    const data = await orFullCards(); // await the async function
    console.log(data);
//     Object.keys(data).forEach((key) => {
//   console.log(key);
// });

    //
    // data.forEach((i) => {
    //   console.log(i[key].name);
    // });

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      if (item[key].archetype == "Item") {
        console.log(`${key}: ${item[key].name}`);
        if (elements.includes(item[key].attack1.element)) {} else {
          alert(item[key].attack1.element + "Is not valid in" + item[key].indexname + "At1 element")
        }
        if (elements.includes(item[key].attack1.element2)) {} else {
          alert(item[key].attack1.element2 + "Is not valid in" + item[key].indexname + "At1 element2")
        }
        if (elements.includes(item[key].attack2.element)) {} else {
          alert(item[key].attack2.element + "Is not valid in" + item[key].indexname + "At2 element1")
        }
        if (elements.includes(item[key].attack2.element2)) {} else {
          alert(item[key].attack2.element2 + "Is not valid in" + item[key].indexname + "At2 element2")
        }
        if (arches.includes(item[key].archetype)) {} else {
          alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
        }
        if (backers.includes(item[key].background)) {} else {
          alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
        }}
      if (["Character","Enhanced Character"].includes(item[key].archetype)) {
        console.log(`${key}: ${item[key].name}`);
        if (elements2.includes(item[key].element)) {} else {
          alert(item[key].element + "Is not valid in" + item[key].indexname + "element")
        }
        if (elements.includes(item[key].attack1.element)) {} else {
          alert(item[key].attack1.element + "Is not valid in" + item[key].indexname + "At1 element")
        }
        if (elements.includes(item[key].attack1.element2)) {} else {
          alert(item[key].attack1.element2 + "Is not valid in" + item[key].indexname + "At1 element2")
        }
        if (elements.includes(item[key].attack2.element)) {} else {
          alert(item[key].attack2.element + "Is not valid in" + item[key].indexname + "At2 element1")
        }
        if (elements.includes(item[key].attack2.element2)) {} else {
          alert(item[key].attack2.element2 + "Is not valid in" + item[key].indexname + "At2 element2")
        }
        if (arches.includes(item[key].archetype)) {} else {
          alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
        }
        if (backers.includes(item[key].background)) {} else {
          alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
        }
      }
      if (item[key].archetype == "Setting") {
        console.log(`${key}: ${item[key].name}`);
        if (elements.includes(item[key].negativeint["50"])) {} else {
          alert(item[key].negativeint["50"] + "Is not valid in" + item[key].indexname + " -50")
        }
        if (elements.includes(item[key].negativeint["40"])) {} else {
          alert(item[key].negativeint["40"] + "Is not valid in" + item[key].indexname + " -40")
        }
        if (elements.includes(item[key].negativeint["30"])) {} else {
          alert(item[key].negativeint["30"] + "Is not valid in" + item[key].indexname + " -30")
        }
        if (elements.includes(item[key].negativeint["20"])) {} else {
          alert(item[key].negativeint["20"] + "Is not valid in" + item[key].indexname + " -20")
        }
        if (elements.includes(item[key].negativeint["10"])) {} else {
          alert(item[key].negativeint["10"] + "Is not valid in" + item[key].indexname + " -10")
        }
        if (elements.includes(item[key].positiveint["50"])) {} else {
          alert(item[key].positiveint["50"] + "Is not valid in" + item[key].indexname + " +50")
        }
        if (elements.includes(item[key].positiveint["40"])) {} else {
          alert(item[key].positiveint["40"] + "Is not valid in" + item[key].indexname + " +40")
        }
        if (elements.includes(item[key].positiveint["30"])) {} else {
          alert(item[key].positiveint["30"] + "Is not valid in" + item[key].indexname + " +30")
        }
        if (elements.includes(item[key].positiveint["20"])) {} else {
          alert(item[key].positiveint["20"] + "Is not valid in" + item[key].indexname + " +20")
        }
        if (elements.includes(item[key].positiveint["10"])) {} else {
          alert(item[key].positiveint["10"] + "Is not valid in" + item[key].indexname + " +10")
        }

        if (arches.includes(item[key].archetype)) {} else {
          alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
        }
        if (backers.includes(item[key].background)) {} else {
          alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
        }}
      if (["Summon","Enhanced Summon"].includes(item[key].archetype)) {
          console.log(`${key}: ${item[key].name}`);
          if (elements2.includes(item[key].element)) {} else {
            alert(item[key].element + "Is not valid in" + item[key].indexname + "element")
          }
          if (arches.includes(item[key].archetype)) {} else {
            alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
          }
          if (backers.includes(item[key].background)) {} else {
            alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
          }
        }
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
    }
  }
});

  } catch (error) {
    console.log(error);
  }
};
function hidezoom() {
  cardZoomArea.style.width = '0px';
  // cardZoomImg.style.display = 'none';
  // cardZoomImg.style.backgroundSize = 'contain';
  // cardZoomImg.style.backgroundRepeat = 'no-repeat';
  cardList.style.width = "100%";
};

async function filtertype(type) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);


      data.forEach(item => {
    for (const key in item) {
      if (item[key] && item[key].name !== undefined) {
        if (item[key].archetype !== "Item") {
        console.log(`${key}: ${item[key].element}`);
        if (item[key].element == type) {
          const newCard = document.createElement('div');
          newCard.classList.add('Card');
          cardList.appendChild(newCard);
          newCard.title = item[key].indexname;
          newCard.style.background = "url('" + item[key].image + "')";
          newCard.style.backgroundSize = "contain";
          newCard.style.backgroundRepeat = "no-repeat";
          newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
        }
}
      }
    }
  });


  } catch (error) {
    console.log(error);
  }
};
async function filterex(trFa) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);


      data.forEach(item => {
    for (const key in item) {
      if (item[key] && item[key].name !== undefined) {
            if (item[key].archetype !== "Item") {
        console.log(`${key}: ${item[key].ex}`);
        if (item[key].ex == trFa) {
          const newCard = document.createElement('div');
          newCard.classList.add('Card');
          cardList.appendChild(newCard);
          newCard.title = item[key].indexname;
          newCard.style.background = "url('" + item[key].image + "')";
          newCard.style.backgroundSize = "contain";
          newCard.style.backgroundRepeat = "no-repeat";
          newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
        }

      }
      }
    }
  });


  } catch (error) {
    console.log(error);
  }
};
async function filterarche(archet) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].archetype}`);
      if (item[key].archetype == archet) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

    }
  }
});

  } catch (error) {
    console.log(error);
  }
};
async function filterrar(rarity) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);
    if (rarity !== "Common") {
      if (rarity == "Rare") {
        data.forEach(item => {
          for (const key in item) {
            if (item[key] && item[key].name !== undefined) {
              console.log(`${key}: ${item[key].background}`);
              if (["FullArt","ColorArt"].includes(item[key].background)) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

      }
    }
  });
      } else {
        data.forEach(item => {
          for (const key in item) {
            if (item[key] && item[key].name !== undefined) {
              console.log(`${key}: ${item[key].background}`);
              if (item[key].background == rarity) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

      }
    }
  });
      }

} else {
  data.forEach(item => {
for (const key in item) {
if (item[key] && item[key].name !== undefined) {
  console.log(`${key}: ${item[key].background}`);
  if (["FullArt","ColorArt"].includes(item[key].background)) {
  } else {
    const newCard = document.createElement('div');
    newCard.classList.add('Card');
    cardList.appendChild(newCard);
    newCard.title = item[key].indexname;
    newCard.style.background = "url('" + item[key].image + "')";
    newCard.style.backgroundSize = "contain";
    newCard.style.backgroundRepeat = "no-repeat";
    newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
  }

}
}
});
}
  } catch (error) {
    console.log(error);
  }
};

async function resetfilters() {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].element}`);
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
    }
  }
});

  } catch (error) {
    console.log(error);
  }
};
async function filterarcheall() {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].archetype}`);
      if (["Character", "Enhanced Character"].includes(item[key].archetype)) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

    }
  }
});

  } catch (error) {
    console.log(error);
  }
};
async function filterarcheallsum() {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].archetype}`);
      if (["Summon", "Enhanced Summon"].includes(item[key].archetype)) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

    }
  }
});

  } catch (error) {
    console.log(error);
  }
};

async function makebig(url, indexnamelocal) {
  try {
    imgCardBig.src = url;
    cardZoomArea.style.width = '30%';
    cardZoomImg.style.display = 'block';
    // cardZoomImg.style.backgroundSize = 'contain';
    // cardZoomImg.style.backgroundRepeat = 'no-repeat';
    cardList.style.width = "55%";

    const data = await orFullCards();

    cardName.style.display = "none";
    cardArche.style.display = "none";
    cardElement.style.display = "none";
    cardHP.style.display = "none";
    cardAbility.style.display = "none";
    cardAttack1name.style.display = "none";
    cardAttack1Element.style.display = "none";
    cardAttack1Damage.style.display = "none";
    cardAttack1Description.style.display = "none";
    cardAttack2name.style.display = "none";
    cardAttack2Element.style.display = "none";
    cardAttack2Damage.style.display = "none";
    cardAttack2Description.style.display = "none";
    cardSeries.style.display = "none";
    cardCopyright.style.display = "none";
    cardRCost.style.display = "none";

    elIntall.style.display = "none";

    elintneg50.style.background = "black";
    elintpos50.style.background = "black";
    elintneg40.style.background = "black";
    elintpos40.style.background = "black";
    elintneg30.style.background = "black";
    elintpos30.style.background = "black";
    elintneg20.style.background = "black";
    elintpos20.style.background = "black";
    elintneg10.style.background = "black";
    elintpos10.style.background = "black";
    elintneg50e.style.background = "black";
    elintpos50e.style.background = "black";
    elintneg40e.style.background = "black";
    elintpos40e.style.background = "black";
    elintneg30e.style.background = "black";
    elintpos30e.style.background = "black";
    elintneg20e.style.background = "black";
    elintpos20e.style.background = "black";
    elintneg10e.style.background = "black";
    elintpos10e.style.background = "black";
    elintneg50Elem.style.display = "none";
    elintpos50Elem.style.display = "none";
    elintneg40Elem.style.display = "none";
    elintpos40Elem.style.display = "none";
    elintneg30Elem.style.display = "none";
    elintpos30Elem.style.display = "none";
    elintneg20Elem.style.display = "none";
    elintpos20Elem.style.display = "none";
    elintneg10Elem.style.display = "none";
    elintpos10Elem.style.display = "none";


    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(indexnamelocal);
      if (item[key] && item[key].indexname == indexnamelocal) {
        if (item[key].archetype == "Item") {
          cardAttack1Element.innerHTML = "";
          cardAttack2Element.innerHTML = "";
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--item)";
          htmlbody.style.background = "var(--item)";

          filterButtons.forEach((item) => {
            item.style.background = "var(--item)";
          });


          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          cardAbility.innerHTML = item[key].ability;

          cardAttack1name.innerHTML = item[key].attack1.name;
          fillelement(item[key].attack1.cost, item[key].attack1.element, cardAttack1Element)
          fillelement(item[key].attack1.cost2, item[key].attack1.element2, cardAttack1Element)
          cardAttack1Damage.innerHTML = item[key].attack1.damage;
          cardAttack1Description.innerHTML = item[key].attack1.description;

          cardAttack2name.innerHTML = item[key].attack2.name;
          fillelement(item[key].attack2.cost, item[key].attack2.element, cardAttack2Element)
          fillelement(item[key].attack2.cost2, item[key].attack2.element2, cardAttack2Element)
          cardAttack2Damage.innerHTML = item[key].attack2.damage;
          cardAttack2Description.innerHTML = item[key].attack2.description;

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          if (item[key].name !== null) {
            cardName.style.display = "block";
          };
          console.log(item[key].archetype);
          if (item[key].archetype !== null) {
            cardArche.style.display = "block";
          };
          console.log(item[key].ability);
          if (item[key].ability !== null) {
            cardAbility.style.display = "block";
          };
          console.log(item[key].attack1.name);
          if (item[key].attack1.name !== null) {
            cardAttack1name.style.display = "block";
          };
          console.log(item[key].attack1.element);
          if (item[key].attack1.element !== null) {
            cardAttack1Element.style.display = "block";
          };
          console.log(item[key].attack1.damage);
          if (item[key].attack1.damage !== null) {
            cardAttack1Damage.style.display = "block";
          };
          console.log(item[key].attack1.description);
          if (item[key].attack1.description !== null) {
            cardAttack1Description.style.display = "block";
          };
          console.log(item[key].attack2.name);
          if (item[key].attack2.name !== null) {
            cardAttack2name.style.display = "block";
          };
          console.log(item[key].attack2.element);
          if (item[key].attack2.element !== null) {
            cardAttack2Element.style.display = "block";
          };
          console.log(item[key].attack2.damage);
          if (item[key].attack2.damage !== null) {
            cardAttack2Damage.style.display = "block";
          };
          console.log(item[key].attack2.description);
          if (item[key].attack2.description !== null) {
            cardAttack2Description.style.display = "block";
          };
          console.log(item[key].series);
          if (item[key].series !== null) {
            cardSeries.style.display = "block";
          };
          console.log(item[key].copyright);
          if (item[key].copyright !== null) {
            cardCopyright.style.display = "block";
          };
        }
        if (["Character", "Enhanced Character"].includes(item[key].archetype)) {
          cardAttack1Element.innerHTML = "";
          cardAttack2Element.innerHTML = "";
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--" + item[key].element + "m)";
          htmlbody.style.background = "var(--" + item[key].element + "s)";

          let bac ="var(--" + item[key].element + "m)";

          filterButtons.forEach((item) => {
            item.style.background = bac;
          });


          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          fillelement(1, item[key].element, cardElement)
          cardHP.innerHTML = item[key].hitpoints;
          cardAbility.innerHTML = item[key].ability;

          cardAttack1name.innerHTML = item[key].attack1.name;
          fillelement(item[key].attack1.cost, item[key].attack1.element, cardAttack1Element)
          fillelement(item[key].attack1.cost2, item[key].attack1.element2, cardAttack1Element)
          cardAttack1Damage.innerHTML = item[key].attack1.damage;
          cardAttack1Description.innerHTML = item[key].attack1.description;

          cardAttack2name.innerHTML = item[key].attack2.name;
          fillelement(item[key].attack2.cost, item[key].attack2.element, cardAttack2Element)
          fillelement(item[key].attack2.cost2, item[key].attack2.element2, cardAttack2Element)
          cardAttack2Damage.innerHTML = item[key].attack2.damage;
          cardAttack2Description.innerHTML = item[key].attack2.description;

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;
          cardRCost.innerHTML = "R - " + item[key].rcost;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          if (item[key].name !== null) {
            cardName.style.display = "block";
          };
          console.log(item[key].archetype);
          if (item[key].archetype !== null) {
            cardArche.style.display = "block";
          };
          console.log(item[key].element);
          if (item[key].element !== null) {
            cardElement.style.display = "block";
          };
          console.log(item[key].hitpoints);
          if (item[key].hitpoints !== null) {
            cardHP.style.display = "block";
          };
          console.log(item[key].ability);
          if (item[key].ability !== null) {
            cardAbility.style.display = "block";
          };
          console.log(item[key].attack1.name);
          if (item[key].attack1.name !== null) {
            cardAttack1name.style.display = "block";
          };
          console.log(item[key].attack1.element);
          if (item[key].attack1.element !== null) {
            cardAttack1Element.style.display = "block";
          };
          console.log(item[key].attack1.damage);
          if (item[key].attack1.damage !== null) {
            cardAttack1Damage.style.display = "block";
          };
          console.log(item[key].attack1.description);
          if (item[key].attack1.description !== null) {
            cardAttack1Description.style.display = "block";
          };
          console.log(item[key].attack2.name);
          if (item[key].attack2.name !== null) {
            cardAttack2name.style.display = "block";
          };
          console.log(item[key].attack2.element);
          if (item[key].attack2.element !== null) {
            cardAttack2Element.style.display = "block";
          };
          console.log(item[key].attack2.damage);
          if (item[key].attack2.damage !== null) {
            cardAttack2Damage.style.display = "block";
          };
          console.log(item[key].attack2.description);
          if (item[key].attack2.description !== null) {
            cardAttack2Description.style.display = "block";
          };
          console.log(item[key].series);
          if (item[key].series !== null) {
            cardSeries.style.display = "block";
          };
          console.log(item[key].copyright);
          if (item[key].copyright !== null) {
            cardCopyright.style.display = "block";
          };
          console.log(item[key].rcost);
          if (item[key].rcost !== null) {
            cardRCost.style.display = "block";
          };
        }
        if (item[key].archetype == "Setting") {
          cardAttack1Element.innerHTML = "";
          cardAttack2Element.innerHTML = "";
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--setting)";
          htmlbody.style.background = "var(--setting)";

          let bac ="var(--setting)";

          filterButtons.forEach((item) => {
            item.style.background = bac;
          });

          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          cardAbility.innerHTML = item[key].ability;

          if (item[key].negativeint["50"] !== null) {
            elintneg50.style.background = "#ff7070";
            elintneg50e.style.background = "#ff7070";
            elintneg50Elem.style.display = "block";
            elintneg50Elem.title = item[key].negativeint["50"];
            elintneg50Elem.src = "../Assets/Elements/" + item[key].negativeint["50"] + ".png";
          }
          if (item[key].negativeint["40"] !== null) {
            elintneg40.style.background = "#ff7070";
            elintneg40e.style.background = "#ff7070";
            elintneg40Elem.style.display = "block";
            elintneg40Elem.title = item[key].negativeint["40"];
            elintneg40Elem.src = "../Assets/Elements/" + item[key].negativeint["40"] + ".png";
          }
          if (item[key].negativeint["30"] !== null) {
            elintneg30.style.background = "#ff7070";
            elintneg30e.style.background = "#ff7070";
            elintneg30Elem.style.display = "block";
            elintneg30Elem.title = item[key].negativeint["30"];
            elintneg30Elem.src = "../Assets/Elements/" + item[key].negativeint["30"] + ".png";
          }
          if (item[key].negativeint["20"] !== null) {
            elintneg20.style.background = "#ff7070";
            elintneg20e.style.background = "#ff7070";
            elintneg20Elem.style.display = "block";
            elintneg20Elem.title = item[key].negativeint["20"];
            elintneg20Elem.src = "../Assets/Elements/" + item[key].negativeint["20"] + ".png";
          }
          if (item[key].negativeint["10"] !== null) {
            elintneg10.style.background = "#ff7070";
            elintneg10e.style.background = "#ff7070";
            elintneg10Elem.style.display = "block";
            elintneg10Elem.title = item[key].negativeint["10"];
            elintneg10Elem.src = "../Assets/Elements/" + item[key].negativeint["10"] + ".png";
          }

          if (item[key].positiveint["50"] !== null) {
            elintpos50.style.background = "#92ff70";
            elintpos50e.style.background = "#92ff70";
            elintpos50Elem.style.display = "block";
            elintpos50Elem.title = item[key].positiveint["50"];
            elintpos50Elem.src = "../Assets/Elements/" + item[key].positiveint["50"] + ".png";
          }
          if (item[key].positiveint["40"] !== null) {
            elintpos40.style.background = "#92ff70";
            elintpos40e.style.background = "#92ff70";
            elintpos40Elem.style.display = "block";
            elintpos40Elem.title = item[key].positiveint["40"];
            elintpos40Elem.src = "../Assets/Elements/" + item[key].positiveint["40"] + ".png";
          }
          if (item[key].positiveint["30"] !== null) {
            elintpos30.style.background = "#92ff70";
            elintpos30e.style.background = "#92ff70";
            elintpos30Elem.style.display = "block";
            elintpos30Elem.title = item[key].positiveint["30"];
            elintpos30Elem.src = "../Assets/Elements/" + item[key].positiveint["30"] + ".png";
          }
          if (item[key].positiveint["20"] !== null) {
            elintpos20.style.background = "#92ff70";
            elintpos20e.style.background = "#92ff70";
            elintpos20Elem.style.display = "block";
            elintpos20Elem.title = item[key].positiveint["20"];
            elintpos20Elem.src = "../Assets/Elements/" + item[key].positiveint["20"] + ".png";
          }
          if (item[key].positiveint["10"] !== null) {
            elintpos10.style.background = "#92ff70";
            elintpos10e.style.background = "#92ff70";
            elintpos10Elem.style.display = "block";
            elintpos10Elem.title = item[key].positiveint["10"];
            elintpos10Elem.src = "../Assets/Elements/" + item[key].positiveint["10"] + ".png";
          }

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          if (item[key].name !== null) {
            cardName.style.display = "block";
          };
          console.log(item[key].archetype);
          if (item[key].archetype !== null) {
            cardArche.style.display = "block";
          };
          console.log(item[key].ability);
          if (item[key].ability !== null) {
            cardAbility.style.display = "block";
          };
          if (item[key].caninteract == true) {
            elIntall.style.display = "block";
          };
          console.log(item[key].series);
          if (item[key].series !== null) {
            cardSeries.style.display = "block";
          };
          console.log(item[key].copyright);
          if (item[key].copyright !== null) {
            cardCopyright.style.display = "block";
          };
        }
        if (["Summon", "Enhanced Summon"].includes(item[key].archetype)) {
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--" + item[key].element + "m)";
          htmlbody.style.background = "var(--" + item[key].element + "s)";
          let bac ="var(--" + item[key].element + "m)";

          filterButtons.forEach((item) => {
            item.style.background = bac;
          });
          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          fillelement(1, item[key].element, cardElement)
          cardAbility.innerHTML = item[key].ability;

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;
          cardRCost.innerHTML = "Timer - " + item[key].rcost;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          if (item[key].name !== null) {
            cardName.style.display = "block";
          };
          console.log(item[key].archetype);
          if (item[key].archetype !== null) {
            cardArche.style.display = "block";
          };
          console.log(item[key].element);
          if (item[key].element !== null) {
            cardElement.style.display = "block";
          };

          console.log(item[key].ability);
          if (item[key].ability !== null) {
            cardAbility.style.display = "block";
          };
          console.log(item[key].series);
          if (item[key].series !== null) {
            cardSeries.style.display = "block";
          };
          console.log(item[key].copyright);
          if (item[key].copyright !== null) {
            cardCopyright.style.display = "block";
          };
          console.log(item[key].rcost);
          if (item[key].rcost !== null) {
            cardRCost.style.display = "block";
          };
        }
      }
    }
  }
});

  } catch (error) {
    console.log(error);
  }

  console.log(url);
}

function fillelement(numLoops, element, location){
  for (let i = 0; i < numLoops; i++) {
    const newelem = document.createElement('img');
    newelem.classList.add('elementalCost');
    location.appendChild(newelem);
    newelem.title = element;
    newelem.src = "../Assets/Elements/" + element + ".png"
  }
}

*/




//Window.onload

window.onload = async (event) => {
  productList.innerHTML = "";
  priceTotal.innerHTML = "Running Total: $0.00";
  const data = await studentBarcodes(); // await the async function
  console.log(data);
};
