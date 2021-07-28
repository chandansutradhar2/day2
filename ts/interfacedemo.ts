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
  pinCode: string;
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
  checkout() {
    console.log("total Cart View:", this.cartItems);
  }
}

// const chandan = new Student();
// chandan.printMarksheet();

const custObj = new Customer();

custObj.addToCart("Mobile X", 18500, 2);
custObj.addToCart("Mobile Y", 1800, 1);
custObj.addToCart("Mobile Z", 500, 5);
custObj.addToCart("Mobile A", 900, 19, false);
custObj.addToCart("Mobile B", 930, 6);
custObj.checkout();
