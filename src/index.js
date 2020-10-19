module.exports = function check(str, bracketsConfig) {
  let items = str.split('');
  let stack = 0;
  let open = [];
  let close = [];

  bracketsConfig.join('').split(',').join('').split('').map( (item, index) => {
    if ( index % 2 === 0) {
      open.push(item)
    } else {
      close.push(item)
    }
    return
  })

  for ( let i = 0; i < items.length; i++) {
    if (open.indexOf(items[i]) !== 0) {
      stack += 1;
    }
  }

  for ( let j = 0; j < items.length; j++) {
    if (close.indexOf(items[j]) !== 0) {
      stack -= 1;
    }
  }

  if (stack !== 0 ) return false;

  while (str.indexOf('()') !== -1 || str.indexOf('[]') !== -1 || str.indexOf('||') !== -1 || str.indexOf('{}') !== -1 || 
         str.indexOf('12') !== -1 || str.indexOf('34') !== -1 || str.indexOf('56') !== -1 || str.indexOf('77') !== -1 || 
         str.indexOf('88') !== -1 ) {
    str = str.replace('()', '');
    str = str.replace('[]', '');
    str = str.replace('{}', '');
    str = str.replace('||', '');
    str = str.replace('12', '');
    str = str.replace('34', '');
    str = str.replace('56', '');
    str = str.replace('77', '');
    str = str.replace('88', '');
 
  }

  if( str === '') {
    return true 
  } else {
    return false
  }
}
