
import Praser from '../../lib/praserTransaction';

//const BASE_URL = `https://bscscan.com/tokenholdings?a=${process.env.ADDRESS}`;
const BASE_URL = 'https://bscscan.com/';
export default async ({ query = [] }, res) => {

  const {
    a = "",
    q = "",
    ps = 100
  } = query;

  const fullUrl = `${BASE_URL}txs?a=${a}&q=${q}&ps=${ps}`;

  try {
    const data = await Praser(fullUrl, true);
    //console.log("##data=>",data)
    const status = data ? "ok" : "no"
    res.json({ data, status })
    // res.json({ resault, status: "ok" })


  } catch (error) {
    console.error(error);

  }
}