import BoxOfficeApp from '../apps/box_office/BoxOfficeApp';
import style from '../styles/boxOffice.module.css';

const boxOffice = () => {
   return (
      <div className={style.boxOffice}>
         <h1>Data About Shows and Actors</h1>
         <BoxOfficeApp />
      </div>
   );
};

export default boxOffice;
