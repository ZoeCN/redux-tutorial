var showdown  = require('showdown'),
converter = new showdown.Converter(),
text      = `
# QUICK START!
## Installation
## Hello World
### Render first code
## Handing Events
# ADVANCED GUIDES
## JSX In Depth
## Typechecking With PropTypes
### Context
# REFERENCE
## REACT
### React.Component
`,
html      = converter.makeHtml(text);

const headerLists = text.match(/\s# .*|^# .*/g);

//side bar
let array = text.split( /\s# |^# /g).splice(1); // split contents

//left content
let sideBarList = [];
let formatArray = array.map(item => item.split(/\n## /g));
formatArray.forEach((list) => {
  // console.log(list[0]);
  // console.log(list);
  let newObj = {
    'h1Header' : list[0],
    'children' : []
  };
  list.forEach((item,index,arr) => {
    if (index === 0) {
      arr[index] = '\n# ' + item;
    }
    if (index > 0) {
      arr[index] = '\n## ' + item;
      let chilObj = {};
      if (arr[index].includes('###')) {
        let t = arr[index].split('###');
        console.log(t);
        chilObj.h2Header = t[0];
        chilObj.children = {
          'h3Header': t[1]
        };
      } else {
        chilObj.h2Header = arr[index];
      }
      newObj.children.push(chilObj);
    }
  });

  console.log('newObj', newObj);
})

function generateSideBar(array) {
  return array.map(block=> {
    return block.join().replace(/,#/g, '#');
  }).join().replace(/,\n/g, '\n');
}




// console.log(headerLists);
// console.log(formatArray);
// console.log('-------------------------------');
// console.log(converter.makeHtml(generateSideBar(formatArray)))