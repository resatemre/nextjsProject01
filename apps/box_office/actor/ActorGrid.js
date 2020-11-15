import React from 'react';
import ActorCard from './ActorCard';
import style from '../../../styles/boxOffice.module.css';

const ActorGrid = ({ filmState }) => {
   return filmState.map((actor) => {
      return (
         <div className={`${style.actorGrid}`} key={actor.person.id}>
            <ActorCard actor={actor} />
         </div>
      );
   });
};

export default ActorGrid;
