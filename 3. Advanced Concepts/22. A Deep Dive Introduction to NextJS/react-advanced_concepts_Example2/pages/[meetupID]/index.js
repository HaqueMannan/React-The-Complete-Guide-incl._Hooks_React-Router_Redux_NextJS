import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
   return(
      <MeetupDetail
         image="https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/4:3/w_4000,h_3000,c_limit/Amsterdam-GettyImages-840603854.jpg"
         title="First Meetup"
         address="1 Fake Road, Fake City"
         description="This is a first meetup"
      />
   );
};

export async function getStaticPaths() {
   return {
      fallback: false,
      paths: [
         { params: { meetupID: 'm1'} },
         { params: { meetupID: 'm2'} }
      ]
   }
};

export async function getStaticProps(context) {
   const meetupId = context.params.meetupID;
   console.log(meetupId);

   // fetch data for a single meetup
   return {
      props: {
         meetupData: {
            id: meetupId,
            image: 'https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/4:3/w_4000,h_3000,c_limit/Amsterdam-GettyImages-840603854.jpg',
            title: 'First Meetup',
            address: '1 Fake Road, Fake City',
            description: 'This is a first meetup'
         }
      }
   };
};

export default MeetupDetails;