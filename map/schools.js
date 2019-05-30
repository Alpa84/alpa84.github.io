let schools = [
    {
        "name": "EPI Nª1189 \"GOETHE ROSARIO\"",
        "dir": "ESPAÑA 440",
        "from": 8000,
        "to": 8006,
        "amount": 7,
        "formatted_address": "España 440, S2000DBJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9408309,
            "lng": -60.645521
        }
    },
    {
        "name": "EPI Nº 1296 \"EDMONDO DE AMICIS\"",
        "dir": "SANTIAGO 1365",
        "from": 8012,
        "to": 8021,
        "amount": 10,
        "formatted_address": "Santiago 1365, S2000QHK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9502487,
            "lng": -60.65763549999999
        }
    },
    {
        "name": "E.E.S.O.P.I Nº8010 \"NTRA SEñORA DE LA MISERICORDIA",
        "dir": "San Luis 2264",
        "from": 8022,
        "to": 8031,
        "amount": 10,
        "formatted_address": "San Luis 2264, S2000KPB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9461453,
            "lng": -60.65475490000001
        }
    },
    {
        "name": "EESOPI Nº8011 \"NTRA SRA DEL ROSARIO\"",
        "dir": "ALVEAR 700",
        "from": 8032,
        "to": 8041,
        "amount": 10,
        "formatted_address": "Alvear 700, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9421318,
            "lng": -60.65432089999999
        }
    },
    {
        "name": "E.E.S.O. Nº404 \"DR L. DE LA TORRE\"",
        "dir": "SAN LUIS 2868",
        "from": 8042,
        "to": 8051,
        "amount": 10,
        "formatted_address": "San Luis 2868, S2002ORN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.944611,
            "lng": -60.66299599999999
        }
    },
    {
        "name": "E.E.S.O.N°430 D.F.SARMIENTO",
        "dir": "9 DE JULIO 80",
        "from": 3687,
        "to": 3692,
        "amount": 6,
        "formatted_address": "9 de Julio 80, S2000BNB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.956027,
            "lng": -60.625393
        }
    },
    {
        "name": "ESC.PRIM.N°58 J.B.ALBERDI",
        "dir": "AYACUCHO 1544",
        "from": 3693,
        "to": 3698,
        "amount": 6,
        "formatted_address": "Ayacucho 1544, S2000BYR Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9576269,
            "lng": -60.629361
        }
    },
    {
        "name": "INST.POLITEC.N°6 G.SAN MARTIN",
        "dir": "AYACUCHO 1667",
        "from": 3699,
        "to": 3702,
        "amount": 4,
        "formatted_address": "Ayacucho 1667, S2000BYS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9586923,
            "lng": -60.629729
        }
    },
    {
        "name": "E.P.I.N°1081 CRISTO REY",
        "dir": "LAPRIDA 1380",
        "from": 3703,
        "to": 3708,
        "amount": 6,
        "formatted_address": "Laprida 1380, S2000CFR Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.954104,
            "lng": -60.635935
        }
    },
    {
        "name": "ESC.TALLER N°36 B.MITRE",
        "dir": "LAPRIDA 1557",
        "from": 3709,
        "to": 3711,
        "amount": 3,
        "formatted_address": "Laprida 1557, S2000CFU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9562326,
            "lng": -60.63661210000001
        }
    },
    {
        "name": "I.S.P.I.N°9193 CRUZ ROJA ARG.",
        "dir": "LAPRIDA 1553",
        "from": 3712,
        "to": 3714,
        "amount": 3,
        "formatted_address": "Laprida 1553, S2000CFU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9564017,
            "lng": -60.63636
        }
    },
    {
        "name": "INSTITUTO MADRE CABRINI",
        "dir": "COCHABAMBA 662",
        "from": 3715,
        "to": 3720,
        "amount": 6,
        "formatted_address": "Cochabamba 662, S2000DVN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.95939420000001,
            "lng": -60.6351513
        }
    },
    {
        "name": "EESOPI.Nº8007 ESCUELAS PIAS",
        "dir": "LAPRIDA 1380",
        "from": 3721,
        "to": 3723,
        "amount": 3,
        "formatted_address": "Laprida 1380, S2000CFR Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.954104,
            "lng": -60.635935
        }
    },
    {
        "name": "E.E.T.PROF.N°468 ING.L.LAPORTE",
        "dir": "1 DE MAYO 1059",
        "from": 3724,
        "to": 3728,
        "amount": 5,
        "formatted_address": "1 de Mayo 1059, S2000CAE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.951225,
            "lng": -60.630284
        }
    },
    {
        "name": "EESOPI.8009 S.J.B.DE LA SALLE",
        "dir": "MENDOZA 444",
        "from": 3729,
        "to": 3735,
        "amount": 7,
        "formatted_address": "Mendoza 444, S2000BHJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9530443,
            "lng": -60.63003389999999
        }
    },
    {
        "name": "E.E.S.O.P.I.N°8038 M.BICECCI",
        "dir": "BUENOS AIRES 1290",
        "from": 3736,
        "to": 3740,
        "amount": 5,
        "formatted_address": "Buenos Aires 1290, S2000CET Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.95351,
            "lng": -60.634326
        }
    },
    {
        "name": "ESC.PRIM.N°53 B.RIVADAVIA",
        "dir": "J.M.DE ROSAS 1242",
        "from": 3741,
        "to": 3745,
        "amount": 5,
        "formatted_address": "Juan Manuel de Rosas 1242, S2000CCL Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9532573,
            "lng": -60.6327278
        }
    },
    {
        "name": "EPI.N°1004 NTRA.SRA.DEL HUERTO",
        "dir": "J.M.DE ROSAS 1093",
        "from": 3746,
        "to": 3750,
        "amount": 5,
        "formatted_address": "Juan Manuel de Rosas 1093, S2000CCG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9513874,
            "lng": -60.6320887
        }
    },
    {
        "name": "ARICANA",
        "dir": "BUENOS AIRES 934",
        "from": 3751,
        "to": 3755,
        "amount": 5,
        "formatted_address": "Buenos Aires 934, S2000CEQ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9492146,
            "lng": -60.6332629
        }
    },
    {
        "name": "EESOPI.Nº8004 LICEO AVELLANEDA",
        "dir": "CORDOBA 625",
        "from": 3756,
        "to": 3760,
        "amount": 5,
        "formatted_address": "Córdoba 625, S2000AWE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.947826,
            "lng": -60.6318154
        }
    },
    {
        "name": "ESC.PRIM.N°55 D.F.SARMIENTO",
        "dir": "BUENOS AIRES 975",
        "from": 3761,
        "to": 3765,
        "amount": 5,
        "formatted_address": "Buenos Aires 975, S2000CED Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.949743,
            "lng": -60.63322290000001
        }
    },
    {
        "name": "ESC.PRIM.N°103 DR.R.SAENZ PEÑA",
        "dir": "SARMIENTO 307",
        "from": 3766,
        "to": 3772,
        "amount": 7,
        "formatted_address": "Sarmiento 307, S2000CMC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.940781,
            "lng": -60.636731
        }
    },
    {
        "name": "CENTRO DE LA JUVENTUD",
        "dir": "AV.BELGRANO 950",
        "from": 3773,
        "to": 3777,
        "amount": 5,
        "formatted_address": "Av. Belgrano 950, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9505084,
            "lng": -60.6278063
        }
    },
    {
        "name": "E.P.A.N°1022 SAN BARTOLOME",
        "dir": "TUCUMAN 1257",
        "from": 3778,
        "to": 3784,
        "amount": 7,
        "formatted_address": "Tucumán 1257, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9414991,
            "lng": -60.63915799999999
        }
    },
    {
        "name": "FACULTAD DE DERECHO",
        "dir": "CORDOBA 2020",
        "from": 3785,
        "to": 3791,
        "amount": 7,
        "formatted_address": "Universidad Nacional de Rosario: Facultad de Derecho, Córdoba 2020, S2000AXH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9439379,
            "lng": -60.651115
        }
    },
    {
        "name": "E.E.T.PROF.N°467 OVIDIO LAGOS",
        "dir": "AV.CORRIENTES 668",
        "from": 3792,
        "to": 3796,
        "amount": 5,
        "formatted_address": "Corrientes 668, S2000CTS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9439719,
            "lng": -60.6420251
        }
    },
    {
        "name": "E.E.S.O.Nº431 GRAL.SAN MARTIN",
        "dir": "ENTRE RIOS 145",
        "from": 3797,
        "to": 3802,
        "amount": 6,
        "formatted_address": "Entre Ríos 145, S2000CRA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9383656,
            "lng": -60.6389565
        }
    },
    {
        "name": "I.S.P.I.N°9229 GRAL.SAN MARTIN",
        "dir": "SALTA 1436",
        "from": 3803,
        "to": 3808,
        "amount": 6,
        "formatted_address": "Salta 1436, S2000AIH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9385654,
            "lng": -60.64110119999999
        }
    },
    {
        "name": "FAC.DE HUMANIDADES Y ARTES",
        "dir": "ENTRE RIOS 758",
        "from": 3809,
        "to": 3816,
        "amount": 8,
        "formatted_address": "Entre Ríos 758, S2000CRN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.945492,
            "lng": -60.64093
        }
    },
    {
        "name": "ESC.NOR.SUP.1 DR.N.AVELLANEDA",
        "dir": "CORRIENTES 1191",
        "from": 3817,
        "to": 3822,
        "amount": 6,
        "formatted_address": "Corrientes 1191, S2000CTK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.95055600000001,
            "lng": -60.642856
        }
    },
    {
        "name": "EESOPI.Nº3039 PARQUE DE ESPAÑA",
        "dir": "AV.DEL HUERTO 1198",
        "from": 3823,
        "to": 3829,
        "amount": 7,
        "formatted_address": "Av. del Huerto 1198, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9402289,
            "lng": -60.63620419999999
        }
    },
    {
        "name": "ES.PRI.1240 A.DELGADO DE ARIAS",
        "dir": "MITRE 1648",
        "from": 3830,
        "to": 3836,
        "amount": 7,
        "formatted_address": "Mitre 1648, S2000CPJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9563549,
            "lng": -60.6422055
        }
    },
    {
        "name": "E.E.T.P.Nº294 CRUC.G.BELGRANO",
        "dir": "9 DE JULIO 1247",
        "from": 3837,
        "to": 3843,
        "amount": 7,
        "formatted_address": "9 de Julio 1247, S2000BNY Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.953437,
            "lng": -60.64212999999999
        }
    },
    {
        "name": "ESC.TALLER N°34 B.RIVADAVIA",
        "dir": "PARAGUAY 1230",
        "from": 3844,
        "to": 3845,
        "amount": 2,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°60 MARIANO MORENO",
        "dir": "PARAGUAY 1251",
        "from": 3846,
        "to": 3851,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "EPI.Nº1006 C.E.LATINOAMERICANO",
        "dir": "AV.PELLEGRINI 1352",
        "from": 3852,
        "to": 3857,
        "amount": 6,
        "formatted_address": "Av. Pellegrini 1352, S2000BUN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.956474,
            "lng": -60.644305
        }
    },
    {
        "name": "EESOPI.8027 N.S.DE LOS ANGELES",
        "dir": "TUCUMAN 1676",
        "from": 3858,
        "to": 3863,
        "amount": 6,
        "formatted_address": "Tucumán 1676, S2000AMP Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.94018010000001,
            "lng": -60.6449304
        }
    },
    {
        "name": "E.P.I.N°1012 SAN JOSE",
        "dir": "PTE.ROCA 150",
        "from": 3864,
        "to": 3869,
        "amount": 6,
        "formatted_address": "Pte. Roca 150, S2000CXD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.937607,
            "lng": -60.6433215
        }
    },
    {
        "name": "ESC.NAC.SUP.DE COMERCIO N°49",
        "dir": "BV.OROÑO 690",
        "from": 3870,
        "to": 3875,
        "amount": 6,
        "formatted_address": "Bv. Oroño 690, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9422219,
            "lng": -60.65325720000001
        }
    },
    {
        "name": "E.E.T.PROF.Nº628 SERVANDO BAYO",
        "dir": "SALTA 1333",
        "from": 3876,
        "to": 3879,
        "amount": 4,
        "formatted_address": "Salta 1333, S2000AIE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9389448,
            "lng": -60.6397394
        }
    },
    {
        "name": "E.E.T.PROF.N°469 E.ZEBALLOS",
        "dir": "ESPAÑA 150",
        "from": 3880,
        "to": 3886,
        "amount": 7,
        "formatted_address": "España 150, S2000DBD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9374403,
            "lng": -60.6447921
        }
    },
    {
        "name": "ESC.PRIM.N°54 GRAL.M.BELGRANO",
        "dir": "JUJUY 1963",
        "from": 3887,
        "to": 3893,
        "amount": 7,
        "formatted_address": "Jujuy 1963, S2000AGO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.936219,
            "lng": -60.64808
        }
    },
    {
        "name": "EESOPI.Nº3027 S.A.GIANELLI",
        "dir": "1 DE MAYO 1060",
        "from": 3894,
        "to": 3897,
        "amount": 4,
        "formatted_address": "1 de Mayo 1060, S2000CAF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9512317,
            "lng": -60.6306429
        }
    },
    {
        "name": "ES.N°1321 CRIS.EVANG.ARGENTINA",
        "dir": "SALTA 2349",
        "from": 3898,
        "to": 3903,
        "amount": 6,
        "formatted_address": "Salta 2349, S2000JKB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9364787,
            "lng": -60.6535749
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3063 DR.L.LELOIR",
        "dir": "SALTA 2045",
        "from": 3904,
        "to": 3908,
        "amount": 5,
        "formatted_address": "Salta 2045, S2000AIS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9372221,
            "lng": -60.6495617
        }
    },
    {
        "name": "E.P.I.Nº1301 SAN JORGE",
        "dir": "ITALIA 1145",
        "from": 3909,
        "to": 3913,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°68 L.N.ALEM",
        "dir": "ITALIA 1244",
        "from": 3914,
        "to": 3918,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°68 L.N.ALEM",
        "dir": "ITALIA 1244",
        "from": 3914,
        "to": 3918,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°68 L.N.ALEM",
        "dir": "ITALIA 1244",
        "from": 3914,
        "to": 3918,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°68 L.N.ALEM",
        "dir": "ITALIA 1244",
        "from": 3914,
        "to": 3918,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.P.I.N°1026 SAGRADO CORAZON",
        "dir": "MENDOZA 1951",
        "from": 3919,
        "to": 3924,
        "amount": 6,
        "formatted_address": "Mendoza 1951, S2000BIM Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9495177,
            "lng": -60.6512642
        }
    },
    {
        "name": "E.P.I.Nº1101 SAN M.GARICOITS",
        "dir": "DORREGO 1268",
        "from": 3925,
        "to": 3929,
        "amount": 5,
        "formatted_address": "Dorrego 1268, S2000DHZ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9503519,
            "lng": -60.650895
        }
    },
    {
        "name": "FAC.DE CS.ECON.Y ESTADISTICAS",
        "dir": "BV.OROÑO 1261",
        "from": 3930,
        "to": 3935,
        "amount": 6,
        "formatted_address": "Bv. Oroño 1261, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9498879,
            "lng": -60.65441209999999
        }
    },
    {
        "name": "TRIBUNALES PROVINCIALES",
        "dir": "BALCARCE 1651",
        "from": 3936,
        "to": 3940,
        "amount": 5,
        "formatted_address": "Balcarce 1651, S2000DOG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9542919,
            "lng": -60.65437799999999
        }
    },
    {
        "name": "E.E.S.O.N°3177 MA.AUXILIADORA",
        "dir": "SAN JUAN 1650",
        "from": 3941,
        "to": 3946,
        "amount": 6,
        "formatted_address": "San Juan 1650, S2000BEB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9487618,
            "lng": -60.6465408
        }
    },
    {
        "name": "ESC.P.N°64 TTE.GRAL.P.RICCHERI",
        "dir": "MORENO 965",
        "from": 3947,
        "to": 3952,
        "amount": 6,
        "formatted_address": "Mariano Moreno 965, S2000DKS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9462913,
            "lng": -60.6510456
        }
    },
    {
        "name": "E.P.I.Nº1082 ADORATRICES",
        "dir": "SANTA FE 1747",
        "from": 3953,
        "to": 3957,
        "amount": 5,
        "formatted_address": "Sta Fe 1747, S2000AUA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9435575,
            "lng": -60.6467299
        }
    },
    {
        "name": "E.E.S.O.N°432 B.RIVADAVIA",
        "dir": "BV.OROÑO 1145",
        "from": 3958,
        "to": 3962,
        "amount": 5,
        "formatted_address": "Bv. Oroño 1145, S2000DSL Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9478919,
            "lng": -60.65434699999999
        }
    },
    {
        "name": "ESC.NOR.SUP.N°2 J.M.GUTIERREZ",
        "dir": "CORDOBA 2084",
        "from": 3963,
        "to": 3970,
        "amount": 8,
        "formatted_address": "Córdoba 2084, S2000AXH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9432507,
            "lng": -60.6513613
        }
    },
    {
        "name": "E.P.I.N°1265 LUIS RAVERA",
        "dir": "OCAMPO 15 BIS",
        "from": 3971,
        "to": 3976,
        "amount": 6,
        "formatted_address": "EXB, Ocampo 15, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9693007,
            "lng": -60.6276869
        }
    },
    {
        "name": "E.E.T.P.463 G.M.DE SAN MARTIN",
        "dir": "OCAMPO 187",
        "from": 3977,
        "to": 3981,
        "amount": 5,
        "formatted_address": "Ocampo 187, S2000EXC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9688371,
            "lng": -60.6303625
        }
    },
    {
        "name": "FACULTAD DE PSICOLOGIA U.N.R.",
        "dir": "RIOBAMBA 250 BIS",
        "from": 3982,
        "to": 3990,
        "amount": 9,
        "formatted_address": "Riobamba 250 Bis. Monoblock Nº 1, Ciudad Universitaria Rosario, Riobamba 250, S2000ELF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.967923,
            "lng": -60.62293400000001
        }
    },
    {
        "name": "FACULTAD DE ARQUITECTURA",
        "dir": "RIOBAMBA 220 BIS",
        "from": 3991,
        "to": 3999,
        "amount": 9,
        "formatted_address": "Riobamba 220 bis, S2000EKF, S2000EKF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9683485,
            "lng": -60.62311889999999
        }
    },
    {
        "name": "E.E.T.P.Nº465 GRAL.M.BELGRANO",
        "dir": "27 DE FEBRERO 150",
        "from": 4000,
        "to": 4005,
        "amount": 6,
        "formatted_address": "Bv. 27 de Febrero 150, S2000FAO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.969857,
            "lng": -60.630159
        }
    },
    {
        "name": "ESC.PRIM.N°96 F.AMEGHINO",
        "dir": "BUENOS AIRES 2027",
        "from": 4006,
        "to": 4011,
        "amount": 6,
        "formatted_address": "Buenos Aires 2027, S2000 FQD, Santa Fe, Argentina",
        "location": {
            "lat": -32.9620851,
            "lng": -60.63629530000001
        }
    },
    {
        "name": "ESC.PRIM.N°57 JUANA E.BLANCO",
        "dir": "PASCO 453",
        "from": 4012,
        "to": 4017,
        "amount": 6,
        "formatted_address": "Pasco 453, S2000EBI Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9612645,
            "lng": -60.6324215
        }
    },
    {
        "name": "E.P.I.1028 NTRA.S.D.L.ASUNCION",
        "dir": "SAN MARTIN 1771",
        "from": 4018,
        "to": 4022,
        "amount": 5,
        "formatted_address": "San Martín 1771, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.958379,
            "lng": -60.63957500000001
        }
    },
    {
        "name": "E.P.I.1015 HOGAR MATERNAL N°1",
        "dir": "MAIPU 1727",
        "from": 4023,
        "to": 4028,
        "amount": 6,
        "formatted_address": "Maipú 1727, S2000FSA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.958255,
            "lng": -60.6380703
        }
    },
    {
        "name": "ESC.PRIM.N°88 JUANA MANSO",
        "dir": "MITRE 2337",
        "from": 4029,
        "to": 4036,
        "amount": 8,
        "formatted_address": "Mitre 2337, S2000FWM Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.964405,
            "lng": -60.644071
        }
    },
    {
        "name": "ESC.NORMAL SUP.N°36 M.MORENO",
        "dir": "ENTRE RIOS 2366",
        "from": 4037,
        "to": 4043,
        "amount": 7,
        "formatted_address": "Entre Ríos 2366, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9643328,
            "lng": -60.64570099999999
        }
    },
    {
        "name": "ESC.PRIM.N°524 E.L.PANDO",
        "dir": "ITALIA 2225",
        "from": 4044,
        "to": 4049,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "JARDIN DE INF. MARIANO MORENO",
        "dir": "LA PAZ 1369",
        "from": 4050,
        "to": 4054,
        "amount": 5,
        "formatted_address": "La Paz 1369, S2000ERA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9635837,
            "lng": -60.6463838
        }
    },
    {
        "name": "E.E.S.O.3078 NEWELL'S OLD BOYS",
        "dir": "CORRIENTES 1845",
        "from": 4055,
        "to": 4060,
        "amount": 6,
        "formatted_address": "Corrientes 1845, S2000FYB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9583076,
            "lng": -60.64541740000001
        }
    },
    {
        "name": "E.P.I.N°1178 PADRE CLARET",
        "dir": "VIAMONTE 1561",
        "from": 4061,
        "to": 4068,
        "amount": 8,
        "formatted_address": "Viamonte 1561, S2000EUE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9643499,
            "lng": -60.648737
        }
    },
    {
        "name": "ESC.PRIM.N°135 M.DORREGO",
        "dir": "SAN MARTIN 2992",
        "from": 4069,
        "to": 4076,
        "amount": 8,
        "formatted_address": "San Martín 2992, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9724174,
            "lng": -60.6430383
        }
    },
    {
        "name": "INST.EDU.SUP.Nº28 O.COSSETTINI",
        "dir": "SARMIENTO 2902",
        "from": 4077,
        "to": 4080,
        "amount": 4,
        "formatted_address": "Sarmiento 2902, S2001SBH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.971263,
            "lng": -60.64471400000001
        }
    },
    {
        "name": "E.E.T.PROF.N°661 JUANA AZURDUY",
        "dir": "OVIDIO LAGOS 2228",
        "from": 4081,
        "to": 4089,
        "amount": 9,
        "formatted_address": "Av. Ovidio Lagos 2228, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.959244,
            "lng": -60.665712
        }
    },
    {
        "name": "ESC.PRIM.N°1267 LATINOAMERICA",
        "dir": "M.RODRIGUEZ 2842",
        "from": 4090,
        "to": 4097,
        "amount": 8,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°610 REP.DE BOLIVIA",
        "dir": "LA PAZ 3050",
        "from": 4098,
        "to": 4106,
        "amount": 9,
        "formatted_address": "La Paz 3050, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9593866,
            "lng": -60.66919429999999
        }
    },
    {
        "name": "ESC.PRIM.N°801 C.F.DE BAFICO",
        "dir": "VIRASORO 1920",
        "from": 4107,
        "to": 4110,
        "amount": 4,
        "formatted_address": "Virasoro 1920, S2001ODP Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.967797,
            "lng": -60.6554058
        }
    },
    {
        "name": "E.SUP.DE COM.G.J.DE SAN MARTIN",
        "dir": "BALCARCE 1240",
        "from": 4111,
        "to": 4118,
        "amount": 8,
        "formatted_address": "Balcarce 1240, S2000DNZ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9495521,
            "lng": -60.653413
        }
    },
    {
        "name": "ANEXO E.S.O.Nº1360",
        "dir": "M.RODRIGUEZ 2842",
        "from": 4119,
        "to": 4123,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.P.I.N°1105 SAGRADA FAMILIA",
        "dir": "E.ZEBALLOS 2755",
        "from": 4124,
        "to": 4129,
        "amount": 6,
        "formatted_address": "Zeballos 2755, S2000PRK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9510544,
            "lng": -60.6629865
        }
    },
    {
        "name": "E.E.T.PROF.N°288 DR.O.MAGNASCO",
        "dir": "OVIDIO LAGOS 1502",
        "from": 4130,
        "to": 4137,
        "amount": 8,
        "formatted_address": "Av. Ovidio Lagos 1502, S2000QLV Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.951842,
            "lng": -60.664036
        }
    },
    {
        "name": "E.P.I.N°1048 DANTE ALIGHIERI",
        "dir": "ALVEAR 1147",
        "from": 4138,
        "to": 4145,
        "amount": 8,
        "formatted_address": "Alvear 1147, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9479224,
            "lng": -60.6556857
        }
    },
    {
        "name": "E.E.T.P.N°625 C.GUIDO Y SPANO",
        "dir": "CORDOBA 2635",
        "from": 4146,
        "to": 4150,
        "amount": 5,
        "formatted_address": "Córdoba 2635, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9427669,
            "lng": -60.659333
        }
    },
    {
        "name": "ESC.PRIM.N°83 JUAN ARZENO",
        "dir": "O.LAGOS 1064",
        "from": 4151,
        "to": 4156,
        "amount": 6,
        "formatted_address": "Av. Ovidio Lagos 1064, S2000QLQ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.945551,
            "lng": -60.66238209999999
        }
    },
    {
        "name": "E.P.I.N°1371 COLEGIO DEL SOL",
        "dir": "AV.FRANCIA 1049",
        "from": 4157,
        "to": 4162,
        "amount": 6,
        "formatted_address": "Av. Francia 1049, S2002QRC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.944777,
            "lng": -60.666178
        }
    },
    {
        "name": "ESC.PRIM.N°98 DR.E.ZEBALLOS",
        "dir": "SAN JUAN 3652",
        "from": 4163,
        "to": 4170,
        "amount": 8,
        "formatted_address": "San Juan 3652, S2002OVJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9439009,
            "lng": -60.67394899999999
        }
    },
    {
        "name": "ESC.PRIM.N°90 F.D.ROOSEVELT",
        "dir": "CORDOBA 3845",
        "from": 4171,
        "to": 4177,
        "amount": 7,
        "formatted_address": "Córdoba 3845, S2002LAG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.939861,
            "lng": -60.6758089
        }
    },
    {
        "name": "ESC.PRIM.N°115 PCIA.DE SALTA",
        "dir": "SAN NICOLAS 1571",
        "from": 4178,
        "to": 4184,
        "amount": 7,
        "formatted_address": "San Nicolás 1571, S2002QYO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9497105,
            "lng": -60.67472710000001
        }
    },
    {
        "name": "E.P.I.N°1070 SAN M.ARCANGEL",
        "dir": "SAN NICOLAS 1455",
        "from": 4185,
        "to": 4192,
        "amount": 8,
        "formatted_address": "San Nicolás 1455, S2002QYM Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9482781,
            "lng": -60.6742655
        }
    },
    {
        "name": "ESC.PRIM.N°67 J.E.PESTALOZZI",
        "dir": "MENDOZA 3969",
        "from": 4193,
        "to": 4200,
        "amount": 8,
        "formatted_address": "Mendoza 3969, S2002PCO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.944764,
            "lng": -60.678392
        }
    },
    {
        "name": "EESOPI.3102 EDMONDO DE AMICIS",
        "dir": "SANTIAGO 1141",
        "from": 4201,
        "to": 4203,
        "amount": 3,
        "formatted_address": "Santiago 1141, S2000QHG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.947617,
            "lng": -60.6570046
        }
    },
    {
        "name": "ESC.PRIM.N°109 JUAN CHASSAING",
        "dir": "SUCRE 1457",
        "from": 4204,
        "to": 4210,
        "amount": 7,
        "formatted_address": "Sucre 1457, S2002 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9451183,
            "lng": -60.692002
        }
    },
    {
        "name": "ESC.PRIM.N°525 DR.JOSE C.PAZ",
        "dir": "RIOJA 4138",
        "from": 4211,
        "to": 4217,
        "amount": 7,
        "formatted_address": "Rioja 4138, S2002 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9399706,
            "lng": -60.680002
        }
    },
    {
        "name": "E.P.I.N°1016 SAN FCO.SOLANO",
        "dir": "RIO DE JANEIRO 1241",
        "from": 4218,
        "to": 4225,
        "amount": 8,
        "formatted_address": "Rio de Janeiro 1241, S2002 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.944536,
            "lng": -60.68181
        }
    },
    {
        "name": "ESC.PRIM.N°150 CRISTOBAL COLON",
        "dir": "P.ROSAS 866",
        "from": 4226,
        "to": 4233,
        "amount": 8,
        "formatted_address": "Pascual Rosas 866, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9384494,
            "lng": -60.6861853
        }
    },
    {
        "name": "E.E.S.O.Nº542",
        "dir": "SUCRE 1457",
        "from": 4234,
        "to": 4237,
        "amount": 4,
        "formatted_address": "Sucre 1457, S2002 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9451183,
            "lng": -60.692002
        }
    },
    {
        "name": "ESC.PRIM.N°56 ALMAFUERTE",
        "dir": "SALTA 2558",
        "from": 4238,
        "to": 4242,
        "amount": 5,
        "formatted_address": "Salta 2558, S2000JKQ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9359105,
            "lng": -60.656169
        }
    },
    {
        "name": "EPI.1117 N.S.D.LA MISERICORDIA",
        "dir": "SUIPACHA 450",
        "from": 4243,
        "to": 4247,
        "amount": 5,
        "formatted_address": "Suipacha 450, S2002LRJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.93765,
            "lng": -60.66332000000001
        }
    },
    {
        "name": "FAC.CS.BIOQ.Y FARMACEUTICAS",
        "dir": "SUIPACHA 531",
        "from": 4248,
        "to": 4254,
        "amount": 7,
        "formatted_address": "Suipacha 531, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9388004,
            "lng": -60.66298939999999
        }
    },
    {
        "name": "E.E.T.P.464 ING.Y DR.M.B.BAHIA",
        "dir": "TUCUMAN 2483",
        "from": 4255,
        "to": 4261,
        "amount": 7,
        "formatted_address": "Tucumán 2483, S2000JVE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9385012,
            "lng": -60.6558789
        }
    },
    {
        "name": "FACULTAD DE CIENCIAS MEDICAS",
        "dir": "SANTA FE 3100",
        "from": 4262,
        "to": 4266,
        "amount": 5,
        "formatted_address": "Sta Fe 3100, S2002 KTT, Santa Fe, Argentina",
        "location": {
            "lat": -32.940029,
            "lng": -60.66517
        }
    },
    {
        "name": "ESC.PRIM.N°71 F.DE GURRUCHAGA",
        "dir": "CRESPO 220",
        "from": 4267,
        "to": 4271,
        "amount": 5,
        "formatted_address": "Crespo 220, S2002LXF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.934381,
            "lng": -60.66731999999999
        }
    },
    {
        "name": "E.E.S.O.N°406 DR.S.MAZZA",
        "dir": "SALTA 2560",
        "from": 4272,
        "to": 4278,
        "amount": 7,
        "formatted_address": "Salta 2560, S2000JKQ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.93574020000001,
            "lng": -60.65648939999999
        }
    },
    {
        "name": "ESC.PRIM.N°77 P.GOYENA",
        "dir": "TUCUMAN 3445",
        "from": 4279,
        "to": 4286,
        "amount": 8,
        "formatted_address": "Tucumán 3445, S2002JWE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9361458,
            "lng": -60.66914739999999
        }
    },
    {
        "name": "E.E.T.PROF.N°471 R.RIVAROLA",
        "dir": "JUNIN 641",
        "from": 4287,
        "to": 4291,
        "amount": 5,
        "formatted_address": "Junín 641, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9265433,
            "lng": -60.6728147
        }
    },
    {
        "name": "ESC.PRIM.N°72 DR.J.B.JUSTO",
        "dir": "VELEZ SARSFIELD 439",
        "from": 4292,
        "to": 4297,
        "amount": 6,
        "formatted_address": "Vélez Sársfield 439, S2013CYG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9248429,
            "lng": -60.669886
        }
    },
    {
        "name": "E.P.I.N°8087 N.S.DE GUADALUPE",
        "dir": "AV.ALBERDI 338",
        "from": 4298,
        "to": 4302,
        "amount": 5,
        "formatted_address": "Av. Alberdi 338, S2013 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.924395,
            "lng": -60.67810009999999
        }
    },
    {
        "name": "ESC.PRIM.N°70 J.J.CASTELLI",
        "dir": "AV.AVELLANEDA 193 BIS",
        "from": 4303,
        "to": 4309,
        "amount": 7,
        "formatted_address": "Bv. Avellaneda 193, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9299577,
            "lng": -60.6767106
        }
    },
    {
        "name": "ESC.PRIM.N°6055 S.DE IRIONDO",
        "dir": "SUIZA 220",
        "from": 4310,
        "to": 4316,
        "amount": 7,
        "formatted_address": "Suiza 220, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9276818,
            "lng": -60.6875922
        }
    },
    {
        "name": "E.P.I.N°1232 SANTO D.SAVIO",
        "dir": "DON BOSCO 50",
        "from": 4317,
        "to": 4322,
        "amount": 6,
        "formatted_address": "Don Bosco 50, S2013FWB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.928702,
            "lng": -60.67971699999999
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3072 STO.D.SAVIO",
        "dir": "DON BOSCO 10",
        "from": 4323,
        "to": 4327,
        "amount": 5,
        "formatted_address": "Don Bosco 10, S2013FWB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.929092,
            "lng": -60.679818
        }
    },
    {
        "name": "E.E.S.O.N°412 MARIANO MORENO",
        "dir": "ASURMENDI 545",
        "from": 4328,
        "to": 4333,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.S.O.N°412 MARIANO MORENO",
        "dir": "ASURMENDI 545",
        "from": 4328,
        "to": 4333,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.S.O.N°412 MARIANO MORENO",
        "dir": "ASURMENDI 545",
        "from": 4328,
        "to": 4333,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.S.O.N°412 MARIANO MORENO",
        "dir": "ASURMENDI 545",
        "from": 4328,
        "to": 4333,
        "amount": 6,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.N°74 M.SAA PEREYRA DE ACEBAL",
        "dir": "MARIA SAA PEREYRA 715",
        "from": 4334,
        "to": 4341,
        "amount": 8,
        "formatted_address": "María Saá Pereyra 715, Acebal, Santa Fe, Argentina",
        "location": {
            "lat": -33.2419516,
            "lng": -60.8389063
        }
    },
    {
        "name": "ESC.PRIM.N°151 D.F.SARMIENTO",
        "dir": "BELGRANO 462",
        "from": 4342,
        "to": 4343,
        "amount": 2,
        "formatted_address": "Av. Belgrano 462, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9426782,
            "lng": -60.633999
        }
    },
    {
        "name": "ESC.PRIM.N°151 D.F.SARMIENTO",
        "dir": "BELGRANO 462",
        "from": 4342,
        "to": 4343,
        "amount": 2,
        "formatted_address": "Av. Belgrano 462, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9426782,
            "lng": -60.633999
        }
    },
    {
        "name": "ESC.PRIM.N°151 D.F.SARMIENTO",
        "dir": "BELGRANO 462",
        "from": 4342,
        "to": 4343,
        "amount": 2,
        "formatted_address": "Av. Belgrano 462, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9426782,
            "lng": -60.633999
        }
    },
    {
        "name": "ESC.PRIM.N°151 D.F.SARMIENTO",
        "dir": "BELGRANO 462",
        "from": 4342,
        "to": 4343,
        "amount": 2,
        "formatted_address": "Av. Belgrano 462, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9426782,
            "lng": -60.633999
        }
    },
    {
        "name": "ESC.PRIM.Nº235 PROV.LA RIOJA",
        "dir": "BELGRANO 546",
        "from": 4344,
        "to": 4344,
        "amount": 1,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.Nº235 PROV.LA RIOJA",
        "dir": "BELGRANO 546",
        "from": 4344,
        "to": 4344,
        "amount": 1,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.Nº235 PROV.LA RIOJA",
        "dir": "BELGRANO 546",
        "from": 4344,
        "to": 4344,
        "amount": 1,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.Nº235 PROV.LA RIOJA",
        "dir": "BELGRANO 546",
        "from": 4344,
        "to": 4344,
        "amount": 1,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°69 DR.G.CARRASCO",
        "dir": "PEDRO AGRELO 1798",
        "from": 4345,
        "to": 4352,
        "amount": 8,
        "formatted_address": "Agrelo 1798, S2005OPV Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8961089,
            "lng": -60.690344
        }
    },
    {
        "name": "E.P.I.N°1030 SAN F.DE ASIS",
        "dir": "AV.PUCCIO 527",
        "from": 4353,
        "to": 4360,
        "amount": 8,
        "formatted_address": "Av. Puccio 527, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8946568,
            "lng": -60.6903544
        }
    },
    {
        "name": "EPI.Nº1154 N.S.D.L.M.MILAGROSA",
        "dir": "PEDRO AGRELO 1970",
        "from": 4361,
        "to": 4367,
        "amount": 7,
        "formatted_address": "Agrelo 1970, S2005OPZ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.894217,
            "lng": -60.69090199999999
        }
    },
    {
        "name": "EPI.N°1199 NATIVIDAD DEL SEÑOR",
        "dir": "SCHIAVONI 2565",
        "from": 4368,
        "to": 4374,
        "amount": 7,
        "formatted_address": "Schiavoni 2565, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8906118,
            "lng": -60.71522890000001
        }
    },
    {
        "name": "ESC.PRIM.N°1229 1 DE MAYO",
        "dir": "MENA 2221",
        "from": 4375,
        "to": 4382,
        "amount": 8,
        "formatted_address": "Mena 2221, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8880777,
            "lng": -60.7122289
        }
    },
    {
        "name": "ESC.PRI.N°156 PCIA.DE SAN LUIS",
        "dir": "ZELAYA 2331",
        "from": 4383,
        "to": 4390,
        "amount": 8,
        "formatted_address": "Zelaya 2331, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.892068,
            "lng": -60.69699610000001
        }
    },
    {
        "name": "EPI.N°1223 EL BUEN SAMARITANO",
        "dir": "PERDRIEL 1741",
        "from": 4391,
        "to": 4398,
        "amount": 8,
        "formatted_address": "Perdriel 1741, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.894769,
            "lng": -60.7055483
        }
    },
    {
        "name": "ESC.PRIM.N°1254 TOMAS ESPORA",
        "dir": "SUPERI 2439",
        "from": 4399,
        "to": 4404,
        "amount": 6,
        "formatted_address": "Superí 2439, S2005DNY Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.897055,
            "lng": -60.71372599999999
        }
    },
    {
        "name": "E.E.T.PROF.N°342 LUIS PASTEUR",
        "dir": "SUPERI 2450",
        "from": 4405,
        "to": 4411,
        "amount": 7,
        "formatted_address": "Superí 2450, S2005DNZ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.896792,
            "lng": -60.71387
        }
    },
    {
        "name": "E.E.S.O.N°309 OVIDIO LAGOS",
        "dir": "PANIZZA 2100",
        "from": 4412,
        "to": 4416,
        "amount": 5,
        "formatted_address": "Panizza 2100, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.889075,
            "lng": -60.7109014
        }
    },
    {
        "name": "ESC.PRIM.N°1289 RIO PARANA",
        "dir": "TEJEDA 2650",
        "from": 4417,
        "to": 4424,
        "amount": 8,
        "formatted_address": "Tejeda 2650, S2005GRB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.887612,
            "lng": -60.716792
        }
    },
    {
        "name": "ESC.PRIM.N°1210 LUIS RULLAN",
        "dir": "PJE.ADRIAN 1940",
        "from": 4425,
        "to": 4432,
        "amount": 8,
        "formatted_address": "Pse Adrian 1950, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8972591,
            "lng": -60.70372820000001
        }
    },
    {
        "name": "E.P.I.Nº1388 E.ORTIZ GROGNET",
        "dir": "BV.RONDEAU 2770",
        "from": 4433,
        "to": 4436,
        "amount": 4,
        "formatted_address": "Bv. Rondeau 2770, S2005PBT Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8879002,
            "lng": -60.6940737
        }
    },
    {
        "name": "EPI.Nº1479 N.S.D.LA ESPERANZA",
        "dir": "FREYRE 2340",
        "from": 4437,
        "to": 4440,
        "amount": 4,
        "formatted_address": "Freyre 2340, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8956989,
            "lng": -60.7128416
        }
    },
    {
        "name": "EESOPI.Nº3037 NATIV.DEL SEÑOR",
        "dir": "CARCOVA 2460",
        "from": 4441,
        "to": 4444,
        "amount": 4,
        "formatted_address": "Carcova 2460, S2005JUL Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.890454,
            "lng": -60.715445
        }
    },
    {
        "name": "EETP.Nº683 GRAL.DR.P.ECHAGUE",
        "dir": "PANIZZA 2100",
        "from": 4445,
        "to": 4446,
        "amount": 2,
        "formatted_address": "Panizza 2100, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.889075,
            "lng": -60.7109014
        }
    },
    {
        "name": "ESC.N°1315 ITATI DE CORRIENTES",
        "dir": "REPUBLICA DE IRAK 1500",
        "from": 4447,
        "to": 4453,
        "amount": 7,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°613 OVIDIO LAGOS",
        "dir": "MARTIN FIERRO 361",
        "from": 4454,
        "to": 4461,
        "amount": 8,
        "formatted_address": "Martín Fierro 361, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.87682,
            "lng": -60.6911897
        }
    },
    {
        "name": "E.P.I.N°1262 SAN JOSE OBRERO",
        "dir": "DAVID PEÑA 615",
        "from": 4462,
        "to": 4469,
        "amount": 8,
        "formatted_address": "David Peña 615, S2005LSO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.878754,
            "lng": -60.694647
        }
    },
    {
        "name": "ESC.N°824 REP.O.DEL URUGUAY",
        "dir": "SALVAT 1150",
        "from": 4470,
        "to": 4477,
        "amount": 8,
        "formatted_address": "Salvat 1150, S2005BEJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.882166,
            "lng": -60.70005
        }
    },
    {
        "name": "ESC.N°6397 SAN J.DE CALASANZ",
        "dir": "BV.RONDEAU 3921",
        "from": 4478,
        "to": 4485,
        "amount": 8,
        "formatted_address": "Bv. Rondeau 3921, S2005PCF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8790393,
            "lng": -60.6975279
        }
    },
    {
        "name": "E.P.I.N°1185 SAN RAMON",
        "dir": "VUCETICH 617",
        "from": 4486,
        "to": 4493,
        "amount": 8,
        "formatted_address": "Vucetich 617, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8857206,
            "lng": -60.6929987
        }
    },
    {
        "name": "E.E.S.O.P.N°3086 SAN R.NONATO",
        "dir": "ALVAREZ THOMAS 3000",
        "from": 4494,
        "to": 4500,
        "amount": 7,
        "formatted_address": "Álvarez Thomas 3000, S2005OER Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8857069,
            "lng": -60.68928399999999
        }
    },
    {
        "name": "ESC.PRIM.N°1226 GESTA DE MAYO",
        "dir": "RAZZORI 3518",
        "from": 4501,
        "to": 4509,
        "amount": 9,
        "formatted_address": "Razzori 3518, S2005HSF Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8816993,
            "lng": -60.7320887
        }
    },
    {
        "name": "ESC.PRIM.N°133 20 DE JUNIO",
        "dir": "VIEYTES 2953",
        "from": 4510,
        "to": 4517,
        "amount": 8,
        "formatted_address": "Vieytes 2953, S2005BZG Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8880939,
            "lng": -60.72488
        }
    },
    {
        "name": "E.P.I.N°1357 C.E.NUEVA ALBERDI",
        "dir": "PAUNERO 3223",
        "from": 4518,
        "to": 4525,
        "amount": 8,
        "formatted_address": "Paunero 3223, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8855309,
            "lng": -60.72572539999999
        }
    },
    {
        "name": "E.E.S.O.Nº539 DR.J.A.BALSEIRO",
        "dir": "PAUNERO 2870",
        "from": 4526,
        "to": 4532,
        "amount": 7,
        "formatted_address": "Paunero 2870, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8887806,
            "lng": -60.7256631
        }
    },
    {
        "name": "ESCUELA PRIMARIA Nº1400",
        "dir": "ONCATIVO 2975",
        "from": 4533,
        "to": 4539,
        "amount": 7,
        "formatted_address": "Oncativo 2975, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.8805478,
            "lng": -60.72313339999999
        }
    },
    {
        "name": "ESC.PRIM.N°122 J.R.DE ALVAREZ",
        "dir": "BV.N.M.ALVAREZ 781",
        "from": 4540,
        "to": 4545,
        "amount": 6,
        "formatted_address": "Bv. N M Álvarez 781, Alvarez, Santa Fe, Argentina",
        "location": {
            "lat": -33.1293025,
            "lng": -60.8027264
        }
    },
    {
        "name": "ESC.PRIM.N°122 J.R.DE ALVAREZ",
        "dir": "BV.N.M.ALVAREZ 781",
        "from": 4540,
        "to": 4545,
        "amount": 6,
        "formatted_address": "Bv. N M Álvarez 781, Alvarez, Santa Fe, Argentina",
        "location": {
            "lat": -33.1293025,
            "lng": -60.8027264
        }
    },
    {
        "name": "ESC.PRIM.N°122 J.R.DE ALVAREZ",
        "dir": "BV.N.M.ALVAREZ 781",
        "from": 4540,
        "to": 4545,
        "amount": 6,
        "formatted_address": "Bv. N M Álvarez 781, Alvarez, Santa Fe, Argentina",
        "location": {
            "lat": -33.1293025,
            "lng": -60.8027264
        }
    },
    {
        "name": "ESC.PRIM.N°122 J.R.DE ALVAREZ",
        "dir": "BV.N.M.ALVAREZ 781",
        "from": 4540,
        "to": 4545,
        "amount": 6,
        "formatted_address": "Bv. N M Álvarez 781, Alvarez, Santa Fe, Argentina",
        "location": {
            "lat": -33.1293025,
            "lng": -60.8027264
        }
    },
    {
        "name": "E.E.S.O.N°413 JORGE NEWBERY",
        "dir": "BV.N.M.ALVAREZ 755",
        "from": 4546,
        "to": 4551,
        "amount": 6,
        "formatted_address": "Bv. N M Álvarez 755, Alvarez, Santa Fe, Argentina",
        "location": {
            "lat": -33.1293025,
            "lng": -60.8027264
        }
    },
    {
        "name": "E.P.I.N°1112 SANTA JUSTINA",
        "dir": "NECOCHEA 688",
        "from": 4552,
        "to": 4556,
        "amount": 5,
        "formatted_address": "Necochea 688, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9539631,
            "lng": -60.6255006
        }
    },
    {
        "name": "ESC.PRIM.N°148 B.MONTEAGUDO",
        "dir": "SARMIENTO 110",
        "from": 4557,
        "to": 4561,
        "amount": 5,
        "formatted_address": "Sarmiento 110, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395393,
            "lng": -60.6364418
        }
    },
    {
        "name": "ESC.PRIM.N°148 B.MONTEAGUDO",
        "dir": "SARMIENTO 110",
        "from": 4557,
        "to": 4561,
        "amount": 5,
        "formatted_address": "Sarmiento 110, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395393,
            "lng": -60.6364418
        }
    },
    {
        "name": "ESC.PRIM.N°148 B.MONTEAGUDO",
        "dir": "SARMIENTO 110",
        "from": 4557,
        "to": 4561,
        "amount": 5,
        "formatted_address": "Sarmiento 110, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395393,
            "lng": -60.6364418
        }
    },
    {
        "name": "ESC.PRIM.N°148 B.MONTEAGUDO",
        "dir": "SARMIENTO 110",
        "from": 4557,
        "to": 4561,
        "amount": 5,
        "formatted_address": "Sarmiento 110, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395393,
            "lng": -60.6364418
        }
    },
    {
        "name": "ESC.PRIM.N°107 9 DE JULIO",
        "dir": "AV.ALBERDI 942",
        "from": 4562,
        "to": 4569,
        "amount": 8,
        "formatted_address": "Av. Alberdi 942, S2013EOR Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9169474,
            "lng": -60.6840345
        }
    },
    {
        "name": "ESC.PRIM.N°116 S.DEL ESTERO",
        "dir": "AV.DE LOS TRABAJADORES 1129",
        "from": 4570,
        "to": 4577,
        "amount": 8,
        "formatted_address": "Av. de los Trabajadores 1129, S2013BKD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9125134,
            "lng": -60.6805391
        }
    },
    {
        "name": "ESC.PRI.N°614 REP.DE NICARAGUA",
        "dir": "R.DARIO 1441",
        "from": 4578,
        "to": 4584,
        "amount": 7,
        "formatted_address": "Rubén Dario 1441, S2013CJE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.921726,
            "lng": -60.68411500000001
        }
    },
    {
        "name": "E.E.T.PROF.N°638 M.M.DE CARLES",
        "dir": "FRENCH 739",
        "from": 4585,
        "to": 4589,
        "amount": 5,
        "formatted_address": "French 739, S2013CGI Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.920794,
            "lng": -60.67544400000001
        }
    },
    {
        "name": "ESC.TALLER N°3039 P.A.PIZZURNO",
        "dir": "RUBEN DARIO 1235",
        "from": 4590,
        "to": 4594,
        "amount": 5,
        "formatted_address": "Rubén Dario 1235, S2013CJC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9216238,
            "lng": -60.68134850000001
        }
    },
    {
        "name": "ESC.PRIM.N°86 J.M.ESTRADA",
        "dir": "PJE.J.M.ESTRADA 690",
        "from": 4595,
        "to": 4602,
        "amount": 8,
        "formatted_address": "Estrada 690, S2013 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9196268,
            "lng": -60.67702389999999
        }
    },
    {
        "name": "E.PRI.Nº1344 BILINGUE TAIGOYE",
        "dir": "AV.SABIN 1199 BIS",
        "from": 4603,
        "to": 4607,
        "amount": 5,
        "formatted_address": "Av. Sabin 1199, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9144125,
            "lng": -60.69215370000001
        }
    },
    {
        "name": "E.P.I.N°182 SAN LUIS GONZAGA",
        "dir": "CARRASCO 2545",
        "from": 4608,
        "to": 4616,
        "amount": 9,
        "formatted_address": "G. Carrasco 2545, S2007AQK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9207556,
            "lng": -60.7012096
        }
    },
    {
        "name": "ESC.PRIM.N°661 NICASIO OROÑO",
        "dir": "ALVAREZ JONTE 717 BIS",
        "from": 4617,
        "to": 4625,
        "amount": 9,
        "formatted_address": "Álvarez Jonte 717, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9193278,
            "lng": -60.6874944
        }
    },
    {
        "name": "ESC.PRIM.N°1319 J.ORTOLANI",
        "dir": "AV.GENOVA 3218",
        "from": 4626,
        "to": 4634,
        "amount": 9,
        "formatted_address": "Génova 3218, S2006 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9158881,
            "lng": -60.7081359
        }
    },
    {
        "name": "ESC.PRIM.N°456 DR.C.PELLEGRINI",
        "dir": "LA REPUBLICA 2550",
        "from": 4635,
        "to": 4643,
        "amount": 9,
        "formatted_address": "La República 2550, S2006 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9181876,
            "lng": -60.7010498
        }
    },
    {
        "name": "E.P.I.N°1197 PAULO VI",
        "dir": "MEJICO 1055 BIS",
        "from": 4644,
        "to": 4650,
        "amount": 7,
        "formatted_address": "México Bis 1055, S2006EJE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.916809,
            "lng": -60.71966099999999
        }
    },
    {
        "name": "E.E.T.P.N°660 L.F.DE OLAZABAL",
        "dir": "AV.GENOVA 6458",
        "from": 4651,
        "to": 4657,
        "amount": 7,
        "formatted_address": "Génova 6458, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9159839,
            "lng": -60.7108588
        }
    },
    {
        "name": "E.E.S.O.Nº251 DR.VICTOR B.CUE",
        "dir": "AV.GENOVA 6458",
        "from": 4658,
        "to": 4664,
        "amount": 7,
        "formatted_address": "Génova 6458, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9159839,
            "lng": -60.7108588
        }
    },
    {
        "name": "E.E.S.O.P.I.Nº3141 PAULO VI",
        "dir": "MEJICO 1055 BIS",
        "from": 4665,
        "to": 4670,
        "amount": 6,
        "formatted_address": "México Bis 1055, S2006EJE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.916809,
            "lng": -60.71966099999999
        }
    },
    {
        "name": "ESC.PRIM.N°73 DR.A.ALSINA",
        "dir": "M.MORENO 599",
        "from": 4671,
        "to": 4677,
        "amount": 7,
        "formatted_address": "Mariano Moreno 599, S2000DKK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9419146,
            "lng": -60.64998240000001
        }
    },
    {
        "name": "E.P.I.N°1068 SAN JOSE",
        "dir": "BELGRANO 634",
        "from": 4678,
        "to": 4684,
        "amount": 7,
        "formatted_address": "Av. Belgrano 634, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9449632,
            "lng": -60.6320859
        }
    },
    {
        "name": "ESC.PRIM.N°6036 B.RIVADAVIA",
        "dir": "JUAREZ CELMAN 1100",
        "from": 4685,
        "to": 4691,
        "amount": 7,
        "formatted_address": "Juárez Celman Bis 1100, S2006 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9171491,
            "lng": -60.7534371
        }
    },
    {
        "name": "E.E.S.O.N°415 J.B.ALBERDI",
        "dir": "ISLAS MALVINAS 255",
        "from": 4692,
        "to": 4698,
        "amount": 7,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.T.PROF.N°450 EJ.ARGENTINO",
        "dir": "GARAHAN Y CARDOZO",
        "from": 4699,
        "to": 4705,
        "amount": 7,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°247 M.M.DE GUEMES",
        "dir": "GALVEZ 350",
        "from": 4706,
        "to": 4712,
        "amount": 7,
        "formatted_address": "Galvez 350, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9705814,
            "lng": -60.6331684
        }
    },
    {
        "name": "ESC.PRIM.N°247 M.M.DE GUEMES",
        "dir": "GALVEZ 350",
        "from": 4706,
        "to": 4712,
        "amount": 7,
        "formatted_address": "Galvez 350, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9705814,
            "lng": -60.6331684
        }
    },
    {
        "name": "ESC.PRIM.N°247 M.M.DE GUEMES",
        "dir": "GALVEZ 350",
        "from": 4706,
        "to": 4712,
        "amount": 7,
        "formatted_address": "Galvez 350, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9705814,
            "lng": -60.6331684
        }
    },
    {
        "name": "ESC.PRIM.N°247 M.M.DE GUEMES",
        "dir": "GALVEZ 350",
        "from": 4706,
        "to": 4712,
        "amount": 7,
        "formatted_address": "Galvez 350, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9705814,
            "lng": -60.6331684
        }
    },
    {
        "name": "E.P.I.N°1191 SANTA LUCIA",
        "dir": "MORENO 517",
        "from": 4713,
        "to": 4719,
        "amount": 7,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "EESOPI.Nº8097 SANTA M.GORETTI",
        "dir": "9 DE JULIO 45",
        "from": 4720,
        "to": 4725,
        "amount": 6,
        "formatted_address": "9 de Julio 45, S2000BNA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.956537,
            "lng": -60.62538559999999
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3007 FIGHIERA",
        "dir": "AMEGHINO 606",
        "from": 4726,
        "to": 4731,
        "amount": 6,
        "formatted_address": "Ameghino 606, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9882448,
            "lng": -60.6416072
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3007 FIGHIERA",
        "dir": "AMEGHINO 606",
        "from": 4726,
        "to": 4731,
        "amount": 6,
        "formatted_address": "Ameghino 606, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9882448,
            "lng": -60.6416072
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3007 FIGHIERA",
        "dir": "AMEGHINO 606",
        "from": 4726,
        "to": 4731,
        "amount": 6,
        "formatted_address": "Ameghino 606, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9882448,
            "lng": -60.6416072
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3007 FIGHIERA",
        "dir": "AMEGHINO 606",
        "from": 4726,
        "to": 4731,
        "amount": 6,
        "formatted_address": "Ameghino 606, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9882448,
            "lng": -60.6416072
        }
    },
    {
        "name": "ESC.PRIM.N°6086 E.LOPEZ",
        "dir": "J.DE GARAY 386",
        "from": 4732,
        "to": 4738,
        "amount": 7,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "ESC.PRIM.N°528 DR.C.J.OMNES",
        "dir": "M.PAZ 6330",
        "from": 4739,
        "to": 4746,
        "amount": 8,
        "formatted_address": "Marcos Paz 6330, S2008BKH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9388329,
            "lng": -60.7084829
        }
    },
    {
        "name": "ESC.PRIM.N°565 BARTOLOME MITRE",
        "dir": "MENDOZA 7310",
        "from": 4747,
        "to": 4755,
        "amount": 9,
        "formatted_address": "Mendoza 7310, S2008 BRZ, Santa Fe, Argentina",
        "location": {
            "lat": -32.9403866,
            "lng": -60.71970899999999
        }
    },
    {
        "name": "ESC.PRI.N°616 REP.DE VENEZUELA",
        "dir": "P.L.FUNES 1274",
        "from": 4756,
        "to": 4764,
        "amount": 9,
        "formatted_address": "Pedro Lino Funes 1274, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9429929,
            "lng": -60.70114169999999
        }
    },
    {
        "name": "ESC.PRIM.N°773 P.A.PIZZURNO",
        "dir": "RIOBAMBA 5125",
        "from": 4765,
        "to": 4773,
        "amount": 9,
        "formatted_address": "Riobamba 5125, S2009ARC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9541094,
            "lng": -60.69351089999999
        }
    },
    {
        "name": "ESC.PRIM.N°6383 BRIG.G.E.LOPEZ",
        "dir": "MONTEVIDEO 6720",
        "from": 4774,
        "to": 4782,
        "amount": 9,
        "formatted_address": "Montevideo 6720, S2008DQJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.94733,
            "lng": -60.71284499999999
        }
    },
    {
        "name": "ESC.ESP.N°2050 T.DE CALCUTA",
        "dir": "FRAGA 1650",
        "from": 4783,
        "to": 4786,
        "amount": 4,
        "formatted_address": "Fraga 1650, S2008IGB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9479546,
            "lng": -60.709937
        }
    },
    {
        "name": "E.P.I.N°1113 LA INMAC.CONCEP.",
        "dir": "PJE.PETTINARI 6708",
        "from": 4787,
        "to": 4795,
        "amount": 9,
        "formatted_address": "Pettinari 6708, S2008BMD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395169,
            "lng": -60.712979
        }
    },
    {
        "name": "ESC.PRIM.N°63 ALTE.G.BROWN",
        "dir": "COCHABAMBA 5520",
        "from": 4796,
        "to": 4804,
        "amount": 9,
        "formatted_address": "Cochabamba 5520, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9494447,
            "lng": -60.6984421
        }
    },
    {
        "name": "ESC.PRIM.91 REP.FED.DEL BRASIL",
        "dir": "AV.PCIAS.UNIDAS 1196\"",
        "from": 4805,
        "to": 4812,
        "amount": 8,
        "formatted_address": "Av. Provincias Unidas 1196, S2008IRN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.941075,
            "lng": -60.712911
        }
    },
    {
        "name": "ESC.PRIM.N°112 LUIS CALDERON",
        "dir": "RIOJA 5177",
        "from": 4813,
        "to": 4820,
        "amount": 8,
        "formatted_address": "Rioja 5177, S2008BCA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.937855,
            "lng": -60.694655
        }
    },
    {
        "name": "ESC.PRIM.N°120 J.M.RONDEAU",
        "dir": "SAN LUIS 5506",
        "from": 4821,
        "to": 4826,
        "amount": 6,
        "formatted_address": "San Luis 5506, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9394148,
            "lng": -60.69868990000001
        }
    },
    {
        "name": "ESC.PRIM.800 PROF.J.ARGUELLES",
        "dir": "PAMPA 6549",
        "from": 4827,
        "to": 4833,
        "amount": 7,
        "formatted_address": "Pampa 6549, S2008DMU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.94678800000001,
            "lng": -60.71057399999999
        }
    },
    {
        "name": "ESC.PRIM.N°1080 G.MISTRAL",
        "dir": "SAN LORENZO(Y WILDE) 8854",
        "from": 4834,
        "to": 4842,
        "amount": 9,
        "formatted_address": "San Lorenzo & Blvd. Wilde, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9352406,
            "lng": -60.73863159999999
        }
    },
    {
        "name": "EPI.N°1183 NTRA.SRA.DE POMPEYA",
        "dir": "SAN JUAN 5247",
        "from": 4843,
        "to": 4849,
        "amount": 7,
        "formatted_address": "San Juan 5247, S2008BOE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9407353,
            "lng": -60.69530819999999
        }
    },
    {
        "name": "E.P.I.N°1187 SAN A.DE PADUA",
        "dir": "PROVINCIAS UNIDAS 948",
        "from": 4850,
        "to": 4857,
        "amount": 8,
        "formatted_address": "Av. Provincias Unidas 948, S2008IQS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9386719,
            "lng": -60.713101
        }
    },
    {
        "name": "EESOPI.Nº8064 LA INMAC.CONCEP.",
        "dir": "PJE.PETTINARI 6708",
        "from": 4858,
        "to": 4866,
        "amount": 9,
        "formatted_address": "Pettinari 6708, S2008BMD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9395169,
            "lng": -60.712979
        }
    },
    {
        "name": "E.E.T.P.N°663 P.A.DE SARMIENTO",
        "dir": "FELIPE MORE 1221",
        "from": 4867,
        "to": 4871,
        "amount": 5,
        "formatted_address": "Felipe Moré 1221, S2002 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9421841,
            "lng": -60.693583
        }
    },
    {
        "name": "ESC.PRIM.N°1357 DR.E.MARADONA",
        "dir": "WHITE(Y DONADO) 7665",
        "from": 4872,
        "to": 4879,
        "amount": 8,
        "formatted_address": "Donado 7665, S2006 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9093893,
            "lng": -60.7284519
        }
    },
    {
        "name": "ESC.PRIM.N°1263 J.V.GONZALEZ",
        "dir": "DERQUI 7581",
        "from": 4880,
        "to": 4888,
        "amount": 9,
        "formatted_address": "Derqui 7581, S2008BFA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.938795,
            "lng": -60.725054
        }
    },
    {
        "name": "ESC.PRIM.1323 REG.DE CALABRIA",
        "dir": "PERU 2050",
        "from": 4889,
        "to": 4895,
        "amount": 7,
        "formatted_address": "Perú 2050, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9527514,
            "lng": -60.7108858
        }
    },
    {
        "name": "E.E.S.O.N°347 ANGEL GUIDO",
        "dir": "DONADO 1253",
        "from": 4896,
        "to": 4903,
        "amount": 8,
        "formatted_address": "Donado 1253, S2008LCU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.943318,
            "lng": -60.726734
        }
    },
    {
        "name": "EPI.N°1190 NTRA.SA.DE LA ROCCA",
        "dir": "C.ALDAO 2051",
        "from": 4904,
        "to": 4911,
        "amount": 8,
        "formatted_address": "Camilo Aldao 2051, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9528072,
            "lng": -60.6953282
        }
    },
    {
        "name": "E.P.I.N°1449 J.DIAZ DE SOLIS",
        "dir": "SOLIS 1157B(NO BIS)",
        "from": 4912,
        "to": 4915,
        "amount": 4,
        "formatted_address": "Solís 1157, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9417685,
            "lng": -60.7032071
        }
    },
    {
        "name": "EESOPI.Nº3168 SMA.TRINIDAD",
        "dir": "DONADO 1309",
        "from": 4916,
        "to": 4919,
        "amount": 4,
        "formatted_address": "Donado 1309, S2006 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9133664,
            "lng": -60.7283479
        }
    },
    {
        "name": "E.P.I.Nº1229 JESUS OBRERO",
        "dir": "PASCO 7201",
        "from": 4920,
        "to": 4924,
        "amount": 5,
        "formatted_address": "Pasco 7201, S2009ACS Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9511995,
            "lng": -60.71819300000001
        }
    },
    {
        "name": "E.E.S.O.P.I.Nº3066 SAN PABLO",
        "dir": "BOLIVIA 2049",
        "from": 4925,
        "to": 4929,
        "amount": 5,
        "formatted_address": "Bolivia 2049, S2009EHA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.952969,
            "lng": -60.7132459
        }
    },
    {
        "name": "ESC.PRIM.Nº1358 MACACHA GUEMES",
        "dir": "CERRITO 5651",
        "from": 4930,
        "to": 4934,
        "amount": 5,
        "formatted_address": "Cerrito 5651, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9530848,
            "lng": -60.7001394
        }
    },
    {
        "name": "ESC.PRIM.Nº1396 BO.SANTA LUCIA",
        "dir": "RIOBAMBA 7674",
        "from": 4935,
        "to": 4935,
        "amount": 1,
        "formatted_address": "Riobamba 7674, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9547488,
            "lng": -60.72103689999999
        }
    },
    {
        "name": "ESC.PRIM.N°6018 DR.V.E.MONTES",
        "dir": "LARRALDE 3305",
        "from": 4936,
        "to": 4943,
        "amount": 8,
        "formatted_address": "Larralde 3305, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9679606,
            "lng": -60.7259439
        }
    },
    {
        "name": "ESC.PRIM.N°6394 M.J.THOMPSON",
        "dir": "AV.J.D.PERON 5470",
        "from": 4944,
        "to": 4949,
        "amount": 6,
        "formatted_address": "Av. Juan Domingo Perón 5470, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "ESC.PRIM.N°816 DR.R.RIVAROLA",
        "dir": "CULLEN 2910",
        "from": 4950,
        "to": 4957,
        "amount": 8,
        "formatted_address": "Cullen 2910, S2009DWD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9628321,
            "lng": -60.7082145
        }
    },
    {
        "name": "E.P.I.N°1119 SOR M.J.ROSELLO",
        "dir": "J.L.FERRAROTTI 3117",
        "from": 4958,
        "to": 4965,
        "amount": 8,
        "formatted_address": "Ferrarotti 3117, S2009ETC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9654589,
            "lng": -60.717825
        }
    },
    {
        "name": "E.P.I.N°1317 G.GARIBALDI",
        "dir": "ROUILLON 2513",
        "from": 4966,
        "to": 4971,
        "amount": 6,
        "formatted_address": "Rouillón 2513, S2009DKO Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9580982,
            "lng": -60.7014101
        }
    },
    {
        "name": "E.P.I.N°1451 NVA.E.C.NAMUNCURA",
        "dir": "AV.PTE.PERON 5038",
        "from": 4972,
        "to": 4978,
        "amount": 7,
        "formatted_address": "Av. Pres. Perón 5038, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9584169,
            "lng": -60.6924499
        }
    },
    {
        "name": "E.E.T.P.N°346 J.A.DE ARENALES",
        "dir": "DEAN FUNES 7815",
        "from": 4979,
        "to": 4985,
        "amount": 7,
        "formatted_address": "Dean Funes 7815, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9679105,
            "lng": -60.7259799
        }
    },
    {
        "name": "ESC.PRIM.Nº1314 V.O.COSSETTINI",
        "dir": "NICARAGUA 2400",
        "from": 4986,
        "to": 4992,
        "amount": 7,
        "formatted_address": "Calle Nicaragua 2400, S2009EZB Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.957242,
            "lng": -60.72006500000001
        }
    },
    {
        "name": "E.E.S.O.Nº513 RUBEN NARANJO",
        "dir": "AV.J.D.PERON 5470",
        "from": 4993,
        "to": 4997,
        "amount": 5,
        "formatted_address": "Av. Juan Domingo Perón 5470, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "E.P.I.N°1417 SAN PABLO",
        "dir": "AV.URIBURU 98",
        "from": 4998,
        "to": 5003,
        "amount": 6,
        "formatted_address": "Av. Uriburu 98, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9902051,
            "lng": -60.63169
        }
    },
    {
        "name": "EESO.N°649 LDOR.GRAL.S.MARTIN",
        "dir": "AYACUCHO 5517",
        "from": 5004,
        "to": 5007,
        "amount": 4,
        "formatted_address": "Ayacucho 5517, S2011IHE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0007288,
            "lng": -60.6361839
        }
    },
    {
        "name": "ESC.PRIM.N°128 CONG.DE TUCUMAN",
        "dir": "BUENOS AIRES 6025",
        "from": 5008,
        "to": 5016,
        "amount": 9,
        "formatted_address": "Buenos Aires 6025, S2011JEJ Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0064611,
            "lng": -60.64476440000001
        }
    },
    {
        "name": "ESC.PRIM.N°66 GRAL.LAS HERAS",
        "dir": "BUENOS AIRES 4800",
        "from": 5017,
        "to": 5025,
        "amount": 9,
        "formatted_address": "Buenos Aires 4800, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9934988,
            "lng": -60.64434349999999
        }
    },
    {
        "name": "ESC.PRIM.N°1090 DOMINGO MATHEU",
        "dir": "BUENOS AIRES 6390",
        "from": 5026,
        "to": 5034,
        "amount": 9,
        "formatted_address": "Buenos Aires 6390, S2011JFN Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0113119,
            "lng": -60.6445416
        }
    },
    {
        "name": "E.P.I.N°1047 SANTISIMO ROSARIO",
        "dir": "AV.ARIJON 423",
        "from": 5035,
        "to": 5042,
        "amount": 8,
        "formatted_address": "Av. Arijon 423, S2011BYE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0028101,
            "lng": -60.63847459999999
        }
    },
    {
        "name": "ESC.PRIM.N°526 PCIA.DE CORDOBA",
        "dir": "SANCHEZ DE BUSTAMANTE 83 BI",
        "from": 5043,
        "to": 5051,
        "amount": 9,
        "formatted_address": "Sánchez de Bustamante 83, S2011BRA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0015308,
            "lng": -60.6314459
        }
    },
    {
        "name": "ESC.PRIM.1280 SOLD.DE MALVINAS",
        "dir": "LAMADRID 130 BIS",
        "from": 5052,
        "to": 5060,
        "amount": 9,
        "formatted_address": "Lamadrid 130, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9966042,
            "lng": -60.6327843
        }
    },
    {
        "name": "ESC.PRIM.N°92 A.DEL VALLE",
        "dir": "PJE.ZINNI 5349",
        "from": 5061,
        "to": 5069,
        "amount": 9,
        "formatted_address": "Zinni, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9163151,
            "lng": -60.7642101
        }
    },
    {
        "name": "ESC.PRIM.N°775 VICTOR MERCANTE",
        "dir": "AV.DEL ROSARIO 461",
        "from": 5070,
        "to": 5078,
        "amount": 9,
        "formatted_address": "Av. Ntra Sra del Rosario 461, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9979024,
            "lng": -60.6206754
        }
    },
    {
        "name": "ESC.PRIM.N°1078 JOHN F.KENNEDY",
        "dir": "ABDO.GRANDOLI Y GUTIERREZ",
        "from": 5079,
        "to": 5087,
        "amount": 9,
        "formatted_address": "Av. Abanderado Grandoli & Juan María Gutiérrez, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9933958,
            "lng": -60.6286735
        }
    },
    {
        "name": "E.E.S.O.N°435 DR.LUIS M.DRAGO",
        "dir": "BUENOS AIRES 5318",
        "from": 5088,
        "to": 5096,
        "amount": 9,
        "formatted_address": "Buenos Aires 5318, S2011JEP Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.998957,
            "lng": -60.645236
        }
    },
    {
        "name": "EPI.N°1153 NTRA.S.DE LA MERCED",
        "dir": "REGIMIENTO 11 Nº 73",
        "from": 5097,
        "to": 5105,
        "amount": 9,
        "formatted_address": "Regimiento 11 73, S2011AKC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.998371,
            "lng": -60.631382
        }
    },
    {
        "name": "EETP.Nº393 5 DE.A.CDAD.ROSARIO",
        "dir": "LAMADRID 130 BIS",
        "from": 5106,
        "to": 5112,
        "amount": 7,
        "formatted_address": "Lamadrid 130, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9966042,
            "lng": -60.6327843
        }
    },
    {
        "name": "EESOPI.3047 NRA.S.DE LA MERCED",
        "dir": "SERRANO 5349",
        "from": 5113,
        "to": 5116,
        "amount": 4,
        "formatted_address": "Serrano 5349, S2011IDE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9988502,
            "lng": -60.63183230000001
        }
    },
    {
        "name": "E.E.S.O.P.I.N°3064 COL.DEL SUR",
        "dir": "REGIMIENTO 11 N° 1123",
        "from": 5117,
        "to": 5124,
        "amount": 8,
        "formatted_address": "Regimiento 11 1123, S2011ALA Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.998913,
            "lng": -60.649175
        }
    },
    {
        "name": "ESC.PRIM.N°1279 BRIG.E.LOPEZ",
        "dir": "LAPRIDA(BO.FONAVI) 6360",
        "from": 5125,
        "to": 5133,
        "amount": 9,
        "formatted_address": "Laprida, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9791868,
            "lng": -60.6423161
        }
    },
    {
        "name": "E.P.I.N°1220 SAN M.DE PORRES",
        "dir": "CTDA.LEON 960",
        "from": 5134,
        "to": 5138,
        "amount": 5,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.S.O.N°436 JUAN MANTOVANI",
        "dir": "AV.URIBURU 549",
        "from": 5139,
        "to": 5142,
        "amount": 4,
        "formatted_address": "Av. Uriburu 549, S2001CEK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.990801,
            "lng": -60.64109699999999
        }
    },
    {
        "name": "E.P.I.Nº1365 AMANECE",
        "dir": "PJE.CUCHA CUCHA 4949",
        "from": 5143,
        "to": 5146,
        "amount": 4,
        "formatted_address": "Cucha Cucha 4949, S2001FJC Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.994842,
            "lng": -60.630613
        }
    },
    {
        "name": "E.P.I.Nº1468 VIDA",
        "dir": "ANCHORENA 154",
        "from": 5147,
        "to": 5149,
        "amount": 3,
        "formatted_address": "Anchorena 154, S2011ABD Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9972143,
            "lng": -60.63322050000001
        }
    },
    {
        "name": "ESC.PRIM.N°93 C.GUIDO Y SPANO",
        "dir": "PJE.PARKER 2493",
        "from": 5150,
        "to": 5159,
        "amount": 10,
        "formatted_address": "Pje. Este, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0134128,
            "lng": -60.6526057
        }
    },
    {
        "name": "E.P.I.N°1212 NTRA.SRA.DE LUJAN",
        "dir": "AV.PTE.J.D.PERON 3320",
        "from": 5160,
        "to": 5167,
        "amount": 8,
        "formatted_address": "Av. Juan Domingo Perón 3320, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "E.P.I.N°1115 SAN JOSE",
        "dir": "CAFFERATA 2680",
        "from": 5168,
        "to": 5177,
        "amount": 10,
        "formatted_address": "Cafferata 2680, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.96269,
            "lng": -60.67666469999999
        }
    },
    {
        "name": "ESC.N°119 CNEL.ORTIZ DE OCAMPO",
        "dir": "CONSTITUCION 2040",
        "from": 5178,
        "to": 5184,
        "amount": 7,
        "formatted_address": "Constitución 2040, S2003IQH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.954749,
            "lng": -60.677561
        }
    },
    {
        "name": "ESC.PRIM.N°609 FLORIANO ZAPATA",
        "dir": "AV.PTE.J.D.PERON 3890",
        "from": 5185,
        "to": 5191,
        "amount": 7,
        "formatted_address": "Av. Juan Domingo Perón 3890, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "JARDIN DE INF.N°41 D.DABAT",
        "dir": "GUTENBERG 2157",
        "from": 5192,
        "to": 5196,
        "amount": 5,
        "formatted_address": "Gutenberg 2157, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9539259,
            "lng": -60.69141070000001
        }
    },
    {
        "name": "ESC.ESP.N°1241 E.T.N.A.D.E.",
        "dir": "PASCO 3737",
        "from": 5197,
        "to": 5200,
        "amount": 4,
        "formatted_address": "Pasco 3737, S2000FVK Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.953196,
            "lng": -60.67758799999999
        }
    },
    {
        "name": "E.E.S.O.P.I.N°8066 ZONA PARQUE",
        "dir": "CONSTITUCION 1937",
        "from": 5201,
        "to": 5208,
        "amount": 8,
        "formatted_address": "Constitución 1937, S2003IQE Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9537569,
            "lng": -60.67706899999999
        }
    },
    {
        "name": "E.P.I.N°1422 M.CHAMPAGNAT",
        "dir": "RUEDA 4500",
        "from": 5209,
        "to": 5216,
        "amount": 8,
        "formatted_address": "Rueda 4500, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9627807,
            "lng": -60.69000829999999
        }
    },
    {
        "name": "E.E.T.P.Nº685 NTRA.SA.DE LUJAN",
        "dir": "AV.PTE.J.D.PERON 3890",
        "from": 5217,
        "to": 5222,
        "amount": 6,
        "formatted_address": "Av. Juan Domingo Perón 3890, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "EESOPI.3142 NTRA.SRA.DE LUJAN",
        "dir": "AV.PTE.J.D.PERON 3320",
        "from": 5223,
        "to": 5227,
        "amount": 5,
        "formatted_address": "Av. Juan Domingo Perón 3320, S2124IWN Villa Gdor. Galvez, Santa Fe, Argentina",
        "location": {
            "lat": -33.0324329,
            "lng": -60.6324275
        }
    },
    {
        "name": "ESC.PRIM.NOCT.Nº33 F.VARELA",
        "dir": "CONSTITUCION 2040",
        "from": 5228,
        "to": 5232,
        "amount": 5,
        "formatted_address": "Constitución 2040, S2003IQH Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.954749,
            "lng": -60.677561
        }
    },
    {
        "name": "ESC.ESPECIAL N°2067",
        "dir": "O.LAGOS 4250",
        "from": 5233,
        "to": 5235,
        "amount": 3,
        "formatted_address": "Av. Ovidio Lagos 4250, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9825781,
            "lng": -60.67141909999999
        }
    },
    {
        "name": "ESC.PRIM.N°1102 SGTO.CABRAL",
        "dir": "CNO.VIEJO A SOLDINI 3023",
        "from": 5236,
        "to": 5244,
        "amount": 9,
        "formatted_address": "Camino Viejo A Soldini 3023, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0259057,
            "lng": -60.6811393
        }
    },
    {
        "name": "ESC.PRIM.N°1202 GEND.NACIONAL",
        "dir": "CONSTITUCION 3270",
        "from": 5245,
        "to": 5254,
        "amount": 10,
        "formatted_address": "Constitución 3270, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9689565,
            "lng": -60.68099849999999
        }
    },
    {
        "name": "ESC.PRIM.798 DR.V.A.ECHEVARRIA",
        "dir": "OVIDIO LAGOS 5806",
        "from": 5255,
        "to": 5262,
        "amount": 8,
        "formatted_address": "Av. Ovidio Lagos 5806, S2011MYU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0049159,
            "lng": -60.67664039999999
        }
    },
    {
        "name": "E.P.I.N°1194 STA.I.DE HUNGRIA",
        "dir": "CAFFERATA 4070",
        "from": 5263,
        "to": 5272,
        "amount": 10,
        "formatted_address": "Cafferata 4070, S2004 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9786075,
            "lng": -60.68065240000001
        }
    },
    {
        "name": "E.P.I.N°1195 S.T.D.NIÑO JESUS",
        "dir": "PJE.SAENZ 4555 E",
        "from": 5273,
        "to": 5281,
        "amount": 9,
        "formatted_address": "Sáenz 4555, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9797497,
            "lng": -60.6729602
        }
    },
    {
        "name": "ESC.PRIM.N°1337 DR.S.BEGNIS",
        "dir": "NAHUEL HUAPI 4506",
        "from": 5282,
        "to": 5290,
        "amount": 9,
        "formatted_address": "Nahuel Huapi 4506, S2004 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.984233,
            "lng": -60.6862077
        }
    },
    {
        "name": "EPI.Nº1334 M.M.D.LA C.DEL AMOR",
        "dir": "URUGUAY 4051",
        "from": 5291,
        "to": 5299,
        "amount": 9,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "EESOPI.Nº3105 STA.T.D.N.JESUS",
        "dir": "PJE.SAENZ 4925",
        "from": 5300,
        "to": 5308,
        "amount": 9,
        "formatted_address": "Sáenz 4925, S2004 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9801279,
            "lng": -60.6731538
        }
    },
    {
        "name": "ESC.PRIM.N°1367 RAUL DOMINGUEZ",
        "dir": "AV.NTRA.S.DEL ROSARIO 3655",
        "from": 5309,
        "to": 5317,
        "amount": 9,
        "formatted_address": "Av. Ntra Sra del Rosario 3655, S2012GMV Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0014148,
            "lng": -60.6859391
        }
    },
    {
        "name": "ESC.PRIM.N°1276 MARTHA SALOTTI",
        "dir": "QUINTA BISELLI 5692",
        "from": 5318,
        "to": 5326,
        "amount": 9,
        "formatted_address": "Rosario, Santa Fe Province, Argentina",
        "location": {
            "lat": -32.9587022,
            "lng": -60.69304159999999
        }
    },
    {
        "name": "E.E.S.O.N°384 DR.ALBERT SABIN",
        "dir": "NAHUEL HUAPI 4586 B",
        "from": 5327,
        "to": 5334,
        "amount": 8,
        "formatted_address": "Nahuel Huapi 4586, S2004 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9845804,
            "lng": -60.68630349999999
        }
    },
    {
        "name": "ESC.PRIM.N°799 A.ESCUDERO",
        "dir": "AV.ACEVEDO 3095",
        "from": 5335,
        "to": 5344,
        "amount": 10,
        "formatted_address": "Av. Acevedo 3095, S2004 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9841867,
            "lng": -60.67632589999999
        }
    },
    {
        "name": "E.E.S.O.N°240 LOLA MORA",
        "dir": "PJE.QUINTA BISELLI 5728",
        "from": 5345,
        "to": 5353,
        "amount": 9,
        "formatted_address": "Pje. Este, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0134128,
            "lng": -60.6526057
        }
    },
    {
        "name": "E.E.S.O.N°545",
        "dir": "CAMINO VIEJO A SOLDINI 2835",
        "from": 5354,
        "to": 5358,
        "amount": 5,
        "formatted_address": "Camino Viejo A Soldini 2835, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0259057,
            "lng": -60.6811393
        }
    },
    {
        "name": "E.E.S.O.N°571 MARIA MONTESSORI",
        "dir": "DEAN FUNES 3750",
        "from": 5359,
        "to": 5365,
        "amount": 7,
        "formatted_address": "Dean Funes 3750, S2003BOL Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9690882,
            "lng": -60.68175290000001
        }
    },
    {
        "name": "ESC.PRIM.Nº1379",
        "dir": "PJE.ANCON 3420",
        "from": 5366,
        "to": 5370,
        "amount": 5,
        "formatted_address": "Ancón 3420, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9690921,
            "lng": -60.68884149999999
        }
    },
    {
        "name": "ESC.PRIM.Nº1372",
        "dir": "CUMPARSITA Y AVELLANEDA",
        "from": 5371,
        "to": 5379,
        "amount": 9,
        "formatted_address": "Avellaneda, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.010351,
            "lng": -60.63366989999999
        }
    },
    {
        "name": "E.E.S.O.Nº572 EL CEIBO",
        "dir": "OVIDIO LAGOS 5806",
        "from": 5380,
        "to": 5382,
        "amount": 3,
        "formatted_address": "Av. Ovidio Lagos 5806, S2011MYU Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0049159,
            "lng": -60.67664039999999
        }
    },
    {
        "name": "E.E.S.O.N°518 C.FUENTEALBA",
        "dir": "ROUILLON 4400",
        "from": 5383,
        "to": 5388,
        "amount": 6,
        "formatted_address": "Rouillón 4400, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9804025,
            "lng": -60.7010807
        }
    },
    {
        "name": "ESC.PRIM.N°660 F.N.LAPRIDA",
        "dir": "BIEDMA 5204",
        "from": 5389,
        "to": 5395,
        "amount": 7,
        "formatted_address": "Juan XXIII (ex Biedma) 5204, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9729665,
            "lng": -60.694719
        }
    },
    {
        "name": "ESC.PRIM.1318 DE LA C.E.PERON",
        "dir": "SAAVEDRA 6100",
        "from": 5396,
        "to": 5403,
        "amount": 8,
        "formatted_address": "Saavedra 6100, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9694221,
            "lng": -60.7045328
        }
    },
    {
        "name": "ESC.PRIM.N°1333 NVA.ESPERANZA",
        "dir": "GARZON 4300",
        "from": 5404,
        "to": 5411,
        "amount": 8,
        "formatted_address": "Garzón 4300, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9748256,
            "lng": -60.70429649999999
        }
    },
    {
        "name": "E.P.I.N°1427 SAN I.LABRADOR",
        "dir": "BV.SEGUI 6002",
        "from": 5412,
        "to": 5419,
        "amount": 8,
        "formatted_address": "Bv. Seguí 6002, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.97075239999999,
            "lng": -60.7032518
        }
    },
    {
        "name": "ESC.PRI.1381 R.EN LA ESPERANZA",
        "dir": "DR.RIVA 5740",
        "from": 5420,
        "to": 5427,
        "amount": 8,
        "formatted_address": "Dr. Francisco Riva 5740, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9756156,
            "lng": -60.7002318
        }
    },
    {
        "name": "E.E.S.O.Nº497 EST.EL GAUCHO",
        "dir": "PJE.OMBU 3840",
        "from": 5428,
        "to": 5435,
        "amount": 8,
        "formatted_address": "Ombú 3840, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -33.0070865,
            "lng": -60.6882146
        }
    },
    {
        "name": "EESO.Nº514 M.DE PZA.25 DE MAYO",
        "dir": "PJE.LEJARZA 5430",
        "from": 5436,
        "to": 5442,
        "amount": 7,
        "formatted_address": "Lejarza 5430, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9665244,
            "lng": -60.6967293
        }
    },
    {
        "name": "E.E.M.P.A.Nº1223",
        "dir": "BIEDMA 5204",
        "from": 5443,
        "to": 5449,
        "amount": 7,
        "formatted_address": "Juan XXIII (ex Biedma) 5204, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9729665,
            "lng": -60.694719
        }
    },
    {
        "name": "EETP.Nº547 HEROES DE MALVINAS",
        "dir": "PCIAS.UNIDAS Y SAAVEDRA",
        "from": 5450,
        "to": 5453,
        "amount": 4,
        "formatted_address": "Av. Provincias Unidas 920, S2000 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9382718,
            "lng": -60.7129135
        }
    },
    {
        "name": "ESC.PRIM.N°518 FRAY M.ESQUIU",
        "dir": "JUAN DE GARAY 5401",
        "from": 5454,
        "to": 5462,
        "amount": 9,
        "formatted_address": "Garay 5401, Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.9658746,
            "lng": -60.6963055
        }
    },
    {
        "name": "E.P.I.N°1283 DR.ALBERT SABIN",
        "dir": "RUEDA 5331",
        "from": 5463,
        "to": 5467,
        "amount": 5,
        "formatted_address": "Rueda 5331, S2010 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.962503,
            "lng": -60.69549869999999
        }
    },
    {
        "name": "EESOPI.Nº3111 DR.ALBERT SABIN",
        "dir": "RUEDA 5331",
        "from": 5468,
        "to": 5471,
        "amount": 4,
        "formatted_address": "Rueda 5331, S2010 Rosario, Santa Fe, Argentina",
        "location": {
            "lat": -32.962503,
            "lng": -60.69549869999999
        }
    }
]