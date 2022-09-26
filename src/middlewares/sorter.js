let sorter = function (data, key, type) {
    if (type == undefined) {
      type = "내림차순";
    }
    return data.sort(function (a, b) {
      let x = a[key];
      let y = b[key];
      if (type == "내림차순") {
        return x > y ? -1 : x < y ? 1 : 0;
      } else if (type == "오름차순") {
        return x < y ? -1 : x > y ? 1 : 0;
      }
    });
  };
  module.exports = sorter
  // 사용법
  //   let testData = [{ key: 2 }, { key: 1 }, { key: 3 }, { key: 5 }, { key: 4 }];
  //   sorter(testData, "key", "내림차순")
  