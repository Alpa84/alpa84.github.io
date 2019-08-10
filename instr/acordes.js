let chordStructures = {
    MAJ : [0, 4, 7, 12],
    min : [0, 3, 7, 12],
    MAJ_7 : [0, 3, 7, 10],
}

const OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const FIRST_OCTAVE = 4
const LAST_OCTAVE = 5
const POLYPHONY = 4
const SLIDER_RESOLUTION = 101

const ALTERATIONS = ['MAJ', 'min', 'MAJ_7']
const SensorMin = 4
const SensorMax = 4.2

// globals

let synth
// let fundamental
let fundamental = 'A4'
let alteration
// let alteration = 'min'
let position
let stringPositions
let sliderElement = document.getElementById('slider')


const createSynth = () => {
    var synthCreated = new Tone.Synth().toMaster()
    // return new Tone.PolySynth(POLYPHONY, Tone.Synth).toMaster()
    return synthCreated
}
const addPressedBehaviour = (element, isKey) => {
    element.ontouchstart = (ev) => {
        Tone.context.resume()
        ev.preventDefault()
        if (isKey) {
            fundamental = element.id
        } else {
            alteration = element.id
        }
        element.style.background = "yellow"
    }
    element.ontouchcancel = (ev) => {
        pressedEnd(element, isKey)
    }
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
    for (let index = FIRST_OCTAVE; index < LAST_OCTAVE; index++) {
        let octaveContainer = document.createElement('div')
        octaveContainer.id = 'octave' + index
        octaveContainer.className = 'octaveContainer'
        document.getElementById('container').appendChild(octaveContainer)
        reversed.forEach(note => {
            let el = document.createElement('div')
            el.innerHTML = note + index
            el.id = note + index
            colorKeys(el)
            el.className = 'key'
            addPressedBehaviour(el, true)
            document.getElementById(octaveContainer.id).appendChild(el)
        })
    }
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


const positionChange = (newPosition) => {
    // document.getElementById('reading').innerHTML = newPosition

    stringPositions.forEach((stringPosition, index) => {
        if (stringPosition > position && stringPosition < newPosition || stringPosition > newPosition && stringPosition < position) {
            let chordStructure
            let chordNotes
            if (fundamental) {
                if (alteration) {
                    chordStructure = chordStructures[alteration]
                } else {
                    chordStructure = chordStructures.MAJ
                }
                chordNotes = Tone.Frequency(fundamental ).harmonize(chordStructure)
            }
            let stringNote = chordNotes[index]
            synth.triggerAttackRelease(stringNote, "8n")
            console.log(stringNote)
        }
    })
    position = newPosition
}

const setAccel = () => {
    let accelerometer = new Accelerometer({ frequency: 60 });
    let reading = document.getElementById('reading')
    accelerometer.addEventListener('reading', e => {
        let adjusted = (accelerometer.y + 10 ) / 20 * 100
        reading.innerHTML = adjusted
        // let adjusted = (accelerometer.y - SensorMin) / (SensorMax - SensorMin)
        // let limited = Math.min(Math.max(adjusted, 0), 1)
        positionChange(adjusted)
        let hue = accelerometer.y * 10
        document.body.style.background = `hsl(${hue},100%,50%)`;
    })
    accelerometer.start()
}

stringPositions = []
for (let stringIndex = 0; stringIndex < POLYPHONY ; stringIndex++) {
    let unit = SLIDER_RESOLUTION / (POLYPHONY + 2)
    let stringPosition =   unit * stringIndex  + unit
    stringPositions.push(stringPosition)
}


// synth = new Tone.Synth().toMaster()
synth = createSynth()
synth.triggerAttackRelease('C5', '8n')
generateKeyboard()
generateAlterations()
sliderElement.oninput = () => {
    let newPosition = parseInt(sliderElement.value)
    positionChange(newPosition)
}
setAccel()
document.getElementById('start').addEventListener(
    "mousedown", function () {
        mouse_IsDown = true;
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        }
    })

