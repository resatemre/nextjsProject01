import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultErrorPage from 'next/error';

export async function getStaticPaths() {
   return {
      paths: [{ params: { show_id: '1' } }],
      fallback: true,
   };
}
export async function getStaticProps({ params }) {
   const res = await fetch(`https://api.tvmaze.com/shows/${params.show_id}`);
   const post = await res.json();
   return {
      props: { post },
      revalidate: 1,
   };
}

const Comment = ({ post }) => {
   const router = useRouter();

   const { show_id } = router.query;
   const [state, setState] = useState(false);
   useEffect(() => {
      setState(post);
   });
   if (router.isFallback) {
      return <div>Loading...</div>;
   }

   if (!state) {
      return <div>empty</div>;
   }
   if (state) {
      const summary = state.summary
         ? `${state.summary
              .split(' ')

              .join(' ')
              .replace(/<.+?>/g, '')}`
         : 'No Decription';
      return (
         <div>
            <h2>Name of Show: {state.name}</h2>
            {state.image === null ? (
               <Image
                  src="/images/notFound.png"
                  alt="Picture o"
                  unsized
                  layout="fill"
               />
            ) : (
               <img
                  src={state.image.medium}
                  alt="Picture of the author"
                  width={'200px'}
               />
            )}
            <p>Language : {state.language}</p>
            <p>Summary : {summary}</p>
            <p>Genres : {state.genres.map((e) => e + ' ')}</p>
            <p>Type : {state.type}</p>
         </div>
      );
   }
};

export default Comment;
