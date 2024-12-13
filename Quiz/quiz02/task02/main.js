// 1. Create your businessToHTML function here:

function businessToHTML(business) { 
    const name = business.name || "Not defined"; 
    const rating = business.rating || "Not defined"; 
    const imageUrl = business.image_url || ""; 
    const address = business.location && business.location.address1 ? business.location.address1 : "Not defined";
    const price = business.price || ""; 
    const reviewCount = business.review_count || 0; 
    return ` 
    <div class="business"> 
        <h2>${name}</h2> 
        <p>${address}</p> 
        <img src="${imageUrl}" alt="${name}" /> 
        <p>Rating: ${rating}</p> 
        <p>Price: ${price}</p> 
        <p>Reviews: ${reviewCount}</p> 
        </div> 
        `; 
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

const businessObjPriceDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    price: "$$",
    review_count: 1257,
};

const businessObjPriceNotDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    review_count: 1257,
};


console.log("HTML representation of a business:", businessToHTML(businessObjPriceDefined));
console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));

