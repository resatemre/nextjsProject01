import { useRouter } from 'next/router';

export async function getStaticPaths() {
   return {
      paths: [{ params: { actor_id: '1' } }],
      fallback: true,
   };
}
export async function getStaticProps({ params }) {
   const res = await fetch(`https://api.tvmaze.com/people/${params.actor_id}`);
   const post = await res.json();
   return {
      props: { post },

      revalidate: 1,
   };
}

const Comment = ({ post }) => {
   const router = useRouter();
   const { actor_id } = router.query;
   console.log(post);

   if (!post) {
      return <div>Lading...</div>;
   }
   if (post) {
      if (post.image === null) {
         return <div>{post.name}</div>;
      }
      return (
         <div>
            <h2>Actor's Name : {post.name}</h2>
            {post.image === null ? (
               <Image
                  src="/images/notFound.png"
                  alt="Picture o"
                  unsized
                  layout="fill"
               />
            ) : (
               <img
                  src={post.image.medium}
                  alt="Picture of the author"
                  width={'200px'}
               />
            )}
            <p>Birthday : {post.birthday}</p>
            <p>Country : {post.country.name}</p>
            <p>Gender : {post.gender}</p>
         </div>
      );
   }
};

export default Comment;
