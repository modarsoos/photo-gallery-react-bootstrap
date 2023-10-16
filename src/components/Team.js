import React, { Component } from "react";
import TeamMember from "./TeamMember";
import memberinfo from "./memberInfo";

class Team extends Component {
  constructor() {
    super()
    this.state = {
      memberinfo: memberinfo
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