export class Phone {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
  carrier: string;
  snippet: string;
  description: string;
  connectivity: {
    bluetooth: string,
    cell: string,
    gps: number
  }
}
