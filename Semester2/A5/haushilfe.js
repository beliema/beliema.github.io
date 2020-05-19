//Alles zum Warenkorb hinzufügen
function addToCart(){

var e = document.getElementById("articledropdown");
var artikel = e.options[e.selectedIndex].text;

var i = document.getElementById("wheretoget");
var where = i.options[e.selectedIndex].text;

var amount = document.getElementById("howmuch").value;


  document.getElementById("amountend").innerHTML = amount;
  document.getElementById("productend").innerHTML = artikel;
  document.getElementById("whereend").innerHTML = where;
}

// Knopf Funktionen
function showGrocery() {
  var checkBox = document.getElementById("gamemode1");
  var text = document.getElementById("groceryinput");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


function showChores() {
  var checkBox = document.getElementById("gamemode2");
  var text = document.getElementById("choreInput");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showFinances() {
  var checkBox = document.getElementById("gamemode3");
  var text = document.getElementById("financeInput");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

//Dropdown Produkt Groceries
$(function() {
  var data = [
    {
      "product": "",
      "id": "0",
      "price": "",
      "place": "",
    },
    {
      "product": "Toilettenpapier",
      "id": "1",
      "price": "20",
      "place": "Edeka",
      },
      {
      "product": "Desinfektionsmittel",
      "id": "2",
      "price": "200",
      "place": "Lidl",
      }
  ];
  $.each(data, function(i, option) {
      $('#articledropdown').append($('<option/>').attr("value", option.id).text(option.product));
  });
  $.each(data, function(i, option) {
    $('#wheretoget').append($('<option/>').attr("value", option.id).text(option.place));
  });
})

//Alles zum Warenkorb hinzufügen (Chores)
function addToCartChores(){

  var e = document.getElementById("newtask");
  var artikel = e.options[e.selectedIndex].text;
  
  var i = document.getElementById("setpayment");
  var where = i.options[e.selectedIndex].text;
  
  var amount = document.getElementById("setpayment").value;
  
  
    document.getElementById("amountend").innerHTML = amount;
    document.getElementById("productend").innerHTML = artikel;
    document.getElementById("whereend").innerHTML = where;
  }

//Slider-Value 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.innerHTML = this.value;
} 


//Dropdown Chores
$(function() {
  var dataChores = [
    {
      "task": "",
      "id": "0",
      "payment": "",
    },
    {
      "task": "mow the lawn",
      "id": "1",
      "payment": "15.00",
      },
      {
      "task": "clean a room",
      "id": "2",
      "price": "5.00",
      },
      {
        "task": "walk the dog",
        "id": "3",
        "price": "10.00",
        },
      {
        "task": "wash the car",
        "id": "4",
        "price": "20.00",
          },
  ];
  $.each(dataChores, function(i, option) {
      $('#newtask').append($('<option/>').attr("value", option.id).text(option.task));
  });
  
})
