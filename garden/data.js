const dataSingle = [
  {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 30,
      line: { color: "black", width: 0.5 },
      x: [0.001, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
      y: [
        0.5, 0.14796468185502737, 0.3900134850063932, 0.5265362761195976,
        0.6158309663652772, 0.6908288634275488, 0.9044853700305036,
      ],
      label: [
        "an army marches into battle over a desolate",
        " landscape",
        " plain",
        " field",
        " terrain",
        " land",
        "[Others]",
      ],
      color: [
        "rgb(79, 121, 66)",
        "rgb(79, 121, 66)",
        "rgb(79, 121, 66)",
        "rgb(79, 121, 66)",
        "rgb(79, 121, 66)",
        "rgb(79, 121, 66)",
        "LightGray",
      ],
    },
    link: {
      source: [null, 0, 0, 0, 0, 0, 0],
      target: [0, 1, 2, 3, 4, 5, 6],
      value: [
        1, 0.29392936371005474, 0.16016824259267687, 0.08287733963373199,
        0.06571204085762719, 0.05428375326691611, 0.34302925993899314,
      ],
      color: [
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
      ],
    },
  },
];

const dataBigger = [
  {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 30,
      line: { color: "black", width: 0.5 },
      x: [
        0.001, 0.353333333333333, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.353333333333333, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.353333333333333,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.353333333333333, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.353333333333333, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.806666666666666,
        0.806666666666666, 0.806666666666666, 0.353333333333333,
      ],
      y: [
        0.5, 0.19414258498054224, 0.05827642445169581, 0.12235072362749227,
        0.15692761237518466, 0.1826155633049581, 0.20428454294943688,
        0.24389085238175992, 0.3903397388652011, 0.3070752547440582,
        0.33176268372038453, 0.35376925755219707, 0.37429145521132856,
        0.3931725570395517, 0.42762520566155154, 0.54572167945506,
        0.4826410080215891, 0.5063560730676205, 0.5261894789503659,
        0.5428500414580114, 0.5573620730891377, 0.5859073929156127,
        0.6499525336418202, 0.6281812995097287, 0.6441971653755859,
        0.659086388383666, 0.6723660241211038, 0.684452796828965,
        0.699351281726739, 0.7385231153923296, 0.7230584581440485,
        0.7375084841519814, 0.7496541855735059, 0.7610240275535012,
        0.7719585318763564, 0.7866746540386513, 0.843877050247051,
      ],
      label: [
        "The Garden of Forking Paths is an enormous",
        " labyrinth",
        " of",
        " created",
        ",",
        " composed",
        " that",
        "[Others]",
        " garden",
        " that",
        " created",
        " with",
        " located",
        " filled",
        "[Others]",
        ",",
        " labyrinth",
        " complex",
        " ever",
        " intricate",
        " sprawling",
        "[Others]",
        " maze",
        " of",
        " created",
        "-",
        " located",
        ",",
        "[Others]",
        " and",
        " complex",
        " labyrinth",
        " complicated",
        " intricate",
        " chaotic",
        "[Others]",
        "[Others]",
      ],
      color: [
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "LightGray",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "LightGray",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "LightGray",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "LightGray",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "rgb(0, 158, 96)",
        "LightGray",
        "LightGray",
      ],
    },
    link: {
      source: [
        null,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        8,
        8,
        8,
        8,
        8,
        8,
        0,
        15,
        15,
        15,
        15,
        15,
        15,
        0,
        22,
        22,
        22,
        22,
        22,
        22,
        0,
        29,
        29,
        29,
        29,
        29,
        29,
        0,
      ],
      target: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      ],
      value: [
        1, 0.3862851699610845, 0.11455284890339162, 0.08523802857091461,
        0.03210617178120186, 0.02495466750330648, 0.018347025788296292,
        0.11108642741397355, 0.19513727377710094, 0.028608305534815037,
        0.02365319684568964, 0.019282508294487164, 0.017187893659365606,
        0.014324624924573042, 0.09208074451817046, 0.15173642642429758,
        0.025575083557355726, 0.022315113380591712, 0.015203789089372362,
        0.010280367197416531, 0.006967989822769159, 0.0713940833767921,
        0.05811442308866049, 0.014571954824477588, 0.009117340766819002,
        0.00795497786279624, 0.004968275902316521, 0.0031798902352587932,
        0.018321983496992343, 0.04551827888328673, 0.014588964386724383,
        0.005982259138521087, 0.003094951015344708, 0.002120693756921297,
        0.0014448698943262499, 0.018286540691449003, 0.16320842786556988,
      ],
      color: [
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "LightGray",
        "WhiteSmoke",
        "WhiteSmoke",
      ],
    },
  },
];
// breadth: 2, depth 9, cut 0,
const pallete = [
  "#699571",
  "#b5394d",
  "#46c986",
  "#e16d74",
  "#5db15c",
  "#a84e2e",
  "#7fcb8c",
  "#8a4d47",
  "#b1bc4b",
  "#c07a77",
  "#316f1a",
  "#e58a5d",
  "#3a8b52",
  "#b37624",
  "#297153",
  "#e1aa4b",
  "#3f674d",
  "#b09c32",
  "#306a3c",
  "#e5a894",
  "#3d6225",
  "#d0b272",
  "#48663d",
  "#af7e5d",
  "#709130",
  "#865525",
  "#8bc098",
  "#625910",
  "#bdbd8e",
  "#71563b",
  "#9abb6d",
  "#605926",
  "#628848",
  "#977a31",
  "#606843",
  "#85822f",
  "#766949",
  "#596d18",
  "#9d966b",
  "#807843",
];
const prompt = `He believed in an infinite series of times,`;
const paths = [
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " a semi-infinite series of", id: 2, prob: 0.013102406788988705 },
    {
      token: " times preceding the present.",
      prob: 0.0006888460199558281,
      id: 3,
    },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " a semi-infinite series of", id: 2, prob: 0.013102406788988705 },
    { token: " spaces.", prob: 0.001249211681642803, id: 4 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " causes", id: 6, prob: 0.07324375050958325 },
    {
      token: ", producing an infinite series of effects",
      id: 7,
      prob: 0.00467871524742976,
    },
    { token: ".", id: 8, prob: 0.4870953911642357 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " causes", id: 6, prob: 0.07324375050958325 },
    {
      token: ", producing an infinite series of effects",
      id: 7,
      prob: 0.00467871524742976,
    },
    { token: "\n", id: 9, prob: 0.31739094498959786 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " causes", id: 6, prob: 0.07324375050958325 },
    { token: "\n", id: 10, prob: 0.23869998702363643 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " created", id: 14, prob: 0.00013665378984765316 },
    { token: " by God", id: 15, prob: 0.00004853561197197018 },
    { token: " in", id: 16, prob: 0.00001574143796150679 },
    { token: " the", id: 17, prob: 0.27422133684046446 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " created", id: 14, prob: 0.00013665378984765316 },
    { token: " by God", id: 15, prob: 0.00004853561197197018 },
    { token: " in", id: 16, prob: 0.00001574143796150679 },
    { token: " His", id: 18, prob: 0.24475337697892585 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " created", id: 14, prob: 0.00013665378984765316 },
    { token: " by God", id: 15, prob: 0.00004853561197197018 },
    { token: ".", id: 19, prob: 0.18824115477368678 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " created", id: 14, prob: 0.00013665378984765316 },
    {
      token: " and governed by the same laws, and were",
      id: 20,
      prob: 3.9112896405528704e-7,
    },
    { token: " subject to", prob: 6.862047550504279e-8, id: 21 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " created", id: 14, prob: 0.00013665378984765316 },
    {
      token: " and governed by the same laws, and were",
      id: 20,
      prob: 3.9112896405528704e-7,
    },
    { token: " part of", prob: 6.055863970548835e-8, id: 22 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " inhabited", id: 23, prob: 0.00010633041259323549 },
    { token: " by", id: 24, prob: 0.00004264758062055778 },
    { token: " living creatures", prob: 0.000005047333307850704, id: 25 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " inhabited", id: 23, prob: 0.00010633041259323549 },
    { token: " by", id: 24, prob: 0.00004264758062055778 },
    { token: " rational creatures", prob: 0.0000070256152114167295, id: 26 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " were", id: 13, prob: 0.0012038672303160396 },
    { token: " inhabited", id: 23, prob: 0.00010633041259323549 },
    { token: ".", id: 27, prob: 0.23341665581513282 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: ", and", id: 30, prob: 0.000018953735686725928 },
    { token: " all of", prob: 0.000003794730295581981, id: 31 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: ", and", id: 30, prob: 0.000018953735686725928 },
    { token: " which", id: 32, prob: 0.0000028377686194212654 },
    { token: " had", id: 33, prob: 0.1899520133569182 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: ", and", id: 30, prob: 0.000018953735686725928 },
    { token: " which", id: 32, prob: 0.0000028377686194212654 },
    { token: " were", id: 34, prob: 0.18513655334421902 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: " in the same", id: 35, prob: 0.000017629956093500415 },
    { token: " way.", prob: 0.000004988132374031132, id: 36 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: " in the same", id: 35, prob: 0.000017629956093500415 },
    { token: " manner", id: 37, prob: 0.0000071362070232622585 },
    { token: " as", id: 38, prob: 0.3184157691542724 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " been created by God", id: 29, prob: 0.00014706271169319344 },
    { token: " in the same", id: 35, prob: 0.000017629956093500415 },
    { token: " manner", id: 37, prob: 0.0000071362070232622585 },
    { token: ",", id: 39, prob: 0.195652197225564 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " their", id: 40, prob: 0.00032733841564109293 },
    { token: " end, and in", id: 41, prob: 0.00005940697275720476 },
    { token: " the same", prob: 0.000012043075722839726, id: 42 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " their", id: 40, prob: 0.00032733841564109293 },
    { token: " end, and in", id: 41, prob: 0.00005940697275720476 },
    { token: " which the", prob: 0.000019018708373728907, id: 43 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " their", id: 40, prob: 0.00032733841564109293 },
    { token: " own", id: 44, prob: 0.00006647975371978374 },
    { token: " individual", id: 45, prob: 0.000016810511007287334 },
    { token: " existence", id: 46, prob: 0.19927416278135435 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " their", id: 40, prob: 0.00032733841564109293 },
    { token: " own", id: 44, prob: 0.00006647975371978374 },
    { token: " individual", id: 45, prob: 0.000016810511007287334 },
    { token: " exist", id: 47, prob: 0.10664118404240323 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    { token: " which", id: 12, prob: 0.0037922782769890767 },
    { token: " had", id: 28, prob: 0.001200286006303573 },
    { token: " their", id: 40, prob: 0.00032733841564109293 },
    { token: " own", id: 44, prob: 0.00006647975371978374 },
    { token: " separate existence", prob: 0.00000770929501741233, id: 48 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    {
      token: " them different from each other",
      id: 49,
      prob: 0.0007810139567701082,
    },
    { token: ".", id: 50, prob: 0.4141433785969982 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: " and in", id: 1, prob: 0.4322937525789296 },
    { token: " an infinite series of", id: 5, prob: 0.1256986438785274 },
    { token: " worlds, all of", id: 11, prob: 0.006444363462594634 },
    {
      token: " them different from each other",
      id: 49,
      prob: 0.0007810139567701082,
    },
    { token: "\n", id: 51, prob: 0.22584587079543966 },
  ],
  [
    { token: "He believed in an infinite series of times,", id: 0, prob: 1 },
    { token: "\n", id: 52, prob: 0.10284448357047814 },
  ],
];
