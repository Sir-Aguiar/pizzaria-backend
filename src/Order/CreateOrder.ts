import { Order } from "../entities/OrderEntitie";

const CreateNewOrder = async (orderInfos: OrderDTO) => {
  const order = new Order(orderInfos);
  
};

export { CreateNewOrder };
