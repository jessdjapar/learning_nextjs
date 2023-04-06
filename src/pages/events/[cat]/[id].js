import Image from 'next/image'
import SingleEvent from '@/components/events/single-events';

const SingleEventPage = ({eventData}) => {
    console.log(eventData);
    return (
        <div>
            <SingleEvent data = {eventData}/>
        </div>
    );
};

export default SingleEventPage;


export async function getStaticPaths() {
    const data = await import('data/data.json');
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id,
            },
        };
    })

    return {
        paths: allPaths,
        fallback: false,
    }
};

export async function getStaticProps(context) {
    console.log(context);
    const id = context?.params.id;

    const data = await import('data/data.json');
    const allEvents = data.allEvents;
    const eventData = allEvents.find((ev) => (id === ev.id));

    return {
        props: {eventData},
    };
}
