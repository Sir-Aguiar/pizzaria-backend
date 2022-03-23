export class Order implements IOrder {
  public readonly id: string;
  public readonly client: string;
  public readonly description: string;
  public readonly price: number;
  public readonly created_at: Date;
  public readonly location: Locale;
  public items: Item[];

  constructor(props: OrderDTO) {
    this.id = props.id;
    this.client = props.client;
    this.description = props.description;
    this.price = props.price;
    this.created_at = props.created_at;
    this.items = props.items;
    this.location = props.location;
  }

  public async Perform(): Promise<void> {}
}
