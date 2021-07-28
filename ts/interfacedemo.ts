interface Mark {
  subject: string;
  score: number;
}

class Student {
  marksheet: Mark[] = [
    {
      score: 87,
      subject: "English",
    },
    {
      score: 77,
      subject: "Marathi",
    },
    {
      score: 88,
      subject: "Science",
    },
  ];

  printMarksheet() {
    console.log("markseet: ", this.marksheet);
  }
}

interface CartItem {
  productName: string;
  qty: number;
  price: number;
  inStock?: boolean;
}
interface Address {
  flatNo: string;
  bldg: string;
  street: string;
  pincode: string;
  locality: string;
  city: string;
  state: string;
  addressType: ADDRESS_TYPE;
}

enum ADDRESS_TYPE {
  "home" = "home",
  "office" = "office",
  "other" = "other",
}

class Customer {
  //cartItems: CartItem[] = [];
  cartItems: CartItem[];
  name: string;
  addresses: Address[] = [];

  addAdress(address: Address) {
    this.addresses.push(address);
  }

  addToCart(cartItem: CartItem) {
    this.cartItems === undefined ? (this.cartItems = []) : null;
    this.cartItems.push(cartItem);
  }

  getAddress() {
    console.log("Addresses are", this.addresses);
  }
  checkout() {
    console.log("total Cart View:", this.cartItems);
  }

  deliverShipment(address: Address) {
    //check if it can be delivered or not
    let deliveryList:  string[] = this.getAllDeliveryPoint();
    let result=deliveryList.findIndex((code) => {
      return code == address.pincode
    });

    console.log(result);

    
    switch (address.addressType) {
      case "home":
        console.log("Delivering to customer home");
        break;
      case "office":
        console.log("Delivering to customer office");
        break;
      case "other":
        console.log("Delivering to customer other address");
        break;
      default:
        console.log("Not sure where to deliver");
        break;
    }
  }

  isDeliverable() {
    //todo: communicate with RESTAPI to return true or false
  }

  getAllDeliveryPoint(): string[] {
    //code to fetch list from server
    const pincodes: string[] = [
      "401101",
      "401107",
      "401098",
      "847473",
      "766601",
      "049483",
    ];

    return pincodes;

    //TODO : fetch list from server - backend API
  }
}

const chandan = new Student();

chandan.printMarksheet();

const custObj = new Customer();
custObj.addToCart({
  price: 899,
  productName: "Mobile X",
  qty: 89,
  inStock: true,
});
custObj.checkout();

let add: Address = {
  bldg: "15",
  city: "Thane",
  flatNo: "101",
  locality: "Mira Road",
  pincode: "401107",
  state: "MH",
  street: "PK Street",
  addressType: ADDRESS_TYPE.other,
};
custObj.addAdress(add);
custObj.getAddress();
custObj.deliverShipment(add);