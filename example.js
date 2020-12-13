// ~/learn-node $ node
let countryCode= 'us';
let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=c17c183c988b461fbc73bd7a48d8e868`;
// https://newsapi.org/v2/top-headlines?country=us&apiKey=c17c183c988b461fbc73bd7a48d8e868
// let url='http://newsapi.org/v2/everything?q=from=2020-12-10&to=2020-12-13&sortBy=popularity&countryCode=us&apiKey=c17c183c988b461fbc73bd7a48d8e868'
// https://newsapi.org/v2/top-headlines?country=us&apiKey=c17c183c988b461fbc73bd7a48d8e868
let  req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

function preload(){
  data=loadJSON(url);
  console.log(data);

}

//
// // .split() outputs an Array
//
// function setup() {
// createCanvas(100, 100);
// background(200);
// }

let titleN;
let list;
let index = 0;
function setup() {
  createCanvas(400, 400);
  console.log(data.articles.length);



}

function draw() {
  background(220);
  text('click here to save', 10, 10, 70, 80);

  while(index<data.articles.length-1){
    index++;
    titleN+= data.articles[index].title;
      // var allwords=txt.join("\n");
  // var tokens = allwords.split(/\W+/);
    // titleN= toString(titleN);
    // console.log(titleN);

    // list += titleN;

  }
}

function mousePressed() {
  // list = split(titleN, ' ');

  console.log(titleN);
    // // console.log(list);
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      // list = split(list,' ');
      list = split(titleN, '-');
      list.join('\n');
      console.log(list);

      saveStrings(list, 'nouns.txt');
    }
}
