marks = {
  Avneesh: 80,
  Ajay: 70,
  Vikas: 70,
  Bhanu: 80,
  Ankit: 70,
  Bobby: 60,
};
/*
rank list
Avneesh 1
Bhanu 1
Ajay 3
Ankit 3
Vikas 3
Bobby 6

*/
// Problem statement to sort  them first  on rank & then based on alphabatical orders.

const getRank = (marks) => {
  const entries = Object.entries(marks),
    res = [];

  entries.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i - 1] && entries[i - 1][1] === entries[i][1]) {
      res.push({ name: entries[i][0], rank: res[i - 1].rank });
    } else {
      res.push({ name: entries[i][0], rank: i + 1 });
    }
  }

  res.sort((a, b) => {
    return a.rank === b.rank ? a.name.localeCompare(b.name) : false;
  });

  /* console.log(entries , res) */

  return res;
};

getRank(marks);
