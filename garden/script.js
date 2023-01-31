var layout = {
//   title: "Basic Sankey",
  font: {
    size: 10,
  },
};

Plotly.react("single", dataSingle, layout);

Plotly.react("myDiv", data, layout);

Plotly.react("bigger", dataBigger, layout);
Plotly.react("tired", dataTired, layout);
