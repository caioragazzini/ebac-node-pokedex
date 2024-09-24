require('dotenv').config();

const mongoose = require('mongoose');
const { connect, Pokemon} = require('./models');

const populaBancoDeDados = async () => {
    connect();
    await Pokemon.create({
        id: 875,
        nome: 'eiscue-ice',
        altura: 14,
        peso: 890,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png',
        ataques:'ice-face',
        estatisticas:{
            hp: 75,
            attack: 80,
            defense: 110,
            'special-attack': 65,
            'special-defense': 90,
            speed: 50
        }
    });

    await Pokemon.create({
        id: 895,
        nome: 'regidrago',
        altura: 21,
        peso: 2000,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png',
        ataques: 'dragons-maw',
        jogos: [],
        estatisticas: {
            hp: 200,
            attack: 100,
            defense: 50,
            'special-attack': 100,
            'special-defense': 50,
            speed: 80
        }
    });

    await Pokemon.create({
        id: 41,
        nome: 'zubat',
        altura: 8,
        peso: 75,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png',
        ataques: 'inner-focus,infiltrator',
        jogos: [
            'red', 'blue', 'yellow', 'gold', 'silver', 'crystal',
            'ruby', 'sapphire', 'emerald', 'firered', 'leafgreen',
            'diamond', 'pearl', 'platinum', 'heartgold', 'soulsilver',
            'black', 'white', 'black-2', 'white-2'
        ],
        estatisticas: {
            hp: 40,
            attack: 45,
            defense: 35,
            'special-attack': 30,
            'special-defense': 40,
            speed: 55
        }
    });

    await mongoose.disconnect();
};

populaBancoDeDados();
