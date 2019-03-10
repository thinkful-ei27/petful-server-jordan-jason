'use strict';
const Queue = require('./queue');
const catData = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://www.thesprucepets.com/thmb/0Y_9qW07-uYqkW9_kcasnwXqCi0=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/twenty20_d4afe7d2-ebe8-4288-a2ef-bcecbb99df88-5a8c4309c064710037e9965e.jpg',
    imageDescription: 'Adorable kitten lacking ears',
    name: 'Roger',
    sex: 'Male',
    age: 1,
    breed: 'Scottish Fold',
    story: 'A wee lil kitty waitin for ya'
  },
  {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/167768e/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0d%2F4b1f209dc511e0a2380050568d634f%2Ffile%2FAbyssinian-3-645mk062211.jpg',
    imageDescription: 'Adorable kitten lacking ears',
    name: 'Sphynx',
    sex: 'Female',
    age: 4,
    breed: 'Scottish Fold',
    story: 'A wee lil kitty waitin for ya'
  }
]

const catQueue = new Queue;
catData.forEach(cat => catQueue.enqueue(cat))

module.exports = catQueue;