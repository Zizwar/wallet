import Image from 'next/image'
export default function Home({ resJson = [] }) {
const {data = []} = resJson;
  return (
    <body>
      <div className="container">
        <div className="iphone">
          <div className="header">
            <div className="header-summary">
              <div className="summary-text">
                My Balance
              </div>
              <div className="summary-balance">
                {data.meta?.totalusd}
              </div>
              <div className="summary-text-2">
                +&nbsp;280.00
              </div>
            </div>
            <div className="user-profile">
              <Image src="https://pbs.twimg.com/profile_images/834493671785525249/XdLjsJX_.jpg"  height="100%"  width="100%" className="user-photo" />
            </div>
          </div>
          <div className="content">
            <div className="card">
              <div className="upper-row">
                <div className="card-item">
                  <span>Active Balance</span>
                  <span>1&nbsp;804 <span className="dollar">$</span></span>
                </div>
                <div className="card-item">
                  <span>My Save it</span>
                  <span>2&nbsp;000 <span className="dollar">$</span></span>
                </div>
              </div>
              <div className="lower-row">
                <div className="icon-item">
                  <div className="icon"><i className="fas fa-upload"></i></div>
                  <div className="icon-text">Top-up</div>
                </div>
                <div className="icon-item">
                  <div className="icon"><i className="fas fa-money-check-alt"></i></div>
                  <div className="icon-text">Withdraw</div>
                </div>
                <div className="icon-item">
                  <div className="icon"><i className="fal fa-paper-plane"></i></div>
                  <div className="icon-text">Send</div>
                </div>
                <div className="icon-item">
                  <div className="icon"><i className="fal fa-wallet"></i></div>
                  <div className="icon-text">Pay</div>
                </div>
              </div>
            </div>
            <div className="transactions"><span className="t-desc">Recent Transactions</span>
              <div className="transaction">
                <div className="t-icon-container"></div>
                <div className="t-details">
                  <div className="t-title">99 designs</div>
                  <div className="t-time">03.45PM
                  </div>
                </div>
                <div className="t-amount">+&nbsp;750$
                </div>
              </div>

              <div className="transaction">
                <div className="t-icon-container"><Image src="https://www.paypalobjects.com/webstatic/icon/pp144.png" className="t-icon" height="100%" width="100%"/></div>
                <div className="t-details">
                  <div className="t-title">Paypal </div>
                  <div className="t-time">03.45 AM
                  </div>
                </div>
                <div className="t-amount">+&nbsp;200$
                </div>
              </div>

              <div className="transaction">
                <div className="t-icon-container"><Image src="https://cdn.dribbble.com/assets/dribbble-ball-192-ec064e49e6f63d9a5fa911518781bee0c90688d052a038f8876ef0824f65eaf2.png" height="100%" width="100%" className="t-icon" /></div>
                <div className="t-details">
                  <div className="t-title">99 designs</div>
                  <div className="t-time">08.00PM
                  </div>
                </div>
                <div className="t-amount red">-&nbsp;120$
                </div>
              </div>
            </div>
          </div>
          <div className="drawer">
            <span><i className="fal fa-home"></i></span>
            <span><i className="fal fa-chart-bar"></i></span>
            <div className="menu-btn"><i className="fal fa-plus"></i></div>
            <span></span>
            <span><i className="fal fa-sticky-note"></i> </span>
            <span><i className="fal fa-user"></i> </span>
          </div>

        </div>
      </div>
      <div className="footer"></div>
    </body>
  )
}
export async function getStaticProps() {
  const res = await fetch(`https://wallet.sloughi.io/api/address?a=${process.env.ADDRESS}`)
  const resJson = await res.json()

  return {
    props:  {resJson} , // will be passed to the page component as props
  }
}