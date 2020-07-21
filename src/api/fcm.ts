export const sendPushNotification = async (registration_ids: string[], title: string, body: string) => {
  console.log(registration_ids, title, body)
  //   const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_APIKEY ?? "";
  //   const message = {
  //       token: registration_ids[0], 
  //       notification: {
  //           title,
  //           body,
  //           "vibrate": 1,
  //           "sound": 1,
  //           "show_in_foreground": true,
  //           "priority": "high",
  //           "content_available": true,
  //       },
  //       data: {
  //           title,
  //           body,
  //           score: 50,
  //           wicket: 1
  //       }
  // }
  
  //   let headers = new Headers({
  //     "Content-Type": "application/json",
  //     "Authorization": "Bearer " + FIREBASE_API_KEY
  //   });

  //   let response = await fetch("https://fcm.googleapis.com/v1/projects/ping-82fee/messages:send", { method: "POST", headers, body: JSON.stringify(message) })
  //   response = await response.json();
  //   console.log(response);
  }