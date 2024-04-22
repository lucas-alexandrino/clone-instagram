import './ConteudoCentral.css';
import Stories from './Stories.js';
import Feed from './Feed';


export default function ConteudoCentral() {
    return (
        <div className='conteudoCentral'>
            <Stories />
            <Feed />
           
        </div>
    );
}