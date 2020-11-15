import { useRouter } from 'next/router';

const Post = () => {
   const router = useRouter();
   const { show } = router.query;
   return (
      <div>
         <p>index page</p>
         <h1>Post : {show}</h1>
      </div>
   );
};

export default Post;
