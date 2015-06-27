import moment from 'moment';

let me = {
  birthdate: moment(new Date(1991, 6, 20)),
  name: {
    first: 'Matthew',
    middle: 'Lee',
    last: 'Livingston'
  }
};

let years = {
  beginning: me.birthdate.year(),
  now: moment().year()
};

let events = [];

for (let year = years.beginning; year < years.now; year++) {
  events.push({
    moment: moment(new Date(String(year))),
    places: getPlacesForYear(year)
  });
}

function getPlacesForYear(year) {
  return {
    2015: ['Iceland']
  };
}

export default events;
