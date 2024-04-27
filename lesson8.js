// ex 1
// function createNameElement(firstName, lastName) {
//     let divElement = document.createElement("div");

//    let paragraph1 = document.createElement("p");
//     paragraph1.style.color = "red";
//     paragraph1.style.fontSize = "30px";
//     paragraph1.style.textDecoration = "underline";
//     paragraph1.textContent = firstName;

//      let paragraph2 = document.createElement("p");
//     paragraph2.style.fontSize = "50px";
//     paragraph2.style.border = "1px solid black";
//     paragraph2.textContent = lastName;

//     divElement.appendChild(paragraph1);
//     divElement.appendChild(paragraph2);

//     document.body.appendChild(divElement);
// }

//  createNameElement("Mazi" ,"Yoni");

// ex2
// pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
const products = [
  { name: "jeans", description: "comfortable", price: 100 },
  { name: "shoses", description: "brown", price: 150 },
  { name: "shirt", description: "short", price: 120 },
  { name: "panse", description: "work", price: 80 },
];



function displayProducts(price) {
  let productsDiv=document.getElementById("products");
  productsDiv.innerHTML = "demo";

  products.forEach((product) => {
    if (product.price <= price) {
      let productDiv = document.createElement("div");
      productDiv.innerHTML = ` <h3>${product.name}</h3>
                                <p>${product.description}</p>
                                <p> price: ${product.price} IL </p>`;
                                const productsDiv = document.getElementById("products");

      productsDiv.appendChild(productDiv);
    }
  });
}

document.getElementById("priceInput").addEventListener("input", function () {
  displayProducts(document.getElementById("priceInput").value);
});

// ex3
//   ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// ============================================
class Drive {
  constructor(name, date, kmDriven) {
    this.name = name;
    this.date = date;
    this.kmDriven = kmDriven;
  }
}

let drive1 = new Drive("Moshe", "9.1", 32000);
let drive2 = new Drive("Mishel", "13.1", 7000);
let drive3 = new Drive("Noa", "6.3", 60000);

// ========================================
class Car {
  constructor(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.drivesArr = []; 
    this.status = true;
    this.totalKm = 0;
  }

  addNewDrive(drive) {
    this.drivesArr.push(drive);
    this.status = false;
    this.totalKm += drive.kmDriven;
    return this.totalKm;
  }
}
//  -----------------------------------
let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");
let car3 = new Car("Skoda", "Octavia");
let carFree = new Car("BMW", "X5");

car1.addNewDrive(drive1);
car1.addNewDrive(drive2);
car1.addNewDrive(drive3);
car2.addNewDrive(drive2);
car3.addNewDrive(drive3);

console.log(car1);

// ============================================
class CompanyCar {
  constructor(rental) {
    this.rental = rental;
    this.allCarsArr = [];
  }

  addNewCar(car) {
    this.allCarsArr.push(car);
  }

  highestKm() {
    let max = this.allCarsArr[0];
    this.allCarsArr.forEach((val) => {
      if (max.totalKm < val.totalKm) {
        max = val;
      }
    });
    return max;
  }

  getAvailableCars() {
    this.allCarsArr.forEach((val) => {
      if (val.status == true) console.log(val);
    });
  }
}

let company1 = new CompanyCar("Avis");
let company2 = new CompanyCar("budjet");
let company3 = new CompanyCar("europe car");
let company4 = new CompanyCar("Avis");

company1.addNewCar(car1);
company2.addNewCar(car2);
company3.addNewCar(car3);
company4.addNewCar(carFree);

console.log(company1.highestKm());
