import React from 'react';
import {SOUND_MAP} from '../config/settings'

const SoundList = () => {
  return (
    <div>
      <h2>Lista de Sonidos</h2>
      <ul>
        {Object.keys(SOUND_MAP).map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoundList;