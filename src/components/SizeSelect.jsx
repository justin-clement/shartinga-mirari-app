import { useState } from 'react';
import styles from './styling/sizeselect.module.css';

function SizeSelect({ selectedSize = "M", sizesArray = ["XS", "S", "M", "L", "XL"], onSizeChange }) {
  const [chosenSize, setChosenSize] = useState(selectedSize);

  const chooseSize = (choice) => {
    setChosenSize(choice);
    if (typeof onSizeChange === 'function') {
      onSizeChange(choice);
    }
  };

  return (
    <div>
      <p style={{ color: 'grey', textAlign: 'center' }}><b>CHOOSE SIZE</b></p>
      <ul className={styles.sizesMenu}>
        {sizesArray.map((size) => (
          <li
            key={size}
            className={chosenSize === size ? styles.chosen : styles.sizes}
            onClick={() => chooseSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SizeSelect;
