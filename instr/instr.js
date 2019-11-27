var OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
var FIRST_OCTAVE = 4
var LAST_OCTAVE = 7
const POLYPHONY = 4

// defaults
var whamiOn = false

// globals
var synth
var notes
var notesMapping = {}
var tremolo


const generateKeyboard = () => {
    var reversed = OCTAVE.reverse()
    for (let index = FIRST_OCTAVE; index < LAST_OCTAVE; index++) {
        var octaveContainer = document.createElement('div')
        octaveContainer.id = 'octave' + index
        octaveContainer.className = 'octaveContainer'
        document.getElementById('container').appendChild(octaveContainer)
        reversed.forEach(note => {
            var el = document.createElement('div')
            el.innerHTML = note + index
            el.id = note + index
            if (note.endsWith('#')) {
                el.className = 'key black'
            } else {
                el.className = 'key white'
            }
            document.getElementById(octaveContainer.id).appendChild(el)
        })
    }
}
const setAccelerometerInfluence = () => {
    let accelerometer = new Accelerometer({ frequency: 60 });
    var reading = document.getElementById('reading')
    var up = false
    accelerometer.addEventListener('reading', e => {
        var sensorMin = 4
        var sensorMax = 4.2
        var adjusted = (accelerometer.y - sensorMin) / (sensorMax - sensorMin)
        var limited = Math.min(Math.max(adjusted, 0), 1)
        reading.innerHTML = limited
        if (whamiOn) {
            if (!up && limited === 1) {
                document.body.style.background = 'red'
                up = true
                detuneKeys(limited * 1200, 0.4)
            }
            if (up && limited === 0) {
                document.body.style.background = 'white'
                up = false
                detuneKeys(limited * 1200, 0)
            }
        } else {
            let tilt = (accelerometer.y + 5) / 2 * 700 + 300
            // peaking.frequency.value = tilt
            tremolo.frequency.value = tilt
            let hue = accelerometer.y * 10
            document.body.style.background = `hsl(${hue},100%,50%)`;
        }
    })

    accelerometer.start()
}

const generateNoteList = () => {
    let noteNames = []
    for (let index = FIRST_OCTAVE; index < LAST_OCTAVE; index++) {
        OCTAVE.forEach(note => {
            noteNames.push(note + index)
        })
    }
   return  noteNames
}

const initialize = () => {
    generateKeyboard()
    notes = generateNoteList()
    // effects
    let distortion = new Tone.Distortion(0.6)
    let tremolo = new Tone.Tremolo().start()
    var comp = new Tone.Compressor(-30, 3)

    synth = new Tone.PolySynth(POLYPHONY, Tone.Synth, {
        oscillator: {
            type: 'sine'
        },
        envelope: {
            attack: 0.5,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        }
    }).chain( tremolo, comp, Tone.Master)

    setKeyboardEvents()
    setAccelerometerInfluence()

}


// let peaking = new Tone.Filter(0, "peaking").toMaster()
// var bandWidth = new Tone.Filter({
//         "rolloff": -48,
//         "frequency": 0,
//         "Q": 2,
//     }).connect(peaking)
// var effect = new Tone.AutoWah().toMaster()
// var effect = new Tone.Distortion(0.8).connect(wah)



function startNote(ev) {
    ev.preventDefault();
    ev.target.style.background = "yellow";
    let noteName = ev.target.id
    let synthVoice = findVoice(noteName)
    if (synthVoice) {
        synthVoice.detune.value = 0
    }
    synth.triggerAttack(noteName)
    if (ev.targetTouches) {
        notesMapping[noteName] = {
            start: {
                x: ev.targetTouches[0].clientX,
                y: ev.targetTouches[0].clientY,
            }
        }
    }
}

function moveNote(ev) {
    let noteName = ev.target.id
    var threshold = 20
    let mappedNote = notesMapping[noteName]


    var vibrate = mappedNote.start.x - ev.targetTouches[0].clientX
    var movedY = mappedNote.start.y - ev.targetTouches[0].clientY
    // place.synth.vibrate.value = vibrate
    if (!isNaN(movedY) && Math.abs(movedY) > threshold) {

        // place.vibrato.frequency.value = vibrate * 5 * 0.009 * 2
        // place.vibrato.depth.value = vibrate * 0.1  * 0.009 * 2
        if (whamiOn) {

        } else {
            let noteFreq = Tone.Frequency(noteName).valueOf()
            // console.log('noteFreq', noteFreq)
            let synthVoice = findVoice(noteName)
            if (!synthVoice) {
                console.log('undef!')
            } else {
                if (movedY > 0) {
                    synthVoice.detune.value = movedY - threshold
                } else {
                    synthVoice.detune.value = movedY + threshold
                }
            }
        }
    }
}
const findVoice = (noteName) => {
    let noteFreq = Tone.Frequency(noteName).valueOf()
    return synth.voices.find(voice => {
        let timeline = voice.frequency._events._timeline
        return timeline[timeline.length - 1].value === noteFreq
    })
}

function releaseNote(ev) {
    let noteName = ev.target.id
    synth.triggerRelease(noteName)
    ev.preventDefault();

    if (!ev.targetTouches || ev.targetTouches.length == 0) {
        // Restore background and border to original values
        if (ev.target.id.includes('#')) {
            ev.target.style.background = "grey";
        } else {
            ev.target.style.background = "white";
        }
        ev.target.style.border = "1px solid black";
    }
}

function setKeyboardEvents() {
    for (const pitch of notes) {
        var el = document.getElementById(pitch)
        el.ontouchstart = startNote
        el.onmousedown = startNote
        el.ontouchmove = moveNote
        el.ontouchcancel = releaseNote
        el.ontouchend = releaseNote
        el.onmouseup = releaseNote
    }
}
const detuneKeys = (cents, time) => {
    synth.detune.rampTo(cents, time)
}

const toggleWhami = () => {
    whamiOn = !whamiOn
}

initialize()