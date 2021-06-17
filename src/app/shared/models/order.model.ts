export class OrderModel {
  constructor(
    public orderName: string,
    public orderNumber: string,
    public starterOrder: string,
    public mainOrder: string,
    public dessertOrder: string
  ) {}
}
