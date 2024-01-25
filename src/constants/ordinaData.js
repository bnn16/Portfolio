export const json = `[
    {
      _id: '658c3684f615cc88d5f43198',
      title: 'Testing meeting',
      date: '30-12-2023',
      start_time: '11AM',
      end_time: '12AM',
      location: 'Paris',
      attendees: [
        {
          personID: '222',
          name: 'B',
          surname: 'N',
          email: 'bnn@gmail.com',
          status: 'pending',
          _id: '658c3684f615cc88d5f43199',
        },
        {
          personID: '111',
          name: 'D',
          surname: 'K',
          email: 'dk@gmail.com',
          status: 'pending',
          _id: '658c3684f615cc88d5f4319a',
        },
        {
          personID: '123',
          name: 'B',
          surname: 'N',
          email: 'bnn@gmail.com',
          status: 'pending',
        },
      ],
      __v: 10,
    },
  ]`;

export const json2 = `    {
  "_id": "658c3684f615cc88d5f43198",
  "title": "Testing meeting",
  "date": "30-12-2023",
  "start_time": "11AM",
  "end_time": "12AM",
  "location": "Paris",
  "attendees": [
      {
          "personID": "222",
          "name": "B",
          "surname": "N",
          "email": "bnn@gmail.com",
          "status": "pending"
      },
      {
          "personID": "111",
          "name": "D",
          "surname": "K",
          "email": "dk@gmail.com",
          "status": "pending"
      },
      {
          "personID": "123",
          "name": "B",
          "surname": "N",
          "email": "bnn@gmail.com",
          "status": "pending"
      }
  ]
}
`;

export const json3 = `'{
"title": "Testing meeting",
"date": "28-12-2023",
"start_time": "9AM",
"end_time": "10AM",
"location": "R10",
"attendees": [
  {
      "name": "B",
      "surname": "N",
      "email": "bnn@gmail.com",
      "personID": "222"
  }
]
`;

export const json4 = `{  
"meetingID": "658c3684f615cc88d5f43198",
"status": "accepted"
}`;

export const json5 = `{  
"date" : "29-12-2024",
"start_time": "11AM",
"end_time": "1PM",
//optional
"location": "R10"
}`;

export const json6 = `{  
"personID": "123",
"name": "Bogdan",
"surname": "Nik",
"email": "bnn@gmail.com"
}`;

export const json7 = `[
    {
      "office_name": "...",
      "office_address": "...",
      "office_image": "...",
      "offideId": "id..."
    },
    {
      "office_name": "...",
      "office_address": "...",
      "office_image": "...",
      "offideId": "id..."
    },
  ]`;

export const json8 = `{
    "office_name": "...",
    "office_address": "...",
    "office_image": "...",
}`;

export const json9 = `{
  "office_name": "...",
  "office_address": "...",
  "office_image": "...",
  "offideId": "id..."
},`;

export const json10 = `{
  "office_name": "New Office Name",
  "office_address": "123 New Street",
  "office_image": "https://example.com/image.jpg"
}`;

export const json11 = `[
  {
      "_id": "...",
      "date": "23-12-2023",
      "offices": [
          {
              "officeID": "...",
              "office_floors": [
                  {
                      "floorName": "...",
                      "people": []
                  },
                  {
                      "floorName": "...",
                      "people": []
                  }
              ]
          }
      ],
      "__v": "..."
  }
]
`;

export const json12 = `{
  "_id": "123",
  "date": "23-12-2023",
  "offices": [
      {
          "officeID": "...",
          "office_floors": [
              {
                  "floorName": "...",
                  "people": []
              },
              {
                  "floorName": "...",
                  "people": []
              }
          ]
      }
  ],
  "__v": "..."
}`;

export const json13 = `{  
  "floorName": "testing",
  "person": {
      "name": "john",
      "surname": "doe",
      "email": "johnny@bonez.com",
      "personID" : "123"
  }
}
}`;

export const json14 = `{  
  "floorName": "testing",
  "personID": "123"
}`;

export const json15 = `async function createOfficeInfo() {
  let officeIDs = await getOfficeIDs();

  if (officeIDs.length === 0) {
    return;
  }

  // loop through all offices
  for (const officeID of officeIDs) {
    try {
      let date = getDate();
      let officeDataExists = await OfficeDataModel.findOne({ date: date });

      if (officeDataExists !== null) {
        let officeDataID = officeDataExists._id;

        let floors = await getOfficeFloors(officeID);
        let obj = floors.map((floor) => ({
          floorName: floor,
          people: [],
        }));

        // push new office to existing officeData from that day
        await OfficeDataModel.updateOne(
          { _id: officeDataID },
          {
            $push: {
              offices: {
                officeID: officeID,
                office_floors: obj,
              },
            },
          }
        );
      } else {
        let floors = await getOfficeFloors(officeID);
        let obj = floors.map((floor) => ({
          floorName: floor,
          people: [],
        }));

        const newOfficeData = new OfficeDataModel({
          date: getDate(),
          offices: [
            {
              officeID: officeID,
              office_floors: obj,
            },
          ],
        });
        await newOfficeData.save();
      }
    } catch (err) {
      console.log(err);
    }
  }
}`;
