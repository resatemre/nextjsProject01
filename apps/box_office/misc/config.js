export async function apiGenerator(link) {
   const res = await fetch(`${link}`);
   const responce = await res.json();
   return responce;
   //       fetch(`http://api.tvmaze.com/search/shows?q=${e}`)
   //          .then((r) => r.json())
   //          .then((result) => console.log(result[0].show.summary));
}
