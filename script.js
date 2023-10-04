//for

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);


//for in

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


//for of

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//create your own resume data in json format


 let resume = {

    "basics": {
      "name": "John Doe",
      "label": "Programmer",
      "picture": "",
      "email": "john@gmail.com",
      "phone": "(912) 555-4321",
      "website": "http://johndoe.com",
      "summary": "A summary of John Doe...",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      }
    },
    "work": [{
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description...",
      "highlights": [
        "Started the company"
      ]
    }],
    "education": [{
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": ["HTML","CSS","Javascript"]
    }]
  }

  //read about the diffrence between window , screen, and document in javascript

  function myFunction() {
    let title = document.title;
    let domain = document.domain;
    let body = document.body;
    document.getElementById("demo").innerHTML =
        "the title of the document is : "
        + title
        + "<br>"
        + "domain : "
        + domain
        + "<br>"
        + "body : "
        + body;
}