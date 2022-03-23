import { CreateOrder } from "../../src/Order/CreateOrder/CreateOrder";
import { Order_1 } from "./order_data_test";

jest.setTimeout(20000)

test("Should insert order", async () => {
  const Order = new CreateOrder(Order_1);
  expect(await Order.execute(true)).toBeTruthy();
});
