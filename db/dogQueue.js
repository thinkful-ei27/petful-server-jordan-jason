'use strict';
const Queue = require('./queue');
const dogData = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/istock_86999965_small.jpg?itok=EzyZsGnK&resize=1100x1100',
    imageDescription: 'A loveable Pitbull',
    name: 'Beans',
    sex: 'Female',
    age: 7,
    breed: 'Pitbull',
    story: 'A sordid past riddled with intrigue.'
  },
  {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/514331d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F26%2F0d%2F6443c92b4c67ae315a8bb8be16e1%2FChihuahua-AP-KIDP62-645lc061113.jpg',
    imageDescription: 'A regal chihuahua',
    name: 'Cous Cous',
    sex: 'Male',
    age: 2,
    breed: 'Chihuahua',
    story: 'Owner Passed away, couldn\'t handle cuteness of this dog.'
  }
]

const dogQueue = new Queue;
function loadDummy(arr) {
  arr.forEach(dog => dogQueue.enqueue(dog))
}
loadDummy(dogData);

module.exports = dogQueue;