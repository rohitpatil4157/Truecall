let obj = { "data": [ { "about": "", "access": "PUBLIC", "addresses": [ { "address": "IN", "city": "Maharashtra", "countryCode": "IN", "street": "", "timeZone": "+05:30", "type": "address", "zipCode": "" } ], "badges": [ "user" ], "cacheTtl": 1296000000, "commentsStats": { "showComments": false }, "companyName": "", "enhanced": true, "gender": "UNKNOWN", "id": "+pAk40DOERwCP9eobZJpxQ==", "imId": "1huf12b713shs", "internetAddresses": [], "jobTitle": "", "name": "S K", "ns": 0, "phones": [ { "carrier": "Jio", "countryCode": "IN", "dialingCode": 91, "e164Format": "+919307548771", "nationalFormat": "093075 48771", "numberType": "MOBILE", "type": "openPhone" } ], "score": 0.9, "searchWarnings": [], "sources": [], "surveys": [ { "frequency": 3600, "id": "d61f74f4-2158-43b0-83de-a4bf056bbc51", "passthroughData": "eyAiMyI6ICI5MTkzMDc1NDg3NzEiLCAiOCI6ICIwIiwgIjQiOiAicGYiLCAiMiI6ICJTIEsiIH0=", "perNumberCooldown": 31536000 } ], "tags": [] } ], "provider": "ss-nu", "stats": { "sourceStats": [] } }





let Desirable = ['phones', 'addresses', 'internetAddresses']

let text = obj.data[0]

// for(i in textData){
//     if(Desirable.includes(i)){
//         for(j in textData[i][0]){
//             console.log(textData[i][0][j])
//         }
//     }
// }

// let forum = undefined || textData.internetAddresses[0].id
// console.log(textData.internetAddresses[0]?.id)
let format = `Name: ${text?.internetAddresses[0]?.caption || text?.name }\nAltName:${text?.altName || ''}\nImage: ${text?.image}\nCity: ${text?.addresses[0]?.city || text?.addresses[0]?.countryCode || ''}\nEmail: ${text?.internetAddresses[0]?.id || ''}\nPhone: ${text?.phones[0]?.e164Format}\nCarrier: ${text?.phones[0]?.carrier}`

console.log(format)