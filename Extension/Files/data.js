const data = [
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "1123325225" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "1123711250" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22661872" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22610405" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22621382" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22624090" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22611097" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22700933" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22633146" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22630699" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22614228" },
    { "organization": "ReserveBankofIndia", "service": "Bank", "contact_number": "22704222" },
    { "organization": "StateBankofIndia", "service": "Bank", "contact_number": "18001234" },
    { "organization": "StateBankofIndia", "service": "Bank", "contact_number": "18002100" },
    { "organization": "StateBankofIndia", "service": "Bank", "contact_number": "1800112211" },
    { "organization": "StateBankofIndia", "service": "Bank", "contact_number": "18004253800" },
    { "organization": "StateBankofIndia", "service": "Bank", "contact_number": "9449112211" },
    { "organization": "ICICIBank", "service": "Bank", "contact_number": "2233667777" },
    { "organization": "ICICIBank", "service": "Bank", "contact_number": "18001080" },
    { "organization": "ICICIBank", "service": "Bank", "contact_number": "18601207777" },
    { "organization": "HDFCBank", "service": "Bank", "contact_number": "18002026161" },
    { "organization": "HDFCBank", "service": "Bank", "contact_number": "18602676161" },
    { "organization": "HDFCBank", "service": "Bank", "contact_number": "2261717606" },
    { "organization": "HindustanTimes", "service": "Newspaper", "contact_number": "1160004242" },
    { "organization": "HindustanTimes", "service": "Newspaper", "contact_number": "18001031800" },
    { "organization": "HindustanTimes", "service": "Newspaper", "contact_number": "1160004242" },
    { "organization": "TheHindu", "service": "Newspaper", "contact_number": "4428576300" },
    { "organization": "TheHindu", "service": "Newspaper", "contact_number": "18001021878" },
    { "organization": "ApolloHospitals", "service": "Hospitals", "contact_number": "18605001066" },
    { "organization": "ApolloHospitals", "service": "Hospitals", "contact_number": "4043441066" },
    { "organization": "FortisHealthcare", "service": "Hospitals", "contact_number": "1244921021" },
    { "organization": "FortisHealthcare", "service": "Hospitals", "contact_number": "1244921041" },
    { "organization": "State Bank of India", "service": "Banking", "contact_number": "1800112211" },
    { "organization": "ICICI Bank", "service": "Banking", "contact_number": "18002035285" },
    { "organization": "HDFC Bank", "service": "Banking", "contact_number": "18002035235" },
    { "organization": "Bajaj Finserv", "service": "Financial Services", "contact_number": "1800222244" },
    { "organization": "TATA AIA Life Insurance", "service": "Insurance", "contact_number": "18002667766" },
    { "organization": "Max Bupa Health Insurance", "service": "Insurance", "contact_number": "180000000000" },
    { "organization": "PNB Housing Finance Ltd", "service": "Financial Services", "contact_number": "18002001100" },
    { "organization": "Vodafone Idea", "service": "Telecom", "contact_number": "199000000000" },
    { "organization": "Bharti Airtel", "service": "Telecom", "contact_number": "19100422222" },
    { "organization": "Reliance Retail Ltd", "service": "Retail", "contact_number": "8754338844" },
    { "organization": "DMart", "service": "Retail", "contact_number": "18002333444" },
    { "organization": "Myntra", "service": "Ecommerce", "contact_number": "18001230090" },
    { "organization": "Swiggy", "service": "Food Delivery", "contact_number": "1800921800" },
    { "organization": "Uber", "service": "Ride Sharing", "contact_number": "18602100000" },
    { "organization": "Ola Cabs", "service": "Ride Sharing", "contact_number": "33553355" },
    { "organization": "Pizza Hut", "service": "Restaurant", "contact_number": "18602100000" },
    { "organization": "VLCC", "service": "Wellness & Beauty", "contact_number": "18001028282" },
    { "organization": "Appolo 24/7", "service": "Pharmaceutical", "contact_number": "18001027272" },
    { "organization": "HP Gas", "service": "Gas Agency", "contact_number": "18002333555" },
    { "organization": "Bharat Gas", "service": "Gas Agency", "contact_number": "18002333555" },
    { "organization": "Indian Oil Corporation Ltd", "service": "Oil Company", "contact_number": "19900645545" },
    { "organization": "Adani Gas Ltd", "service": "Gas Company", "contact_number": "18002658686" },
    { "organization": "Fullerton India Credit Co. Ltd.", "service": "Financial Services", "contact_number": "18002770787" },
    { "organization": "Shriram Finance Ltd", "service": "Financial Services", "contact_number": "18602580000" },
    { "organization": "PNB Metlife India Insurance Co. Ltd.", "service": "Insurance", "contact_number": "1800221221" },
    { "organization": "Star Health and Allied Insurance Co Ltd", "service": "Insurance", "contact_number": "180000000000" },
    { "organization": "Reliance General Insurance Co. Ltd.", "service": "Insurance", "contact_number": "18003009" },
    { "organization": "LIC India", "service": "Insurance Corporation", "contact_number": "18002584455" },
    { "organization": "IndiGo", "service": "Airlines", "contact_number": "18001803838" },
    { "organization": "Air Asia", "service": "Airlines", "contact_number": "18605008000" },
    { "organization": "Amazon Pay", "service": "E-Wallet", "contact_number": "18002029831" },
    { "organization": "Phonepe ()", "service": "E-Payment Wallet", "contact_number": "180000000000" },
    { "organization": "Cleartrip", "service": "Online Travel Services", "contact_number": "18002001800" },
    { "organization": "Yatra.com", "service": "Online Travel Services", "contact_number": "1800113800" },
    { "organization": "Spice Jet", "service": "Budget Airline", "contact_number": "18001803333" },
    { "organization": "Air India", "service": "Full Service Airlines", "contact_number": "18001801407" },
    { "organization": "OYO Rooms", "service": "Budget Hotel Aggregator Platform", "contact_number": "18605004646" },
    { "organization": "Hiiku Tours & Travels", "service": "Tour Package Provider", "contact_number": "7703814760" },
    { "organization": "Safari Bags", "service": "Luggage Manufacturer", "contact_number": "8130847634" },
    { "organization": "Bharti AXA General Insurance", "service": "Insurance", "contact_number": "18002663100" },
    { "organization": "IFFCO Tokio General Insurance", "service": "Insurance", "contact_number": "18001035555" },
    { "organization": "HDFC Ergo General Insurance", "service": "Insurance", "contact_number": "18002744787" },
    { "organization": "Acko General Insurance", "service": "Insurance", "contact_number": "18602662256" },
    { "organization": "Care Health Insurance", "service": "Insurance", "contact_number": "18001024773" },
    { "organization": "Star Union Dai-ichi Life Insurance", "service": "Insurance", "contact_number": "18002008833" },
    { "organization": "IndiaFirst Life Insurance", "service": "Insurance", "contact_number": "18002096090" },
    { "organization": "Go Digit General Insurance", "service": "Insurance", "contact_number": "18002585025" },
    { "organization": "Coverfox Insurance Broking", "service": "Insurance", "contact_number": "18001225858" },
    { "organization": "Policy Bazaar Insurance Web Aggregator", "service": "Insurance", "contact_number": "18005015726" },
    { "organization": "Wakefit Bedding Solutions", "service": "Furniture & Home Products", "contact_number": "8861002284" },
    { "organization": "Sleepyhead Mattresses", "service": "Mattresses & Furnishings", "contact_number": "8448444440" },
    { "organization": "Featherlite Furniture", "service": "Office Furniture", "contact_number": "180000000000" },
    { "organization": "Nilkamal Plastic Furniture", "service": "Plastic Furniture", "contact_number": "2221615731" },
    { "organization": "Homecentre Home Retail", "service": "Home Products Retail", "contact_number": "9560000000" },
    { "organization": "Max Fashion", "service": "Apparel Retail", "contact_number": "18605006235" },
    { "organization": "Shoppers Stop", "service": "Apparel Retail", "contact_number": "18002666166" },
    { "organization": "Pantaloons", "service": "Apparel Retail", "contact_number": "41902100" },
    { "organization": "InfiBeam", "service": "Retail", "contact_number": "Online Retail Marketplace" },
    { "organization": "1MG", "service": "Online Pharmacy Retailing", "contact_number": "9290000000" },
    { "organization": "Netmeds", "service": "Pharma Products Retailing", "contact_number": "9560000000" },
    { "organization": "Licious", "service": "Meat & Seafood Retailing", "contact_number": "8930000000" },
    { "organization": "Big Basket", "service": "Grocery Delivery", "contact_number": "180000000000" },
    { "organization": "Grofers", "service": "Grocery Retail", "contact_number": "9320000000" },
    { "organization": "Milk Basket", "service": "Milk Delivery Platform", "contact_number": "8040000000" },
    { "organization": "Godrej Nature's Basket", "service": "Grocery Retailing", "contact_number": "18004192424" },
    { "organization": "Vegrow", "service": "AgriProducts Supply Chain Company", "contact_number": "4040747474" },
    { "organization": "Udaan", "service": "Online Wholesale Marketplace Platform", "contact_number": "18002029831" },
    { "organization": "91mobiles", "service": "Tech Product Review Site", "contact_number": "9225592288" }
]

function init() {
    const element = document.getElementById("search");
    element.addEventListener("click", function () {
        let ele = document.getElementById("customercare").value;
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["contact_number"] == ele) {
                document.getElementById("status").innerHTML = "Number is Verified and following are the details.";
                document.getElementById("org").innerHTML = data[i]["organization"];
                document.getElementById("service").innerHTML = data[i]["service"];
                document.getElementById("contact").innerHTML = data[i]["contact_number"];
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            document.getElementById("status").innerHTML = "Number is Not Verified!";
        }
    });
}
init();

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    document.getElementById("status").innerHTML = tabs[0].url;
});
