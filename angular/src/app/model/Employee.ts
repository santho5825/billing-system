export class Employee {
   id: string;
   billAmount: string;
   items:billItems;
   date:Date;
   name:String;
   ​phoneNumber:Number;
}

export class billItems{
   itemName: string;
   itemQuantity: number;
   itemPrice:number;
   itemTotal:Number;   
}