import Image from 'next/image';
import Link from 'next/link';

const ShowCard = ({ show }) => {
   const summary = show.show.summary
      ? `${show.show.summary
           .split(' ')
           .slice(0, 10)
           .join(' ')
           .replace(/<.+?>/g, '')}...`
      : 'No Decription';

   return (
      <div className="divShow">
         <h3>{show.show.name}</h3>

         {show.show.image === null ? (
            <Image
               src="/images/notFound.png"
               alt="Picture o"
               unsized
               layout="fill"
            />
         ) : (
            <img
               src={show.show.image.medium}
               alt="Picture of the author"
               width={'300px'}
            />
         )}
         <p>{summary}</p>
         <Link href={`/show-actor/show/${show.show.id}`}>
            <a>Read More</a>
         </Link>

         <style jsx>{`
            .divShow {
               margin: 10px;
               border: 1px solid #fffffe27;
               padding: 10px;
            }
         `}</style>
      </div>
   );
};

export default ShowCard;
