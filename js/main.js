/* global vars */
var apiValues = { 
  ip: document.querySelector('#ip'),
  address: document.querySelector('#address'),
  timezone: document.querySelector('#timezone'),
  ip_provider: document.querySelector('#ip-provider'),
}

/* functions */
async function getIPDetails(ip){
  ip = String(ip);

  // call api with details
  const details = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_L4g4ouuMDPx27Tdt78VyBIJZd4wvl&ipAddress=8.8.8.8' , {
    credentials: 'include',
    mode: 'cors',
  }).then(result => console.log(result))
}

function isValidIP(ip){
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {  
    return (true)  
  }  
  alert("You have entered an invalid IP address!")  
  return (false)  
}

function submitIP(){
  console.log("clicked submit ip")

  const ip = document.querySelector(".ip-search input").value;

  console.log(`fetched ip value ${ip}`)

  if(!isValidIP(ip))
    return

  console.log("ip is valid")

  console.log('getting IP Details')
  
  const ipDetails = getIPDetails(ip);
  if(ipDetails == null || ipDetails.length == 0)
    {console.log('IP Details Failed');return;}

  console.log('assigning ip details to api-display')
  // assign ip details to page
}

/* event bindings */
document.querySelector("#ip_submit").addEventListener('click', submitIP);

/* initialize map */
var map = L.map('map',{
  center: [43.64701, -79.39425],
  zoom: 15
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

/* main */