import { useEffect, useState } from 'react';

const FormatPublisedAtYt = (props)=>{
            const { givenPublisedAt } = props;
            const parsedGivenDateTime = new Date(givenPublisedAt);
            const [currentDateTime, setCurrentDateTime] = useState(new Date());

            useEffect(() => {
                const intervalId = setInterval(() => {
                setCurrentDateTime(new Date());
                }, 1000); // Update every 1000ms (1 second)

                // Clean up the interval when the component unmounts
                return () => clearInterval(intervalId);
            }, []);

            const timeDifference = currentDateTime - parsedGivenDateTime;
            let timeDifferenceInSeconds = Math.floor(timeDifference/1000);
            let publisedAt = timeDifferenceInSeconds;

            const minutes = Math.floor(timeDifferenceInSeconds/60);
            const hours = Math.floor(minutes/60);
            const days = Math.floor(hours/24);
            const months = Math.floor(days/30);
            const years = Math.floor(months/12);

            if(years > 0)
                publisedAt = `${years} year${years!==1?'s':''} ago`;
            else if (months > 0)
                publisedAt = `${months} month${months!==1?'s':''} ago`;
            else if (days > 0)
                publisedAt = `${days} day${days!==1?'s':''} ago`;
            else if (hours > 0)
                publisedAt = `${hours} hour${hours!==1?'s':''} ago`;
            else if (minutes > 0)
                publisedAt = `${minutes} minute${minutes!==1?'s':''} ago`;
            else
                publisedAt = `${timeDifferenceInSeconds} second${timeDifferenceInSeconds!==1?'s':''} ago`;

            return (
                    publisedAt
            )
}


export default FormatPublisedAtYt;