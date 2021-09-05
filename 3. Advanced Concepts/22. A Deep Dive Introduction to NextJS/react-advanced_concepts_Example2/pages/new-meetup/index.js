import router, { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
   const route = useRouter();

   async function addMeetupHandler(enteredMeetupData) {
      // console.log(enteredMeetupData);
      const response = await fetch('/api/new-meetup', {
         method: 'post',
         body: JSON.stringify(enteredMeetupData),
         headers: {
            'Content-Type': 'application/json'
         }
      });

      const data = await response.json();
      console.log(data);
      router.push('/');
   };

   return(
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
   );
};

export default NewMeetupPage;