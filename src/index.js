const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  console.log(pokemons.length) // 13 Popkemons
  console.log(`I have ${pokemons.length} pokemons!`)
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
};

countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  console.table(pokemons.sort())
};
orderThem()



const flipThem = () => {
  // reverse the order of the pokemons
  console.table(pokemons.reverse())
};

flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  // pokemons.forEach((pokemon) => {
  //   console.table(pokemon.toUpperCase())
  // })

  pokemons.forEach((pokemon, index, array) => {
    array[index] = pokemon.toUpperCase();
  });
  console.table(pokemons);
};

makeThemBig()

// for (let i = 0; i < pokemons.length; i++) {
//   console.log(pokemons[i]);
// }

const onlyTheBs = () => {
  const bPokemons = pokemons.filter(pokemon => pokemon.startsWith('B'))
  console.table(bPokemons)
};

onlyTheBs()

const notTheCs = () => {
  // remove all pokemons that starts with C
  const cPokemons = pokemons.filter(pokemon => !pokemon.startsWith('C'))
  console.table(cPokemons)
};

notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, index) => {
    console.log(`number ${index} - ${pokemon}`)
  })
}
nameAndIdThanks()


const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push('Eevee')
  console.table(pokemons)
};

catchPokemon()


const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  const pokemon =
    pokemons.find(pokemon => pokemon === name)
  console.log(pokemon ? ` found:${pokemon}` : ` ${name} not found`)
};

didICatchIt("PIKACHU")

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};