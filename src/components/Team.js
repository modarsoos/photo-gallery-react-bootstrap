import React, { Component } from "react";
import TeamMember from "./TeamMember";

class Team extends Component {
  constructor() {
    super()
    this.state = {
      memberinfo: [
        {
          id: 1,
          img: 'https://lh3.googleusercontent.com/pw/ADCreHcM0I5apQM7PvfylVdUp3ko6zu_DSxTfoJ6OhqFonHG-F1rAGMBravPZxJC2Q_xDRMIGpJtB0XNx6On0xj3NBTe-kUI0j5K-vmRZhFbPZMozH-LT_Ea9tzvmwTwr9tkgl4uBD1igsYU1pl1iYQv5wsyULYckmZ4tFNDhYa3VaHUQbEUx5ECcbwqlp8WB5jTUXrwgxzeqKhwY8GtPPh-2r-qHj3JB0-0Td-kdjcYmtxkjDS4Wv7lLQRDzilhixFKuwAW150tK9HF6wvU1X0JF17v683ZoNhRMJpIHYjoQ7M5UKR6KiO8rKUjZnyVLwa-LJYTEx25BWh80OkV7zGWFqBoP2mNzZ1e0Rx_jitJBDvcyYQSNX-hLR9eGb31yNkzuI0c1gztnS4SmmTJrRwwP8oGzQIKXUxtoCqJPEsXnsERZDIEYO_AB63VeXfme-rtACJOVWx6AKwsKNXGRzs4I3ksljV6qxWMFuZVbTv2TH7iaP2aiJ29ZdHziSOCL2LrrPRQ4Z20YJ53qzet7mdb20ECSQ_6L7kYuhIgMquRWuazaomDLncv7GBS_cuwa69L3XL2HdgFythnc13VBBUYZDjp4IqfXGyXuHfvJAAjggFA7Fxy0PxRn5Sx4N2C7j3gvovLOaC2v_Ng1MpzrKwXAmMiwsfiAT5bBppGrpOsl9yatYXBjrse6nQgtzB7J_8pe2rmCsJyB72nxtUsCcZ0gzooWsHPpROKB8uYrHuS16xueszH-472bWR8kKWUxKRcvpP8cGSv_-JEz-yqnO7CIMwExFq9ex8-OH9U-aUDDkT-0HMR6FDbgydRf36TZUZBKzQ3fFnqq2LS21cD7FzdMT_hx1EChBZzqdLD4ligzZCFQXiTVNWhDlYPffDl7PwkqAnUcx4_6DGy2HdIBhw1uas=w706-h951-s-no-gm?authuser=0',
          name: 'Modar Soos',
          position: 'Programmer',
          phone: '+49123456789',
          email: 'modarsoos@gmail.com',
          website: 'https://www.modarsoos.com',

        },
        {
          id: 2,
          img: 'https://lh3.googleusercontent.com/pw/ADCreHcPAD-6DYFzmdAkcHReEcHg3z43SLciD7uKHO_YnGL5HNLeSkpXVhB31rIVBBnqEgB2rfy-vg0V1bt6NV4T0C840VqJAzHUGFelJUvOjDHFNHQQDbmjmUPYb3KgX-fxlt9u49y6Em1bQCBjW30xbhrj0RLf2kdejd9CmRkdwnL0J7m4Ded8NlD9SO-7CvogstyTLcWCQF6ZkkYFuQYQvK_SbmQMOiH71Ezdj_6_CMUw9oyP3MA4VG5sinTbA_6du0LzwZZuQbe7SE3h_8tiGbtSBR8HCPlTP0FwSosVhCjPWzYfcTLv8Z3-UtwWjQblOcNND2FXC0kpklOYtR0dM4BIzq_wSIXEJ-DKpRrXN6NiisBQo2yb5Znc3UWf7558fED6_ExG_ibf2QBHp0od_Vg_UAbwIGCDbM2R_jIXJbkeypffekYJaaH8PVqnrrC3Im9DbTw6jPeQSDk8Ta68DzcBtd36Z4Xy9QWRPo-Thhqp9dDQoIYvYaeUUvtnRDoSUmkHk64xRdcEOpPtHt-Z1EqrBp_vowEBt6nd5lIJ3C5gzBp4HDizoX_OIe6KSjBDlpZvZmEM0FHcjjLMsFR2_cYWUkyHj2OEW4r21Kvb8YPzjAIhGkmI4Zdi0gj_nxEi-j6rkjvePtQjGNLeRiX1q2kfkRydFCDp_hPYT5cogKCTzPeREyB17JUta8yJRCJVHYhdqQ-UjuIGXHY1Lb65vdcHJVh1JswWNvcDRqvGA4pgkGVAbRDmjmD6huEm0Wa5AfErwwETO-uvkTWAR0eSKRCZ3s87k3gsd0q2cs0nfPcflz0ymXDkkAx36nJPNwOFFO7o6YdDWQ49MWzXkPOzyyLZebQYlLES1j_cAH8JnKaQfV4C3EL0665DP58LRHhICKHi31nLZy_Io2_Phd5PM4k=w713-h951-s-no-gm?authuser=0',
          name: 'Odai Sous',
          position: 'Son',
          phone: '+49123456789',
          email: 'odai@gmail.com',
          website: 'https://www.modarsoos.com',

        },
        {
          id: 3,
          img: 'https://lh3.googleusercontent.com/pw/ADCreHePfqMWDaE2a5aPqs1WSRUDmltDMq2EdLQks2-MJAClwqyjM23xS5Y-D0fjzue2PkqaGL8c5OkLu9cWhBlj8u-M1YGoHHCxQk2xi8a3pwYyinccqsOtb-XTiSBCu3e4SjfvzvTgcLYHCsiWwtfWl0e8V0UzwlQLyE5TeuoIeklaFMNWtkJnkKMs_xGGQQzNlY1fqsMPqDfC-Qf5B-sAkL97-1DEUKzIOGT53CYiX71we8yi_XhhRgHZdnlg7z59d6T73FWZrflizmntqAEFXHEUVy7Dkznk17ZmuwgWnz2374oMJYqwuDBR3dSSeioL_gYzphe9D4Q-P588ljcE2SVdzg6TFa26ViFGV02mHHnBuLvNTg9Vhtas5QylSkvW6ypLHI4_hZ8bZ6nKa43MWDV_p3qCs2nhzvDhDp3eBJHGndSH0gjMSmaXlGblBn89HCS6Pnf9UW66unCEp0kbh7i3ckckaF-BKWtwNLrg22T4SQRb8E5z6OV5xky__0UNV12p0e7V5UL9mlUjU89fl21KrV7VL8QhvUdyCV3MmsQY3MLHdUhbvg7KZr33EnucbSela4UuPqREd5DzvnUofh-lLIgcU-0tnRrPDj4DyjC0_g9LVkIL-ztVG9cO3hClxC1YZ2dBLFzXZxA_Qpeqd9BSgY0hdSHAvJr0HpBka4aUcSo1CXTLmBxKaHQHFSKHZVvdGi7mez4LSGkJQKhvC5fanfecfXKFMMWj9x3o7AttWNC0UiKFsHBigGWpKGb1tq9GNacnekdAspjRhauAX6V4YKY1cRll_V3ODSYU_rZRV5OVCOf1lfYBc0_iClTfXwikUs5J9-Uzy_AGsV0yYoNuAdH5WPGf5le44snBTIUe3L_4NGVKKiQazip0akkfLzxZI6ilT5-_Gg4vkYUY_J8=w535-h951-s-no-gm?authuser=0',
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