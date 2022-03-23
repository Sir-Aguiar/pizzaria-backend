import uniqid from 'uniqid'
export const Order_1 = {
  client: "Felipe",
  created_at: new Date(),
  description: "Uma pizza de calabresa grande",
  items: [
    {
      description: "A",
      name: "a",
      price: 45.6,
      product_id: "123",
    },
  ],
  location: {
    bairro: "Carumbé",
    casa: "30",
    reference: "Portões vermelhos",
    rua: "Frei Emiliano Monteiro",
  },
  order_id: uniqid(),
  price: 50.5,
}
