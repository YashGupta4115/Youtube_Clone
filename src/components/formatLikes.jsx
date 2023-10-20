
const Likes = ({likes})=> { 
    let formattedLikes= "";

    if(likes < 1000)
        formattedLikes = likes;
    else if(likes > 1000 && likes < 1000000)
        formattedLikes = Math.round(likes/1000) + "k";
    
    else if(likes > 1000000 && likes < 1000000000)
        formattedLikes = Math.round(likes/1000000) + "M";
    
    else if(likes > 1000000000) 
        formattedLikes = Math.round(likes/1000000000) + "B";
    
    return formattedLikes;
    
}

export default Likes;