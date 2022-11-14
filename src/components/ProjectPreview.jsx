import { hyphenate } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return (  
    <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
        <Link to={hyphenate(props.title)}>
          <button>
              Learn more
          </button>
        </Link>
    </section>
</div>
  );
}

export default ProjectPreview;