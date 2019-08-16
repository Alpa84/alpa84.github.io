const NoteNumbers = {
    0: 'C',
    1: 'C#',
    2: 'D',
    3: 'D#',
    4: 'E',
    5: 'F',
    6: 'F#',
    7: 'G',
    8: 'G#',
    9: 'A',
    10: 'A#',
    11: 'B',
}

const ForbiddenParallelIntervals = [7, 12]
const ChordStructures = {
    MAJ: [0, 4, 7],
    min: [0, 3, 7],
    MAJ_7: [0, 4, 7, 10],
}
const VoicesRange = [
    { min: 29, max: 48}, // bass F2 / C4
    { min: 36, max: 55}, // tenor  C3 / G5
    { min: 41, max: 60}, // constraalto F3 / C5
    { min: 48, max: 69}, // soprano C4 / A5
]

const findFundamental = (tonicOfChord, prevChord) =>{
    let candidate = VoicesRange[0].min
    while (true) {
        if( candidate % 12 === tonicOfChord) {
            break
        } else{
            candidate += 1
        }
        if (candidate > VoicesRange[0].max) {
            console.log('no possible bass note in range')
            throw('no possible bass note in range')
        }
    }
    return candidate
}

const noteNumberToName = (noteNumber) => {
    let octave = Math.floor(noteNumber / 12)
    let noteName = NoteNumbers[noteNumber % 12]
    return `${noteName}${octave}`
}

const generatePossibleChordNotes = (chordTonic, alteration) => {
    let chordNotes = []
    let chordStructure = ChordStructures[alteration]
    let lowestNote = VoicesRange[0].min
    let highestNote = VoicesRange[VoicesRange.length -1].max
    for (let noteCandidate = lowestNote; noteCandidate < highestNote; noteCandidate++) {
        chordStructure.forEach( chordInterval => {
            if(noteCandidate % 12 === (chordTonic + chordInterval) % 12) {
                chordNotes.push(noteCandidate)
            }
        })

    }
    return chordNotes
}

const findVoicePossibleNotes = (voiceIndex, possibleChordNotes, chordProgress) => {
    let max = VoicesRange[voiceIndex].max
    let min
    if (chordProgress[chordProgress.length - 1]) {
        min = Math.max(VoicesRange[voiceIndex].min, chordProgress[chordProgress.length -1 ])
    } else {
        min = VoicesRange[voiceIndex].min
    }
    return possibleChordNotes.filter( note => note >= min && note <= max)
}


const generateAllPossibleChords = (chordProgress, possibleChordNotes) => {
    let chordsGeneratedSoFar = []
    if (chordProgress.length === VoicesRange.length) {
        chordsGeneratedSoFar.push(chordProgress)
    } else {
        let possibleNotes = findVoicePossibleNotes(chordProgress.length, possibleChordNotes, chordProgress)
        possibleNotes.forEach(possibleNote => {
            let next = chordProgress.slice()
            next.push(possibleNote)
            chordsGeneratedSoFar = chordsGeneratedSoFar.concat(generateAllPossibleChords(next, possibleChordNotes) )
        })
    }
    return chordsGeneratedSoFar
}
const hasStructInterval = (chord, interval, chord_tonic) => {
    return chord.some(note => note % 12  ===  (chord_tonic +  interval) % 12 )
}


const findIntervalInstances = (chord, interval) => {
    let bottomVoiceIndex = 0
    let voicesWithInterval = []
    while (true) {
        for (bottomVoiceIndex; bottomVoiceIndex < chord.length - 1; bottomVoiceIndex++) {
            let bottomVoice = chord[bottomVoiceIndex]
            for (let topVoiceIndex = bottomVoiceIndex + 1; topVoiceIndex < chord.length; topVoiceIndex++) {
                let topVoice = chord[topVoiceIndex]
                if ((topVoice - bottomVoice)% 12 === interval % 12) {
                    voicesWithInterval.push([bottomVoiceIndex, topVoiceIndex])
                }
            }
        }
        bottomVoiceIndex += 1
        if (bottomVoiceIndex > chord.length - 1) {
            break
        }
    }
    return voicesWithInterval
}

// FILTERS
const filterWithoutChordNotes = (chords, chordTonic, chordAlteration) => {
    return chords.filter( chord => {
        let structureIntervals = ChordStructures[chordAlteration].slice()
        // structureIntervals.shift() // uncomment if we know we want the chord in fundamental state
        return structureIntervals.every(interval => {
            let has = hasStructInterval(chord, interval, chordTonic)
            return has
        })
    })
}

const filterUnwantedDuplicate = (chords, chordTonic, chordAlteration, previousChord) => {
    const UNWANTED_DUPLICATES = [3,4] // minor third and major third
    return chords.filter(chord => {
        return UNWANTED_DUPLICATES.every( unwanted_interval => {
            let incidence = 0
            chord.forEach(note => {
                if ((note - chordTonic) % 12 === unwanted_interval) { incidence += 1 }
            })
            return incidence < 2
        })
    })
}

const filterByParallelMovements = (chords, chordTonic, chordAlteration, previousChord) => {
    UNWANTED_PARALLEL_MOVEMENT_INTERVALS = [12, 7]
    let filtered = chords
    UNWANTED_PARALLEL_MOVEMENT_INTERVALS.forEach( interval => {
        filtered = filterParallelIntervalMovement(filtered, interval, previousChord)
    })
    return filtered
}

const filterParallelIntervalMovement = (chords, forbiddenInterval, previousChord) =>{
    let intervalInstances = findIntervalInstances(previousChord, forbiddenInterval)
    return chords.filter( chord => {
        let hasParallel = intervalInstances.some(interval => {
            let isParallel = chord[interval[1]] - chord[interval[0]] === forbiddenInterval
            if (isParallel) {
                console.log(`${previousChord.map(noteNumberToName)} has a parallel ${forbiddenInterval}  with ${chord.map(noteNumberToName)}`)
                console.log([previousChord[interval[0]], previousChord[interval[1]]].map(noteNumberToName), ' to ', [chord[interval[0]], chord[interval[1]]].map(noteNumberToName))
                console.log('------------')
            }
            return isParallel
        })
        return !hasParallel
    })
}

const calculateMovement = (prevChord, chord) => {
    let movementPartial = 0
    for (let voiceIndex = 0; voiceIndex < chord.length; voiceIndex++) {
        movementPartial += Math.abs(prevChord[voiceIndex] - chord[voiceIndex])
    }
    return movementPartial
}

const generateChordScores = (chords) => {
    let deposit = []
    chords.forEach( chord => {
        let movement = calculateMovement(EXAMPLE_PREVIOUS_CHORD, chord)
        deposit.push([movement, chord])
    })
    return deposit
}
const findMinimumScoreChord = (chordScores) => {
    return chordScores.reduce( (partialMinChordAndScore, chordAndScore) => {
        if (partialMinChordAndScore) {
            if (partialMinChordAndScore[0] > chordAndScore[0] ) {
                return chordAndScore
            } else {
                return partialMinChordAndScore
            }
        } else {
            return chordAndScore
        }
    })
}
const sortChordsByScore = (chords) => {
    return chords.sort((a, b) => a[0] - b[0] )
}

const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]))

const groupProgressionIntoSystem = (progression) => {
    let packed = []
    progression.forEach( (chord, index) => {
        if (index % 4 === 0) {
            packed.push([])
        }
        packed[packed.length -1].push(chord)
    })
    return packed
}
const drawProgression = (progression) => {
    const VF = Vex.Flow
    let systemWidth = 400
    let xPosition = 0
    document.getElementById('reading').innerHTML = ''
    let vf = new VF.Factory({
        renderer: { elementId: 'reading', width: 8000, height: 300 }
    })
    let systems = groupProgressionIntoSystem(progression)
    systems.forEach( (system, index) => {
        drawSystem(system, vf, xPosition, systemWidth, index)
        xPosition += systemWidth
    })
}
const drawSystem = (systemChords, vf, xPosition, systemWidth, index) => {
    let byVoice = zip(systemChords)
    byVoiceNoteName = byVoice.map(systemMelody => {
        let toNotes = systemMelody.map(note => note).map(noteNumberToName).map(name => name + '/q')
        if (toNotes.length < 4) {
            let diff = 4 - toNotes.length
            for (let index = 0; index < diff; index++) {
                toNotes.push('B4/q/r')
            }
        }
        return toNotes
    })
    let score = vf.EasyScore()
    let system = vf.System({x: xPosition, width: systemWidth})

    let staveUp = system.addStave({
        voices: [
            score.voice(score.notes(byVoiceNoteName[3].join(', '), { stem: 'up' })),
            score.voice(score.notes(byVoiceNoteName[2].join(', '), { stem: 'down' }))
        ]
    })
    let staveDown = system.addStave({
        voices: [
            score.voice(score.notes(byVoiceNoteName[1].join(', '), { clef: 'bass', stem: 'up' })),
            score.voice(score.notes(byVoiceNoteName[0].join(', '), { clef: 'bass', stem: 'down' }))
        ],
    })
    if (index === 0) {
        staveUp.addClef('treble')
        staveDown.addClef('bass')
    }
    vf.draw()


}

const filterChordsByRules = (possibleChords, filters, chordTonic, chordAlteration, previousChord  ) => {
    let chordsPassingFilters = possibleChords
    filters.forEach( chordsFilter => {
        chordsPassingFilters = chordsFilter(chordsPassingFilters, chordTonic, chordAlteration, previousChord)
    })
    return chordsPassingFilters
}

const findNextVoices = (previousChord, chordTonic, chordAlteration) => {
    // we want all the chords to be in fundamental state, not inverted
    let bassVoice = findFundamental(chordTonic, EXAMPLE_PREVIOUS_CHORD)
    let possibleChordNotes = generatePossibleChordNotes(chordTonic, chordAlteration)
    // since we want the chords in fundamental we already know the first chord note
    let allPossibleChords = generateAllPossibleChords([bassVoice], possibleChordNotes)
    let chordDeposit =  filterChordsByRules(allPossibleChords, [
        filterWithoutChordNotes,
        filterUnwantedDuplicate,
        filterByParallelMovements,
    ], chordTonic, chordAlteration, previousChord)

    let chordScores = generateChordScores(chordDeposit)
    let nextChord = findMinimumScoreChord(chordScores)[1]
    return nextChord
}

const CHORD_TONIC_EXAMPLE = 7
const ALTERATION_EXAMPLE = 'MAJ'
let tonicOfChord = CHORD_TONIC_EXAMPLE
const EXAMPLE_PREVIOUS_CHORD = [36, 48, 55, 64]


const chordProgression = [
    ['C', 'MAJ'],
    ['A', 'min'],
    ['G', 'MAJ'],
    ['C', 'MAJ'],
    ['C', 'MAJ'],
    ['D', 'min'],
    ['F', 'MAJ'],
    ['A', 'min'],
]
const NoteToNumbers = {
    'C': 0,
    'C#': 1,
    'D': 2,
    'D#': 3,
    'E': 4,
    'F': 5,
    'F#': 6,
    'G': 7,
    'G#': 8,
    'A': 9,
    'A#': 10,
    'B': 11,
}
const changeNotesToNumbers = (note) => {
    let octave = parseInt(note.substr(-1))
    return  octave * 12 + NoteToNumbers[note.substr(0, note.length - 1)]
}
let voiceProgresion = []

const addVoicesToProgression = (chordTonic, chordAlteration) => {
    let lastVoices
    if (voiceProgresion.length === 0 ) {
        lastVoices = EXAMPLE_PREVIOUS_CHORD
    } else {
        lastVoices = voiceProgresion[voiceProgresion.length - 1]
    }
    let newVoices = findNextVoices(lastVoices, chordTonic, chordAlteration)
    voiceProgresion.push(newVoices)
}
// chordProgression.forEach( chordSignature => {
//     addVoicesToProgression(NoteToNumbers[chordSignature[0]], chordSignature[1])
// })
// drawProgression(voiceProgresion)

drawProgression(voiceProgresion)
const addChord = () => {
    let fundamental = parseInt(document.getElementById('fundamental').value)
    let alteration = document.getElementById('alteration').value
    addVoicesToProgression(fundamental, alteration)
    drawProgression(voiceProgresion)
}
let alterationSelect = document.getElementById('alteration')
for (const key in ChordStructures) {
    var opt = document.createElement('option')
    opt.value = key
    opt.innerHTML = key
    alterationSelect.appendChild(opt)
}
let fundamentalSelect = document.getElementById('fundamental')
for (const key in NoteNumbers) {
    var opt = document.createElement('option')
    opt.value = key
    opt.innerHTML = NoteNumbers[key]
    fundamentalSelect.appendChild(opt)
}
