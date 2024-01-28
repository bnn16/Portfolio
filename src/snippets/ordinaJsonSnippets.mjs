const getUserID = `[
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

const getMeetingID = `    {
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

const postMeetings = `'{
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

const patchUserID = `{  
"meetingID": "658c3684f615cc88d5f43198",
"status": "accepted"
}`;

const patchMeeting = `{  
"date" : "29-12-2024",
"start_time": "11AM",
"end_time": "1PM",
//optional
"location": "R10"
}`;

const patchInvite = `{  
"personID": "123",
"name": "Bogdan",
"surname": "Nik",
"email": "bnn@gmail.com"
}`;

const getOffice = `[
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

const postOffice = `{
    "office_name": "...",
    "office_address": "...",
    "office_image": "...",
}`;

const getOfficeID = `{
  "office_name": "...",
  "office_address": "...",
  "office_image": "...",
  "offideId": "id..."
},`;

const patchOfficeID = `{
  "office_name": "New Office Name",
  "office_address": "123 New Street",
  "office_image": "https://example.com/image.jpg"
}`;

const getOfficeData = `[
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

const getOfficeDataById = `{
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

const patchOfficeDateByID = `{  
  "floorName": "testing",
  "person": {
      "name": "john",
      "surname": "doe",
      "email": "johnny@bonez.com",
      "personID" : "123"
  }
}
}`;

const deleteOfficeDateById = `{  
  "floorName": "testing",
  "personID": "123"
}`;

const bluePrints = `async function createOfficeInfo() {
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

const allSnippets = {
  getUserID,
  getMeetingID,
  postMeetings,
  patchUserID,
  patchMeeting,
  patchInvite,
  getOffice,
  postOffice,
  getOfficeID,
  patchOfficeID,
  getOfficeData,
  getOfficeDataById,
  patchOfficeDateByID,
  deleteOfficeDateById,
  bluePrints,
};

export default allSnippets;
