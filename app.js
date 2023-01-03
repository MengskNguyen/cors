const btn = document.getElementById("btn")

  
  

btn.addEventListener("click", () => {
  const url = "https://cyclos.deltalabsjsc.com/livetrade/api/identity-providers/trustpayid/login";
  // const request = new Request(url, {
  //   mode: 'no-cors'
  // });
  
  fetch(url, {
     
  // Adding method type
  method: "POST",
   
  // Adding body or contents to send
  body: JSON.stringify({}),
   
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"

  }
})

// Converting to JSON
.then(response => response.json())
// Displaying results to console
.then(json => window.open(json.url));
})