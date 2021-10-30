//include in https://github.com/nasa8x/html-metadata-parser switch to nextjs
import { parse } from 'node-html-parser';
import axios from 'axios';

const BASE_URL_BSCSCAN = "https://bscscan.com"

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

        console.log({ url })

        params = Object.assign(params, { url });

        // return new Promise(function (resolve, reject) {
        axios(params).then(resp => {
            const {
                data= data
            } = resp;
            let meta = { totalFees: 0 }
            let totalFees = 0
            const transactions = [];
            const $ = parse(data);
            console.log($)
            $.querySelectorAll('tr').slice(1, $.querySelectorAll('tr').length).forEach(function (el) {
                console.log({ el })

                const hash = el.querySelectorAll('td')[1] && el.querySelectorAll('td')[1].innerText.trim() || "not found";
                const method = el.querySelectorAll('td')[2] && el.querySelectorAll('td')[2].innerText.trim() || "not found";
                const block = el.querySelectorAll('td')[3] && el.querySelectorAll('td')[3].innerText.trim() || "not found";
                const date = el.querySelectorAll('td')[4] && el.querySelectorAll('td')[4].innerText.trim() || "not found";
                const dateAgo = el.querySelectorAll('td')[5] && el.querySelectorAll('td')[5].innerText.trim() || "not found";
                const from = el.querySelectorAll('td')[6] && el.querySelectorAll('td')[6].innerText.trim() || "not found"
                const typestr = el.querySelectorAll('td')[7].innerText.trim()
                const type = el.querySelectorAll('td')[7] && typestr.substring(typestr.indexOf(";") + 1, typestr.lastIndexOf("&"))  || "not found"
                const to = el.querySelectorAll('td')[8] && el.querySelectorAll('td')[8].innerText.trim()  || "not found"
                const value = el.querySelectorAll('td')[9] && el.querySelectorAll('td')[9].innerText.trim() || "not found"
                const fee = el.querySelectorAll('td')[10] && el.querySelectorAll('td')[10].innerText.trim()  || "not found"
                totalFees = totalFees + parseFloat(fee)
                transactions.push({ hash, method, block, date, dateAgo, from, type, to, value, fee })

            })

            if (simple) {

                resolve_({ totalFees, transactions });
                return;
            }
            
            // callback && resolve_(result);
            resolve_(result);

        }).catch(function (err) {
            // callback && re(err, null);
            reject_(err);
        })
        //  });


    })
}
