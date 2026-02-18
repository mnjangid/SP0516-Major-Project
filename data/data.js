

export const imsData = {
  users: [
    { role: "store-manager", name: "Store Manager" },
    { role: "warehouse-staff", name: "Warehouse Staff" },
    { role: "regional-officer", name: "Regional Officer" }
  ],

  stores: [
    { id: "storeA", name: "Store A", city: "Jodhpur" },
    { id: "storeB", name: "Store B", city: "Jodhpur" },
    { id: "storeC", name: "Store C", city: "Jodhpur" },
    { id: "storeD", name: "Store D", city: "Jodhpur" },
    { id: "storeE", name: "Store E", city: "Jodhpur" }
  ],

  products: [
    { id: "hoodie1", name: "Hoodie Type 1", category: "Hoodie" },
    { id: "hoodie2", name: "Hoodie Type 2", category: "Hoodie" },
    { id: "hoodie3", name: "Hoodie Type 3", category: "Hoodie" },
    { id: "hoodie4", name: "Hoodie Type 4", category: "Hoodie" },

    { id: "shirt1", name: "Shirt Type 1", category: "Shirt" },
    { id: "shirt2", name: "Shirt Type 2", category: "Shirt" },
    { id: "shirt3", name: "Shirt Type 3", category: "Shirt" },
    { id: "shirt4", name: "Shirt Type 4", category: "Shirt" },

    { id: "jeans1", name: "Jeans Type 1", category: "Jeans" },
    { id: "jeans2", name: "Jeans Type 2", category: "Jeans" },
    { id: "jeans3", name: "Jeans Type 3", category: "Jeans" },
    { id: "jeans4", name: "Jeans Type 4", category: "Jeans" },

    { id: "tshirt1", name: "T-shirt Type 1", category: "T-shirt" },
    { id: "tshirt2", name: "T-shirt Type 2", category: "T-shirt" },
    { id: "tshirt3", name: "T-shirt Type 3", category: "T-shirt" },
    { id: "tshirt4", name: "T-shirt Type 4", category: "T-shirt" },

    { id: "pants1", name: "Pant Type 1", category: "Pants" },
    { id: "pants2", name: "Pant Type 2", category: "Pants" },
    { id: "pants3", name: "Pant Type 3", category: "Pants" },
    { id: "pants4", name: "Pant Type 4", category: "Pants" }
  ],

  inventory: [
    {
      storeId: "storeA",
      items: [
        { productId: "hoodie1", quantity: 180 },
        { productId: "hoodie2", quantity: 200 },
        { productId: "hoodie3", quantity: 80 },
        { productId: "hoodie4", quantity: 70 },
        { productId: "shirt1", quantity: 70 },
        { productId: "shirt2", quantity: 100 },
        { productId: "shirt3", quantity: 50 },
        { productId: "shirt4", quantity: 40 },
        { productId: "jeans1", quantity: 80 },
        { productId: "jeans2", quantity: 70 },
        { productId: "jeans3", quantity: 60 },
        { productId: "jeans4", quantity: 50 },
        { productId: "tshirt1", quantity: 110 },
        { productId: "tshirt2", quantity: 100 },
        { productId: "tshirt3", quantity: 30 },
        { productId: "tshirt4", quantity: 40 },
        { productId: "pants1", quantity: 20 },
        { productId: "pants2", quantity: 75 },
        { productId: "pants3", quantity: 0 },
        { productId: "pants4", quantity: 820 }
      ]
    },

    {
      storeId: "storeB",
      items: [
        { productId: "hoodie1", quantity: 120 },
        { productId: "hoodie2", quantity: 110 },
        { productId: "hoodie3", quantity: 110 },
        { productId: "hoodie4", quantity: 80 },
        { productId: "shirt1", quantity: 80 },
        { productId: "shirt2", quantity: 70 },
        { productId: "shirt3", quantity: 60 },
        { productId: "shirt4", quantity: 50 },
        { productId: "jeans1", quantity: 70 },
        { productId: "jeans2", quantity: 140 },
        { productId: "jeans3", quantity: 130 },
        { productId: "jeans4", quantity: 40 },
        { productId: "tshirt1", quantity: 120 },
        { productId: "tshirt2", quantity: 110 },
        { productId: "tshirt3", quantity: 130 },
        { productId: "tshirt4", quantity: 10 },
        { productId: "pants1", quantity: 20 },
        { productId: "pants2", quantity: 75 },
        { productId: "pants3", quantity: 0 },
        { productId: "pants4", quantity: 820 }
      ]
    },

    {
      storeId: "storeC",
      items: [
        { productId: "hoodie1", quantity: 180 },
        { productId: "hoodie2", quantity: 200 },
        { productId: "hoodie3", quantity: 80 },
        { productId: "hoodie4", quantity: 70 },
        { productId: "shirt1", quantity: 70 },
        { productId: "shirt2", quantity: 100 },
        { productId: "shirt3", quantity: 50 },
        { productId: "shirt4", quantity: 40 },
        { productId: "jeans1", quantity: 80 },
        { productId: "jeans2", quantity: 70 },
        { productId: "jeans3", quantity: 60 },
        { productId: "jeans4", quantity: 50 },
        { productId: "tshirt1", quantity: 110 },
        { productId: "tshirt2", quantity: 100 },
        { productId: "tshirt3", quantity: 30 },
        { productId: "tshirt4", quantity: 40 },
        { productId: "pants1", quantity: 20 },
        { productId: "pants2", quantity: 75 },
        { productId: "pants3", quantity: 0 },
        { productId: "pants4", quantity: 820 }
      ]
    },

    {
      storeId: "storeD",
      items: [
        { productId: "hoodie1", quantity: 20 },
        { productId: "hoodie2", quantity: 35 },
        { productId: "hoodie3", quantity: 80 },
        { productId: "hoodie4", quantity: 80 },
        { productId: "shirt1", quantity: 30 },
        { productId: "shirt2", quantity: 50 },
        { productId: "shirt3", quantity: 80 },
        { productId: "shirt4", quantity: 80 },
        { productId: "jeans1", quantity: 85 },
        { productId: "jeans2", quantity: 90 },
        { productId: "jeans3", quantity: 180 },
        { productId: "jeans4", quantity: 50 },
        { productId: "tshirt1", quantity: 80 },
        { productId: "tshirt2", quantity: 45 },
        { productId: "tshirt3", quantity: 40 },
        { productId: "tshirt4", quantity: 80 },
        { productId: "pants1", quantity: 20 },
        { productId: "pants2", quantity: 75 },
        { productId: "pants3", quantity: 0 },
        { productId: "pants4", quantity: 820 }
      ]
    },

    {
      storeId: "storeE",
      items: [
        { productId: "hoodie1", quantity: 120 },
        { productId: "hoodie2", quantity: 110 },
        { productId: "hoodie3", quantity: 110 },
        { productId: "hoodie4", quantity: 80 },
        { productId: "shirt1", quantity: 80 },
        { productId: "shirt2", quantity: 70 },
        { productId: "shirt3", quantity: 60 },
        { productId: "shirt4", quantity: 50 },
        { productId: "jeans1", quantity: 70 },
        { productId: "jeans2", quantity: 140 },
        { productId: "jeans3", quantity: 130 },
        { productId: "jeans4", quantity: 40 },
        { productId: "tshirt1", quantity: 120 },
        { productId: "tshirt2", quantity: 110 },
        { productId: "tshirt3", quantity: 130 },
        { productId: "tshirt4", quantity: 10 }
      ]
    }
  ],

  packRequests: [
    {
      requestId: "REQ-101",
      store: "Store A",
      items: ["Hoodie Type 3", "Shirt Type 1", "Pants Type 3"],
      quantities: [100, 50, 70],
      priority: "High"
    },
    {
      requestId: "REQ-102",
      store: "Store B",
      items: ["Hoodie Type 4", "Shirt Type 3", "Pants Type 1"],
      quantities: [50, 30, 10],
      priority: "Medium"
    },
    {
      requestId: "REQ-103",
      store: "Store C",
      items: ["Hoodie Type 2", "T-shirt Type 3"],
      quantities: [10, 5],
      priority: "Urgent"
    },
    {
      requestId: "REQ-104",
      store: "Store D",
      items: ["Hoodie Type 3", "T-shirt Type 4", "Jeans Type 2"],
      quantities: [15, 2, 7],
      priority: "Urgent"
    },
    {
      requestId: "REQ-105",
      store: "Store E",
      items: ["Pants Type 2", "Shirt Type 3", "Jeans Type 3"],
      quantities: [20, 19, 16],
      priority: "Low"
    }
  ]
};
