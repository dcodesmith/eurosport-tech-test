import React, { Component } from 'react';
import sortBy from 'lodash.sortby';

import Stats from '../stats/';
import Labels from '../labels/';
import LoadingMessage from '../loading-message/';
import fetchPlayers from '../../services/fetchPlayers';

class HeadToHead extends Component {
  _isMounted = false;
  state = {
    players: []
  };

	async componentDidMount() {
    this._isMounted = true;
    const { players } = await fetchPlayers();

    if (this._isMounted) {
      this.setState({ players: sortBy(players, [player => player.data.rank]) });
    }
	}

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { players } = this.state;
    const [ firstPlayer, secondPlayer ] = players;

    if (!players.length) {
      return <LoadingMessage />;
    }

    return (
      <div className="grid">
        <Stats player={firstPlayer} />
        <Labels />
        <Stats player={secondPlayer} />
      </div>
    )
  }
}

export default HeadToHead;

