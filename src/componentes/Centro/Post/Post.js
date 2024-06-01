import './Post.css'
import { BsAlignEnd, BsAlignTop, BsThreeDots } from "react-icons/bs";

export default function Post(props) {
    return (
        <div className="Post">
            <div className="card-header">
                <h3>{props.title}</h3>
                <BsThreeDots  className="left-icon" />
            </div>
            <div className="card-header">
                <h3>{props.subtitle}</h3>
            </div>
          
            <div className="card-body">
                <img src={props.imgSrc} />
                <p>{props.body}</p>
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    )
}