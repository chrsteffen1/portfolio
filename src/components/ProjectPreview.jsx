import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";


const ProjectPreview = (props) => {
  return (  
    <>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <div>
        <h3>
            {props.title}
        </h3>
        <Link to={hyphenate(props.title)}>
          <button>
              Learn more
          </button>
        </Link>
    </div>
</>
  );
}

export default ProjectPreview;