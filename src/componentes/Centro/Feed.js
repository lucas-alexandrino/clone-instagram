import './Feed.css';

import Post from './Post/Post.js'


export default function Feed() {
    return (
    <div className="Feed">
        <Post 
        title="tartinebakery "
        subtitle="São Paulo, Brazil"
        imgSrc = "https://placehold.co/150x150"
        body="Lorem ipsum"
        />

        <Post 
        title="tartinebakery "
        subtitle="São Paulo, Brazil"
        imgSrc = "https://placehold.co/150x150"
        body="Lorem ipsum"
        />  



    </div> )
}