/* import modules: fs */
import fs from 'fs';

/**
 * readDatabaseReads the data of students in a CSV data file.
 * @filename: path to database
 */
const readDatabase = (filename) => new Promise((resolve, reject) => {
  /* check filename existence */
  if (!filename) {
    reject(new Error('Cannot load the database'));
  }
  if (filename) {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

/* export section */
export default readDatabase;
module.exports = readDatabase;
