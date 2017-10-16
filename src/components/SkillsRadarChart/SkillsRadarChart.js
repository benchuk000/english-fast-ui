import React from 'react';
import {
  Radar, 
  RadarChart, 
  PolarGrid, 
  Legend,
  PolarAngleAxis, 
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const SkillsRadarChart = ({ data = []}) => (
  <ResponsiveContainer height={500} width="100%">
    <RadarChart outerRadius={150} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <PolarRadiusAxis/>
      <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
    </RadarChart>
  </ResponsiveContainer>
);

export default SkillsRadarChart;