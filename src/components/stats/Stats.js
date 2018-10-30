import React from 'react';

import computeMatchStats from '../../lib/computeMatchStats';
import formatWeight from '../../lib/formatWeight';
import formatHeight from '../../lib/formatHeight';

const Stats = ({ player }) => {
  const { firstname, lastname, picture, data, country } = player;
  const { age, height, points, rank, weight, last } = data;
  const { wins, losses } = computeMatchStats(last);
  const countryMap = {
    SUI: 'Switzerland',
    ESP: 'Spain'
  };

  return (
    <div className="column">
      <div className="player-name">
        <h3> {firstname} {lastname}</h3>
        <img className="flag" src={country.picture} alt={firstname} />
      </div>
      <div className="player">
        <div>
          <img src={picture} alt={firstname} />
        </div>
        <ul>
          <li className="player-rank"> {rank ? rank : '-'} </li>
          <li className="player-age"> {age ? `${age} years old` : '-'} </li>
          <li className="player-country"> {country.code ? countryMap[country.code] : '-'} </li>          
          <li className="player-points"> {points ? points : '-'} </li>
          <li className="player-height"> {height ? formatHeight(height) : '-'} </li>
          <li className="player-weight"> {weight ? formatWeight(weight) : '-'} </li>
          <li className="player-wins"> {wins ? wins : '-'} </li>
          <li className="player-losses"> {losses ? losses : '-'} </li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
