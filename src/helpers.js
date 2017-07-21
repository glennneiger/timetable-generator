import base from './re-base';
import { emptyStarterTimeTable } from './constants';

const generateTT = (item, name) => {
  base.fetch('timeTables', {
    context: this,
    asArray: true,
  }).then((data) => {
    const generatedTT = emptyStarterTimeTable;

    data.forEach((timeTable) => {
      timeTable.data.forEach((row, index) => {
        Object.keys(row).forEach((keys, i) => {
          if (row[keys][1] === name) {
            generatedTT[index][keys] = [timeTable.classInfo, row[keys][0], row[keys][2]];
          }
        });
      });
    });

    console.log(generatedTT);
    return generatedTT;
  });
};

export { generateTT };
