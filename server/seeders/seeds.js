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

    await Student.insertMany(studentSeeds);
    await Tutor.insertMany(tutorSeeds);

    // await Student.create(studentSeeds);
    // await Tutor.create(tutorSeeds);

    for (let i = 0; i < assignmentSeeds.length; i++) {
      const { _id, assignmentAuthor } = await Assignment.create(assignmentSeeds[i]);
      const student = await Student.findOneAndUpdate(
        { username: assignmentAuthor },
        {
          $addToSet: {
            Assignment: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});