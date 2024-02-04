import PropTypes from 'prop-types';
import styles from './SingleCard.module.scss';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <figure className={flipped ? styles.flipped : ''}>
        <img className={styles.front} src={card.src} alt="card front" />
        <img
          className={styles.back}
          src="assets/images/cover.png"
          onClick={handleClick}
          onKeyDown={handleClick} // Add keyboard listener
          role="button" // Add role attribute
          tabIndex={0} // Add tabIndex attribute
          alt="cover"
        />
      </figure>
    </div>
  );
}

SingleCard.propTypes = {
  card: PropTypes.object.isRequired,
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
