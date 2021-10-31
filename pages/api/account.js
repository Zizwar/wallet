
import Praser from '../../lib/praserAccounty';

//const BASE_URL = `https://bscscan.com/tokenholdings?a=${process.env.ADDRESS}`;
const BASE_URL = 'https://bscscan.com/';
export default async ({ query = [] }, res) => {

  const {
    ps = 10
  } = query;

  const fullUrl = `${BASE_URL}accounts?ps=${ps}`;

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