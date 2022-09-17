import axios from "axios";

const fetch_data = () => async (dispatch, getState) => {
  try {
    const { data } = axios.get(
      "https://puertorico.secondchancebonuszone.com/kino/past_drawings.php"
    );

    console.log(data);
    return data;
  } catch (err) {}
};

export default fetch_data;
