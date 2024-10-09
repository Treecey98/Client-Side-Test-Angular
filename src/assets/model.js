var lib = {
  categories: ['Performance', 'Investments', 'Operations'],
  applets: [
    {
      name: 'Performance Snapshot',
      categories: ['Performance'],
    },
    {
      name: 'Commitment Widget',
      categories: ['Investments'],
    },
    {
      name: 'CMS',
      categories: ['Investments', 'Performance'],
    },
  ],
};

function addBigData(lib, ncategs, napplets) {
  for (var i = 0; i < ncategs; i++) {
    lib.categories.push('Sample Category ' + i);
  }
  var n = lib.categories.length;
  for (var i = 0; i < napplets; i++) {
    var a = {
      name: 'CMS' + i,
      categories: [],
    };
    for (var j = 0; j < Math.floor(Math.random() * 10); ++j) {
      var idx = Math.floor(Math.random() * n) % n;
      a.categories.push(lib.categories[idx]);
    }
    lib.applets.push(a);
  }
}
addBigData(lib, 1000, 50000);

export default lib;
