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
const CHORD_TONIC_EXAMPLE = 0
const ALTERATION_EXAMPLE = 'MAJ'
let tonicOfChord = CHORD_TONIC_EXAMPLE

// globals
let chord_under_construction = []
let voice_tried_positions = [0,0,0]
let chordDeposit = []

const find_fundamental = (tonicOfChord) =>{
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

const note_number_to_name = (note_number) => {
    let octave = Math.floor(note_number / 12)
    let note_name = NoteNumbers[note_number % 12]
    return `${note_name}${octave}`
}



const create_chord_notes = (fundamental, alteration) => {
    let chord_notes = []
    let structure_index = 1 // intentionally skipping the fundamental
    let octave_index = 0
    let chord_structure = ChordStructures[alteration]
    while (true) {
        let new_chord_note = (octave_index * 12) + fundamental + chord_structure[structure_index]
        if (new_chord_note > VoicesRange[3].max) {
            break
        } else {
            chord_notes.push(new_chord_note)
        }
        if (structure_index >= chord_structure.length - 1) {
            structure_index = 0
            octave_index += 1
        } else {
            structure_index += 1
        }
    }
    return chord_notes
}

const find_voice_possible_notes = (voice_index, chord_notes, chord_progress) => {
    let max = VoicesRange[voice_index].max
    let min = Math.max(VoicesRange[voice_index].min, chord_progress[chord_progress.length -1 ])
    return chord_notes.filter( note => note >= min && note <= max)
}

let fundamental = find_fundamental(tonicOfChord)
console.log(fundamental)
chord_under_construction.push(fundamental)
let chord_notes = create_chord_notes(fundamental, ALTERATION_EXAMPLE)
let chord_notes_names = chord_notes.map(note_number_to_name)

const generateAllPossibleChords = (chord_progress) => {
    if (chord_progress.length === VoicesRange.length) {
        chordDeposit.push(chord_progress)
    } else {
        let possible_notes = find_voice_possible_notes(chord_progress.length, chord_notes, chord_progress)
        possible_notes.forEach(possible_note => {
            let next = chord_progress.slice()
            next.push(possible_note)
            generateAllPossibleChords(next)
        })
    }
}
const has_struct_interval = (chord, interval, fundamental) => {
    return chord.some( note => (note - fundamental) % 12  === interval )
}

const filter_without_chord_notes = (chords, fundamental, alteration) => {
    return chords.filter( chord => {
        let structure_intervals = ChordStructures[alteration].slice()
        structure_intervals.shift() // we know it already has the fundamental
        return structure_intervals.every( interval => {
            return has_struct_interval(chord, interval, fundamental)
        } )
    })
}
generateAllPossibleChords([fundamental])
console.log( chordDeposit.map(chord => chord.map(note_number_to_name)))
chordDeposit = filter_without_chord_notes(chordDeposit, fundamental, ALTERATION_EXAMPLE)
console.log(chordDeposit.map(chord => chord.map(note_number_to_name)))

