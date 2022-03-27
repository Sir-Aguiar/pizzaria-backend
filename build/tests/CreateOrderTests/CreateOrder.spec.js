"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateOrder_1 = require("../../src/Order/CreateOrder/CreateOrder");
const order_data_test_1 = require("./order_data_test");
jest.setTimeout(20000);
test("Should insert order", async () => {
    const Order = new CreateOrder_1.CreateOrder(order_data_test_1.Order_1);
    expect(await Order.execute(true)).toBeTruthy();
});
