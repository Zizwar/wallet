//include in https://github.com/nasa8x/html-metadata-parser switch to nextjs
import { parse } from 'node-html-parser';
import axios from 'axios';

const IMAGE_NOT_FOUND = "https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found-badge.png";
const BASE_URL_BSCSCAN = "https://bscscan.com"

const isUrl = (url) =>
    url && /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(url);

export default (url, simple) => {

    return new Promise((resolve_, reject_) => {
        if (!url) return reject_({ message: "not url :(" })
        let params = {
            method: 'get',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36 OPR/68.0.3618.63',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            }
        };

        //  url = setHttp(url)
        console.log({ url })
        //if (!isUrl(url)) return reject_({ message: "bad url :(" })

        params = Object.assign(params, { url });


        // return new Promise(function (resolve, reject) {
        axios(params).then(function ({ data = [] }) {
            const {
                totalusd, totaleth, layout, recordsfound, usdpercentagechange: _usdpercentagechange
            } = data;
            const usdpercentagechange = _usdpercentagechange// parse(_usdpercentagechange).querySelector('span').innerText || "";

            const meta = { totalusd, totaleth, recordsfound, usdpercentagechange }

            const tokens = [];
            const $ = parse(layout);
            $.querySelectorAll('tr').forEach(function (el) {
                console.log({ el })
                const _logo = el.querySelector('.u-sm-avatar').getAttribute('src');

                const logo = _logo ?
                    (BASE_URL_BSCSCAN + _logo) : IMAGE_NOT_FOUND;

                const name = el.querySelector('.media-body .font-weight-bold') && el.querySelector('.media-body .font-weight-bold').innerText || "not found";
                
                const token = el.querySelector('.media-body .font-size-1') && el.querySelector('.media-body .font-size-1').innerText || "not found";
                const priceBNB = el.querySelector('td:nth-child(7)') && el.querySelector('td:nth-child(7)').innerText || "not found";

                const price = el.querySelectorAll('td')[3] && el.querySelectorAll('td')[3].innerText.trim() || "not found";
                console.log("test"+el.querySelectorAll('td')[2].innerText.trim())
                const symbole = el.querySelectorAll('td')[2] && el.querySelectorAll('td')[2].innerText.trim() || "not found";

                tokens.push({ name, logo, token, priceBNB, price, symbole })

            })

            if (simple) {
                resolve_({ meta, tokens });
                return;
            }
            //// 
            const title = $.querySelector('title');
            // const tokenHoldings = $.querySelector(".js-sticky-header").innerHTML || "";
            const tokenHoldings = $.querySelector("#tb1").innerHTML || "";
            console.log({ title, tokenHoldings })
            const result = { tokenHoldings, title };

            // callback && resolve_(result);
            resolve_(result);

        }).catch(function (err) {
            // callback && re(err, null);
            reject_(err);
        })
        //  });


    })
}
