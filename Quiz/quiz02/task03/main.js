//It makes sense to me to bring in the main.js from task01 and task02 

async function getBusinesses(location, search_term, num_results) { 
    // const url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=
    // // ${location}&term=
    // // ${search_term}&limit=
    // // ${num_results}`; 
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`; 
    if (open_now) { 
        url += '&open_now=true'; }    
     const response = await fetch(url); 
     const data = await response.json(); 
     return data.businesses; 
}

//added the open now button 

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

//I tried to do something simialr to the past tutorials like the fall semester classes on 
//but I think I did something wrong

document.getElementById("search_button").addEventListener("click", async () => { 
    const searchTerm = document.getElementById("term"); 
    const location = document.getElementById("location"); 
    const resultsContainer = document.getElementById("results"); 
    const businesses = await getBusinesses(searchTerm, location, 10); 
    if (Array.isArray(businesses)) { 
        resultsContainer.innerHTML = businesses.map(businessToHTML).join(''); 
    } else { 
        resultsContainer.innerHTML = '<p>No businesses found.</p>'; 

    } 
});

//I'm not sure why I can't interact with the index.html live server 
//I'm sure i forgot to call something somewhere 