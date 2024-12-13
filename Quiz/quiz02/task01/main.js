async function getBusinesses(location, search_term, num_results) { 
    const url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=
    // ${location}&term=
    // ${search_term}&limit=
    // ${num_results}`; 
     const response = await fetch(url); 
     const data = await response.json(); 
     return data.businesses; 
}

//I think this is working but everytime I check the console it says fail to load I'm not sure if 
//I'm doing something wrong but everytime I also click Endpoint: https://www.apitutor.org/yelp/simple/v3/businesses/search
// It gives an error message


console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);

