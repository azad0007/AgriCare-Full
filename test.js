// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("GET", "https://api.jsonbin.io/b/5f8af79965b18913fc603769", true);
// req.setRequestHeader("secret-key", "$2b$10$6RnpIxVoqp5pqzoPeZFFWOS1aLbrGK2JmVFImbP0hKeeSCU3/vgr2");
// req.send();
// console.log(JSON.parse(req.responseText));
const fetch = require('node-fetch');

// fetch("https://api.jsonbin.io/b/5f8b362f7243cd7e82506bed",
//         {
//         headers : {
//             'secret-key': '$2b$10$6RnpIxVoqp5pqzoPeZFFWOS1aLbrGK2JmVFImbP0hKeeSCU3/vgr2'
        
//         } 
//         }
//         ).then(response1=>response1.json()).then(response2=>
//              FinalPercentage = response2.proxy);
var FinalPercentage = {
    "proxy": [
      [
        [
          25,
          85
        ]
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  }        
  fetch("https://api.jsonbin.io/b/5f8b362f7243cd7e82506bed", {
    method:'PUT',
    
    headers : {
        'Content-Type': 'application/json',
    
        'secret-key': '$2b$10$6RnpIxVoqp5pqzoPeZFFWOS1aLbrGK2JmVFImbP0hKeeSCU3/vgr2',
        'versioning': 'false'
    },
    body: JSON.stringify(FinalPercentage)
    
}).then(responsee=>responsee.json()).then(responsee2=>console.log("Data Added in Final Percentage"));

  
   



