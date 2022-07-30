import data1 from "./Data/1";
import data2 from "./Data/2";
import data3 from "./Data/3";
import data4 from "./Data/4";
import data5 from "./Data/5";
import data6 from "./Data/6";
import data7 from "./Data/7";
import data8 from "./Data/8";
import data9 from "./Data/9";
import data10 from "./Data/10";

const Result = () => {
  var indicator = Array(100000000).fill(0);
  console.log(data1);
  const newArray = data2.sort((a, b) => a[0] - b[0]);
  console.log(newArray);

  const logic = () => {
    var currentMax = 0;
    var index = 0;

    for (let i = 0; i < newArray.length; i++) {
      indicator.fill(0);
      let finalArray = [...newArray];
      finalArray.splice(i, 1);
      console.log(finalArray);

      for (let k = 0; k < finalArray.length; k++) {
        var list = [];
        for (var j = finalArray[k][0]; j < finalArray[k][1]; j++) {
          list.push(j);
          list.forEach((index) => {
            indicator[index] = 1;
          });
        }
      }
      console.log(indicator);
      const count = indicator.filter((x) => x == 1).length;
      console.log(count);
      if (count > currentMax) {
        currentMax = count;
        index = i;
      }
    }
    console.log("max", currentMax);
    console.log("index", index);

    return currentMax;
  };

  return <div>{logic()}</div>;
};

export default Result;
