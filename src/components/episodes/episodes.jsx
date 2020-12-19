import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './episodes.module.css';

export const Episodes = ({ episodes }) => {
  if (!episodes.length) {
    return <h3>Sorry, There are no episodes...</h3>;
  }

  return (
    <>
      <h3 className={styles.title}>All Episodes:</h3>
      <ul className={styles.episodesList}>
        {episodes.map(({
          id,
          name,
          season,
          number,
        }) => (
          <li key={id}>
            <Link to={`${id}/episode/${season}/${number}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

Episodes.defaultProps = {
  episodes: [],
};
