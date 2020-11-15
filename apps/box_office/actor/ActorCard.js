import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../../../styles/boxOffice.module.css';

const ActorCard = ({ actor }) => {
   console.log(actor.person);
   return (
      <div className="divActor">
         <h3>{actor.person.name}a</h3>

         {actor.person.image === null ? (
            <Image
               src="/images/notFound.png"
               alt="Picture o"
               unsized
               layout="fill"
            />
         ) : (
            <img
               src={actor.person.image.medium}
               alt="Picture of the author"
               width={'300px'}
            />
         )}
         <div>
            <Link href={`/show-actor/actor/${actor.person.id}`}>
               <a>Read More</a>
            </Link>
         </div>
         <p>{actor.person.birthday}</p>
         <p>{actor.person.country ? actor.person.country.name : ''}</p>

         <style jsx>{`
            .divActor {
               margin: 10px;
               border: 1px solid #fffffe27;
               padding: 10px;
            }
         `}</style>
      </div>
   );
};

export default ActorCard;
