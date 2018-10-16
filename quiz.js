const workers = [{

    fullname: 'Jonathan',
    rate: 16,
    hoursworked: 80,
  },
  {
    fullname: 'Enrique Carrillo',
    rate: 14,
    hoursworked: 90,
  },

  {
    fullname: 'Denis Sanchez',
    rate: 9,
    hoursworked: 15,
  }
];


class Payroll {
  constructor() {
    this.data = workers;
    this.arr = [];
  }

  getNames(names) {
    //this.data = names;
    this.data.map(wrs => {
      this.arr.push(wrs.fullname);
    });
    return this.arr.sort();
  }

  getFullTime() {
    return this.data.filter(hw => hw.hoursworked > 60);
  }

  getTotalLabor() {
    const totalLabor = this.data.reduce((acc, curr) => {
      acc += curr.rate * curr.hoursworked;
      return acc;
    }, 0);

    return totalLabor;
  }
}

const payrool = new Payroll();
console.log(payrool.getNames(workers));
console.log(payrool.getFullTime());
console.log(payrool.getTotalLabor());