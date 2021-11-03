import Image from "next/image";
import React, { useState, useRef } from "react";
export default function Home({ resJson = [] }) {
  const [address, setAddress] = useState('');
  const [res, setRes] = useState(resJson);
  const inputRef = useRef();

  const submitHandler = async (e) => {

    e.preventDefault();
    // setAddress(inputRef.current.value);

    try {

      const resJson = await getWallet(inputRef.current.value);
      setRes(resJson)
      // alert(JSON.stringify(resJson))
      //console.log({resJson})
    } catch (error) {
      console.error(error);
    }

  }


  const { data = [] } = res;
  return (
    <body>
      <div className="container">
        <div className="iphone">
          <form onSubmit={submitHandler}>
            <input placeholder="0xdef90xxxxxxxxxxxxxxxxxxx" style={{ width: '70%' }} ref={inputRef} />
            <input type="submit" value="Swith" />
          </form>
          <div className="header">
            <div className="header-summary">
              <div className="summary-text">My Balance</div>
              <div className="summary-balance">{data.meta?.totalusd}</div>
              <div
                className="summary-text-2"
                dangerouslySetInnerHTML={{
                  __html: data.meta?.usdpercentagechange,
                }}
              ></div>
            </div>
            <div className="user-profile">
              <Image
                src="/logo.png"
                height="100%"
                width="100%"
                className="user-photo"
              />
            </div>
          </div>
          <div className="content">
            <div className="card">
              <div className="upper-row">
                <div className="card-item">
                  <span>Active Balance</span>
                  <span>

                    {data.meta?.totaleth} <span className="dollar">BNB</span>
                  </span>
                </div>
                <div className="card-item">
                  <span>My Save it</span>
                  <span>

                    {data.meta?.totalusd}
                    <span className="dollar">$</span>
                  </span>
                </div>
              </div>
              <div className="lower-row">
                <div className="icon-item">
                  <div className="icon">
                    <i className="fas fa-upload"></i>
                  </div>
                  <div className="icon-text">Top-up</div>
                </div>
                <div className="icon-item">
                  <div className="icon">
                    <i className="fas fa-money-check-alt"></i>
                  </div>
                  <div className="icon-text">Withdraw</div>
                </div>
                <div className="icon-item">
                  <div className="icon">
                    <i className="fal fa-paper-plane"></i>
                  </div>
                  <div className="icon-text">Send</div>
                </div>
                <div className="icon-item">
                  <div className="icon">
                    <i className="fal fa-wallet"></i>
                  </div>
                  <div className="icon-text">Pay</div>
                </div>
              </div>
            </div>
            <div className="transactions">
              <span className="t-desc">Tokens</span>

              {data.tokens &&
                data.tokens.map((item = [], index) => {
                  const {
                    name,
                    logo,
                    token,
                    priceBNB,
                    price,
                    symbole,
                    quantity,
                    profit,
                    profitBNB,
                  } = item;
                  return (
                    <div className="transaction" key={`tra${index}`}>
                      <div className="t-icon-container">
                        <Image
                          src={logo}
                          className="t-icon"
                          height="100%"
                          width="100%"
                        />
                      </div>
                      <div className="t-details">
                        <div className="t-title">{name} </div>
                        <div className="t-time">{quantity}</div>
                      </div>
                      <div className="t-amount">{profit}$</div>
                    </div>
                  );
                })}

            </div>
          </div>
          <div className="drawer">
            <span>
              <i className="fal fa-home"></i>
            </span>
            <span>
              <i className="fal fa-chart-bar"></i>
            </span>
            <div className="menu-btn">
              <i className="fal fa-plus"></i>
            </div>
            <span></span>
            <span>
              <i className="fal fa-sticky-note"></i>
            </span>
            <span>
              <i className="fal fa-user"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </body>
  );
}
async function getWallet(address, fullUrl) {
  const baseUrl = fullUrl ? "https://wallet.sloughi.io" : "";
  const res = await fetch(
    `${baseUrl}/api/address?a=${address || process.env.ADDRESS}`
  );
  const resJson = await res.json();
  return resJson;
}
export async function getServerSideProps(ctx) {

  const resJson = await getWallet(ctx?.query?.a || process.env.ADDRESS,true);

  return {
    props: { resJson }, // will be passed to the page component as props
  };
}
