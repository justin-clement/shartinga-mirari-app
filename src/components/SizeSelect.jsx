import { useState } from 'react';
import styles from '../styling/sizeselect.module.css'

function SizeSelect( {orderId, sizesArray, onSizeChange} ) {

    // STATE TO HANDLE SIZE SELECTION.
    const [chosenSize, setChosenSize] = useState(null);

    // FUNCTION TO SELECT AND RECORD SIZE.
    const chooseSize = async (choice) => {

        // RECORD CHOSEN SIZE.
        setChosenSize(choice);

        onSizeChange(choice); // This is to export it beyond the component.    

        const url = `http://localhost:8000/cart/${orderId}`;

        try {
           const { data } = await axios.post(url, {selected_size: chosenSize});
           if (data.confirmed) {
                return;
           } else {
                let msg = "We couldn't record the selected size. Kindly try again or check back later."
                console.log(msg);
                alert(msg);
                setChosenSize(choice);
           }
        } catch (error) {
            let msg = "We couldn't record the selected size. Kindly try again or check back later."
            console.log(msg);
            alert(msg);         
        }
        
    }

    return (
        <div>
            <p style={{color: "grey", textAlign:"center"}}><b>CHOOSE SIZE</b></p>
            <ul className={styles.sizesMenu}>
                {sizesArray.map(size => (
                    <li className={`${chosenSize === size ? styles.chosen : styles.sizes}`} onClick={() => chooseSize({size})}>{size}</li>
                ))}
            </ul>
        </div>
    )
};

export default SizeSelect;