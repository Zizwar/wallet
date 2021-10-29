//include in https://github.com/nasa8x/html-metadata-parser switch to nextjs
import { parse } from 'node-html-parser';
import axios from 'axios';


const isUrl = (url) =>
    url && /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(url),
    setHttp = (url) => url.includes('http') ? url : `http://${url}`,
    trim = (s) => (s && s.trim && s.trim().replace(/\s+/g, ' ')) || '',




export default (url) => {

    return new Promise((resolve_, reject_) => {
        if (!url) return reject_({ message: "not url :(" })
        let params = {
            method: 'get',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36 OPR/68.0.3618.63',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            }
        };

        url = setHttp(url)
        console.log({ url })
        if (!isUrl(url))
            return reject_({ message: "bad url :(" })

        params = Object.assign(params, { url });


        // return new Promise(function (resolve, reject) {
        axios(params).then(function ({ data }) {

            const og = {}, meta = {};
            const $ = parse(data);

         
            const title = $.querySelector('title');
            const tokenHoldings = $.querySelector(".js-sticky-header").innerHTML || "";
 
            const result = { tokenHoldings,title };

            // callback && resolve_(result);
            resolve_(result);

        }).catch(function (err) {
            // callback && re(err, null);
            reject_(err);
        })
        //  });


    })
}