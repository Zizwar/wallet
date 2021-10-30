import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <div class="container">
        <div class="iphone">
          <div class="header">
            <div class="header-summary">
              <div class="summary-text">
                My Balance
              </div>
              <div class="summary-balance">
                $ 293.00
              </div>
              <div class="summary-text-2">
                +&nbsp;280.00
              </div>
            </div>
            <div class="user-profile">
              <img src="https://pbs.twimg.com/profile_images/834493671785525249/XdLjsJX_.jpg" class="user-photo" />
            </div>
          </div>
          <div class="content">
            <div class="card">
              <div class="upper-row">
                <div class="card-item">
                  <span>Active Balance</span>
                  <span>1&nbsp;804 <span class="dollar">$</span></span>
                </div>
                <div class="card-item">
                  <span>My Save it</span>
                  <span>2&nbsp;000 <span class="dollar">$</span></span>
                </div>
              </div>
              <div class="lower-row">
                <div class="icon-item">
                  <div class="icon"><i class="fas fa-upload"></i></div>
                  <div class="icon-text">Top-up</div>
                </div>
                <div class="icon-item">
                  <div class="icon"><i class="fas fa-money-check-alt"></i></div>
                  <div class="icon-text">Withdraw</div>
                </div>
                <div class="icon-item">
                  <div class="icon"><i class="fal fa-paper-plane"></i></div>
                  <div class="icon-text">Send</div>
                </div>
                <div class="icon-item">
                  <div class="icon"><i class="fal fa-wallet"></i></div>
                  <div class="icon-text">Pay</div>
                </div>
              </div>
            </div>
            <div class="transactions"><span class="t-desc">Recent Transactions</span>
              <div class="transaction">
                <div class="t-icon-container"></div>
                <div class="t-details">
                  <div class="t-title">99 designs</div>
                  <div class="t-time">03.45PM
                  </div>
                </div>
                <div class="t-amount">+&nbsp;750$
                </div>
              </div>

              <div class="transaction">
                <div class="t-icon-container"><img src="https://www.paypalobjects.com/webstatic/icon/pp144.png" class="t-icon" /></div>
                <div class="t-details">
                  <div class="t-title">Paypal </div>
                  <div class="t-time">03.45 AM
                  </div>
                </div>
                <div class="t-amount">+&nbsp;200$
                </div>
              </div>

              <div class="transaction">
                <div class="t-icon-container"><img src="https://cdn.dribbble.com/assets/dribbble-ball-192-ec064e49e6f63d9a5fa911518781bee0c90688d052a038f8876ef0824f65eaf2.png" class="t-icon"></div>
                <div class="t-details">
                  <div class="t-title">99 designs</div>
                  <div class="t-time">08.00PM
                  </div>
                </div>
                <div class="t-amount red">-&nbsp;120$
                </div>
              </div>
            </div>
          </div>
          <div class="drawer">
            <span><i class="fal fa-home"></i></span>
            <span><i class="fal fa-chart-bar"></i></span>
            <div class="menu-btn"><i class="fal fa-plus"></i></div>
            <span></span>
            <span><i class="fal fa-sticky-note"></i> </span>
            <span><i class="fal fa-user"></i> </span>
          </div>

        </div>
      </div>
      <div class="footer"></div>
    </body>
  )
}
