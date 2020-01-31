const AXIS_NAMES = ['x', 'y', 'z', 'colorScale']
let xStructured = []
let yStructured = []
let zStructured = []
let valuesStructured = []
for (let xIndex = 0; xIndex < 10; xIndex++) {
    for (let yIndex = 0; yIndex < 10; yIndex++) {
        for (let zIndex = 0; zIndex < 3; zIndex++) {
            xStructured.push(xIndex)
            yStructured.push(yIndex)
            zStructured.push(zIndex)
            valuesStructured.push(Math.random())

        }
    }
}

var traceStructured = {
    x: xStructured, y: yStructured, z: zStructured,
    mode: 'markers',
    marker: {
        size: 12,
        color: valuesStructured,
    },
    type: 'scatter3d'
};

var data = [traceStructured];
var layout = {
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }
};
Plotly.newPlot('3dStructured', data, layout);



let xScattered = []
let yScattered = []
let zScattered = []
let valuesScattered = []
for (let xIndex = 0; xIndex < 10; xIndex++) {
    for (let yIndex = 0; yIndex < 10; yIndex++) {
        for (let zIndex = 0; zIndex < 3; zIndex++) {
            xScattered.push(Math.random())
            yScattered.push(Math.random())
            zScattered.push(Math.random())
            valuesScattered.push(Math.random())
        }
    }
}

var traceScattered = {
    x: xScattered, y: yScattered, z: zScattered,
    mode: 'markers',
    marker: {
        size: 12,
        color: valuesScattered,
    },
    type: 'scatter3d'
};

var data = [traceScattered];
var layout = {
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }
};
Plotly.newPlot('3dScattered', data, layout)

let datasetA = {
    sugar: [],
    egg: [],
    temp: [],
    tastyness: []
}
for (let xIndex = 0; xIndex < 10; xIndex++) {
    for (let yIndex = 0; yIndex < 10; yIndex++) {
        for (let zIndex = 0; zIndex < 10; zIndex++) {
            datasetA.sugar.push(xIndex)
            datasetA.egg.push(yIndex)
            datasetA.temp.push(zIndex)
            let tastyness = Math.pow(xIndex, 3) + Math.pow(yIndex, 3) + Math.pow(zIndex, 3)
            datasetA.tastyness.push(tastyness)

        }
    }
}

const datasetToParCoordsDimensions = (dataset, showAxisInMainPlot, scatterAxes) => {
    let datasetWithDimensions = {}
    if (showAxisInMainPlot) {
        datasetWithDimensions = dataset
    } else {
        Object.keys(dataset).forEach( key => {
            let toLeaveOut = [scatterAxes.x, scatterAxes.y]
            if (scatterAxes != 'none') { toLeaveOut.push(scatterAxes.z)}
            if (!toLeaveOut.includes(key)) {
                datasetWithDimensions[key] = dataset[key]
            }
        })
    }

    let dimensions = []
    for (const dimensionKey in datasetWithDimensions) {
        let dimension = {
            label: dimensionKey,
            values: dataset[dimensionKey]
        }
        dimensions.push(dimension)
    }
    return dimensions
}


let plotlyStandardOptions = {
    showLink: false, // removes the link to edit on plotly
    displayModeBar: false,
    displaylogo: false,
}
let scatterAxes = {
    x: 'sugar',
    y: 'egg',
    z: 'none',
    colorScale: 'tastyness',
}
let constraintRanges = {}
let showAxisInMainPlot = false
const getMargins = (values) => {
    let max = Math.max(...values)
    let min = Math.min(...values)
    let marginSize = Math.abs((max - min) * 0.1)
    return [min - marginSize, max + marginSize ]
}

const filterDataset = (dataset, constraintRanges) => {
    if (Object.keys(dataset).length === 0) { return {}}
    let filteredDataset = {}
    let datasetArrayLength = dataset[Object.keys(dataset)[0]].length
    for (let index = 0; index < datasetArrayLength; index++) {
        let positionIncludedInRanges = true
        for (const paramName in constraintRanges) {
            let paramValueUnderTest = dataset[paramName][index]
            let paramRanges = constraintRanges[paramName]
            let isIncludedInAParamRange = paramRanges.some(range => range[0] < paramValueUnderTest && paramValueUnderTest < range[1])
            if (!isIncludedInAParamRange){
                positionIncludedInRanges = false
                break
            }
        }
        if (positionIncludedInRanges) {
            for (const paramName in dataset) {
                let valueToPush = dataset[paramName][index]
                if (filteredDataset[paramName]) {
                    filteredDataset[paramName].push(valueToPush)
                } else {
                    filteredDataset[paramName] = [valueToPush]
                }
            }
        }
    }
    return filteredDataset
}

const produceMatrix = (dataset, xParam, yParam, zParam) => {
    let overlap = false
    let cols = [...new Set(dataset[xParam])].sort((a, b) => { return a - b })
    let rows = [...new Set(dataset[yParam])].sort((a, b) => { return a - b })
    let matrixSize = cols * rows
    if (matrixSize > dataset[xParam].length * 2) {
        return false
    }
    let matrix = Array(rows.length).fill().map(() => Array(cols.length).fill())
    dataset[zParam].forEach((zValue, index) => {
        let colIndex = cols.indexOf(dataset[xParam][index])
        let rowIndex = rows.indexOf(dataset[yParam][index])
        if (overlap ||  matrix[rowIndex][colIndex]) {
            overlap = true
            matrix[rowIndex][colIndex] = zValue
        } else {
            matrix[rowIndex][colIndex] = zValue
        }
    })
    return {
        x: cols,
        y: rows,
        z: matrix,
        overlap: overlap,
    }
}

const drawMainPlot = (mainPlot) => {
    let filteredDataset = filterDataset(datasetA, constraintRanges)

    let layout = {
        xaxis: {
            title: scatterAxes.x,
            range: getMargins(datasetA[scatterAxes.x]),
        },
        yaxis: {
            title: scatterAxes.y,
            range: getMargins(datasetA[scatterAxes.y])
        },
    }
    let heatmapData = produceMatrix(filteredDataset, scatterAxes.x, scatterAxes.y, scatterAxes.colorScale)
    if (heatmapData.overlap) {
        document.getElementById('overlapNotice').innerHTML = 'There is overlap'
    } else {
        document.getElementById('overlapNotice').innerHTML = ''
    }
    if ( scatterAxes.z === 'none' && heatmapData) {
        drawHeatmap(mainPlot, heatmapData, layout )
    } else {
        drawScatter(mainPlot, filteredDataset, layout)
    }

}

const drawHeatmap = (mainPlot, heatmapData, layout) => {
    let heatmapTrace = {
        ...heatmapData,
        type: 'heatmap',
        colorscale: 'Viridis',
        zmin: Math.min(...datasetA[scatterAxes.colorScale]),
        zmax: Math.max(...datasetA[scatterAxes.colorScale]),
    }
    Plotly.purge(mainPlot)
    Plotly.plot(mainPlot, [heatmapTrace], layout, plotlyStandardOptions)
}
const drawScatter = (mainPlot, filteredDataset, layout) => {
    var scatterTrace = {
        x: filteredDataset[scatterAxes.x],
        y: filteredDataset[scatterAxes.y],
        mode: 'markers',
        marker: {
            size: 40,
            color: filteredDataset[scatterAxes.colorScale],
            colorscale: 'Viridis',
            showscale: true,
            colorbar: {
                title: scatterAxes.colorScale,
            },
            cmin: Math.min(...datasetA[scatterAxes.colorScale]),
            cmax: Math.max(...datasetA[scatterAxes.colorScale]),
        },
    }
    if (scatterAxes.z != 'none') {
        scatterTrace.z = filteredDataset[scatterAxes.z]
        scatterTrace.type = 'scatter3d'
        scatterTrace.marker.size = 10
        layout = { scene: {
            zaxis: {
                title: scatterAxes.z,
                range: getMargins(datasetA[scatterAxes.z])
            },
            ...layout
        } }
    }

    Plotly.purge(mainPlot)
    Plotly.plot(mainPlot, [scatterTrace], layout, plotlyStandardOptions)
}

const drawParallel = (parallel) => {
    let parallelTrace = {
        type: 'parcoords',
        line: {
            color: datasetA[scatterAxes.colorScale],
            colorscale: 'Viridis',
        },

        dimensions: datasetToParCoordsDimensions(datasetA, showAxisInMainPlot, scatterAxes)
    }
    Plotly.purge(parallel)
    Plotly.plot(parallel, [parallelTrace], {}, plotlyStandardOptions)
    parallel.on('plotly_restyle', (eventData) => {
        let newConstraintRanges = {}
        parallel.data[0].dimensions.forEach(dimension => {
            if (dimension.constraintrange) {
                if (Array.isArray(dimension.constraintrange[0])) {
                    newConstraintRanges[dimension.label] = dimension.constraintrange
                } else {
                    newConstraintRanges[dimension.label] = [dimension.constraintrange]
                }
            }
        })
        constraintRanges = newConstraintRanges
        drawMainPlot(document.getElementById('mainPlot'))
        console.log(constraintRanges)
    })
}
const drawSlicer = (elementId) => {
    let slicer = document.getElementById(elementId)

    let twoPlotsContainer = document.createElement('div')
    twoPlotsContainer.setAttribute('id', 'twoPlotsContainer')

    let controlsContainer = document.createElement('div')
    controlsContainer.setAttribute('id', 'controlsContainer')
    let toggle = document.createElement('button')
    toggle.innerHTML = 'Toggle'
    slicer.appendChild(controlsContainer)
    let overlapNotice = document.createElement('span')
    overlapNotice.setAttribute('id', 'overlapNotice')
    controlsContainer.appendChild(overlapNotice)
    let parallel = document.createElement('div')
    parallel.setAttribute('id', 'parallel')
    parallel.setAttribute('style', "width:700px;height:450px;")

    let mainPlot = document.createElement('div')
    mainPlot.setAttribute('id', 'mainPlot')
    mainPlot.setAttribute('style', "width:700px;height:450px;")
    slicer.appendChild(twoPlotsContainer)
    twoPlotsContainer.appendChild(mainPlot)
    twoPlotsContainer.appendChild(parallel)
    toggle.addEventListener('click', () => {
        showAxisInMainPlot = !showAxisInMainPlot
        drawParallel(parallel)
    })
    AXIS_NAMES.forEach(axisName => {
        let paramLabel = document.createElement('label')
        controlsContainer.appendChild(paramLabel)
        paramLabel.innerHTML = axisName
        let selectDiv = document.createElement('select')
        selectDiv.setAttribute('data-id', axisName)
        controlsContainer.appendChild(selectDiv)
        for (const dimensionKey in datasetA) {
            let option = document.createElement('option')
            option.setAttribute('label', dimensionKey)
            option.setAttribute('value', dimensionKey)
            selectDiv.appendChild(option)
            if (scatterAxes[axisName] === dimensionKey ) {
                option.setAttribute('selected', 'selected')
            }
        }
        if (axisName === 'z') {
            let option = document.createElement('option')
            option.setAttribute('label', 'none')
            option.setAttribute('value', 'none')
            option.setAttribute('selected', 'selected')
            selectDiv.appendChild(option)
        }
        selectDiv.addEventListener('change', (ev) => {
            scatterAxes[ev.target.dataset.id] =  ev.target.value
            drawMainPlot(mainPlot)
            if (ev.target.dataset.id === 'colorScale') {
                drawParallel(parallel)
            }
        })
    })
    controlsContainer.appendChild(toggle)
    drawParallel(parallel)
    drawMainPlot(mainPlot)
}

drawSlicer('slicer')


