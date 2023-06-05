
class KafkaService {
   //url = 'https://your-kafka-express-service-kafka-adsoftsito.cloud.okteto.net/';
   url = 'https://kafka-books-service-zurisaddairj.cloud.okteto.net/';

   reaction = async (userId, objectId, reactionId) => {
      await fetch(this.url + "reaction?userId=" + userId + "&objectId=" + objectId + "&reactionId=" + reactionId, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

   comment = async (uId, oId, comment) => {
      console.log(this.url + "comments?userId=" + uId + "&objectId=" + oId + "&comment=" + comment)
      await fetch(this.url + "comments?userId=" + uId + "&objectId=" + oId + "&comment=" + comment, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }


}
const KafkaServiceInstance = new KafkaService();
export default KafkaServiceInstance
