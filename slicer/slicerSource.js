// tslint:disable:semicolon
import { ScatterData, Layout } from 'plotly.js'
import * as _ from 'lodash'
import * as Plotly from 'plotly.js/dist/plotly'
import {
    Dataset, CurrentCompleteSetting, SavedSettingsList, Setting, Params,
    Runs, Result, Run, ScatterAxisType, Dimension, Trace, Mode, Hovermode, EventListenerFunct, ParamsViewBoundaries, ParamRanges
} from './types'

const RunNumber = 'run_number'
const SWEEP_RESOLUTION = 60
const NON_VISIBLE_SWEEP_RESOLUTION = 4
const SCATTER = 'scatter'
const PARALLEL = 'parallel'
const FILTER = 'filter'
const ScatterAxis = 'scatterAxes'
const settingAffectDefault = [SCATTER, FILTER]
enum PossibleAxes {
    x = 'x',
    y = 'y',
    z = 'z',
    colorRamp = 'colorRamp'
}
// TYPES

//  DYNAMIC GLOBALS
let initialSetting = {
    paramsViewBoundaries: {
        sugar: [0, 10],
        egg: [0, 5],
        temp: [50, 600],
    },
}
let dataset: Dataset = []
let filteredDataset: Dataset = []
let runNumberIndex: number = 0
let currentCompleteSetting: CurrentCompleteSetting
let savedSettingsList: SavedSettingsList = []
let savedThumbnails = []
let parallelPlotlyObj
let parallelPlotElement: any = document.getElementById('parallel')
let scatterPlotElement: any = document.getElementById('scatter')
let plotyPlotScatter
// APPLICATION SPECIFIC DATA

let defaultSettings: Setting = {
    [ScatterAxis]: {},
    paramsViewBoundaries: {},
    constraintRanges: {},
    autoAdjustColorRange: false,
    showLabs: false
}
// EXPERIMENT SPECIFIC DATA
let params: Params = {
    sugar: {
        default: 2,
        unit: 'grams'
    },
    egg: {
        default: 1,
    },
    temp: {
        default: 1,
    },
    tastiness: {
        default: 0,
        dependent: true,
        notSweepable: true,
    },
    [RunNumber]: {
        default: 0,
        notSweepable: true,
    },
}


let initialRuns: Runs = [
    // {
    //     sugar: {
    //         sweep: [{
    //             between: [0, 40],
    //             step: 1,
    //         }]
    //     },
    //     egg: {
    //         sweep: [{
    //             between: [0, 1],
    //             step: 0.1,
    //         }]
    //     },
    //     temp: {
    //         sweep: [{
    //             between: [100, 150],
    //             step: 15,
    //         }]
    //     },
    // },
    {
        sugar: {
            value: 4,
        },
        egg: {
            value: 1.5,
        },
        temp: {
            value: 300
        },
    }
]
let simulatedMeasurements = {
    tastiness: (result: Result) => {
        // return (Math.cos(result.egg ) + result.sugar) * result.temp
        // return (result.sugar + result.temp * 0.01) % (result.egg * 8 + result.temp * 0.01)
        // return - result.temp
        // return resutl.sugar
        // return (result.sugar + result.egg) * result.temp
        // return Math.sin(result.sugar / 2) * 100 * Math.sin(result.egg * 10) * 100 + Math.sin(result.temp / 100) * 100
        // return Math.sin(result.sugar ) * 10 + Math.sin(result.egg * 2 + result.sugar * 0.5) * 10 + Math.sin(result.temp / 100) * 10
        return Math.sin(result.sugar + result.temp / 70) * 10 + Math.sin(result.egg * 2 + result.sugar * 0.5 + result.temp / 100) * 10
    }
}
// ################## INTERACTIONS

const switchAxis = (event) => {
    let selectedParam = event.target.value
    let axis = _.lowerFirst(_.replace(event.target.id, 'AxisParam', ''))
    currentCompleteSetting.scatterAxes[axis] = selectedParam
    restyleScatterPlot()
}
const adjustNonSweepableViewBoundaries = () => {
    let nonSweepableParams = _.pickBy(params, (value, paramName) => {
        return value.notSweepable
    })
    let nonSweepableMinMax = _.mapValues(nonSweepableParams, (paramValue, paramName) => {
        let values = _.map(dataset, (result) => (result[paramName]))
        return [_.min(values), _.max(values)]
    })

    currentCompleteSetting.paramsViewBondaries = {
        ...currentCompleteSetting.paramsViewBondaries,
        ...nonSweepableMinMax
    }
}
const generateNewRun = () => {
    let paramRanges = getParamRanges(parallelPlotElement.data[0])
    let newRun = paramRangesToRun(paramRanges)
    executeRun(newRun)
    adjustNonSweepableViewBoundaries()
    currentCompleteSetting.constraintRanges = {}
    restyleParallelPlot()
    filterDataset()
    restyleScatterPlot()
}
const zoomToParamBoundaries = () => {
    let paramRanges = getParamRanges(parallelPlotElement.data[0])
    currentCompleteSetting.paramsViewBondaries = {
        ...currentCompleteSetting.paramsViewBondaries,
        ...paramRanges,
    }
    currentCompleteSetting.constraintRanges = {}
    restyleParallelPlot()
    filterDataset()
    restyleScatterPlot()
}
const resetParallelZoom = () => {
    setInitialBoundaries()
    generateParallelPlot()
    filterDataset()
    restyleScatterPlot()
}

const generatePlotlyThumbnails = () => { }

const saveConfiguration = () => {
    let buttonIndex = savedSettingsList.length
    let savedInputElement: any = document.getElementById('saveConfigInput')
    let title = savedInputElement.value
    let elementId = 'savedConfig' + buttonIndex
    let savedConfig = {
        placeholderId: 'savedConfigsPlaceholder',
        elementType: 'div',
        innerHTML: '',
        style: 'float: left;',
        attributes: {
            id: elementId,
            value: buttonIndex,
        },
        eventListener: {
            interaction: 'click',
            execute: loadConfig,
        },
    }
    let clonedSetting = _.cloneDeep(currentCompleteSetting)
    if (!clonedSetting.constraintRanges.run_number) {
        clonedSetting.constraintRanges = {
            ...clonedSetting.constraintRanges,
            run_number: [0, runNumberIndex - 0.5]
        }
    }
    savedSettingsList.push(clonedSetting)
    let explorationThumbnails = generatePlotlyThumbnails
    savedThumbnails.push(explorationThumbnails)
    appendElement(savedConfig)
    let imagePromise = plotyPlotScatter.then((plot) => {
        return Plotly.toImage(plot, { height: 300, width: 300 })
    })
    appendElement({
        placeholderId: elementId,
        elementType: 'div',
        innerHTML: title,
    })
    imagePromise.then((imageString) => {
        let plotImageElement = {
            placeholderId: elementId,
            elementType: 'img',
            attributes: {
                src: imageString,
                id: 'savedConfigImage' + buttonIndex,
            }
        }
        appendElement(plotImageElement)
    })
}

const loadConfig = (e) => {
    let configIndex = _.toInteger(_.replace(e.target.id, 'savedConfigImage', ''))
    currentCompleteSetting = _.cloneDeep(savedSettingsList[configIndex])
    adjustNonSweepableViewBoundaries()
    generateParallelPlot()
    filterDataset()
    restyleScatterPlot()
}
// ###### END OF INTERACTIONS
const initialSettingToCompleteSetting = (initialSetting): CurrentCompleteSetting => {
    return _.mapValues(defaultSettings, (setting, settingName) => {
        if (_.has(initialSetting, settingName)) {
            return initialSetting[settingName]
        } else if (settingName === ScatterAxis) {
            let dependentParams = _.pickBy(params, (param, paramName) => {
                return param.dependent
            })
            return {
                x: _.keys(params)[0],
                y: _.keys(params)[1],
                colorRamp: _.first(_.keys(dependentParams))
            }
        } else {
            return setting
        }
    })
}
const appendElement = (description) => {
    let element = document.createElement(description.elementType)
    _.mapValues(description.attributes, (attributeValue, attributeName) => {
        element.setAttribute(attributeName, attributeValue)
    })
    element.innerHTML = description.innerHTML
    if (description.eventListener) {
        let eventListener = description.eventListener
        element.addEventListener(eventListener.interaction, eventListener.execute as any)
    } // TODO: refactor the following
    if (description.value) {
        element.value = description.value
    }
    if (description.for) {
        element.for = description.for
    }
    if (description.selected) {
        element.selected = description.selected
    }
    if (description.style) {
        element.style = description.style
    }
    document.getElementById(description.placeholderId).appendChild(element)
    return element
}

const generateLayout = () => {
    let executeRunButton = {
        placeholderId: 'scatterActionsPlaceholder',
        elementType: 'BUTTON',
        innerHTML: 'Execute Run',
        attributes: {
            id: 'executeRun',
        },
        eventListener: {
            interaction: 'click',
            execute: generateNewRun,
        },
    }
    let saveConfigurationButton = {
        placeholderId: 'scatterActionsPlaceholder',
        elementType: 'BUTTON',
        innerHTML: 'Save Configuration',
        attributes: {
            id: 'saveConfig',
        },
        eventListener: {
            interaction: 'click',
            execute: saveConfiguration,
        },
    }
    let saveConfigurationInput = {
        placeholderId: 'scatterActionsPlaceholder',
        elementType: 'input',
        innerHTML: 'Save Configuration',
        attributes: {
            id: 'saveConfigInput',
            type: 'text',
            value: 'Saved Plot',
        },
    }
    let zoomParallelButton = {
        placeholderId: 'scatterActionsPlaceholder',
        elementType: 'BUTTON',
        innerHTML: 'Zoom to Selected Ranges',
        attributes: {
            id: 'zoomToParamBoundaries',
        },
        eventListener: {
            interaction: 'click',
            execute: zoomToParamBoundaries,
        },
    }
    let resetParallelZoomButton = {
        placeholderId: 'scatterActionsPlaceholder',
        elementType: 'BUTTON',
        innerHTML: 'Reset Zoom',
        attributes: {
            id: 'resetParallelZoom',
        },
        eventListener: {
            interaction: 'click',
            execute: resetParallelZoom,
        },
    }
    let axisSelectorEventListener = {
        interaction: 'change',
        execute: (e) => { switchAxis(e) },
    }
    let axisSelectors = {
        x: {
            placeholderId: 'xAxisSelectorPlaceholder',
            elementType: 'select',
            innerHTML: 'X Axis Param ',
            attributes: {
                id: 'XAxisParam',
            },
            eventListener: axisSelectorEventListener
        },
        y: {
            placeholderId: 'yAxisSelectorPlaceholder',
            elementType: 'select',
            innerHTML: 'Y Axis Param ',
            attributes: {
                id: 'YAxisParam',
            },
            eventListener: axisSelectorEventListener
        },
        z: {
            placeholderId: 'zAxisSelectorPlaceholder',
            elementType: 'select',
            innerHTML: 'Z Axis Param ',
            attributes: {
                id: 'ZAxisParam',
            },
            eventListener: axisSelectorEventListener
        },
        colorRamp: {
            placeholderId: 'colorRampAxisSelectorPlaceholder',
            elementType: 'select',
            innerHTML: 'Color Ramp Axis Param ',
            attributes: {
                id: 'ColorRampAxisParam',
            },
            eventListener: axisSelectorEventListener
        }
    }
    _.mapValues(axisSelectors, (selectorDescription, axisName) => {
        appendElement({
            placeholderId: selectorDescription.placeholderId,
            elementType: 'label',
            for: selectorDescription.attributes.id,
            innerHTML: selectorDescription.innerHTML
        })
        appendElement(selectorDescription)
        let clonedParams = _.cloneDeep(params)
        if (axisName === 'z') { clonedParams.none = {} }
        _.mapValues(clonedParams, (paramValue, paramName) => {
            let isSelectedAxis = currentCompleteSetting.scatterAxes[axisName] === paramName
            appendElement({
                elementType: 'option',
                placeholderId: selectorDescription.attributes.id,
                value: paramName === 'none' ? undefined : paramName,
                innerHTML: paramName,
                selected: isSelectedAxis || paramName === 'none' ? 'selected' : ''
            })
        })
    })
    appendElement(executeRunButton)
    appendElement(zoomParallelButton)
    appendElement(resetParallelZoomButton)
    appendElement(saveConfigurationInput)
    appendElement(saveConfigurationButton)

}

// TODO: sort params to move dependent last (in order to simulate results)

const addResult = (result: Result) => {
    let resultToAdd = _.mapValues(params, (param, param_name) => {
        return result[param_name] || param.default
    })
    dataset.push(resultToAdd)
}
const getClosestBetween = (range: number[], value: number): number => {
    let sortedRange = range.sort((a, b) => (a - b))
    if (value > sortedRange[1]) {
        return sortedRange[1]
    } else if (value < sortedRange[0]) {
        return sortedRange[0]
    } else {
        return value
    }
}
const sweep = (index: number, result: Result, sweepArray, run: Run) => {
    let currentSweep = sweepArray[index]
    if (currentSweep) {
        _.map(currentSweep.sweep, (sweepElement) => {
            let sorted = sweepElement.between.sort((a, b) => (a - b))
            for (let paramValue = sorted[0]; paramValue <= sorted[1]; paramValue += sweepElement.step) {
                result[currentSweep.name] = paramValue
                sweep(index + 1, result, sweepArray, run)
            }
        })
    } else {
        let paramsArrayWithNames = addNameToObjProps(params)
        let dependentParamsLast = _.sortBy(paramsArrayWithNames, (param) => (param.dependent))
        // simulating measurements
        let resultArray: number[] = _.map(dependentParamsLast, (paramWithName) => {
            let paramName = paramWithName.name
            if (simulatedMeasurements[paramName]) {
                return simulatedMeasurements[paramName](result)
            } else if (run[paramName] && run[paramName].value) {
                return run[paramName].value
            } else if (paramName === RunNumber) {
                return runNumberIndex
            } else {
                return result[paramName]
            }
        }) as number[]
        let resultwithKeys = _.zipObject(_.map(dependentParamsLast, 'name'), resultArray) as Result
        addResult(resultwithKeys)
        return
    }
}
const addNameToObjProps = (obj) => {
    return _.mapValues(obj, (obj, key) => {
        return {
            ...obj,
            name: key
        }
    })
}

const executeRun = (run: Run) => {
    let sweeps = _.pickBy(run, (param) => {
        return param.sweep
    })
    let sweepArray = _.map(sweeps, (sweepObj, key) => {
        sweepObj.name = key
        return sweepObj
    })
    // generating a result object that is going to be filled and passed
    let result = _.mapValues(params, (param) => {
        return param.default
    })
    sweep(0, result, sweepArray, run)
    runNumberIndex++
}

const executeRuns = (runs: Runs) => {
    _.map(runs, (run) => {
        executeRun(run)
    })
}

const isBetween = (value: number, rangeArray: number[]) => {
    let sorted = rangeArray.sort((a, b) => (a - b))
    return sorted[0] <= value && value <= sorted[1]
}
const filterDataset = () => {
    let paramRanges = currentCompleteSetting.constraintRanges
    if (_.isEmpty(paramRanges)) { filteredDataset = dataset }
    filteredDataset = _.filter(dataset, (result) => {
        let isIncludedInAll = !_.some(paramRanges, (paramRange, paramName) => {
            let viewBondary = currentCompleteSetting.paramsViewBondaries[paramName]
            if (_.isArray(paramRange[0])) { // we have an array of ranges
                return !_.some(paramRange as number[][], (range) => {
                    return isBetween(result[paramName], range) && isBetween(result[paramName], viewBondary)
                })
            } else { // we have only an array
                return !(isBetween(result[paramName], paramRange as number[]) && isBetween(result[paramName], viewBondary))
            }
        })
        return isIncludedInAll
    })
}


const setInitialBoundaries = () => {
    currentCompleteSetting.paramsViewBondaries = _.mapValues(params, (paramValue, paramName) => {
        if (initialSetting.paramsViewBoundaries && initialSetting.paramsViewBoundaries[paramName]) {
            return initialSetting.paramsViewBoundaries[paramName]
        }
        let values = _.map(dataset, (result) => (result[paramName]))
        return [_.min(values), _.max(values)]
    })
}

let plotlyStandardOptions = {
    showLink: false, // removes the link to edit on plotly
    displayModeBar: false,
    displaylogo: false
}

const generateParallelPlotlyObj = () => {
    let scatterAxes = currentCompleteSetting.scatterAxes
    let dimensions = _.map(params, (param, paramName) => {
        let dimension: Dimension = {
            label: paramName,
            values: _.map(dataset, (result) => {
                return result[paramName]
            })
        }
        if (_.has(currentCompleteSetting.paramsViewBondaries, paramName)) {
            dimension.range = currentCompleteSetting.paramsViewBondaries[paramName]
        }
        if (_.has(currentCompleteSetting.constraintRanges, paramName)) {
            dimension.constraintrange = currentCompleteSetting.constraintRanges[paramName]
        }
        return dimension
    })

    let parallelTrace = {
        type: 'parcoords',
        pad: [80, 80, 80, 80],
        line: {
            showscale: false,
            // reversescale: true,
            colorscale: 'Jet',
            color: _.map(dataset, (result) => (result[RunNumber]))
        },
        dimensions: dimensions
    }
    let parallelData = [parallelTrace]

    let parallelLayout = {
        title: 'parallel coordinate Plot',
    }
    return {
        parallelData: parallelData,
        parallelLayout: parallelLayout,
    }
}

const generateParallelPlot = () => {
    parallelPlotlyObj = generateParallelPlotlyObj()
    Plotly.newPlot(
        parallelPlotElement,
        parallelPlotlyObj.parallelData,
        parallelPlotlyObj.parallelLayout,
        plotlyStandardOptions
    )
    parallelPlotElement.on('plotly_restyle', (eventData) => {
        let paramRanges = getParamRanges(parallelPlotElement.data[0])
        currentCompleteSetting.constraintRanges = paramRanges
        filterDataset()
        restyleScatterPlot()
    })
}
const restyleParallelPlot = () => {
    parallelPlotlyObj = generateParallelPlotlyObj()
    Plotly.react(
        parallelPlotElement,
        parallelPlotlyObj.parallelData,
        parallelPlotlyObj.parallelLayout,
        plotlyStandardOptions
    )
}

// const generateScatterPlotlyObj = (): { data: ScatterData, layout: Layout} => {
const generateScatterPlotlyObj = () => {
    let scatterAxes = currentCompleteSetting.scatterAxes
    let byColumns = _.mapValues(params, (param, paramName) => {
        return {
            label: paramName,
            values: _.map(filteredDataset, (result) => {
                return result[paramName]
            })
        }
    })

    let trace1: Trace = {
        type: 'scatter',
        x: byColumns[scatterAxes.x].values,
        y: byColumns[scatterAxes.y].values,
    }
    if (scatterAxes.z && scatterAxes.z !== 'none') {
        trace1.z = byColumns[scatterAxes.z].values
    }
    if (scatterAxes.colorRamp) {
        trace1.mode = Mode.markers,
            trace1.marker = {
                symbol: 'square',
                size: 10.5,
                color: byColumns[scatterAxes.colorRamp].values,
                colorscale: 'Electric',
                showscale: true,
                colorbar: {
                    title: scatterAxes.colorRamp,
                },
            },
            trace1.hovertext = byColumns[scatterAxes.colorRamp].values
        trace1.type = scatterAxes.z && scatterAxes.z !== 'none' ? 'scatter3d' : 'scatter'
        trace1.showscale = true
    }
    if (!currentCompleteSetting.autoAdjustColorRange) {
        trace1.marker.cmin = currentCompleteSetting.paramsViewBondaries[scatterAxes.colorRamp][0]
        trace1.marker.cmax = currentCompleteSetting.paramsViewBondaries[scatterAxes.colorRamp][1]
    }
    let plotlyObj: any = {
        data: [trace1],
        layout: {
            title: 'filtered Scatter Plot',
            hovermode: Hovermode.closest,
            width: 800,
            height: 600,
            dragmode: 'select',
            plot_bgcolor: '#3d3d3d',
            xaxis: {
                title: scatterAxes.x,
                range: currentCompleteSetting.paramsViewBondaries[scatterAxes.x],
            },
            yaxis: {
                title: scatterAxes.y,
                range: currentCompleteSetting.paramsViewBondaries[scatterAxes.y],
            },
        },
    }
    if (scatterAxes.z && scatterAxes.z !== 'none') {

        plotlyObj.layout.zaxis = {
            title: scatterAxes.z,
            range: currentCompleteSetting.paramsViewBondaries[scatterAxes.z],
        }
        plotlyObj.layout = { scene: { ...plotlyObj.layout } } // we have to wrap the scene layout with the scene prop
    }
    return plotlyObj
}

const generateScatterPlot = () => {
    let plotlyObject = generateScatterPlotlyObj()
    plotyPlotScatter = Plotly.newPlot(scatterPlotElement, plotlyObject.data, plotlyObject.layout, plotlyStandardOptions)
    scatterPlotElement.on('plotly_selected', (eventData) => {
        if (!eventData || !eventData.range) { return }
        _.mapValues(eventData.range, (range, axisName) => {
            let paramName = currentCompleteSetting.scatterAxes[axisName]
            currentCompleteSetting.constraintRanges[paramName] = range
        })
        generateParallelPlot()
    })
}

const restyleScatterPlot = () => {
    let updatedPlotlyObject = generateScatterPlotlyObj()
    plotyPlotScatter = Plotly.react(scatterPlotElement, updatedPlotlyObject.data, updatedPlotlyObject.layout, plotlyStandardOptions)
}

const getParamRanges = (parallelTrace) => {
    let ranges = _.mapValues(_.keyBy(parallelTrace.dimensions, 'label'), 'constraintrange')
    return _.pickBy(ranges, (range) => {
        return !_.isEmpty(range)
    })
}

const paramRangeToSweep = (paramRange: number[], paramName: string) => {
    let minMax = currentCompleteSetting.paramsViewBondaries[paramName]
    let isParamVisibleOnScatterPlot = currentCompleteSetting.scatterAxes.x === paramName || currentCompleteSetting.scatterAxes.y === paramName
    let step = isParamVisibleOnScatterPlot ? (minMax[1] - minMax[0]) / SWEEP_RESOLUTION : (minMax[1] - minMax[0]) / NON_VISIBLE_SWEEP_RESOLUTION
    return {
        between: paramRange,
        step: step
    }
}
const paramRangesToRun = (paramRanges) => {
    let sweepableParams = _.pickBy(params, param => !param.notSweepable)
    return _.mapValues(sweepableParams, (sweepableParamValue, sweepableParamName) => {
        if (_.has(paramRanges, sweepableParamName)) {
            if (_.isArray(paramRanges[sweepableParamName][0])) { // is there is more than one range per param plotly returns an array of ranges
                return {
                    sweep: _.map(paramRanges[sweepableParamName], (paramRange) => {
                        return paramRangeToSweep(paramRange, sweepableParamName)
                    })
                }
            } else {
                let paramRange = paramRanges[sweepableParamName]
                return { sweep: [paramRangeToSweep(paramRange, sweepableParamName)] }
            }
        } else {
            let paramViewBoundaries = currentCompleteSetting.paramsViewBondaries[sweepableParamName]
            let value = getClosestBetween(paramViewBoundaries, params[sweepableParamName].default) // doing this to prevent generating a run outside the view range
            return { value: value } // using default value untill we have a way to specify individual values
        }
    })
}


// INITIALIZATION
const initialActions = () => {
    executeRuns(initialRuns)
    currentCompleteSetting = initialSettingToCompleteSetting(initialSetting)
    setInitialBoundaries()
    generateLayout()
    generateParallelPlot()
    filterDataset()
    generateScatterPlot()
}
initialActions()


