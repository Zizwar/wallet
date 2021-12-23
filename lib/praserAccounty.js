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
            const accounts = [];
            const $ = parse(data);
            console.log($)
            $.querySelectorAll('tr').slice(1, $.querySelectorAll('tr').length).forEach(function (el) {
                console.log({ el })

                const rank = el.querySelectorAll('td')[0] && el.querySelectorAll('td')[0].innerText.trim() || "not found";
                const adress = el.querySelectorAll('td')[1] && el.querySelectorAll('td')[1].innerText.trim() || "not found";
                const name = el.querySelectorAll('td')[2] && el.querySelectorAll('td')[2].innerText.trim() || "not found";
                const balance = el.querySelectorAll('td')[3] && el.querySelectorAll('td')[3].innerText.trim() || "not found";
                const percentage = el.querySelectorAll('td')[4] && el.querySelectorAll('td')[4].innerText.trim() || "not found";
                const totalTransaction = el.querySelectorAll('td')[5] && el.querySelectorAll('td')[5].innerText.trim() || "not found"

                accounts.push({ rank, adress, name, balance, percentage, totalTransaction })

            })

            if (simple) {

                resolve_({ accounts });
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
