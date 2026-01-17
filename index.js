// Murilo Teixeira - 12/01/2026
// Classificador de nível de herói

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rank names and tresholds
const rank_table = [
    {name: "ferro",
        thresholdMin: 0,
        thresholdMax: 1000
    },// 1 (less experience...)
    {name: "Bronze",
        thresholdMin: 1001,
        thresholdMax: 2000
    },// 2
    {name: "Prata",
        thresholdMin: 2001,
        thresholdMax: 5000
    },// 3
    {name: "Ouro",
        thresholdMin: 5001,
        thresholdMax: 7000
    },// 4
    {name: "Platina",
        thresholdMin: 7001,
        thresholdMax: 8000
    },// 5
    {name: "Ascendente",
        thresholdMin: 8001,
        thresholdMax: 9000
    },// 6
    {name: "Imortal",
        thresholdMin: 9001,
        thresholdMax: 10000
    },// 7
    {name: "Radiante",
        thresholdMin: 10001,
        thresholdMax: 10001
    }// 8 (more experience...)
];


/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Ao final deve se exibir uma mensagem: "O Herói de nome {nome} está no nível de {nivel}"

*/