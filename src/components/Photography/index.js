import React, { useEffect } from 'react';
import Axios from 'axios';

const key='b1095ccdc01d64783246a7bac91d9cc1';
const userId='79814727@N06';

export default function Photography() {

  useEffect(() => {
    // Axios.get('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&format=json&api_key='+key+'&user_id='+userId)
    //   .then((res)=> {
    //     console.log(res);
    //   })
  })

  return (
    <div>
      hi
    </div>
  )
}