//sorting kullanılacak
import React from "react";
import PersonelDetail from "./PersonelDetail";
import App from "./App";

class Component extends React.Component {
  state = {
    personel: []
  };

  componentDidMount() {
    this.setState({
      personel: PersonelDetail
    });
  }

  voteHandler = playerId => {
    const votePersonel = this.state.personel.map(personels => {
      if (playerId === personels.id) {
        return Object.assign({}, personels, {
          votes: personels.votes + 1
        });
      } else {
        return personels;
      }
    });

    this.setState({
      personel: votePersonel
    });
  };
  render() {

    let sortpersonel = this.state.personel.sort((a, b) => {
      return b.votes - a.votes;
    });
    const personel = sortpersonel.map(player => (
      <App
        key={personel.id}
        id={personel.id}
        name={personel.name}
        votes={personel.votes}
        imageUrl={personel.imageUrl}
        votePersonel={this.voteHandler}
      />
    ));
    return <div className="ui divided unstackable items main">{personel}</div>;
  }
}

export default Component;
