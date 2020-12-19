import PropTypes from 'prop-types';

import styles from './details.module.css';

export const Details = ({ details }) => (
  <article className={styles.article}>
    <img className={styles.preview} src={details.image.medium} alt={details.name} />
    <div className={styles.description}>
      <h2>{details.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: details.summary }} />
    </div>
  </article>
);

Details.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }),
};

Details.defaultProps = {
  details: {
    id: null,
    name: 'Enpty name',
    summary: '',
    image: {
      medium: '',
    },
  },
};
