import styles from './card.module.css'
import Tilt from 'react-parallax-tilt';

export  const  Card = (props) => {
    return(
        <Tilt>
          <div className={styles.card}>
                      <img width={100} src={props.image} alt={props.tec} />
                      <h3>{props.tec}</h3>
                      <p>{props.text}</p>
                    </div>  
        </Tilt>
        
    )
} 