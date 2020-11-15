import ShowCard from './ShowCard';

const ShowGrid = ({ filmState }) => {
   return filmState.map((show) => {
      return (
         <div key={show.show.id}>
            <ShowCard show={show} />
         </div>
      );
   });
};

export default ShowGrid;
