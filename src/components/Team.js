import React, { Component } from "react";
import TeamMember from "./TeamMember";

class Team extends Component {
  constructor() {
    super()
    this.state = {
      memberinfo: [
        {
          id: 1,
          img: 'https://source.unsplash.com/random/300×300',
          name: 'Modar Soos',
          position: 'Programmer',
          phone: '+49123456789',
          email: 'modarsoos@gmail.com',
          website: 'https://www.modarsoos.com',

        },
        {
          id: 2,
          img: 'https://source.unsplash.com/random/199×300',
          name: 'Odai Sous',
          position: 'Son',
          phone: '+49123456789',
          email: 'odai@gmail.com',
          website: 'https://www.modarsoos.com',

        },
        {
          id: 3,
          img: 'https://source.unsplash.com/random/200×300',
          name: 'Bana Sous',
          position: 'dauter',
          phone: '+49123456789',
          email: 'banasoos@gmail.com',
          website: 'https://www.modarsoos.com',
        },
      ]
    }
  }


  render() {

    const members = this.state.memberinfo.map(member =>
      < TeamMember
        // console.log(`<TeamMember ${member.name}/>`);
        key={member.id}
        img={member.img}
        name={member.name}
        position={member.position}
        phone={member.phone}
        email={member.email}
        website={member.website}
      />
    );


    return (
      <div className="row mt-3">
        {members}
      </div>
    )
  }
}

export default Team