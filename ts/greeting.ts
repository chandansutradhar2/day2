class Greeting {
  greet(): void {
    console.log("Hello World!!!");
  }

  wish(timestamp: string): string {
    return `Hey, Good ${timestamp}`;
  }

  showType(sampleType: any) {
    let somevar: string = "";

    if (typeof sampleType == "string") {
      console.log("String type");
    } else if (typeof sampleType == "number") {
      console.log("Number type");
    } else if (typeof sampleType == "boolean") {
      console.log("Boolean type");
    } else {
      console.log(typeof sampleType);
    }
  }
}

function arrayExample() {
  let products: string[]; //arrayname : datatype [];
  let marks: number[];
  let databaseResponse: any[];
  //init array
  //at declartion time
  let prdts: string[] = ["p1", "p2", "p3"];
  products = ["pr1", "pr2", "pr3"];
  products.push("p4");
  products.forEach((ele) => {
    console.log(ele);
  });

  console.log(products.length);

}

// let obj = new Greeting();
// console.log(obj.wish("night"));
// obj.showType(null);
arrayExample();
