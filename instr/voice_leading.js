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
    { min: 5, max: 18}, // bass
    { min: 10, max: 24}, // tenor
    { min: 18, max: 30}, // constraalto
    { min: 25, max: 39}, // soprano
]
const CHORD_TONIC_EXAMPLE = 7
const ALTERATION_EXAMPLE = 'MAJ'
let tonicOfChord = CHORD_TONIC_EXAMPLE
const EXAMPLE_PREVIOUS_CHORD = [12 , 29, 28, 31]

// globals
let chordUnderConstruction = []
let VoiceTriedPositions = [0,0,0]
let chordDeposit = []
let chordScores = []

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



const createChordNotes = (fundamental, alteration) => {
    let chordNotes = []
    let structureIndex = 1 // intentionally skipping the fundamental
    let octaveIndex = 0
    let chordStructure = ChordStructures[alteration]
    while (true) {
        let newChordNote = (octaveIndex * 12) + fundamental + chordStructure[structureIndex]
        if (newChordNote > VoicesRange[3].max) {
            break
        } else {
            chordNotes.push(newChordNote)
        }
        if (structureIndex >= chordStructure.length - 1) {
            structureIndex = 0
            octaveIndex += 1
        } else {
            structureIndex += 1
        }
    }
    return chordNotes
}

const findVoicePossibleNotes = (voiceIndex, chordNotes, chordProgress) => {
    let max = VoicesRange[voiceIndex].max
    let min = Math.max(VoicesRange[voiceIndex].min, chordProgress[chordProgress.length -1 ])
    return chordNotes.filter( note => note >= min && note <= max)
}

let fundamental = findFundamental(tonicOfChord, EXAMPLE_PREVIOUS_CHORD)
console.log(fundamental)
chordUnderConstruction.push(fundamental)
let chordNotes = createChordNotes(fundamental, ALTERATION_EXAMPLE)
let chordNotesNames = chordNotes.map(noteNumberToName)

const generateAllPossibleChords = (chordProgress) => {
    if (chordProgress.length === VoicesRange.length) {
        chordDeposit.push(chordProgress)
    } else {
        let possibleNotes = findVoicePossibleNotes(chordProgress.length, chordNotes, chordProgress)
        possibleNotes.forEach(possibleNote => {
            let next = chordProgress.slice()
            next.push(possibleNote)
            generateAllPossibleChords(next)
        })
    }
}
const hasStructInterval = (chord, interval, fundamental) => {
    return chord.some( note => (note - fundamental) % 12  === interval )
}

const filterWithoutChordNotes = (chords, fundamental, alteration) => {
    return chords.filter( chord => {
        let structureIntervals = ChordStructures[alteration].slice()
        structureIntervals.shift() // we know it already has the fundamental
        return structureIntervals.every( interval => {
            return hasStructInterval(chord, interval, fundamental)
        } )
    })
}
generateAllPossibleChords([fundamental])
console.log( chordDeposit.map(chord => chord.map(noteNumberToName)))
chordDeposit = filterWithoutChordNotes(chordDeposit, fundamental, ALTERATION_EXAMPLE)
console.log('with chord notes')
console.log(chordDeposit.map(chord => chord.map(noteNumberToName)))


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

const filterParallelIntervalMovement = (forbiddenInterval, chords) =>{
    let intervalInstances = findIntervalInstances(EXAMPLE_PREVIOUS_CHORD, forbiddenInterval)
    return chords.filter( chord => {
        let hasParallel = intervalInstances.some(interval => {
            let isParallel = chord[interval[1]] - chord[interval[0]] === forbiddenInterval
            if (isParallel) {
                console.log(`${EXAMPLE_PREVIOUS_CHORD.map(noteNumberToName)} has a parallel ${forbiddenInterval}  with ${chord.map(noteNumberToName)}`)
                console.log([EXAMPLE_PREVIOUS_CHORD[interval[0]], EXAMPLE_PREVIOUS_CHORD[interval[1]]].map(noteNumberToName), ' to ', [chord[interval[0]], chord[interval[1]]].map(noteNumberToName))
                console.log('------------')
            }
            return isParallel
        })
        return !hasParallel
    })
}
const filterDuplicateFifths = (chords, fundamental) => {
    const STRUCTURE_INTERVAL = 7
    return chords.filter( chord => {
        let incidence = 0
        chord.forEach( note => {
            if ((note - fundamental)% 12 === STRUCTURE_INTERVAL ) { incidence += 1}
        })
        return incidence < 2
    })
}

const calculateMovement = (prevChord, chord) => {
    let movementPartial = 0
    for (let voiceIndex = 0; voiceIndex < chord.length; voiceIndex++) {
        movementPartial += Math.abs(prevChord[voiceIndex] - chord[voiceIndex])
    }
    return movementPartial
}

chordDeposit = filterParallelIntervalMovement(12, chordDeposit)
chordDeposit = filterParallelIntervalMovement(7, chordDeposit)
console.log(chordDeposit.map(chord => chord.map(noteNumberToName)))
chordDeposit = filterDuplicateFifths(chordDeposit, fundamental)
console.log(chordDeposit.map(chord => chord.map(noteNumberToName)))

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
chordScores = generateChordScores(chordDeposit)
sortedChords = sortChordsByScore(chordScores)
console.log(sortedChords)

let nextChord = findMinimumScoreChord(chordScores)[1]

let byVoice = EXAMPLE_PREVIOUS_CHORD.map((e, i) => {
    return [EXAMPLE_PREVIOUS_CHORD[i], nextChord[i]];
})

byVoiceNoteName = byVoice.map(chord => chord.map(note => note + 12 * 3).map(noteNumberToName).map( name => name + '/h'))
console.log(byVoiceNoteName)
const draw = () => {
    const VF = Vex.Flow;

    var vf = new VF.Factory({
        renderer: { elementId: 'reading', width: 500, height: 400 }
    });

    var score = vf.EasyScore();
    var system = vf.System();

    system.addStave({
        voices: [
            score.voice(score.notes(byVoiceNoteName[3].join(', '), { stem: 'up' })),
            score.voice(score.notes(byVoiceNoteName[2].join(', '), { stem: 'down' }))
        ]
    }).addClef('treble');
    system.addStave({
        voices: [
            score.voice(score.notes(byVoiceNoteName[1].join(', '), { stem: 'up' })),
            score.voice(score.notes(byVoiceNoteName[0].join(', '), { stem: 'down' }))
        ]
    }).addClef('bass');
    system.addConnector()
    vf.draw();


}
draw()