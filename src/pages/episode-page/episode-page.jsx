import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Details } from '../../components/details';

import { requestApiEpisodeDetails } from '../../actions';

export const selectEpisodeDetails = store => store?.data?.episodeDetails;

export const EpisodePage = ({ history }) => {
  const dispatch = useDispatch();
  const { showId, season, number } = useParams();

  const episodeDetails = useSelector(selectEpisodeDetails);

  useEffect(() => {
    if (showId && number && season) {
      dispatch(requestApiEpisodeDetails(showId, season, number));
    }
  }, [showId, number, season]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section>
      <button type="button" onClick={handleGoBack}>Back</button>
      <Details details={episodeDetails} />
    </section>
  );
};

EpisodePage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
