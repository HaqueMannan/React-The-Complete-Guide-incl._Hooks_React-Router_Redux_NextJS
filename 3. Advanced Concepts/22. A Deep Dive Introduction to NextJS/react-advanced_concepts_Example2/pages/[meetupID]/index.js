import { Fragment } from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
   return(
      <Fragment>
         <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description} />
         </Head>
         <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
         />
      </Fragment>
   );
};

export async function getStaticPaths() {
   const client = await MongoClient.connect('mongodb+srv://Tester:OXIsMht4XrKqbcpz@cluster0.evwfu.mongodb.net/meetupsDB?retryWrites=true&w=majority');
   const db = client.db();
   const meetupsCollection = db.collection('meetups');
   const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
   client.close();

   return {
      fallback: 'blocking',
      paths: meetups.map(meetup => ({
         params: { meetupID: meetup._id.toString() }
      }))
   }
};

export async function getStaticProps(context) {
   const meetupId = context.params.meetupID;
   // console.log(meetupId);

   // fetch data for a single meetup
   const client = await MongoClient.connect('mongodb+srv://Tester:OXIsMht4XrKqbcpz@cluster0.evwfu.mongodb.net/meetupsDB?retryWrites=true&w=majority');
   const db = client.db();
   const meetupsCollection = db.collection('meetups');
   const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
   client.close();

   return {
      props: {
         meetupData: {
            id: selectedMeetup._id.toString(),
            image: selectedMeetup.image,
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            description: selectedMeetup.description
         }
      }
   };
};

export default MeetupDetails;