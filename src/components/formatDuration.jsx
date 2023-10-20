
const Duration = ({duration})=> {
    const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
    const matches = regex.exec(duration);

    const hours = matches[1] ? parseInt(matches[1]) : "";
    const minutes = matches[2] ? parseInt(matches[2]) : "0";
    const seconds = matches[3] ? parseInt(matches[3]) : "0";
    let formattedDuration = "";
    if(hours===""){
        formattedDuration = minutes+":"+seconds;
    }
    else{
        formattedDuration = hours+":"+minutes+":"+seconds;
    }

    return formattedDuration;
}

export default Duration;