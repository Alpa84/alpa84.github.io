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
const partyColors = {
    'JUNTOS': '#0011FF',
    'CAMBIEMOS': '#FFFF00',
    'FRENTE PROGRESISTA CÍVICO Y SOCIAL': '#FF8000',
}
const subparties = {
    sukerman: 'SUMAR',
    monteverde: 'UN FUTURO DIFERENTE',
    roy: 'VAMOS JUNTOS',
    javkin: 'ARRIBA ROSARIO',
}

const scaleStops = 5
const InterpolateLinearMethod = 'interpolateViridis'
const InterpolateWinnerMethod = 'interpolateSinebow'

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
                candidateName: subparty.nombreCandidato,
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
        let votes = getVotes({ school, position, votesOrParty, subparty})
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
        circle.bindPopup(`${school.name} : ${school.dir}. <br>
        ${(school.ratio * 100).toFixed(2)}% <br>
        ${school.thisPositionVotes} sobre ${school.schoolTotal} <br>
        ${school.from}
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
    let label = getKey(candidate)
    return decode_utf8(label)
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
const addInternalCircles = ({ leafletMap, position, candidates, clonedSchools}) => {
    let winnersList = []
    clonedSchools.map(school => {
        clonedCandidates = clone(candidates)

        for (const candidateKey in clonedCandidates) {
            const candidate = clonedCandidates[candidateKey]
            if ( candidate.name){
                candidate.votes = getVotes({ school, position, votesOrParty: candidate.votesOrParty, subparty: candidate.name })
            } else {
                let partyCandidates = getPartyCandidates({ position, votesOrParty: candidate.votesOrParty})
                let sum = Object.values(partyCandidates).reduce( (aggregate, partyCandidate) => {
                    let votes =  getVotes({
                        school, position, votesOrParty: partyCandidate.votesOrParty, subparty: partyCandidate.name
                    })
                    return aggregate + votes
                }, 0)
                candidate.votes = sum
            }
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
        for (const candidateKey in school.candidates) {
            const candidate = school.candidates[candidateKey]
            candResultsString.push(`${getLabel(candidate)}: ${school.candidates[getKey(candidate)].votes}`)
        }
        let winnerLabel = getLabel(school.winner)
        circle.bindPopup(`${ decode_utf8(school.name)} : ${decode_utf8(school.dir)}. <br>
        Ganador:${decode_utf8(winnerLabel)} <br>
        ${candResultsString.join('<br>')} <br>
        ${school.from}
        `)
    })
    return winnersList
}

const generateMap = ({ votesOrParty, subparty, position}) => {
    clonedSchools = clone(schools)
    let container = document.getElementById('generalContainer')
    let infoContainer = document.createElement('div')
    container.appendChild(infoContainer)
    var label = document.createElement('div')
    if (subparty) {
        label.innerHTML = `${position}, ${decode_utf8(votesOrParty)}, ${subparty}, ${totals[position][votesOrParty][subparty].nombreCandidato}`
    } else {
        label.innerHTML = `${position}, ${decode_utf8(votesOrParty)}`
    }
    infoContainer.appendChild(label)


    var mapContainer = document.createElement('div')
    mapContainer.setAttribute('class', 'mapContainer')
    mapContainer.setAttribute("style", "display: flex")
    infoContainer.appendChild(mapContainer)

    var map = document.createElement('div')
    map.setAttribute("style", "width: 1200px; height: 800px; position: relative")
    mapContainer.appendChild(map)
    let leafletMap = L.map(map).setView([-32.9572591, -60.70372820000001], 12);
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
    mapContainer.appendChild(scale)
    scaleSteps.reverse().map( step => {
        let stepDiv = document.createElement('div')
        stepDiv.innerHTML = `${(step.ratio * 100).toFixed(2)} %`
        var circle = document.createElement('span')
        circle.innerHTML = '&#9679;'
        stepDiv.appendChild(circle)
        circle.setAttribute("style", `color: ${step.color}; font-size: 40 `)
        scale.appendChild(stepDiv)
    })

}

const generateInteralMap = ({ position, candidates}) => {

    clonedSchools = clone(schools.filter(school => totals[position]['Votos afirmativos emitidos'][school.from] !== undefined))
    let container = document.getElementById('generalContainer')
    let infoContainer = document.createElement('div')
    container.appendChild(infoContainer)
    var label = document.createElement('div')
    // label.innerHTML = `Interna del ${decode_utf8(votesOrParty)}, cargo: ${position}`
    label.innerHTML = `Cargo: ${position}`
    infoContainer.appendChild(label)


    var mapContainer = document.createElement('div')
    mapContainer.setAttribute('class', 'mapContainer')
    mapContainer.setAttribute("style", "display: flex")
    infoContainer.appendChild(mapContainer)

    var map = document.createElement('div')
    map.setAttribute("style", "width: 1200px; height: 800px; position: relative")
    mapContainer.appendChild(map)
    let leafletMap = L.map(map).setView([-32.9572591, -60.70372820000001], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(leafletMap);
    let winners = addInternalCircles({ leafletMap, position, candidates, clonedSchools})

    var scale = document.createElement('div')
    mapContainer.appendChild(scale)
    winners.map( candidate => {
        let stepDiv = document.createElement('div')
        stepDiv.innerHTML = `${getLabel(candidate)}`
        var circle = document.createElement('span')
        circle.innerHTML = '&#9679;'
        stepDiv.appendChild(circle)
        circle.setAttribute("style", `color: ${candidate.color}; font-size: 40 `)
        scale.appendChild(stepDiv)
    })
    return infoContainer
}

var positionsList = ['gobernador', 'diputado', 'intendente', 'concejal']


// generateInteralMap({ votesOrParty: partiesOrVotes['socialismo'], position:'concejal' })


// Object.keys(totals).map(position => {
//     Object.keys(totals[position]).map( votesOrParty => {
//         if (!totals[position][votesOrParty].count   &&  Object.keys(totals[position][votesOrParty]).length > 1) {
//             console.log(position, votesOrParty)
//             let candidates = getPartyCandidates({position, votesOrParty})
//             generateInteralMap({ position, candidates })
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
//     generateInteralMap({ position: testPosition, candidates: testCandidates })
// }




const generateSelector = ({options, placeholderId, onchange, id}) => {
    let elem = document.getElementById(id)
    if (elem) { elem.remove()}
    let select = document.createElement('select')
    if (id) {select.setAttribute('id',id ) }
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = decode_utf8(opt);
        el.value = opt;
        select.appendChild(el);
    }
    select.addEventListener('change', onchange)
    document.getElementById(placeholderId).appendChild(select)
    return select
}

// generateMap({ votesOrParty: partiesOrVotes.peronismo, subparty: subparties.sukerman, position: 'gobernador' })
// generateInteralMap({ candidates: {
//     [partiesOrVotes.delFradeCiudadFutura.intendente]: { votesOrParty: partiesOrVotes.delFradeCiudadFutura.intendente},
//     [subparties.roy]: {
//         votesOrParty: partiesOrVotes.cambiemos,
//         name: subparties.roy
//     }
// }, position: 'intendente' })

// generateInteralMap({ candidates: {
//     [partiesOrVotes.delFradeCiudadFutura.intendente]: { votesOrParty: partiesOrVotes.delFradeCiudadFutura.intendente},
//     [subparties.sukerman]: {
//         votesOrParty: partiesOrVotes.peronismo,
//         name: subparties.sukerman
//     }
// }, position: 'intendente' })

// generateInteralMap({ candidates: {
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
let contestants = {}

const competitorChange = ({competitor, add}) => {
    if (add) {
        contestants[getKey(competitor)] = competitor
    } else {
        delete contestants[getKey(competitor)]
    }
    let position = select.value
    let prevMap = document.getElementById('dynamicMap')
    if (prevMap) { prevMap.remove()}
    if (Object.keys(contestants).length > 0) {
        let map = generateInteralMap({ position, candidates: contestants })
        map.setAttribute('id', 'dynamicMap')
    // } else if (Object.keys(contestants).length > 0) {
    //     let map = generateMap({ position, candidates: contestants })
    //     map.setAttribute('id', 'dynamicMap')
    }
}
const generateList = ({position}) => {
    contestants = {}
    let prevList = document.getElementById('list')
    if (prevList) { prevList.remove()}
    let list = document.createElement('div')
    list.setAttribute('id', 'list')
    document.getElementById('competitorsListContainer').appendChild(list)
    Object.keys(totals[position]).map( votesOrParty => {
        let party = document.createElement('div')
        party.setAttribute('class', 'party')
        list.appendChild(party)
        let partyLabel = document.createElement('h3')
        partyLabel.setAttribute('class', 'partyLabel')
        partyLabel.innerHTML = decode_utf8(votesOrParty)
        party.appendChild(partyLabel)
        let partyCheck = document.createElement('input')
        partyCheck.setAttribute('type', 'checkbox')
        partyCheck.addEventListener('change', function () {
            competitorChange({competitor: {votesOrParty}, add: this.checked})
        })
        partyLabel.appendChild(partyCheck)
        let subparties = document.createElement('div')
        subparties.setAttribute('class', 'subparties')
        party.appendChild(subparties)
        Object.keys(totals[position][votesOrParty]).map( subPartyName => {
            if (totals[position][votesOrParty][subPartyName].nombre) {
                let subparty = totals[position][votesOrParty][subPartyName]
                let subpartyDiv =  document.createElement('div')
                let subpartyLabel =  document.createElement('div')
                subpartyLabel.setAttribute('class', 'subpartyLabel')
                subpartyLabel.innerHTML = `${decode_utf8(subparty.nombreCandidato)}, ${decode_utf8(subPartyName)}`
                let subpartyCheck = document.createElement('input')
                subpartyCheck.setAttribute('type', 'checkbox')
                subpartyCheck.addEventListener('change', function () {
                    competitorChange({
                        competitor: { votesOrParty, name: subPartyName },
                        add: this.checked
                    })
                })
                subpartyDiv.appendChild(subpartyLabel)
                subpartyLabel.appendChild(subpartyCheck)
                subparties.appendChild(subpartyDiv)
            }
        })
    })
}
let select = generateSelector({ options: positionsList, placeholderId: 'generalContainer', onchange: (event)=>  generateList({position: event.target.value})})
generateList({position: 'gobernador'})

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


