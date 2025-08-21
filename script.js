let newQuote = document.querySelector("#newQuote");
let apikey = 'iS93BjL6WNrCtEuE5d9/PA==aKTMSwe20cSBHdxt';
let url = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${apikey}`;

document.querySelector("#quote").innerHTML = '<div class="loader"></div>';

function fetchQuote() {
  document.querySelector("#quote").innerHTML = ''
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("#category").innerHTML = "Category: " + data[0].category;
      document.querySelector("#quote").innerHTML = '"' + data[0].quote + '"';

      if (data[0].author) {
        document.querySelector("#author").innerHTML = "-" + data[0].author;
      }
      else{
        document.querySelector("#author").innerHTML = "- Unknown author";
      }
    })

}
newQuote.onclick = fetchQuote;
fetchQuote();
//  copy to clipboard
document.querySelector("#copyButton").addEventListener("click", function(){
  let quoteText = document.querySelector("#quote").innerHTML;
navigator.clipboard.writeText(quoteText);
alert("Copied the quote: "+ quoteText)
});
