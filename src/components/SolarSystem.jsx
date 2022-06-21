import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // VARIÁVEIS
    const filteredPlanets = Planets.map((planet) => (
      <PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />
    ));

    // DOM
    return (
      <div data-testid="solar-system" id="solar-system">
        <Title headline="Planetas" id="solar-system-title" />
        { filteredPlanets }
      </div>
    );
  }
}

export default SolarSystem;
