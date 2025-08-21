import React from 'react';

const getStyle = (temperature) => {
  if (temperature < 15) return { backgroundColor: '#a0d8ef' }; // icy blue
  if (temperature < 25) return { backgroundColor: '#f0e68c' }; // sunny yellow
  return { backgroundColor: '#ff6347' }; // hot red
};

const getPokemon = (temperature) => {
  if (temperature < 15) return 'Articuno';
  if (temperature < 25) return 'Bulbasaur';
  return 'Charmander';
};

const PokéWeather = ({ temperature }) => {
  const style = getStyle(temperature);
  const pokemon = getPokemon(temperature);

  return (
    <div style={{ ...style, padding: '2rem', textAlign: 'center' }}>
      <h1>🌡️ Current Temperature: {temperature}°C</h1>
      <h2>
        {temperature < 15
          ? '❄️ It’s cold outside — Articuno weather!'
          : temperature < 25
          ? '🌤️ It’s nice outside — Bulbasaur approves!'
          : '🔥 It’s blazing — Charmander loves it!'}
      </h2>
      <img
        src={`https://img.pokemondb.net/artwork/${pokemon.toLowerCase()}.jpg`}
        alt={pokemon}
        width={300}
      />
    </div>
  );
};

export default PokéWeather;
