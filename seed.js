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

    await Pokemon.create({
        id: 797,
        nome: 'celesteela',
        altura: 92,
        peso: 9999,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png',
        ataques: 'beast-boost',
        jogos: [],
        estatisticas: {
            hp: 97,
            attack: 101,
            defense: 103,
            'special-attack': 107,
            'special-defense': 101,
            speed: 61
  }
    });

    await Pokemon.create({
        id: 376,
        nome: 'metagross',
        altura: 16,
        peso: 5500,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png',
        ataques: 'clear-body,light-metal',
        jogos: [
            'ruby',      'sapphire',
            'emerald',   'firered',
            'leafgreen', 'diamond',
            'pearl',     'platinum',
            'heartgold', 'soulsilver',
            'black',     'white',
            'black-2',   'white-2'
        ],
        estatisticas: {
            hp: 80,
            attack: 135,
            defense: 130,
            'special-attack': 95,
            'special-defense': 90,
            speed: 70
        }
    });

    await Pokemon.create({
        id: 556,
        nome: 'maractus',
        altura: 10,
        peso: 280,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png',
        ataques: 'water-absorb,chlorophyll,storm-drain',
        jogos: [ 'black', 'white', 'black-2', 'white-2' ],
        estatisticas: {
          hp: 75,
          attack: 86,
          defense: 67,
          'special-attack': 106,
          'special-defense': 67,
          speed: 60
        }     
    });

    await Pokemon.create({
        id: 494,
        nome: 'victini',
        altura: 4,
        peso: 40,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png',
        ataques: 'victory-star',
        jogos: [ 'black', 'white', 'black-2', 'white-2' ],
        estatisticas: {
            hp: 100,
            attack: 100,
            defense: 100,
            'special-attack': 100,
            'special-defense': 100,
            speed: 100
        }
    });

    await Pokemon.create({
        id: 849,
        nome: 'toxtricity-amped',
        altura: 16,
        peso: 400,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png',
        ataques: 'punk-rock,plus,technician',
        jogos: [],
        estatisticas: {
            hp: 75,
            attack: 98,
            defense: 70,
            'special-attack': 114,
            'special-defense': 70,
            speed: 75
        }
    });

    await Pokemon.create({
        id: 29,
        nome: 'nidoran-f',
        altura: 4,
        peso: 70,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
        ataques: 'poison-point,rivalry,hustle',
        jogos: [
            'red',       'blue',
            'yellow',    'gold',
            'silver',    'crystal',
            'ruby',      'sapphire',
            'emerald',   'firered',
            'leafgreen', 'diamond',
            'pearl',     'platinum',
            'heartgold', 'soulsilver',
            'black',     'white',
            'black-2',   'white-2'
        ],
        estatisticas: {
            hp: 55,
            attack: 47,
            defense: 52,
            'special-attack': 40,
            'special-defense': 40,
            speed: 41
         }

    });

    await Pokemon.create({
        id: 71,
        nome: 'victreebel',
        altura: 17,
        peso: 155,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png',
        ataques: 'chlorophyll,gluttony',
        jogos: [
          'red',       'blue',
          'yellow',    'gold',
          'silver',    'crystal',
          'ruby',      'sapphire',
          'emerald',   'firered',
          'leafgreen', 'diamond',
          'pearl',     'platinum',
          'heartgold', 'soulsilver',
          'black',     'white',
          'black-2',   'white-2'
        ],
        estatisticas: {
          hp: 80,
          attack: 105,
          defense: 65,
          'special-attack': 100,
          'special-defense': 70,
          speed: 70
        }
    });
    
    await mongoose.disconnect();
};

populaBancoDeDados();
