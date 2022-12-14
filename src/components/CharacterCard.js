import defaultPhoto from '../images/esplaceholder.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props, index) => {
    return (<div className='wrapperCard'>
    <Link to={`/CharacterDetail/${props.element.id}`}
            className='linkCard'>
        <li key={index} 
        className='characterCard'>
        <img 
              src={props.element.image || defaultPhoto}
              alt={`Click for more info of ${props.element.name}`}
              title={`Click for more info`}
              className="charactersPhoto"></img>
        <p>{props.element.name}</p>
        <span>{props.element.species}</span>
        </li>
        </Link>
        </div>)
}

CharacterCard.defaultProps = {
    element: {}
  };

CharacterCard.propTypes = {
    element: PropTypes.object.isRequired,
}

export default CharacterCard;