import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import './Profile.css';
import { 
  CharacteristicField,
  CharacteristicKey,
  CharacteristicValue
} from '../CharacteristicField/CharacteristicField';
import SkillsRadarChart from '../SkillsRadarChart/SkillsRadarChart';

const getSkillsDataForChart = (data = {}) => Object.keys(data).map(key => ({ skill: key.toUpperCase(), value: data[key] }));

const Profile = ({ user = {} }) => (
  <div className="grid-noGutter profile">
    <div className="col-6_sm-12_xs-12">
      <div className="profile__data card">
        <Subheader inset={true}>Account data</Subheader>
        <CharacteristicField>
          <CharacteristicKey>Email</CharacteristicKey>
          <CharacteristicValue>{user.email}</CharacteristicValue>
        </CharacteristicField>
        <CharacteristicField>
          <CharacteristicKey>Level</CharacteristicKey>
          <CharacteristicValue>{user.level}</CharacteristicValue>
        </CharacteristicField>
      </div>
    </div>

    <div className="col-6_sm-12_xs-12">
      <div className="card">
        <SkillsRadarChart data={getSkillsDataForChart(user.skills)}/>
      </div>
    </div>
  </div>
);

export default Profile;