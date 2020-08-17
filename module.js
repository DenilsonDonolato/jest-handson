function filterByTerm(inputArr, searchTerm) {
    var inputArr2 = inputArr.map(function (arrayElement) {
    return {"id":arrayElement.id,
      "url":arrayElement.url.toLowerCase()}
  })
  var arrFilter = filterInputHttp(inputArr2);
  console.log(inputArr2);
  return arrFilter.filter(function (arrayElement) {
    return arrayElement.url.toLowerCase().match(searchTerm.toLowerCase());
  });
}

function filterInputHttp(inputArr) {
  return inputArr.filter(function (arrElement) {
    console.log(arrElement);
    return arrElement.url.toLowerCase().match('https');
  })
}


module.exports = filterByTerm;
