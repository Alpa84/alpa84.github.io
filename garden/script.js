var layoutSmall = {
  font: {
    size: 10,
  },
  margin: {t:0,l:15,b:40,r:0}
};
var layout = {
  font: {
    size: 10,
  },
  margin: {t:0,l:15,b:0,r:0}
};

Plotly.react("single", dataSingle, layoutSmall);

// Plotly.react("myDiv", data, layout);

Plotly.react("bigger", dataBigger, layout);
// Plotly.react("tired", dataTired, layout);


const MAX_TOKEN_LEN = 100
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // var j = Math.floor(Math.random() * (i + 1));
    var j = Math.floor(random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return
}

var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

const paddingBig = '10px'
const paddingSmall = '4px'
const lastPath = paths[paths.length-1]
const lastToken = lastPath[lastPath.length-1]
const numberOfIds = lastToken.id + 1
const steps = Array.from(Array(numberOfIds).keys()).map((p) => p / numberOfIds);
shuffleArray(steps)
paths.forEach((path, pathIndex) => {
  const pathDiv = document.createElement("div");
  document.getElementById("paths").appendChild(pathDiv);
  pathDiv.style.paddingTop = paddingBig
  pathDiv.style.paddingBottom = paddingBig
  pathDiv.style.marginTop = '-4px'
  pathDiv.style.marginBottom = '-4px'
  console.log(`_____________________path`, path)

  path.forEach((token, tokenIndex) => {
    const tokenSpan = document.createElement("span");
    const tokenText = document.createTextNode(
      token.token.length < MAX_TOKEN_LEN || token.id !== 0
        ? token.token
        : `${token.token.slice(0, 7)}[...]${token.token.slice(-15)}`
    );
    tokenSpan.appendChild(tokenText);
    pathDiv.appendChild(tokenSpan);
    let isNextDiffBranch = false
    if (pathIndex < paths.length - 1 ) {
      if (paths[pathIndex +1][tokenIndex] === undefined || paths[pathIndex][tokenIndex].id !== paths[pathIndex +1][tokenIndex].id) {
        isNextDiffBranch = true
      }
    }
    let isPrevDiffBranch = false
    if (pathIndex > 0) {
      if (
        paths[pathIndex - 1][tokenIndex] === undefined ||
        paths[pathIndex][tokenIndex].id !== paths[pathIndex - 1][tokenIndex].id
      ) {
        isPrevDiffBranch = true;
      }
    }
    tokenSpan.style.paddingTop = isPrevDiffBranch ? paddingSmall: paddingBig;
    tokenSpan.style.paddingBottom = isNextDiffBranch ? paddingSmall: paddingBig;
    // const scale = chroma.scale(["yellow", "blue"]).mode("lch");

    const color = pallete[token.id % pallete.length]
    tokenSpan.style.backgroundColor = color;
    tokenSpan.style.color = 'black';
  });
});



