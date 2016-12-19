function getFirstSelector(selector){

  return document.querySelector(selector);

}

function nestedTarget(){

  return document.getElementById('nested').querySelector('.target');

}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div');
  return lis[lis.length-1];
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   
  for (let i = 0, l = lis.length; i < l; i++) {
    var val  = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = val + n;
  }
}


