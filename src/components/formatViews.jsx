
const Views = ({views})=> {
    let formattedViews= "";

    if(views < 1000)
        formattedViews = views;
    else if(views > 1000 && views < 1000000)
        formattedViews = Math.round(views/1000) + "k";
    
    else if(views > 1000000 && views < 1000000000)
        formattedViews = Math.round(views/1000000) + "M";
    
    else if(views > 1000000000) 
        formattedViews = Math.round(views/1000000000) + "B";
    
    return formattedViews;
}

export default Views;