import { useRouter } from 'next/router';
import { useEffect } from 'react';
import genres from '../../temp_consts/genres';
const Genre = ({ notFound, genre }) => {
  const router = useRouter();
  useEffect(() => {
    if (notFound) {
      router.push('/404');
    }
  }, [router, notFound]);

  return <h1>You will now visiting the {genre} page</h1>;
};

export async function getServerSideProps(context) {
  const {
    query: { genre },
  } = context;
  let notFound = false;
  const element = genres.find((elem) => elem.toLowerCase() === genre);
  if (element === undefined) {
    notFound = true;
  }

  return {
    props: { notFound, genre }, //page will get this as props
  };
}

export default Genre;
