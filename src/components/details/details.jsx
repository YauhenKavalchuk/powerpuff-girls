import PropTypes from 'prop-types';

import styles from './details.module.css';

export const Details = ({ details }) => (
  <article className={styles.article}>
    <div className={styles.imageWrapper}>
      <img className={styles.preview} src={details.image.medium} alt={details.name} />
      <time className={styles.time}>{details.airdate || details.premiered}</time>
    </div>
    <div className={styles.description}>
      <h2>{details.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: details.summary }} />
    </div>
  </article>
);

Details.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    airdate: PropTypes.string,
    premiered: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }),
};

Details.defaultProps = {
  details: {
    name: 'Enpty name',
    airdate: '',
    premiered: '',
    summary: 'No description',
    image: {
      medium: 'https://via.placeholder.com/250x140',
    },
  },
};
