const lis = document.querySelectorAll(".strain-img-container LI");
const listContainer = document.querySelectorAll(".strain-img-container");
const liArr = [];
let topH2 = document.querySelector(".top-strains H2");
let listArr = [];
// let lisMax = Math.max(lis[i].value);
//
// console.log(lisMax);
for(let i = 0; i < lis.length; i++) {
  listArr.push(lis[i].value);
  highNum = Math.max(listArr);
  console.log(listArr);
}



function selectOrder() {
  let shopOrder = document.getElementById("most").value;

  for(let i = 0; i < lis.length; i++) {

  if(lis[i].value < highNum)  {

    let selectedLI = lis[i].parentNode;
    let prevLi = lis[i].previousElementSibling;
    selectedLI.insertBefore(lis[i], prevLi);
  }
  }

  if(shopOrder == "least-expensive") {
    for(let i = 0; i < lis.length; i++) {
      topH2.innerHTML = "Least Expensive Strains";
    // TEST -- lis[i].style.backgroundColor = "red";
  }
}

if(shopOrder == "most-expensive") {
  for(let i = 0; i < lis.length; i++) {
topH2.innerHTML = "Most Expensive Strains";
}
}

if(shopOrder == "best-sellers") {
  for(let i = 0; i < lis.length; i++) {
topH2.innerHTML = "Best Sellers";
}
}

}
