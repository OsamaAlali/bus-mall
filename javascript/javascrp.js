let firstProduct=document.getElementById('first-image');
let secoundProduct=document.getElementById('secound-image');
let thridProduct=document.getElementById('thrid-image');
let sectionImge=document.getElementById('sec1')
let count=0;
let maxAttempts=25;
let firstIndex;
let secIndex;
let thridIndex;

let arryName=[];

let lastIndex=[];


function product(name,sourc)
{
this.name =name ;
this.sourc=sourc;
this.votes=0;
this.show=0;
arryName.push(this.name);
product.allImage.push(this)



}
product.allImage=[];
//console.log(product.allImage);
new product('bag','./image/bag.jpg');
new product('banana','./image/banana.jpg');
new product('bathroom','./image/bathroom.jpg');
new product('boots','./image/boots.jpg');
new product('breakfast','./image/breakfast.jpg');
new product('bubblegum','./image/bubblegum.jpg');
new product('chair','./image/chair.jpg');
new product('cthulhu','./image/cthulhu.jpg');
new product('dog-duck','./image/dog-duck.jpg');
new product('dragon','./image/dragon.jpg');
new product('pet-sweep','./image/pet-sweep.jpg');
new product('scissors','./image/scissors.jpg');
new product('shark','./image/shark.jpg');
new product('sweep','./image/sweep.png');
new product('tauntaun','./image/tauntaun.jpg');
new product('unicorn','./image/unicorn.jpg');
new product('usb','./image/usb.gif');
new product('water-can','./image/water-can.jpg');
new product('wine-glass','./image/wine-glass.jpg');
new product('pen','./image/pen.jpg');



function renderThreeImage()
{firstIndex=genratRandomIndex();
 secIndex=genratRandomIndex();
 thridIndex=genratRandomIndex();
 while(firstIndex===secIndex|| firstIndex===thridIndex||secIndex===thridIndex || lastIndex.includes(firstIndex) || lastIndex.includes(secIndex) || lastIndex.includes(thridIndex)) 
{  
    firstIndex=genratRandomIndex();
    secIndex=genratRandomIndex();
    thridIndex=genratRandomIndex();
    }
    lastIndex[firstIndex,secIndex,thridIndex];
firstProduct.src=product.allImage[firstIndex].sourc;
product.allImage[firstIndex].show++;
secoundProduct.src=product.allImage[secIndex].sourc;
product.allImage[secIndex].show++;
thridProduct.src=product.allImage[thridIndex].sourc;
product.allImage[thridIndex].show++;
}//end render function
renderThreeImage();


function genratRandomIndex()
{
  return  Math.floor(Math.random()* product.allImage.length);
}
genratRandomIndex();
//console.log(genratRandomIndex());
sectionImge.addEventListener('click',handleClicking);

function handleClicking(event){
    count++;
if(maxAttempts >=count){
    if(event.target.id=='first-image')
    {
        product.allImage[firstIndex].votes++;

    }else if(event.target.id==='secound-image'){
        product.allImage[firstIndex].votes++;
        
    }else if (event.target.id==='thrid-image'){
        product.allImage[thridIndex].votes++;
        
    }//console.log(product.allImage);
    saveTols();
    renderThreeImage();
}else
    {
       sectionImge.removeEventListener('click',handleClicking)
    //6renderList();
    gettingVotiesAndShow();
    //chart();

    }

}
// let btn=document.getElementById('result');
// btn.addEventListener('click',showlist);
// function showlist()
// {
// renderList();
// btn.removeEventListener('click',showlist);
// }
let arrOfShow=[];
let arrOfVotes=[];
function renderList()
{
let ul=document.getElementById('list');
let li=null;
ul.innerHTML='';
for (let i =0;i<product.allImage.length;i++)
{
   arrOfShow.push(product.allImage[i].show);
   arrOfVotes.push(product.allImage[i].votes);
li=document.createElement('li');
ul.appendChild(li);
li.textContent=`${product.allImage[i].name} had ${product.allImage[i].votes} votes was seen ${product.allImage[i].show}`;
}
}

function saveTols()
{
let arrstr=JSON.stringify(product.allImage);
localStorage.setItem('productsave',arrstr);
// console.log(product.allImage);
// console.log(JSON.stringify(product.allImage));
}

function gettingVotiesAndShow()
{
let data=localStorage.getItem('productsave');
console.log('gitelmentttt'+data);
let item=JSON.parse(data);
console.log('item '+ item);
if(item !==null){
product.allImage=item;
renderList();
}

}



function chart(){
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {  
        type: 'bar',
        data: {
            labels: arryName, 
            datasets: [{
                label: 'Number Of votes',
                data: arrOfVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderWidth: 1
            },{
              label:'# of Show',
              data: arrOfShow,
              backgroundColor:[
                "rgb(192,192,192)"
              ],
              borderWidth: 1
            }]
        }
    })
    }

    gettingVotiesAndShow()