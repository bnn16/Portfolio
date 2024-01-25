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
