



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
    { id: "hoodie1", name: "Hoodie Type 1", category: "Hoodie", quantity: "30"},
    { id: "hoodie2", name: "Hoodie Type 2", category: "Hoodie", quantity: "100" },
    { id: "hoodie3", name: "Hoodie Type 3", category: "Hoodie", quantity: "150" },
    { id: "hoodie4", name: "Hoodie Type 4", category: "Hoodie", quantity: "80"},

    { id: "shirt1", name: "Shirt Type 1", category: "Shirt", quantity: "500" },
    { id: "shirt2", name: "Shirt Type 2", category: "Shirt", quantity: "100" },
    { id: "shirt3", name: "Shirt Type 3", category: "Shirt", quantity: "30" },
    { id: "shirt4", name: "Shirt Type 4", category: "Shirt", quantity: "30" },

    { id: "jeans1", name: "Jeans Type 1", category: "Jeans", quantity: "50" },
    { id: "jeans2", name: "Jeans Type 2", category: "Jeans", quantity: "35" },
    { id: "jeans3", name: "Jeans Type 3", category: "Jeans", quantity: "50" },
    { id: "jeans4", name: "Jeans Type 4", category: "Jeans", quantity: "10" },

    { id: "tshirt1", name: "T-shirt Type 1", category: "T-shirt", quantity: "70" },
    { id: "tshirt2", name: "T-shirt Type 2", category: "T-shirt", quantity: "25" },
    { id: "tshirt3", name: "T-shirt Type 3", category: "T-shirt", quantity: "75" },
    { id: "tshirt4", name: "T-shirt Type 4", category: "T-shirt", quantity: "70" },

    { id: "pants1", name: "Pant Type 1", category: "Pants", quantity: "80" },
    { id: "pants2", name: "Pant Type 2", category: "Pants", quantity: "38" },
    { id: "pants3", name: "Pant Type 3", category: "Pants", quantity: "40" },
    { id: "pants4", name: "Pant Type 4", category: "Pants", quantity: "20" }
  ],

  inventory: [
    {
      storeId: "storeA",
      items: [
        { productId: "hoodie1", quantity: 180, inbound:40},
        { productId: "hoodie2", quantity: 200, inbound:40},
        { productId: "hoodie3", quantity: 80, inbound:40},
        { productId: "hoodie4", quantity: 70, inbound:40},
        { productId: "shirt1", quantity: 70, inbound:40},
        { productId: "shirt2", quantity: 100, inbound:40 },
        { productId: "shirt3", quantity: 50, inbound:40 },
        { productId: "shirt4", quantity: 40, inbound:40 },





    
        { productId: "jeans1", quantity: 80, inbound:40 },
        { productId: "jeans2", quantity: 70, inbound:40 },
        { productId: "jeans3", quantity: 60, inbound:40 },
        { productId: "jeans4", quantity: 50, inbound:40 },
        { productId: "tshirt1", quantity: 110, inbound:40 },
        { productId: "tshirt2", quantity: 100, inbound:40 },
        { productId: "tshirt3", quantity: 30, inbound:40 },
        { productId: "tshirt4", quantity: 40, inbound:40 },
        { productId: "pants1", quantity: 20 , inbound:40},
        { productId: "pants2", quantity: 75, inbound:40 },
        { productId: "pants3", quantity: 0, inbound:40 },
        { productId: "pants4", quantity: 820, inbound:40 }
      ]
    },

    {
      storeId: "storeB",
      items: [
        { productId: "hoodie1", quantity: 120 , inbound:40},
        { productId: "hoodie2", quantity: 110 , inbound:40},
        { productId: "hoodie3", quantity: 110 , inbound:40},
        { productId: "hoodie4", quantity: 80, inbound:40 },
        { productId: "shirt1", quantity: 80, inbound:40 },
        { productId: "shirt2", quantity: 70, inbound:40 },
        { productId: "shirt3", quantity: 60, inbound:40 },
        { productId: "shirt4", quantity: 50, inbound:40 },
        { productId: "jeans1", quantity: 70, inbound:40 },
        { productId: "jeans2", quantity: 140, inbound:40 },
        { productId: "jeans3", quantity: 130, inbound:40 },
        { productId: "jeans4", quantity: 40, inbound:40 },
        { productId: "tshirt1", quantity: 120, inbound:40 },
        { productId: "tshirt2", quantity: 110, inbound:40 },
        { productId: "tshirt3", quantity: 130, inbound:40 },
        { productId: "tshirt4", quantity: 10 , inbound:40},
        { productId: "pants1", quantity: 20, inbound:40 },
        { productId: "pants2", quantity: 75, inbound:40 },
        { productId: "pants3", quantity: 0 , inbound:40},
        { productId: "pants4", quantity: 820, inbound:40 }
      ]
    },

    {
      storeId: "storeC",
      items: [
        { productId: "hoodie1", quantity: 180 , inbound:40},
        { productId: "hoodie2", quantity: 200, inbound:40 },
        { productId: "hoodie3", quantity: 80, inbound:40 },
        { productId: "hoodie4", quantity: 70, inbound:40 },
        { productId: "shirt1", quantity: 70, inbound:40 },
        { productId: "shirt2", quantity: 100 , inbound:40},
        { productId: "shirt3", quantity: 50, inbound:40 },
        { productId: "shirt4", quantity: 40 , inbound:40},
        { productId: "jeans1", quantity: 80, inbound:40 },
        { productId: "jeans2", quantity: 70, inbound:40 },
        { productId: "jeans3", quantity: 60, inbound:40 },
        { productId: "jeans4", quantity: 50, inbound:40 },
        { productId: "tshirt1", quantity: 110, inbound:40 },
        { productId: "tshirt2", quantity: 100, inbound:40 },
        { productId: "tshirt3", quantity: 30 , inbound:40},
        { productId: "tshirt4", quantity: 40 , inbound:40},
        { productId: "pants1", quantity: 20, inbound:40 },
        { productId: "pants2", quantity: 75, inbound:40 },
        { productId: "pants3", quantity: 0 , inbound:40},
        { productId: "pants4", quantity: 820, inbound:40 }
      ]
    },

    {
      storeId: "storeD",
      items: [
        { productId: "hoodie1", quantity: 20, inbound:40 },
        { productId: "hoodie2", quantity: 35, inbound:40 },
        { productId: "hoodie3", quantity: 80, inbound:40 },
        { productId: "hoodie4", quantity: 80, inbound:40 },
        { productId: "shirt1", quantity: 30, inbound:40 },
        { productId: "shirt2", quantity: 50, inbound:40 },
        { productId: "shirt3", quantity: 80, inbound:40 },
        { productId: "shirt4", quantity: 80, inbound:40 },
        { productId: "jeans1", quantity: 85, inbound:40 },
        { productId: "jeans2", quantity: 90, inbound:40 },
        { productId: "jeans3", quantity: 180, inbound:40 },
        { productId: "jeans4", quantity: 50, inbound:40 },
        { productId: "tshirt1", quantity: 80, inbound:40 },
        { productId: "tshirt2", quantity: 45, inbound:40 },
        { productId: "tshirt3", quantity: 40, inbound:40 },
        { productId: "tshirt4", quantity: 80, inbound:40 },
        { productId: "pants1", quantity: 20 , inbound:40},
        { productId: "pants2", quantity: 75 , inbound:40},
        { productId: "pants3", quantity: 0 , inbound:40},
        { productId: "pants4", quantity: 820, inbound:40 }
      ]
    },

    {
      storeId: "storeE",
      items: [
        { productId: "hoodie1", quantity: 120 , inbound:40},
        { productId: "hoodie2", quantity: 110, inbound:40 },
        { productId: "hoodie3", quantity: 110, inbound:40 },
        { productId: "hoodie4", quantity: 80, inbound:40 },
        { productId: "shirt1", quantity: 80, inbound:40 },
        { productId: "shirt2", quantity: 70, inbound:40 },
        { productId: "shirt3", quantity: 60 , inbound:40},
        { productId: "shirt4", quantity: 50 , inbound:40},
        { productId: "jeans1", quantity: 70, inbound:40 },
        { productId: "jeans2", quantity: 140, inbound:40 },
        { productId: "jeans3", quantity: 130, inbound:40 },
        { productId: "jeans4", quantity: 40 , inbound:40},
        { productId: "tshirt1", quantity: 120, inbound:40 },
        { productId: "tshirt2", quantity: 110, inbound:40 },
        { productId: "tshirt3", quantity: 130, inbound:40 },
        { productId: "tshirt4", quantity: 10 , inbound:40}
      ]
    }
  ],

  packRequests: [
    {
      requestId: "REQ-101",
      store: "Store A",
      items: ["Hoodie Type 3", "Shirt Type 1", "Pants Type 3"],
      quantities: [100, 50, 70],
      priority: "High",
      status: "Pending"
    },
    {
      requestId: "REQ-102",
      store: "Store B",
      items: ["Hoodie Type 4", "Shirt Type 3", "Pants Type 1"],
      quantities: [50, 30, 10],
      priority: "Medium",
      status: "Pending"

    },
    {
      requestId: "REQ-103",
      store: "Store C",
      items: ["Hoodie Type 2", "T-shirt Type 3"],
      quantities: [10, 5],
      priority: "Urgent",
      status: "Pending"

    },
    {
      requestId: "REQ-104",
      store: "Store D",
      items: ["Hoodie Type 3", "T-shirt Type 4", "Jeans Type 2"],
      quantities: [15, 2, 7],
      priority: "Urgent",
      status: "Pending"

    },
    {
      requestId: "REQ-105",
      store: "Store E",
      items: ["Pants Type 2", "Shirt Type 3", "Jeans Type 3"],
      quantities: [20, 19, 16],
      priority: "Low",
      status: "Pending"

    }
  ]
};

// regional officer dashboard data 

     
export const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const datasets = [
    {
        label: 'Store A',
        data: [35, 45, 115, 50, 65, 40],
        backgroundColor: '#5b6abf'
    },
    {
        label: 'Store B',
        data: [50, 55, 65, 85, 95, 30],
        backgroundColor: '#e07b7b'
    },
    {
        label: 'Store C',
        data: [60, 75, 90, 100, 110, 100],
        backgroundColor: '#5bbfbf'
    },
    {
        label: 'Store D',
        data: [70, 80, 95, 105, 120, 125],
        backgroundColor: '#e0b85b'
    },
    {
        label: 'Store E',
        data: [40, 50, 60, 70, 85, 95],
        backgroundColor: '#5b8abf'
    }
];
