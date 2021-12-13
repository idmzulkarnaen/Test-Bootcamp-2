let data = require('./data.json');

// console.log(data);

const question1 = (data) => {
    let items = [];
    let title = 'Items in the meeting room';
    data.map((item, i) => {
      if (item.placement.name.toLowerCase() == 'meeting room') {
        items.push(item.name)
      }
    })
    
    return [items, title];    
  }
  console.log("Answer for question no. 1 : " + question1(data));

  const question2 = (data) => {
    let items = [];
    let title = 'All electronic items';
    data.map((item, i) => {
      if (item.type.toLowerCase() == 'electronic') {
        items.push(item.name);
      }
    })
    return [items, title];
  }
  console.log("Answer for question no. 2 : " + question2(data));
  
  const question3 = (data) => {
    let items = [];
    let title = 'Find all furnitures';
    data.map((item, i) => {
      if (item.type.toLowerCase() == 'furniture') {
        items.push(item.name);
      }
    })
    return [items, title];
  }
  console.log("Answer for question no. 3 : " + question3(data));

  const question4 = (data) => {
    let items = [];
    let title = 'Item purchased on 16 januari 2020';
    data.map((item, i) => {
      if (new Date(item.purchased_at * 1000).toString().substr(5, 10)
        == new Date('2020/01/16').toString().substr(5, 10)) {
        items.push(item.name);
      }
    })
    return [items, title];
  }
  console.log("Answer for question no. 4 : " + question4(data));
  
  const question5 = (data) => {
    let items = [];
    let title = 'Find all items with brown tag';
    data.map((item, i) => {
      var tags = item.tags;
      if (tags.includes('brown')) {
        items.push(item.name)
      }
    })
    return [items, title];
  }
  console.log("Answer for question no. 5 : " +question5(data));