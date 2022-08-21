// const faker = require('faker');
const studentSeeds = require('./studentSeed.json');
const tutorSeeds = require('./tutorSeed.json');
const assignmentSeeds = require('./assignmentSeed.json');
// const bidsSeeds = require('./bidsSeed.json');
// const commentSeeds = require('./commentSeed.json');
const db = require('../config/connection');
const { Student, Tutor, Assignment } = require('../models');

db.once('open', async () => {
  try {
    // await Thought.deleteMany({});
    await Student.deleteMany({});
    await Tutor.deleteMany({});
    await Assignment.deleteMany({});
    // await Comment.deleteMany({});
    // await Bids.deleteMany({});

    const x = await Student.insertMany(studentSeeds);
    console.log(x);
    await Tutor.insertMany(tutorSeeds);

    // await Student.create(studentSeeds);
    // await Tutor.create(tutorSeeds);

    for (let i = 0; i < assignmentSeeds.length; i++) {
      const { _id, username } = await Assignment.create(assignmentSeeds[i]);
      console.log(username);
      const student = await Student.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            Assignment: _id,
          },
        }
      );
      console.log(student);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});