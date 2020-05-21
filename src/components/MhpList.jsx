import React from "react";
import Mhp from "./Mhp";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MhpList(props){
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div>
    <div style={itemGrid}>
    {props.mhpTotal.map((mhp, index) =>
        <Mhp name={mhp.name}
      imgref={mhp.imgref}
      occupation={mhp.occupation}
      address={mhp.address}
      insurance={mhp.insurance}
      accepting={mhp.accepting}
      email={mhp.email}
      phone={mhp.phone}
      bio={mhp.bio}
      link={mhp.link}
      key={index}
      />
    )}
    </div>
    </div>
  );
}

MhpList.propTypes = {
  mhpTotal: PropTypes.array
};

export default MhpList;
