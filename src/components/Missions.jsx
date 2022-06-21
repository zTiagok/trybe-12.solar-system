import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    // VARIABLES
    const missionInfo = missions.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));

    // DOM
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missionInfo }
      </div>
    );
  }
}

export default Missions;
