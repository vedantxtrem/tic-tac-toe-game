import { FaRegCircle, FaPen, FaTimesCircle } from 'react-icons/fa';

function Icon({ name }) {

    if (name == "circle") {
        return <FaRegCircle/> ;
    }else if(name == "cors"){
        return <FaTimesCircle /> ;
    }else {
        return <FaPen />;
    }

}

export default Icon;