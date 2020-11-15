import { useRouter } from 'next/router';

const Post = () => {
   const router = useRouter();
   const { actor, show } = router.query;
   return (
      <div>
         <p>index page</p>
         <h1>Post :</h1>
      </div>
   );
};

export default Post;
