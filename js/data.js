const PRODUCTS = [
    // =========================================================
    // ROOF TILES
    // =========================================================
    {
        id: 1,
        sku: "RT-G-001",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",
        name: "Grey Roof Tile",
        category: "Roofing",
        subCategory: "Roof Tiles",
        brand: "Smart Build",
        unit: "Tile",
        costPrice: 8.99,
        price: 11.99,
        stock: 9550,
        reorderLevel: 2000,
        maxStock: 21150,
        featured: true,
        taxable: true,
        images: "../img/roof-tile-grey.png",
        description: "Premium concrete roof tile designed for long-lasting residential and commercial roofing.",
        specifications: 
        {
            colour: "Grey",
            material: "Concrete",
            dimensions: "420 × 330 mm",
            weight: "4 kg"
        },
        rating: 5,
        reviews: 0
    },

    {
        id: 2,
        sku: "RT-R-001",
        barcode: "",
        name: "Red Roof Tile",
        active: true,
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        category: "Roofing",
        subCategory: "Roof Tiles",
        brand: "Smart Build",
        unit: "Tile",
        costPrice: 7.99,
        price: 10.99,
        stock: 6000,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        images: "../img/roof-tile-red.png",
        description: "Durable concrete roof tile providing excellent weather resistance and a classic finish.",
        specifications: 
        {
            colour: "Red",
            material: "Concrete",
            dimensions: "420 × 330 mm",
            weight: "4 kg"
        },
        rating: 5,
        reviews: 0
    },

    // =========================================================
    // RIDGES
    // =========================================================
    {
        id: 3,
        sku: "RG-G-001",
        barcode: "",
        name: "Grey Ridge",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",
        category: "Roofing",
        subCategory: "Ridges",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 20.99,
        price: 25.99,
        stock: 6500,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: "../img/ridge-grey.png",
        description: "Concrete roof ridge providing a strong and attractive roof finish.",
        specifications: 
        {
            colour: "Grey",
            material: "Concrete",
            dimensions: "Standard",
            weight: "5 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 4,
        sku: "RG-R-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Red Ridge",
        active: true,
        category: "Roofing",
        subCategory: "Ridges",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 18.99,
        price: 23.99,
        stock: 11400,
        maxStock: 20000,
        featured: true,
        images: "../img/ridge-red.png",
        description: "Concrete roof ridge for completing ridge lines with a professional finish.",
        specifications: 
        {
            colour: "Red",
            material: "Concrete",
            dimensions: "Standard",
            weight: "5 kg"
        },
        rating: 5,
        reviews: 0
    },

    // =========================================================
    // RIDGE CORNERS
    // =========================================================
    {
        id: 5,
        sku: "RC-G-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Grey Ridge Corner",
        active: true,
        category: "Roofing",
        subCategory: "Ridge Corners",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 18.99,
        price: 22.99,
        stock: 980,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/ridge-corner-grey.png"
        ],
        description: "Concrete ridge corner designed to provide a neat finish at roof intersections.",
        specifications: 
        {
            colour: "Grey",
            material: "Concrete",
            dimensions: "Standard",
            weight: "5 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 6,
        sku: "RC-R-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Red Ridge Corner",
        active: true,
        category: "Roofing",
        subCategory: "Ridge Corners",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 14.99,
        price: 19.99,
        stock: 2850,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        image: 
        [
            "../img/ridge-corner-red.png"
        ],
        description: "Concrete ridge corner manufactured for durable and attractive roof finishes.",
        specifications: 
        {
            colour: "Red",
            material: "Concrete",
            dimensions: "Standard",
            weight: "5 kg"
        },
        rating: 5,
        reviews: 0
    },

    // =========================================================
    // ROOF SHEETS
    // =========================================================
    {
        id: 7,
        sku: "RS-1800-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 1.8m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 150.99,
        price: 189.99,
        stock: 4120,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        image: 
        [
            "../img/roof-sheet.png"
        ],
        description: "Corrugated roofing sheet suitable for residential and commercial roofing.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "1.8 m",
            weight: "12 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 8,
        sku: "RS-2400-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 2.4m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 199.99,
        price: 239.99,
        stock: 110,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/roof-sheet.png"
        ],
        description: "High-quality corrugated steel roof sheet.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "2.4 m",
            weight: "15 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 9,
        sku: "RS-3000-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 3.0m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 239.99,
        price: 289.99,
        stock: 100,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/roof-sheet.png"
        ],
        description: "High-strength roofing sheet for durable installations.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "3.0 m",
            weight: "18 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 10,
        sku: "RS-3600-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 3.6m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 299.99,
        price: 339.99,
        stock: 15590,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        image: 
        [
            "../img/roof-sheet.png"
        ],
        description: "Durable galvanized roof sheet for larger roofing projects.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "3.6 m",
            weight: "22 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 11,
        sku: "RS-4200-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 4.2m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 349.99,
        price: 389.99,
        stock: 18000,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/roof-sheet.png"
        ],
        description: "Long-span corrugated roofing sheet for commercial structures.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "4.2 m",
            weight: "26 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 12,
        sku: "RS-4800-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 4.8m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice:  399.99,
        price: 449.99,
        stock: 17000,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/roof-sheet.png"
        ],
        description: "Extra-long corrugated roofing sheet for industrial and commercial use.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "4.8 m",
            weight: "30 kg"
        },
        rating: 5,
        reviews: 0
    },
    {
        id: 13,
        sku: "RS-6000-001",
        barcode: "",
        manufactured: true,
        supplier: "Supplier To Be Confirmed",
        name: "Roof Sheet 6.0m",
        active: true,
        category: "Roofing",
        subCategory: "Roof Sheets",
        brand: "Smart Build",
        unit: "Sheet",
        costPrice: 499.99,
        price: 529.99,
        stock: 6000,
        reorderLevel: 2000,
        maxStock: 20000,
        featured: true,
        images: 
        [
            "../img/roof-sheet.png"
        ],
        description: "Heavy-duty long-span roofing sheet ideal for warehouses and large buildings.",
        specifications: 
        {
            colour: "Galvanized",
            material: "Steel",
            dimensions: "6.0 m",
            weight: "36 kg"
        },
        rating: 5,
        reviews: 0
    },

    // =========================================================
    // BUILDING COLUMNS
    // =========================================================
    {
        id: 14,
        sku: "BC-001",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",
        name: "Building Column",
        category: "Building Materials",
        subCategory: "Columns",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 480.00,
        price: 599.99,
        stock: 220,
        reorderLevel: 50,
        maxStock: 500,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/column.png"
        ],
        description: "Precast reinforced concrete building column suitable for residential and commercial construction.",
        specifications: 
        {
            colour: "Concrete Grey",
            material: "Reinforced Concrete",
            dimensions: "Standard",
            weight: "Approx. 95 kg"
        },

        rating: 5,
        reviews: 0
    },

    // =========================================================
    // COLUMN HEADER / FOOTER
    // =========================================================
    {
        id: 15,
        sku: "CHF-001",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",
        name: "Column Header / Footer",
        category: "Building Materials",
        subCategory: "Columns",
        brand: "Smart Build",
        unit: "Piece",
        costPrice: 215.00,
        price: 274.99,
        stock: 365,
        reorderLevel: 80,
        maxStock: 600,
        featured: true,
        taxable: true,
        images: 
        [
            "../img/column-head.png"
        ],

        description: "Concrete column header and footer providing structural support and a decorative finish.",

        specifications: {
            colour: "Concrete Grey",
            material: "Reinforced Concrete",
            dimensions: "Standard",
            weight: "Approx. 40 kg"
        },

        rating: 5,
        reviews: 0
    },

    // =========================================================
    // LINTELS
    // =========================================================
    {
        id: 16,
        sku: "LT-900",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 900mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 95.00,
        price: 124.99,

        stock: 500,
        reorderLevel: 100,
        maxStock: 1000,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "900mm reinforced concrete lintel for door and window openings.",

        specifications: {
            material: "Reinforced Concrete",
            length: "900 mm"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 17,
        sku: "LT-1200",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 1200mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 115.00,
        price: 149.99,

        stock: 450,
        reorderLevel: 100,
        maxStock: 900,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "1200mm reinforced concrete lintel.",

        specifications: {
            material: "Reinforced Concrete",
            length: "1200 mm"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 18,
        sku: "LT-1500",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 1500mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 135.00,
        price: 174.99,

        stock: 400,
        reorderLevel: 80,
        maxStock: 800,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "1500mm reinforced concrete lintel.",

        specifications: {
            material: "Reinforced Concrete",
            length: "1500 mm"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 19,
        sku: "LT-1800",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 1800mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 165.00,
        price: 209.99,

        stock: 350,
        reorderLevel: 70,
        maxStock: 700,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "1800mm reinforced concrete lintel.",

        specifications: {
            material: "Reinforced Concrete",
            length: "1800 mm"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 20,
        sku: "LT-2100",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 2100mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 195.00,
        price: 244.99,

        stock: 300,
        reorderLevel: 60,
        maxStock: 600,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "2100mm reinforced concrete lintel.",

        specifications: {
            material: "Reinforced Concrete",
            length: "2100 mm"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 21,
        sku: "LT-2400",
        barcode: "",
        active: true,
        manufactured: true,
        supplier: "Smart Build Manufacturing",

        name: "Concrete Lintel 2400mm",

        category: "Building Materials",
        subCategory: "Lintels",

        brand: "Smart Build",
        unit: "Piece",

        costPrice: 225.00,
        price: 279.99,

        stock: 250,
        reorderLevel: 50,
        maxStock: 500,

        featured: true,
        taxable: true,

        images: [
            "../img/lintel.png"
        ],

        description: "2400mm reinforced concrete lintel.",

        specifications: {
            material: "Reinforced Concrete",
            length: "2400 mm"
        },

        rating: 5,
        reviews: 0
    },

    // =========================================================
    // SAND
    // =========================================================
    {
        id: 22,
        sku: "RSD-001",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Local Supplier",

        name: "River Sand",

        category: "Building Materials",
        subCategory: "Sand",

        brand: "Smart Build",
        unit: "m³",

        costPrice: 1500.00,
        price: 1999.99,

        stock: 200,

        reorderLevel: 50,
        maxStock: 400,

        featured: true,
        taxable: true,

        images:[
            "../img/river-sand.png"
        ],

        description:"High-quality washed river sand suitable for concrete mixing and construction work.",

        specifications:{
            material:"Natural River Sand"
        },

        rating:5,
        reviews:0
    },

    {
        id:23,
        sku:"PSD-001",
        barcode:"",
        active:true,
        manufactured:false,
        supplier:"Local Supplier",

        name:"Plaster Sand",

        category:"Building Materials",
        subCategory:"Sand",

        brand:"Smart Build",
        unit:"m³",

        costPrice:1300.00,
        price:1699.99,

        stock:350,

        reorderLevel:80,
        maxStock:500,

        featured:true,
        taxable:true,

        images:[
            "../img/plastering-sand.png"
        ],

        description:"Fine plaster sand ideal for plastering and finishing applications.",

        specifications:{
            material:"Fine Natural Sand"
        },

        rating:5,
        reviews:0
    },

    // =========================================================
    // BRICKS
    // =========================================================
    {
        id:24,
        sku:"CB-001",
        barcode:"",
        active:true,
        manufactured:true,
        supplier:"Smart Build Manufacturing",

        name:"Cement Brick",

        category:"Building Materials",
        subCategory:"Bricks",

        brand:"Smart Build",
        unit:"Brick",

        costPrice:2.75,
        price:3.99,

        stock:20000,

        reorderLevel:5000,
        maxStock:50000,

        featured:true,
        taxable:true,

        images:[
            "../img/cement-brick.png"
        ],

        description:"Strong concrete brick suitable for residential and commercial construction.",

        specifications:{
            material:"Concrete"
        },

        rating:5,
        reviews:0
    },

    {
        id:25,
        sku:"FB-001",
        barcode:"",
        active:true,
        manufactured:true,
        supplier:"Smart Build Manufacturing",

        name:"Face Brick",

        category:"Building Materials",
        subCategory:"Bricks",

        brand:"Smart Build",
        unit:"Brick",

        costPrice:2.85,
        price:3.99,

        stock:12200,

        reorderLevel:3000,
        maxStock:30000,

        featured:true,
        taxable:true,

        images:[
            "../img/face-brick.png"
        ],

        description:"Premium face brick designed to provide an attractive external finish.",

        specifications:{
            material:"Concrete"
        },

        rating:5,
        reviews:0
    },
        // =========================================================
    // STEEL NAILS
    // =========================================================

    {
        id: 26,
        sku: "NL-050",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Steel Nails 50mm",

        category: "Fasteners",
        subCategory: "Steel Nails",

        brand: "Smart Build",
        unit: "Box",

        costPrice: 28.00,
        price: 39.99,

        stock: 250,

        reorderLevel: 50,
        maxStock: 500,

        featured: true,
        taxable: true,

        images: [
            "../img/nail-50.png"
        ],

        description: "50mm galvanized steel nails supplied in a box for general construction work.",

        specifications: {
            size: "50 mm",
            material: "Galvanized Steel"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 27,
        sku: "NL-075",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Steel Nails 75mm",

        category: "Fasteners",
        subCategory: "Steel Nails",

        brand: "Smart Build",
        unit: "Box",

        costPrice: 34.00,
        price: 49.99,

        stock: 220,

        reorderLevel: 50,
        maxStock: 500,

        featured: true,
        taxable: true,

        images: [
            "../img/nail-75.png"
        ],

        description: "75mm galvanized steel nails supplied in boxes.",

        specifications: {
            size: "75 mm",
            material: "Galvanized Steel"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 28,
        sku: "NL-090",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Steel Nails 90mm",

        category: "Fasteners",
        subCategory: "Steel Nails",

        brand: "Smart Build",
        unit: "Box",

        costPrice: 39.00,
        price: 54.99,

        stock: 200,

        reorderLevel: 50,
        maxStock: 500,

        featured: true,
        taxable: true,

        images: [
            "../img/nail-90.png"
        ],

        description: "90mm galvanized steel nails for roofing and construction.",

        specifications: {
            size: "90 mm",
            material: "Galvanized Steel"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 29,
        sku: "NL-100",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Steel Nails 100mm",

        category: "Fasteners",
        subCategory: "Steel Nails",

        brand: "Smart Build",
        unit: "Box",

        costPrice: 45.00,
        price: 59.99,

        stock: 180,

        reorderLevel: 40,
        maxStock: 400,

        featured: true,
        taxable: true,

        images: [
            "../img/nail-100.png"
        ],

        description: "100mm galvanized construction nails.",

        specifications: {
            size: "100 mm",
            material: "Galvanized Steel"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 30,
        sku: "NL-125",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Steel Nails 125mm",

        category: "Fasteners",
        subCategory: "Steel Nails",

        brand: "Smart Build",
        unit: "Box",

        costPrice: 52.00,
        price: 69.99,

        stock: 160,

        reorderLevel: 40,
        maxStock: 350,

        featured: true,
        taxable: true,

        images: [
            "../img/nail-125.png"
        ],

        description: "125mm heavy-duty galvanized steel nails.",

        specifications: {
            size: "125 mm",
            material: "Galvanized Steel"
        },

        rating: 5,
        reviews: 0
    },

    // =========================================================
    // OXIDE CEMENT POWDER
    // =========================================================

    {
        id: 31,
        sku: "OX-001",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Oxide Cement Powder 1kg",

        category: "Cement Products",
        subCategory: "Oxide Powder",

        brand: "Smart Build",
        unit: "Bag",

        costPrice: 28.00,
        price: 39.99,

        stock: 180,

        reorderLevel: 40,
        maxStock: 300,

        featured: true,
        taxable: true,

        images: [
            "../img/oxide-1kg.png"
        ],

        description: "Premium oxide cement colouring powder (1kg).",

        specifications: {
            size: "1 kg"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 32,
        sku: "OX-002",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Oxide Cement Powder 2kg",

        category: "Cement Products",
        subCategory: "Oxide Powder",

        brand: "Smart Build",
        unit: "Bag",

        costPrice: 52.00,
        price: 69.99,

        stock: 150,

        reorderLevel: 30,
        maxStock: 250,

        featured: true,
        taxable: true,

        images: [
            "../img/oxide-2kg.png"
        ],

        description: "Premium oxide cement colouring powder (2kg).",

        specifications: {
            size: "2 kg"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 33,
        sku: "OX-005",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Oxide Cement Powder 5kg",

        category: "Cement Products",
        subCategory: "Oxide Powder",

        brand: "Smart Build",
        unit: "Bag",

        costPrice: 120.00,
        price: 149.99,

        stock: 120,

        reorderLevel: 25,
        maxStock: 200,

        featured: true,
        taxable: true,

        images: [
            "../img/oxide-5kg.png"
        ],

        description: "Premium oxide cement colouring powder (5kg).",

        specifications: {
            size: "5 kg"
        },

        rating: 5,
        reviews: 0
    },

    {
        id: 34,
        sku: "OX-010",
        barcode: "",
        active: true,
        manufactured: false,
        supplier: "Supplier To Be Confirmed",

        name: "Oxide Cement Powder 10kg",

        category: "Cement Products",
        subCategory: "Oxide Powder",

        brand: "Smart Build",
        unit: "Bag",

        costPrice: 240.00,
        price: 299.99,

        stock: 100,

        reorderLevel: 20,
        maxStock: 150,

        featured: true,
        taxable: true,

        images: [
            "../img/oxide-10kg.png"
        ],

        description: "Premium oxide cement colouring powder (10kg).",

        specifications: {
            size: "10 kg"
        },

        rating: 5,
        reviews: 0
    }
];