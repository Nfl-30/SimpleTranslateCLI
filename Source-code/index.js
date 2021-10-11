var translate = require('node-google-translate-skidz');
 
translate({
  text: `Hello, im Naufal. I had a great time when competing at Topcoder!
  The community in the forum is really helping me out a lot regarding of the challanges at hand and they are very friendly.
  I hope that i will grow more when i spend more time in the community
  `,
  source: 'en',
  target: 'id'
}, function(result) {
  console.log(result);
}); 