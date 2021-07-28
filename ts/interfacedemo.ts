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
}

// const chandan = new Student();
// chandan.printMarksheet();

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
};
custObj.addAdress(add);
custObj.getAddress();