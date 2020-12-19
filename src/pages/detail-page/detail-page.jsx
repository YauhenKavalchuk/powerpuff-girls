import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Details } from '../../components/details';
import { Episodes } from '../../components/episodes';

import { requestApiDetails, requestApiEpisodes } from '../../actions';

export const selectDetails = store => store?.data?.details;
export const selectEpisodes = store => store?.data?.episodes;

export const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const details = useSelector(selectDetails);
  const episodes = useSelector(selectEpisodes);

  useEffect(() => {
    if (id) {
      dispatch(requestApiDetails(id));
      dispatch(requestApiEpisodes(id));
    }
  }, [id]);

  return (
    <section>
      <Details details={details} />
      <Episodes episodes={episodes} />
    </section>
  );
};
