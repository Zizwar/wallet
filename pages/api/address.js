
import Praser from '../../lib/praser';

//const BASE_URL = `https://bscscan.com/tokenholdings?a=${process.env.ADDRESS}`;
const BASE_URL = `https://bscscan.com/tokenholdingsHandler.aspx?&a=${process.env.ADDRESS}&q=&p=1&f=0&h=0&sort=total_price_usd&order=desc&pUsd24hrs=455.8&pBtc24hrs=0.007731&pUsd=496.17&fav=&langMsg=A%20total%20of%20XX%20tokenSS%20found&langFilter=Filtered%20by%20XX&langFirst=First&langPage=Page%20X%20of%20Y&langLast=Last&ps=25`;
export default async (_req, res) => {
    try {
        const result = await Praser(BASE_URL + (_req.address || ""),true);
      //  console.log(result)
        res.send(result.layout )
         // res.json({ result, status: "ok" })
   

      } catch (error) {
        console.error(error);
     
      }
      



}