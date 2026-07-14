const PRODUCTS = 
[
    {
        id: 1,
        sku: "SB1001",
        name: "Black Roof Tiles",
        category: "Roofing",
        brand: "Smart Build",
        price: 11.99,
        discount: 0,
        stock: 4550,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/roof-tileB.png",
        featuredImage: "./img/roof-tileB.png",
        images: 
        [
            "./img/roof-tileB.png"
        ],
        description: "Premium black roof tiles designed for long-lasting durability and modern finishes.",
        rating: 5,
        reviews: 0
    },

    {
        id: 2,
        sku: "SB1002",
        name: "Red Roof Tiles",
        category: "Roofing",
        brand: "Smart Build",
        price: 10.99,
        discount: 0,
        stock: 6000,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/roof-tileR.png",
        featuredImage: "./img/roof-tileR.png",
        images: 
        [
            "./img/roof-tileR.png"
        ],
        description: "Premium red roof tiles that provide strength, weather resistance and an attractive finish.",
        rating: 5,
        reviews: 0
    },

    {
        id: 3,
        sku: "SB1003",
        name: "Black Ridge Corner",
        category: "Roofing",
        brand: "Smart Build",
        price: 22.99,
        discount: 0,
        stock: 980,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/ridge-cornerB.png",
        featuredImage: "./img/ridge-cornerB.png",
        images: 
        [
            "./img/ridge-cornerB.png"
        ],
        description: "Black ridge corner designed to provide a neat and durable roof ridge finish.",
        rating: 5,
        reviews: 0
    },

    {
        id: 4,
        sku: "SB1004",
        name: "Red Ridge Corner",
        category: "Roofing",
        brand: "Smart Build",
        price: 19.99,
        discount: 0,
        stock: 800,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/ridge-cornerR.png",
        featuredImage: "./img/ridge-cornerR.png",
        images: 
        [
            "./img/ridge-cornerR.png"
        ],
        description: "High-quality red ridge corner offering secure roof protection and professional appearance.",
        rating: 5,
        reviews: 0
    },

    {
        id: 5,
        sku: "SB1005",
        name: "Black Ridges",
        category: "Roofing",
        brand: "Smart Build",
        price: 25.99,
        discount: 0,
        stock: 6500,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/ridgeB.png",
        featuredImage: "./img/ridgeB.png",
        images: 
        [
            "./img/ridgeB.png"
        ],
        description: "Durable black roof ridges designed to complete roofing installations with a clean finish.",
        rating: 5,
        reviews: 0
    },

    {
        id: 6,
        sku: "SB1006",
        name: "Red Ridges",
        category: "Roofing",
        brand: "Smart Build",
        price: 23.99,
        discount: 0,
        stock: 5000,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/ridgeR.png",
        featuredImage: "./img/ridgeR.png",
        images: 
        [
            "./img/ridgeR.png"
        ],
        description: "Reliable red roof ridges built for long-lasting roof protection and style.",
        rating: 5,
        reviews: 0
    },

    {
        id: 7,
        sku: "SB1007",
        name: "Roof Sheet",
        category: "Roofing",
        brand: "Smart Build",
        price: 289.99,
        discount: 0,
        stock: 400,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/roof-sheet.png",
        featuredImage: "./img/roof-sheet.png",
        images: 
        [
            "./img/roof-sheet.png"
        ],
        description: "Heavy-duty roofing sheets suitable for residential, commercial and industrial buildings.",
        rating: 5,
        reviews: 0
    },

    {
        id: 8,
        sku: "SB1008",
        name: "Column Header/Footer",
        category: "Concrete Products",
        brand: "Smart Build",
        price: 274.99,
        discount: 0,
        stock: 365,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/column-head.png",
        featuredImage: "./img/column-head.png",
        images: 
        [
            "./img/column-head.png"
        ],
        description: "Precast concrete column header and footer for strong structural support.",
        rating: 5,
        reviews: 0
    },

    {
        id: 9,
        sku: "SB1009",
        name: "Building Column",
        category: "Concrete Products",
        brand: "Smart Build",
        price: 599.99,
        discount: 0,
        stock: 220,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/column.png",
        featuredImage: "./img/column.png",
        images: 
        [
            "./img/column.png"
        ],
        description: "High-strength reinforced concrete building column for structural applications.",
        rating: 5,
        reviews: 0
    },

    {
        id: 10,
        sku: "SB1010",
        name: "Lintel Concrete",
        category: "Concrete Products",
        brand: "Smart Build",
        price: 164.99,
        discount: 0,
        stock: 1000,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/lintel.png",
        featuredImage: "./img/lintel.png",
        images: 
        [
            "./img/lintel.png"
        ],
        description: "Strong concrete lintels designed to support doors, windows and structural openings.",
        rating: 5,
        reviews: 0
    },

    {
        id: 11,
        sku: "SB1011",
        name: "River Sand",
        category: "Sand & Aggregates",
        brand: "Smart Build",
        price: 1999.99,
        discount: 0,
        stock: 200,
        unit: "Ton",
        status: "In Stock",
        featured: true,
        image: "../img/river-sand.png",
        featuredImage: "./img/river-sand.png",
        images: 
        [
            "./img/river-sand.png"
        ],
        description: "Premium river sand ideal for concrete mixing, bricklaying and construction projects.",
        rating: 5,
        reviews: 0
    },

    {
        id: 12,
        sku: "SB1012",
        name: "Plastering Sand",
        category: "Sand & Aggregates",
        brand: "Smart Build",
        price: 1699.99,
        discount: 0,
        stock: 350,
        unit: "Ton",
        status: "In Stock",
        featured: true,
        image: "../img/plastering-sand.png",
        featuredImage: "./img/plastering-sand.png",
        images: 
        [
            "./img/plastering-sand.png"
        ],
        description: "Fine plastering sand suitable for smooth wall finishes and quality plaster work.",
        rating: 5,
        reviews: 0
    },

    {
        id: 13,
        sku: "SB1013",
        name: "Cement Bricks",
        category: "Bricks & Blocks",
        brand: "Smart Build",
        price: 3.99,
        discount: 0,
        stock: 20000,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/cement-brick.png",
        featuredImage: "./img/cement-brick.png",
        images: 
        [
            "./img/cement-brick.png"
        ],
        description: "Durable cement bricks suitable for residential and commercial construction.",
        rating: 5,
        reviews: 0
    },

    {
        id: 14,
        sku: "SB1014",
        name: "Face Bricks",
        category: "Bricks & Blocks",
        brand: "Smart Build",
        price: 3.99,
        discount: 0,
        stock: 12200,
        unit: "Each",
        status: "In Stock",
        featured: true,
        image: "../img/face-brick.png",
        featuredImage: "./img/face-brick.png",
        images: 
        [
            "./img/face-brick.png"
        ],
        description: "Decorative face bricks offering an attractive finish with exceptional durability.",
        rating: 5,
        reviews: 0
    },

    {
        id: 15,
        sku: "SB1015",
        name: "Steel Nails",
        category: "Hardware",
        brand: "Smart Build",
        price: 39.99,
        discount: 0,
        stock: 610,
        unit: "Box",
        status: "In Stock",
        featured: true,
        image: "../img/nails.png",
        featuredImage: "./img/nails.png",
        images: 
        [
            "./img/nails.png"
        ],
        description: "High-strength steel nails suitable for roofing, timber and general construction work.",
        rating: 5,
        reviews: 0
    },

    {
        id: 16,
        sku: "SB1016",
        name: "Oxide Cement Powder",
        category: "Construction Materials",
        brand: "Smart Build",
        price: 39.99,
        discount: 0,
        stock: 200,
        unit: "Bag",
        status: "In Stock",
        featured: true,
        image: "../img/oxide.png",
        featuredImage: "./img/oxide.png",
        images: 
        [
            "./img/oxide.png"
        ],
        description: "Quality oxide cement powder used for colouring concrete, paving and flooring projects.",
        rating: 5,
        reviews: 0
    }
];