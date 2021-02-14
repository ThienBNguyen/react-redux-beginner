import axios from "axios";
import moment from "moment";
import env from "react-dotenv";
const apiKey = process.env.API_KEY;
export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    });

    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=b45a46920d18256aa30f887b4827f862`
    );

    const labels = [];
    const data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.unshift(response.data[i].close);
      labels.unshift(moment(response.data[i].date).format("LT"));

      if (i === number - 1) {
        break;
      }
    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        data,
        labels
      }
    });
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN"
    });
  }
};
