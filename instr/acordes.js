let chordStructures = {
    MAJ : [0, 4, 7, 12],
    min : [0, 3, 7, 12],
    MAJ_7 : [0, 4, 7, 10],
}
let NOTE_DURATION = "1n"

const OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const DEFAULT_FIRST_OCTAVE = 3

const POLYPHONY = 4
const SLIDER_RESOLUTION = 101

const ALTERATIONS = ['MAJ', 'min', 'MAJ_7']
const SensorMin = 4
const SensorMax = 4.2

// globals

let firstOctave = DEFAULT_FIRST_OCTAVE
let maintain = false
let synths = []
// let fundamental
let fundamental = 'A4'
let alteration
// let alteration = 'min'
let position
let stringPositions
let sliderElement = document.getElementById('slider')
let voices = EXAMPLE_PREVIOUS_CHORD
let voicesHistory = [EXAMPLE_PREVIOUS_CHORD]


var compressor = new Tone.Compressor(-30, 3).toMaster()


const createSynth = () => {
    var synthCreated = new Tone.Synth({
        oscillator: {
            // partials: [0.3, 0, 0.6, 0, 0.9],
            type: 'square',
        },
        envelope: {
            attack: 0.01,
            decay: 3,
            sustain: 0,
            release: 1.2,
        }
    }
    ).connect(compressor)
    return synthCreated
}
const createInstrument = () => {
    var frenchHorn = SampleLibrary.load({
        instruments: "french-horn"
    }).connect(compressor)
    return frenchHorn
}
const chordTouchStart = (ev, element, isKey) => {
    Tone.context.resume()
    ev.preventDefault()
    if (isKey) {
        fundamental = element.id
        alteration = element.dataset.alteration
    } else {
    }
    element.style.background = "yellow"
    let tonicNumber = changeNotesToNumbers(fundamental) % 12
    voices = findNextVoices(voices, tonicNumber, alteration).map( note => note - ((4 - firstOctave) * 12) )
    voicesHistory.push(voices)
    playEntireChord()
}
const chordTouchEnd = (ev, element, isKey) => {
    pressedEnd(element, isKey)
}
const addPressedBehaviour = (element, isKey) => {
    element.ontouchstart = (ev) => chordTouchStart(ev, element, isKey)
    element.onmousedown = (ev) => chordTouchStart(ev, element, isKey)
    if (!alteration) { alteration = 'MAJ'}
    element.ontouchcancel = (ev) => chordTouchEnd(ev, element, isKey)
    element.onmouseup = (ev) => chordTouchEnd(ev, element, isKey)
    element.ontouchend = (ev) => {
        ev.preventDefault()
        pressedEnd(element, isKey)
    }
}
const pressedEnd = (element, isKey) => {
    if ( isKey) {
        colorKeys(element)
        // fundamental = null
    } else {
        element.style.background = "white"
        // alteration = null
    }
}
const colorKeys = (keyElement) => {
    if (keyElement.id.includes('#')) {
        keyElement.style.background = "grey"
    } else {
        keyElement.style.background = "white"
    }
}

const generateKeyboard = () => {
    let reversed = OCTAVE.reverse()
    ALTERATIONS.forEach((alteration, index) => {
        let octaveContainer = document.createElement('div')
        octaveContainer.id = 'octave' + index
        octaveContainer.className = 'octaveContainer'
        document.getElementById('container').appendChild(octaveContainer)
        reversed.forEach(note => {
            let el = document.createElement('div')
            el.innerHTML = `${note}${firstOctave} ${alteration}`
            el.id = note + firstOctave
            el.dataset.alteration = alteration
            colorKeys(el)
            el.className = 'key'
            addPressedBehaviour(el, true)
            document.getElementById(octaveContainer.id).appendChild(el)
        })
    })
}
const generateAlterations = () => {
    ALTERATIONS.forEach(alteration => {
        let el = document.createElement('div')
        el.innerHTML = alteration
        el.id = alteration
        el.className = 'key white'
        addPressedBehaviour(el)
        document.getElementById('alterations').appendChild(el)
    })
}
const playEntireChord = () => {
    stringPositions.forEach((stringPosition, index) => {
        let chordStructure
        let chordNotes
        chordNotes = voices.map(noteNumberToName)
        let stringNote = chordNotes[index]
        let previousChord = voicesHistory[voicesHistory.length - 2].map(noteNumberToName)
        let noteToRelease = previousChord[index]
        if (maintain) {
            if (noteToRelease != stringNote) {
                synths[index].triggerRelease(noteToRelease)
                synths[index].triggerAttack(stringNote)
            }
        } else {
            synths[index].triggerRelease(noteToRelease)
            synths[index].triggerAttack(stringNote)
        }
        console.log(stringNote)
    })
}

const positionChange = (newPosition) => {
    // document.getElementById('reading').innerHTML = newPosition

    stringPositions.forEach((stringPosition, index) => {
        if (stringPosition > position && stringPosition < newPosition || stringPosition > newPosition && stringPosition < position) {
            let chordStructure
            let chordNotes
            // if (fundamental) {
            //     if (alteration) {
            //         chordStructure = chordStructures[alteration]
            //     } else {
            //         chordStructure = chordStructures.MAJ
            //     }
            //     chordNotes = Tone.Frequency(fundamental ).harmonize(chordStructure)
            // }
            chordNotes = voices.map(noteNumberToName)
            let stringNote = chordNotes[index]
            synths[index].triggerAttackRelease(stringNote, NOTE_DURATION)
            console.log(stringNote)
        }
    })
    position = newPosition
}

const setAccel = () => {
    let accelerometer = new Accelerometer({ frequency: 60 });
    let reading = document.getElementById('reading')
    accelerometer.addEventListener('reading', e => {
        let adjusted = (accelerometer.x + 10 ) / 20 * 100
        reading.innerHTML = adjusted
        // let adjusted = (accelerometer.y - SensorMin) / (SensorMax - SensorMin)
        // let limited = Math.min(Math.max(adjusted, 0), 1)
        positionChange(adjusted)
        let hue = accelerometer.y * 10
        document.body.style.background = `hsl(${hue},100%,50%)`;
    })
    accelerometer.start()
}

const changeOctave = () => {
    firstOctave =  parseInt(document.getElementById('octave').value)
}
const toggleMaintain = () => { maintain = !maintain}
const initialize = () => {
    stringPositions = []
    for (let stringIndex = 0; stringIndex < POLYPHONY; stringIndex++) {
        let unit = SLIDER_RESOLUTION / (POLYPHONY + 2)
        let stringPosition = unit * stringIndex + unit
        stringPosition = stringPosition / 100 * 25 + 60
        stringPositions.push(stringPosition)
    }

    // synth = new Tone.Synth().toMaster()
    for (let index = 0; index < 4; index++) {
        synths.push(createInstrument())
        // synths.push(createSynth())
    }

    // synths[0].triggerAttackRelease('C5', '4n')
    generateKeyboard()
    // generateAlterations()
    sliderElement.oninput = () => {
        let newPosition = parseInt(sliderElement.value)
        positionChange(newPosition)
    }
    // setAccel()
    document.getElementById('start').addEventListener(
        "mousedown", function () {
            mouse_IsDown = true;
            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            }
        })
}


initialize()
Tone.Buffer.on('load', function () {
    // play instrument sound
    // frenchHorn.toMaster()
    // frenchHorn.triggerAttack("A3")
});
