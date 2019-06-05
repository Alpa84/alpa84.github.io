let mapCoordinates = [-32.9572591, -60.68372820000001]
let mapZoom = 12
let mapWidth = '700px'
let mapHeight = '600px'
const NonWinnerColor = '#d8d4d4'

const partiesOrVotes = {
    afirmativos: 'Votos afirmativos emitidos',
    anulados: 'Votos Anulados',
    'en blanco': 'Votos en Blanco',
    diferencia: 'Diferencia a determinar en el Escrutinio Definitivo',
    impugnados: 'Votos impugnados',
    recurridos: 'Votos Recurridos',
    total: 'Total de votos',
    validos: 'Votos Válidos Emitido',
    delFradeCiudadFutura: {
        intendente:'PARA LA CIUDAD FUTURA',
        diputado: 'FRENTE SOCIAL Y POPULAR',
    },
    cambiemos: 'CAMBIEMOS',
    socialismo: 'FRENTE PROGRESISTA CÍVICO Y SOCIAL',
    peronismo: 'JUNTOS'
}
const customNames = {
    'DEL FRADE CARLOS ALFREDO': 'Del Frade',
    'LOPEZ MOLINA RODRIGO MANUEL': 'Lopez Molina',
    'DI BERT PABLO FERNANDO': 'Di Bert',
    'DE PONTI LUCILA MARIA': 'De Ponti',
}
const excludedVoteKeys = [
    'Votos Válidos Emitidos',
    'Total de votos',
    'Votos Recurridos',
    'Votos afirmativos emitidos',
    'Votos impugnados'
]
const partyColors = {
    'JUNTOS': '#0011FF',
    'CAMBIEMOS': '#FFFF00',
    'VAMOS JUNTOS': '#FFFF00',
    'SOMOS VIDA': '#4286f4',
    'FRENTE PROGRESISTA CÍVICO Y SOCIAL': '#FF8000',
    'ADELANTE': '#FF8000',
    'UNIDAD SOCIAL Y POPULAR': '#319322', // delfra
    'ARRIBA ROSARIO': '#3de534', // javkin
}
const subparties = {
    sukerman: 'SUMAR',
    monteverde: 'UN FUTURO DIFERENTE',
    roy: 'VAMOS JUNTOS',
    javkin: 'ARRIBA ROSARIO',
}

const scaleStops = 5
const InterpolateLinearMethod = 'interpolateOrRd'
const InterpolateWinnerMethod = 'interpolateSinebow'


let initialContestants = {
    'ENCUENTRO POR SANTA FE': { votesOrParty: "JUNTOS", name: "ENCUENTRO POR SANTA FE", nombreCandidato: "BIELSA MARIA EUGENIA" },
    'SUMAR': { votesOrParty: "JUNTOS", name: "SUMAR", nombreCandidato: "PEROTTI OMAR ANGEL" },
    'CAMBIEMOS': { votesOrParty: "CAMBIEMOS", name: "SUMAR", nombreCandidato: "CORRAL JOSE MANUEL" }
}
const contestantsToParams = ({contestants, position}) => {
    let params = []
    Object.values(contestants).map(contestant => {
        let votesOrPartyIndex
        let subpartyIndex
        let votesOrParties = Object.keys(totals[position])
        votesOrPartyIndex = votesOrParties.indexOf(contestant.votesOrParty)
        if (contestant.name) {
            let subpartyNames = Object.keys(totals[position][contestant.votesOrParty])
            subpartyIndex = subpartyNames.indexOf(contestant.name)
        } else {
            subpartyIndex = 'None'
        }
        params.push(`${votesOrPartyIndex}-${subpartyIndex}`)
    })
    return `${position}&${params.join('_')}`
}
const paramsToContestants = ({params}) => {
    try {
        let position = params.split('&')[0]
        let candidatesParams = params.split('&')[1].split('_')
        let urlCandidates = {}
        candidatesParams.map(candidateParams => {
            let candidate = {}
            let votesOrPartyIndex = candidateParams.split('-')[0]
            let votesOrParty = Object.keys(totals[position])[parseInt(votesOrPartyIndex)]
            candidate['votesOrParty'] = votesOrParty
            let subpartyIndex = candidateParams.split('-')[1]
            if (subpartyIndex !== 'None') {
                let subpartyName = Object.keys(totals[position][votesOrParty])[parseInt(subpartyIndex)]
                candidate['name'] = subpartyName
                candidate['nombreCandidato'] = totals[position][votesOrParty][subpartyName].nombreCandidato
            }
            urlCandidates[getKey(candidate)] = candidate
        })
        return {
            position,
            contestants: urlCandidates,
        }
    } catch (error) {
        return {}
    }
}

const getVotes = ({school, position, votesOrParty, subparty}) => {
    let votes
    if(subparty){
        votes = totals[position][votesOrParty][subparty][school.from]
    } else {
        votes = totals[position][votesOrParty][school.from]
    }
    if (votes){
        return votes
    } else {
        console.log('no votes for:')
        console.log(school, position, votesOrParty, subparty)
        return 0
    }
}
const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
const getPartyCandidates = ({ position, votesOrParty}) => {
    let candidates = {}
    Object.keys(totals[position][votesOrParty]).map( subpartyName => {
        if (totals[position][votesOrParty][subpartyName].nombre){
            let subparty = totals[position][votesOrParty][subpartyName]
            candidates[subpartyName] =  {
                nombreCandidato: subparty.nombreCandidato,
                name: subpartyName,
                votesOrParty: votesOrParty
            }
        }
    })
    return candidates
}

let circles = []
removeCircles = () =>{
    circles.map(circle => map.removeLayer(circle))
}
function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
    try {
        return decodeURIComponent(escape(s));
    } catch (error) {
        // console.error(error)
        // console.log(s)
    }
    return s
}
addCircles = ({ leafletMap, position, votesOrParty, subparty, clonedSchools}) => {
    clonedSchools.map(school => {
        let votes = getAddedVotes({
            candidate: {
                votesOrParty,
                name: subparty,
            },
            position,
            school
        })
        // let votes = getVotes({ school, position, votesOrParty, subparty})
        let schoolTotal = totals[position][partiesOrVotes.total][school.from]
        if (schoolTotal !== undefined && votes !== undefined) {
            school.thisPositionVotes = votes
            school.schoolTotal = schoolTotal
            school.ratio = (votes / schoolTotal)
        }
    })
    let schoolsWithData = clonedSchools.filter( school => {
        let notUndef = school.schoolTotal !== undefined && school.thisPositionVotes !== undefined
        return notUndef && school.schoolTotal !== 0
    })
    let ratios = schoolsWithData.map(school => school.ratio)
    if (document.getElementById('filterOutliers').checked) {
        ratios = filterOutliers(ratios)
    }
    let maxRatio = Math.max(...ratios)
    let minRatio = Math.min(...ratios)
    schoolsWithData
        .sort((a, b) => a.ratio - b.ratio)
        .map(school => {
        let span = maxRatio - minRatio
        colorInScale = d3[InterpolateLinearMethod]((school.ratio - minRatio)/ span)
        let opacity = 0.8
        let circle = L.circle([school.location.lat, school.location.lng], {
            color: colorInScale,
            fillColor: colorInScale,
            fillOpacity: opacity,
            radius: 200
        }).addTo(leafletMap)
        circles.push(circle)
        circle.bindPopup(`<b>${(school.ratio * 100).toFixed(2)}%</b> <br>
        <b>${school.thisPositionVotes}</b> votos sobre un total de <b>${school.schoolTotal}</b> <br>
        ${school.name} : ${school.dir}. <br>
        `)
    })
    return {maxRatio, minRatio}
}
const getWinner = ({candidates}) => {
    let localMax
    let subpartyMax
    let count = 0
    for (subpartyName in candidates) {
        let candidate = candidates[subpartyName]
        if ( count === 0) {
            localMax =  candidates[subpartyName].votes
            subpartyMax =  candidate
        } else {
            if (localMax < candidates[subpartyName].votes) {
                subpartyMax = candidate
                localMax = candidates[subpartyName].votes
            }
        }
        count ++
    }
    return subpartyMax
}
const getKey = (candidate) => {
    return candidate.name ? candidate.name : candidate.votesOrParty
}
const getLabel = (candidate) => {
    let label
    if (customNames[candidate.nombreCandidato]) {
        label = customNames[candidate.nombreCandidato]
    } else if (candidate.nombreCandidato) {
        label = candidate.nombreCandidato.split(' ')[0]
    } else {
        label = getKey(candidate)
    }
    return toTitleCase(decode_utf8(label))
}
const checkSameCandidate  = (candidateA, candidateB) => {
    if (candidateA.name && candidateB.name) {
        return candidateA.votesOrParty === candidateB.votesOrParty && candidateA.name === candidateB.name
    } else if (!candidateA.name && !candidateB.name){
        return candidateA.votesOrParty === candidateB.votesOrParty
    } else {
        return false
    }
}
const getAddedVotes  = ({candidate, position, school}) => {
    let votes
    if (candidate.name) {
        votes = getVotes({ school, position, votesOrParty: candidate.votesOrParty, subparty: candidate.name })
    } else if (hasSubparties({ votesOrParty: candidate.votesOrParty, position })) {
        let partyCandidates = getPartyCandidates({ position, votesOrParty: candidate.votesOrParty })
        let sum = Object.values(partyCandidates).reduce((aggregate, partyCandidate) => {
            let votes = getVotes({
                school, position, votesOrParty: partyCandidate.votesOrParty, subparty: partyCandidate.name
            })
            return aggregate + votes
        }, 0)
        votes = sum
    } else {
        votes = getVotes({ school, position, votesOrParty: candidate.votesOrParty })
    }
    return votes
}
const addInternalCircles = ({ leafletMap, position, candidates, clonedSchools}) => {
    let winnersList = []
    clonedSchools.map(school => {
        clonedCandidates = clone(candidates)

        for (const candidateKey in clonedCandidates) {
            const candidate = clonedCandidates[candidateKey]
            candidate.votes = getAddedVotes({candidate, position, school})
        }
        let schoolTotal = totals[position][partiesOrVotes.total][school.from]
        if (schoolTotal !== undefined) {
            school.winner = getWinner({ candidates: clonedCandidates})
            school.schoolTotal = schoolTotal
            school.candidates = clonedCandidates
            let isIncluded = winnersList.some(listWinner => checkSameCandidate(listWinner, school.winner))
            if (!isIncluded) {
                winnersList.push(school.winner)
            }
        }
    })

    let schoolsWithData = clonedSchools.filter( school => {
        return school.schoolTotal !== undefined
    })
    let count = 0
    for (const candidate of winnersList) {
        let candCount = winnersList.length
        colorValue = (candCount - 1) * count / candCount
        if (!candidate.name && partyColors[candidate.votesOrParty]) {
            candidate.color = partyColors[candidate.votesOrParty]
        } else if (candidate.name && partyColors[candidate.name]) {
            candidate.color = partyColors[candidate.name]
        } else {
            candidate.color =  d3[InterpolateWinnerMethod](colorValue)
        }
        count  = count + 1
    }

    schoolsWithData
        .map(school => {

        let opacity = 0.8
        let winner = winnersList.find( winner => checkSameCandidate(winner, school.winner ))
        let color = winner.color
        let circle = L.circle([school.location.lat, school.location.lng], {
            color: color,
            fillColor: color,
            fillOpacity: opacity,
            radius: 200
        }).addTo(leafletMap)
        circles.push(circle)
        let candResultsString = []
        // let schoolCandidates = school.candidates.sort((a, b) => a.votes - b.votes)
        // for (const candidateKey in schoolCandidates) {
        let candidatesArray = Object.values(school.candidates).sort((a, b) => b.votes - a.votes)
        for (const candidate of candidatesArray) {
            candResultsString.push(`${getLabel(candidate)}: <b>${school.candidates[getKey(candidate)].votes}</b>`)
        }
        let winnerLabel = getLabel(school.winner)
        circle.bindPopup(`${candResultsString.join('<br>')} <br>
        ${ decode_utf8(school.name)} : ${decode_utf8(school.dir)}. <br>
        `)
    })
    return winnersList
}

const generateMap = ({ votesOrParty, subparty, position, containerId, scaleContainerId}) => {
    clonedSchools = clone(schools)
    let container = document.getElementById(containerId)
    let infoContainer = document.createElement('div')
    container.appendChild(infoContainer)
    // var label = document.createElement('div')
    // if (subparty) {
    //     label.innerHTML = `${position}, ${decode_utf8(votesOrParty)}, ${subparty}, ${totals[position][votesOrParty][subparty].nombreCandidato}`
    // } else {
    //     label.innerHTML = `${position}, ${decode_utf8(votesOrParty)}`
    // }
    // infoContainer.appendChild(label)


    var mapContainer = document.createElement('div')
    mapContainer.setAttribute('class', 'mapContainer')
    mapContainer.setAttribute("style", "display: flex")
    infoContainer.appendChild(mapContainer)

    var map = document.createElement('div')
    map.setAttribute("style", `width: ${mapWidth}; height: ${mapHeight};`)
    mapContainer.appendChild(map)
    let leafletMap = L.map(map).setView(mapCoordinates, mapZoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(leafletMap);
    let {minRatio, maxRatio} = addCircles({ leafletMap, position, votesOrParty, subparty, clonedSchools})
    let scaleSteps = []
    for (let index = 0; index < scaleStops; index++) {
        let span = maxRatio - minRatio
        let scaleStep = (maxRatio - minRatio) /(scaleStops - 1)
        scaleSteps.push({
            ratio: minRatio + scaleStep * index,
            color: colorInScale = d3[InterpolateLinearMethod](index / (scaleStops - 1)),
        })
    }
    var scale = document.createElement('div')
    let scaleContainer = document.getElementById(scaleContainerId)
    scaleContainer.innerHTML = ''
    scaleContainer.appendChild(scale)
    scaleSteps.reverse().map( step => {
        let stepDiv = document.createElement('h5')
        stepDiv.innerHTML = `${(step.ratio * 100).toFixed(2)} %`
        var circle = document.createElement('span')
        circle.innerHTML = "<span class='circle'>&#9679;</span>"
        stepDiv.appendChild(circle)
        circle.setAttribute("style", `color: ${step.color}; font-size: 40 `)
        scale.appendChild(stepDiv)
    })
    return infoContainer
}

const generateInternalMap = ({ position, candidates, includeNonWinners, containerId, scaleContainerId}) => {

    clonedSchools = clone(schools.filter(school => totals[position]['Votos afirmativos emitidos'][school.from] !== undefined))
    let container = document.getElementById(containerId)
    let infoContainer = document.createElement('div')

    var mapContainer = document.createElement('div')
    mapContainer.setAttribute("style", "display: flex")
    mapContainer.setAttribute('class', 'mapContainer')

    var scale = document.createElement('div')
    infoContainer.appendChild(mapContainer)
    let scaleContainer = document.getElementById(scaleContainerId)
    scaleContainer.innerHTML = ''
    scaleContainer.appendChild(scale)
    infoContainer.setAttribute('clase', 'row')
    container.appendChild(infoContainer)

    var map = document.createElement('div')
    map.setAttribute("style", `width: ${mapWidth}; height: ${mapHeight};`)
    mapContainer.appendChild(map)
    let leafletMap = L.map(map).setView(mapCoordinates, mapZoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(leafletMap)
    if (Object.keys(candidates).length > 0) {
        let winners = addInternalCircles({ leafletMap, position, candidates, clonedSchools})

        winners.map(candidate => {
            let stepDiv = createScaleStep({candidate, color: candidate.color})
            scale.appendChild(stepDiv)
        })
        let notInWinners = Object.values(candidates).filter( candidate => {
            return !Object.values(winners).some( winner => checkSameCandidate(winner, candidate))
        })
        if (includeNonWinners) {
            notInWinners.map(notWinner => {
                let stepDiv = createScaleStep({ candidate: notWinner, color: NonWinnerColor })
                scale.appendChild(stepDiv)
            })
        }
    }
    return infoContainer
}
const createScaleStep = ({candidate, color }) => {
    let stepDiv = document.createElement('h5')
    stepDiv.innerHTML = `${getLabel(candidate)}`
    var circle = document.createElement('span')
    circle.innerHTML = "<span class='circle'>&#9679;</span>"
    stepDiv.appendChild(circle)
    circle.setAttribute("style", `color: ${color}; font-size: 40 `)
    return stepDiv
}
var positionsList = ['gobernador', 'diputado', 'intendente', 'concejal']
document.getElementById('filterOutliers').addEventListener('change', () => {
    competitorChange({ competitor: {}, add: false })
})

// generateInternalMap({ votesOrParty: partiesOrVotes['socialismo'], position:'concejal' })


// Object.keys(totals).map(position => {
//     Object.keys(totals[position]).map( votesOrParty => {
//         if (!totals[position][votesOrParty].count   &&  Object.keys(totals[position][votesOrParty]).length > 1) {
//             console.log(position, votesOrParty)
//             let candidates = getPartyCandidates({position, votesOrParty})
//             generateInternalMap({ position, candidates })
//         }
//     })
// })
// let testCandidates = {
//     [partiesOrVotes.socialismo]: {
//         votesOrParty: partiesOrVotes.socialismo
//     },
//     [partiesOrVotes.cambiemos]: {
//         votesOrParty: partiesOrVotes.cambiemos
//     },
//     [partiesOrVotes.peronismo]: {
//         votesOrParty: partiesOrVotes.peronismo
//     },
//     [partiesOrVotes.delFradeCiudadFutura.intendente]: {
//         votesOrParty: partiesOrVotes.delFradeCiudadFutura.intendente
//     },
// }
// for (const testPosition of positionsList) {
//     let testCandidates = {}
//     Object.keys(totals[testPosition]).map(votesOrParty => {
//         testCandidates[votesOrParty] = { votesOrParty: votesOrParty }
//     })
//     generateInternalMap({ position: testPosition, candidates: testCandidates })
// }


const generateSelector = ({options, placeholderId, onchange, id, selected}) => {
    let elem = document.getElementById(id)
    if (elem) { elem.remove()}
    let selectContainer = document.createElement('div')
    selectContainer.setAttribute('class', 'form-group')
    let select = document.createElement('select')
    selectContainer.appendChild(select)
    if (id) {select.setAttribute('id',id ) }
    select.setAttribute('class', 'form-control' )
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option")
        el.textContent = decode_utf8(opt);
        el.value = opt;
        select.appendChild(el)
        if (selected && selected === opt) {
            el.selected = true
        }
    }
    select.addEventListener('change', onchange)
    document.getElementById(placeholderId).appendChild(selectContainer)
    return select
}

// generateMap({ votesOrParty: partiesOrVotes.peronismo, subparty: subparties.sukerman, position: 'gobernador' })
// generateInternalMap({ candidates: {
//     [partiesOrVotes.delFradeCiudadFutura.intendente]: { votesOrParty: partiesOrVotes.delFradeCiudadFutura.intendente},
//     [subparties.roy]: {
//         votesOrParty: partiesOrVotes.cambiemos,
//         name: subparties.roy
//     }
// }, position: 'intendente' })

// generateInternalMap({ candidates: {
//     [partiesOrVotes.delFradeCiudadFutura.intendente]: { votesOrParty: partiesOrVotes.delFradeCiudadFutura.intendente},
//     [subparties.sukerman]: {
//         votesOrParty: partiesOrVotes.peronismo,
//         name: subparties.sukerman
//     }
// }, position: 'intendente' })

// generateInternalMap({ candidates: {
//     'FRENTE SOCIAL Y POPULAR': { votesOrParty: 'FRENTE SOCIAL Y POPULAR'},
//     'UNITE POR LA FAMILIA Y LA VIDA': {
//         votesOrParty: 'UNITE POR LA FAMILIA Y LA VIDA',
//     }
// }, position: 'diputado' })

const onPartyChange = ({party, subPartyName}) => {
    options = Object.keys(totals[party][subPartyName])
    generateSelector({ options, placeholderId: 'generalContainer', id:'subparty' })
}
const onPositionChange = (event) => {
    let party = event.target.value
    options = Object.keys(totals[party])

    generateSelector({
        options,
        placeholderId: 'generalContainer',
        onchange: (event) => onPartyChange({party, subPartyName: event.target.value }),
        id: 'party'
    })
}
let contestants = {
    'ENCUENTRO POR SANTA FE': { votesOrParty: "JUNTOS", name: "ENCUENTRO POR SANTA FE", nombreCandidato: "BIELSA MARIA EUGENIA" },
    'SUMAR': { votesOrParty: "JUNTOS", name: "SUMAR", nombreCandidato: "PEROTTI OMAR ANGEL" },
    'VAMOS JUNTOS': { votesOrParty: "CAMBIEMOS", name: "VAMOS JUNTOS", nombreCandidato: "CORRAL JOSE MANUEL" },
}

const competitorChange = ({competitor, add}) => {
    if (competitor) {
        if (add) {
            contestants[getKey(competitor)] = competitor
        } else {
            delete contestants[getKey(competitor)]
        }
    }
    let position = select.value
    let params = contestantsToParams({position, contestants})
    var url = window.location.href.split('?')[0]
    let completeUrl = `${url}?${params}`
    // window.history.pushState({}, "", completeUrl)
    let shareLink = document.getElementById('share')
    shareLink.innerHTML = completeUrl
    shareLink.setAttribute('href', completeUrl)
    let prevMap = document.getElementById('dynamicMap')
    if (prevMap) { prevMap.remove()}
    if (Object.keys(contestants).length === 0) {
        let map = generateInternalMap({
            position,
            candidates: contestants,
            includeNonWinners: true,
            containerId: 'generalContainer',
            scaleContainerId: 'scaleContainer',
        })
        map.setAttribute('id', 'dynamicMap')
    }else if (Object.keys(contestants).length === 1) {
        let contestantKey =  Object.keys(contestants)[0]
        let contestant = contestants[contestantKey]
        let map = generateMap({
            position,
            votesOrParty: contestant.votesOrParty,
            subparty: contestant.name,
            containerId: 'generalContainer',
            scaleContainerId: 'scaleContainer',
        })
        map.setAttribute('id', 'dynamicMap')
    } else if (Object.keys(contestants).length > 1) {
        let map = generateInternalMap({
            position,
            candidates: contestants,
            includeNonWinners: true,
            containerId: 'generalContainer',
            scaleContainerId: 'scaleContainer'
        })
        map.setAttribute('id', 'dynamicMap')
    }
}
const hasSubparties = ({ votesOrParty, position}) => {
    let firstKey = Object.keys(totals[position][votesOrParty])[0]
    return isNaN(parseInt(totals[position][votesOrParty][firstKey]))
}
const toTitleCase = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

const generateList = ({position}) => {
    let prevList = document.getElementById('list')
    if (prevList) { prevList.remove()}
    let list = document.createElement('div')
    list.setAttribute('id', 'list')
    document.getElementById('competitorsListContainer').appendChild(list)
    Object.keys(totals[position]).map( votesOrParty => {
        if (excludedVoteKeys.includes(votesOrParty)) { return}
        let party = document.createElement('div')
        party.setAttribute('class', 'party')
        list.appendChild(party)
        let partyLabel = document.createElement('h4')
        partyLabel.setAttribute('class', 'partyLabel')
        if (hasSubparties({votesOrParty, position}) && Object.keys(totals[position][votesOrParty]).length === 1 ){
            let onlySubpartyKey = Object.keys(totals[position][votesOrParty])[0]
            let onlySubparty = totals[position][votesOrParty][onlySubpartyKey]
            let partyLabelText =  document.createElement('span')
            partyLabelText.innerHTML = toTitleCase(` ${onlySubparty.nombreCandidato},  ${decode_utf8(votesOrParty)}`)
            partyLabel.appendChild(partyLabelText)
            party.appendChild(partyLabel)
            let partyCheck = document.createElement('input')
            partyCheck.setAttribute('type', 'checkbox')
            partyCheck.setAttribute('id', onlySubpartyKey)
            partyCheck.addEventListener('change', function () {
                competitorChange({
                    competitor: { votesOrParty, name: onlySubpartyKey, nombreCandidato: onlySubparty.nombreCandidato },
                    add: this.checked,
                })
            })
            partyLabel.prepend(partyCheck)
            partyLabelText.addEventListener('click', () => {
                partyCheck.checked = !partyCheck.checked
                competitorChange({
                    competitor: { votesOrParty, name: onlySubpartyKey, nombreCandidato: onlySubparty.nombreCandidato },
                    add: partyCheck.checked,
                })
            })
        } else {
            let partyLabelText = document.createElement('span')
            partyLabelText.innerHTML = toTitleCase(` ${decode_utf8(votesOrParty)}`)
            partyLabel.appendChild(partyLabelText)
            party.appendChild(partyLabel)
            let partyCheck = document.createElement('input')
            partyCheck.setAttribute('type', 'checkbox')
            partyCheck.setAttribute('id', votesOrParty)
            partyCheck.addEventListener('change', function () {
                competitorChange({ competitor: { votesOrParty }, add: this.checked })
            })
            partyLabel.prepend(partyCheck)
            partyLabelText.addEventListener('click', () => {
                partyCheck.checked = !partyCheck.checked
                competitorChange({ competitor: { votesOrParty }, add: partyCheck.checked })
            })
            let subparties = document.createElement('div')
            subparties.setAttribute('class', 'subparties')
            party.appendChild(subparties)
            Object.keys(totals[position][votesOrParty]).map(subPartyName => {
                if (totals[position][votesOrParty][subPartyName].nombre) {
                    let subparty = totals[position][votesOrParty][subPartyName]
                    let subpartyDiv = document.createElement('div')
                    let subpartyLabel = document.createElement('div')
                    subpartyLabel.setAttribute('class', 'subpartyLabel')
                    let subpartyLabelText = document.createElement('span')
                    subpartyLabelText.innerHTML = toTitleCase(` ${decode_utf8(subparty.nombreCandidato)}`)
                    subpartyLabel.appendChild(subpartyLabelText)
                    let subpartyCheck = document.createElement('input')
                    subpartyCheck.setAttribute('type', 'checkbox')
                    subpartyCheck.setAttribute('id', subPartyName)
                    subpartyCheck.addEventListener('change', function () {
                        competitorChange({
                            competitor: { votesOrParty, name: subPartyName, nombreCandidato: subparty.nombreCandidato },
                            add: this.checked
                        })
                    })
                    subpartyDiv.appendChild(subpartyLabel)
                    subpartyLabel.prepend(subpartyCheck)
                    subparties.appendChild(subpartyDiv)
                    subpartyLabelText.addEventListener('click', () => {
                        subpartyCheck.checked = !subpartyCheck.checked
                        competitorChange({
                            competitor: { votesOrParty, name: subPartyName, nombreCandidato: subparty.nombreCandidato },
                            add: subpartyCheck.checked
                        })
                    })
                }
            })
        }
    })
    let clearButton = document.createElement('button')
    clearButton.setAttribute('class', 'btn btn-warning')
    clearButton.innerHTML = 'Borrar Selección'
    clearButton.addEventListener('click', () => {
        contestants = {}
        generateList({ position })
        competitorChange({competitor: {}, add: false})
    })
    list.appendChild(clearButton)
}

let select
const init = () => {
    let params = document.location.search.substring(1)
    let urlData = paramsToContestants({params})
    let position = 'gobernador'
    if (urlData.contestants && Object.keys(urlData.contestants).length > 0) {
        contestants = urlData.contestants
        position = urlData.position
    }
    select = generateSelector({
        options: positionsList, placeholderId: 'competitorsListContainer', onchange: (event) => {
            contestants = {}
            competitorChange({ competitor: {}, add: false })
            generateList({ position: event.target.value })
        },
        selected: position
    })
    generateList({ position })

    competitorChange({ competitor: undefined, add: undefined })

    for (const key in contestants) {
        document.getElementById(key).checked = true
    }
    generateInternalMap({
        position: 'diputado',
        containerId: 'MicroCentroContainer',
        scaleContainerId: 'MicroCentroScaleContainer',
        candidates: {
            'ADELANTE': { votesOrParty: "FRENTE PROGRESISTA CÍVICO Y SOCIAL", name: "ADELANTE", nombreCandidato: "LIFSCHITZ ROBERTO MIGUEL" },
            'JUNTOS': { votesOrParty: "JUNTOS" },
            'VAMOS JUNTOS': { votesOrParty: "CAMBIEMOS", name: "VAMOS JUNTOS", nombreCandidato: "CHUMPITAZ FILIPONE GABRIEL FELIPE" },
        },
    })
    generateInternalMap({
        position: 'diputado',
        containerId: 'estilosContainer',
        scaleContainerId: 'estilosScaleContainer',
        candidates: {
            'SOMOS VIDA': { votesOrParty: "UNITE POR LA FAMILIA Y LA VIDA", name: "SOMOS VIDA", nombreCandidato: "GRANATA AMALIA IRIS SABINA" },
            'UNIDAD SOCIAL Y POPULAR': { votesOrParty: "FRENTE SOCIAL Y POPULAR", name: "UNIDAD SOCIAL Y POPULAR", nombreCandidato: "DEL FRADE CARLOS ALFREDO" },
        },
    })
    generateInternalMap({
        position: 'intendente',
        containerId: 'intendenteContainer',
        scaleContainerId: 'intendenteScaleContainer',
        candidates: {
            'CAMBIEMOS': { votesOrParty: "CAMBIEMOS" },
            'FRENTE PROGRESISTA CÍVICO Y SOCIAL': { votesOrParty: "FRENTE PROGRESISTA CÍVICO Y SOCIAL" },
            'SUMAR': { votesOrParty: "JUNTOS", name: "SUMAR", nombreCandidato: "SUKERMAN ROBERTO" },
        },
    })
    generateMap({
        position: 'intendente',
        containerId: 'monteverdeContainer',
        scaleContainerId: 'monteverdeScaleContainer',
        votesOrParty: 'PARA LA CIUDAD FUTURA',
        subparty: 'UN FUTURO DIFERENTE'
    })

}
init()

// Object.keys(totals).map(position => {
//     Object.keys(totals[position]).map( votesOrParty => {
//         if (totals[position][votesOrParty].count) {
//             generateMap({ votesOrParty, position })
//         } else {
//             Object.keys(totals[position][votesOrParty]).map(subparty => {
//                 generateMap({ votesOrParty, subparty, position })
//             })
//         }
//     })
// })



function filterOutliers(someArray) {

    if (someArray.length < 4)
        return someArray;

    let values, q1, q3, iqr, maxValue, minValue;

    values = someArray.slice().sort((a, b) => a - b);//copy array fast and sort

    if ((values.length / 4) % 1 === 0) {//find quartiles
        q1 = 1 / 2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
        q3 = 1 / 2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
    } else {
        q1 = values[Math.floor(values.length / 4 + 1)];
        q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
    }

    iqr = q3 - q1;
    maxValue = q3 + iqr * 1.5;
    minValue = q1 - iqr * 1.5;

    return values.filter((x) => (x >= minValue) && (x <= maxValue));
}