const URL = "https://jsonplaceholder.typicode.com/payments";

const transferPayment = ({ data }) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data), // Make sure to stringify the data for a POST request
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(URL, options)
    .then((res) => res.json())
    .then((res) => {
      // fake data
      res.status = 200;
      res.message = "Transferred successfully";
      return res;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const getAllPayments = () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export { transferPayment, getAllPayments };
