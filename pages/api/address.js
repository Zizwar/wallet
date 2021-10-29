
import Praser from '../../lib/praser';

//const BASE_URL = `https://bscscan.com/tokenholdings?a=${process.env.ADDRESS}`;
const BASE_URL = `https://bscscan.com/tokenholdingsHandler.aspx`;
export default async ({ query = [] }, res) => {

  const {
    a = "",
    q = "",
    p = 1,
    f = 0,
    h = 0,
    sort = "total_price_usd",
    order = "desc",
    pUsd24hrs = "",//455.8,
    pBtc24hrs ="",// 0.007731,
    pUsd = "",//496.17,
    fav = "",
    langMsg = "A%20total%20of%20XX%20tokenSS%20found",
    langFilter = "Filtered%20by%20XX",
    langFirst = "First",
    langPage = "Page%20X%20of%20Y",
    langLast = "Last",
    ps = 25
  } = query;

  const fullUrl = `${BASE_URL}?&a=${a}&q=${q}&p=${p}&f=${f}&h=${h}&sort=${sort}&order=${order}&pUsd24hrs=${pUsd24hrs}&pBtc24hrs=${pBtc24hrs}&pUsd=${pUsd}&fav=${fav}&langMsg=${langMsg}&langFilter=${langFilter}&langFirst=${langFirst}&langPage=${langPage}&langLast=${langLast}&ps=${ps}`;

  try {
    const data = await Praser(fullUrl, true);
    console.log("##data=>",data)
    const status = data ? "ok" : "no"
    res.json({ data, status })
    // res.json({ resault, status: "ok" })


  } catch (error) {
    console.error(error);

  }
}