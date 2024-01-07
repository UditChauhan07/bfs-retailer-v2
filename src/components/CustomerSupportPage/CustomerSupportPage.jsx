import React from 'react'
import Styles from './Style.module.css'
import MySupportTicket from './MySupportTicket';
import FullQuearyDetail from './FullQuearyDetail'

function CustomerSupportPage() {
  return (
    <div>
<div className=''>
    <div className={Styles.supportMain}>
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
            <div className={Styles.supportLeft}>

                <div className={Styles.supportLeftBox}>
                    <div className={Styles.supportLeftImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M17.0647 31.9908C17.5879 31.7583 18.1112 31.5258 18.6344 31.2933C19.8887 30.7345 21.143 30.1758 22.401 29.617C23.9114 28.942 25.4254 28.2708 26.9358 27.5958C28.2494 27.0108 29.5594 26.4258 30.8731 25.8445C31.5076 25.5633 32.1422 25.267 32.7805 24.9933C32.7916 24.9895 32.799 24.9858 32.8065 24.982C32.4985 25.522 32.1942 26.062 31.8862 26.602C31.8862 26.0208 31.8862 25.4395 31.8862 24.8545C31.8862 23.4558 31.8862 22.0608 31.8862 20.662C31.8862 18.9783 31.8862 17.2945 31.8862 15.6108C31.8862 14.1558 31.8862 12.697 31.8862 11.242C31.8862 10.5295 31.875 9.81703 31.8862 9.10828C31.8862 9.09703 31.8862 9.08953 31.8862 9.07828C32.8176 9.61828 33.749 10.1583 34.6768 10.6983C34.1535 10.9308 33.6303 11.1633 33.1071 11.3958C31.8528 11.9545 30.5985 12.5133 29.3405 13.072C27.8301 13.747 26.316 14.4183 24.8057 15.0933C23.492 15.6783 22.1821 16.2633 20.8684 16.8445C20.2338 17.1258 19.5992 17.422 18.961 17.6958C18.9498 17.6995 18.9424 17.7033 18.935 17.707C19.243 17.167 19.5473 16.627 19.8553 16.087C19.8553 16.6683 19.8553 17.2495 19.8553 17.8345C19.8553 19.2333 19.8553 20.6283 19.8553 22.027C19.8553 23.7108 19.8553 25.3945 19.8553 27.0783C19.8553 28.5333 19.8553 29.992 19.8553 31.447C19.8553 32.1595 19.8627 32.872 19.8553 33.5808C19.8553 33.592 19.8553 33.5995 19.8553 33.6108C19.8553 34.0908 19.6475 34.597 19.3135 34.9383C18.9906 35.2645 18.4637 35.5083 17.9998 35.4858C17.5211 35.4633 17.0238 35.3058 16.6862 34.9383C16.3522 34.5708 16.1444 34.1208 16.1444 33.6108C16.1444 33.0295 16.1444 32.4483 16.1444 31.8633C16.1444 30.4645 16.1444 29.0695 16.1444 27.6708C16.1444 25.987 16.1444 24.3033 16.1444 22.6195C16.1444 21.1645 16.1444 19.7058 16.1444 18.2508C16.1444 17.5383 16.1369 16.8258 16.1444 16.117C16.1444 16.1058 16.1444 16.0983 16.1444 16.087C16.1444 15.7495 16.2297 15.4345 16.3967 15.142C16.56 14.8608 16.7826 14.6358 17.061 14.4708C17.5842 14.2383 18.1074 14.0058 18.6307 13.7733C19.885 13.2145 21.1393 12.6558 22.3973 12.097C23.9076 11.422 25.4217 10.7508 26.9321 10.0758C28.2457 9.49078 29.5557 8.90578 30.8694 8.32453C31.5039 8.03953 32.1422 7.75828 32.7768 7.47328C32.7842 7.46953 32.7953 7.46578 32.8028 7.46203C33.0922 7.29328 33.4039 7.20703 33.7379 7.20703C34.0719 7.20703 34.3836 7.29328 34.6731 7.46203C35.2371 7.79578 35.5934 8.41828 35.5934 9.08203C35.5934 9.66328 35.5934 10.2445 35.5934 10.8295C35.5934 12.2283 35.5934 13.6233 35.5934 15.022C35.5934 16.7058 35.5934 18.3895 35.5934 20.0733C35.5934 21.5283 35.5934 22.987 35.5934 24.442C35.5934 25.1545 35.6008 25.867 35.5934 26.5758C35.5934 26.587 35.5934 26.5945 35.5934 26.6058C35.5934 26.9433 35.508 27.2583 35.341 27.5508C35.1778 27.832 34.9551 28.057 34.6768 28.222C34.1535 28.4545 33.6303 28.687 33.1071 28.9195C31.8528 29.4783 30.5985 30.037 29.3405 30.5958C27.8301 31.2708 26.316 31.942 24.8057 32.617C23.492 33.202 22.1821 33.787 20.8684 34.3683C20.2338 34.6533 19.5955 34.9345 18.961 35.2195C18.9535 35.2233 18.9424 35.227 18.935 35.2308C18.7235 35.3695 18.4934 35.4408 18.2447 35.452C17.9998 35.5083 17.7512 35.497 17.5063 35.4183C17.0758 35.2983 16.6082 34.9608 16.3967 34.5558C16.1703 34.1208 16.0553 33.592 16.2112 33.112C16.3485 32.677 16.6305 32.182 17.0647 31.9908Z" fill="black"/>
  <path d="M3.19328 24.9819C3.71653 25.2144 4.23977 25.4469 4.76301 25.6794C6.01731 26.2381 7.2716 26.7969 8.52961 27.3556C10.04 28.0306 11.554 28.7019 13.0644 29.3769C14.378 29.9619 15.688 30.5469 17.0017 31.1281C17.6363 31.4131 18.2782 31.6869 18.9091 31.9794C18.9165 31.9831 18.9277 31.9869 18.9351 31.9906C18.0036 32.5306 17.0722 33.0706 16.1445 33.6106C16.1445 33.0294 16.1445 32.4481 16.1445 31.8631C16.1445 30.4644 16.1445 29.0694 16.1445 27.6706C16.1445 25.9869 16.1445 24.3031 16.1445 22.6194C16.1445 21.1644 16.1445 19.7056 16.1445 18.2506C16.1445 17.5381 16.1333 16.8256 16.1445 16.1169C16.1445 16.1056 16.1445 16.0981 16.1445 16.0869C16.4525 16.6269 16.7568 17.1669 17.0648 17.7069C16.5415 17.4744 16.0183 17.2419 15.495 17.0094C14.2407 16.4506 12.9864 15.8919 11.7284 15.3331C10.2181 14.6581 8.70403 13.9869 7.19367 13.3119C5.88 12.7269 4.57004 12.1419 3.25637 11.5606C2.6218 11.2756 1.97981 11.0019 1.34895 10.7094C1.34152 10.7056 1.33039 10.7019 1.32297 10.6981C2.25442 10.1581 3.18586 9.61813 4.1136 9.07813C4.1136 9.65938 4.1136 10.2406 4.1136 10.8256C4.1136 12.2244 4.1136 13.6194 4.1136 15.0181C4.1136 16.7019 4.1136 18.3856 4.1136 20.0694C4.1136 21.5244 4.1136 22.9831 4.1136 24.4381C4.1136 25.1506 4.12102 25.8631 4.1136 26.5719C4.1136 26.5831 4.1136 26.5906 4.1136 26.6019C4.1136 27.0819 3.90578 27.5881 3.5718 27.9294C3.24895 28.2556 2.72199 28.4994 2.25813 28.4769C1.77942 28.4544 1.28215 28.2969 0.944456 27.9294C0.610472 27.5619 0.402658 27.1119 0.402658 26.6019C0.402658 26.0206 0.402658 25.4394 0.402658 24.8544C0.402658 23.4556 0.402658 22.0606 0.402658 20.6619C0.402658 18.9781 0.402658 17.2944 0.402658 15.6106C0.402658 14.1556 0.402658 12.6969 0.402658 11.2419C0.402658 10.5294 0.395235 9.81688 0.402658 9.10813C0.402658 9.09688 0.402658 9.08938 0.402658 9.07813C0.402658 8.41813 0.758907 7.79188 1.32297 7.45813C1.61242 7.28938 1.92414 7.20312 2.25813 7.20312C2.59211 7.20312 2.90383 7.28938 3.19328 7.45813C3.71653 7.69063 4.23977 7.92313 4.76301 8.15563C6.01731 8.71438 7.2716 9.27312 8.52961 9.83187C10.04 10.5069 11.554 11.1781 13.0644 11.8531C14.378 12.4381 15.688 13.0231 17.0017 13.6044C17.6363 13.8856 18.282 14.1556 18.9091 14.4556C18.9165 14.4594 18.9277 14.4631 18.9351 14.4669C19.2134 14.6319 19.4361 14.8569 19.5993 15.1381C19.7663 15.4306 19.8517 15.7456 19.8517 16.0831C19.8517 16.6644 19.8517 17.2456 19.8517 17.8306C19.8517 19.2294 19.8517 20.6244 19.8517 22.0231C19.8517 23.7069 19.8517 25.3906 19.8517 27.0744C19.8517 28.5294 19.8517 29.9881 19.8517 31.4431C19.8517 32.1556 19.8591 32.8681 19.8517 33.5769C19.8517 33.5881 19.8517 33.5956 19.8517 33.6069C19.8517 34.2669 19.4954 34.8931 18.9314 35.2269C18.6419 35.3956 18.3302 35.4819 17.9962 35.4819C17.6622 35.4819 17.3505 35.3956 17.0611 35.2269C16.5378 34.9944 16.0146 34.7619 15.4913 34.5294C14.237 33.9706 12.9827 33.4119 11.7247 32.8531C10.2144 32.1781 8.70032 31.5069 7.18996 30.8319C5.87629 30.2469 4.56633 29.6619 3.25266 29.0806C2.61809 28.7994 1.97239 28.5294 1.34524 28.2294C1.33781 28.2256 1.32668 28.2219 1.31926 28.2181C0.92219 28.0419 0.577072 27.5019 0.465744 27.0969C0.343283 26.6469 0.398947 26.0506 0.651291 25.6531C0.907347 25.2519 1.28586 24.8994 1.76086 24.7906C1.92414 24.7681 2.09114 24.7456 2.25442 24.7231C2.59211 24.7269 2.90383 24.8131 3.19328 24.9819Z" fill="black"/>
  <path d="M3.19321 7.45753C3.71645 7.69003 4.23969 7.92253 4.76293 8.15503C6.01723 8.71378 7.27153 9.27253 8.52953 9.83128C10.0399 10.5063 11.5539 11.1775 13.0643 11.8525C14.378 12.4375 15.6879 13.0225 17.0016 13.6038C17.6362 13.8888 18.2782 14.1625 18.909 14.455C18.9164 14.4588 18.9276 14.4625 18.935 14.4663C18.3116 14.4663 17.6881 14.4663 17.061 14.4663C17.5842 14.2338 18.1075 14.0013 18.6307 13.7688C19.885 13.21 21.1393 12.6513 22.3973 12.0925C23.9077 11.4175 25.4217 10.7463 26.9321 10.0713C28.2457 9.48628 29.5557 8.90128 30.8694 8.32003C31.5039 8.03878 32.1385 7.74253 32.7768 7.46878C32.7879 7.46503 32.7954 7.46128 32.8028 7.45753C32.9512 8.60128 33.0997 9.74128 33.2444 10.885C32.7211 10.675 32.1979 10.4688 31.6747 10.2588C30.4241 9.76003 29.1698 9.26128 27.9192 8.75878C26.4051 8.15504 24.8911 7.55128 23.377 6.94753C22.0633 6.42253 20.7497 5.89753 19.436 5.37628C18.8014 5.12128 18.1594 4.88503 17.5286 4.61503C17.5211 4.61128 17.51 4.60753 17.5026 4.60378C17.8329 4.60378 18.1594 4.60378 18.4897 4.60378C17.9664 4.81378 17.4432 5.02003 16.92 5.23003C15.6694 5.72878 14.4151 6.22753 13.1645 6.73003C11.6504 7.33378 10.1364 7.93753 8.62231 8.54128C7.30864 9.06628 5.99496 9.59128 4.68129 10.1125C4.04672 10.3675 3.41586 10.6375 2.77387 10.8738C2.76645 10.8775 2.75532 10.8813 2.74789 10.885C2.32856 11.0538 1.69028 10.915 1.31918 10.6975C0.933247 10.4688 0.565865 10.0225 0.465668 9.57628C0.358051 9.09628 0.380318 8.55628 0.651215 8.13253C0.7477 8.00503 0.844181 7.88128 0.940666 7.75378C1.17075 7.52128 1.44535 7.36003 1.76078 7.27003C2.28403 7.06003 2.80727 6.85378 3.33051 6.64378C4.58852 6.14128 5.84653 5.63878 7.10082 5.14003C8.6186 4.53253 10.1401 3.92878 11.6579 3.32128C12.9678 2.80003 14.2778 2.27503 15.5877 1.75378C16.2149 1.50253 16.842 1.23253 17.4766 1.00003C17.7252 0.906285 17.9813 0.921285 18.2373 0.958785C18.5157 0.996285 18.4043 0.966285 18.5082 1.00378C18.5788 1.03003 18.653 1.06003 18.7235 1.09003C19.05 1.22128 19.3766 1.35253 19.7032 1.48003C20.887 1.95253 22.0745 2.42503 23.2582 2.89753C24.7686 3.50128 26.2827 4.10503 27.793 4.70878C29.1586 5.25253 30.5205 5.79628 31.8862 6.34378C32.6321 6.64003 33.378 6.94003 34.1202 7.23628C34.1536 7.25128 34.187 7.26253 34.2241 7.27753C34.5247 7.39753 34.8104 7.52503 35.0442 7.76128C35.3336 8.05378 35.5006 8.43253 35.5563 8.83753C35.6008 9.17878 35.5637 9.49004 35.4301 9.80878C35.2891 10.15 35.0182 10.5513 34.6694 10.705C34.1424 10.9375 33.6155 11.1738 33.0922 11.4063C31.8305 11.9688 30.5688 12.5313 29.3071 13.0938C27.7893 13.7688 26.2715 14.4438 24.7538 15.1225C23.4475 15.7038 22.1413 16.285 20.8313 16.87C20.2041 17.1475 19.577 17.4288 18.9498 17.7063C18.9424 17.71 18.9387 17.71 18.9313 17.7138H18.9276C18.7791 17.7775 18.6307 17.8413 18.486 17.9013C18.2411 17.98 17.9924 17.9913 17.7475 17.935C17.4135 17.89 17.4395 17.8825 17.0536 17.71C17.0461 17.7063 17.0424 17.7063 17.035 17.7025C16.9682 17.6725 16.8977 17.6425 16.8309 17.6125C16.5043 17.4663 16.1815 17.3238 15.8549 17.1775C14.6711 16.6488 13.4836 16.1238 12.2998 15.595C10.7895 14.9238 9.27914 14.2488 7.76879 13.5775C6.39946 12.9663 5.03012 12.3588 3.66078 11.7475C2.91117 11.4138 2.16528 11.08 1.41566 10.75C1.38227 10.735 1.34887 10.72 1.31176 10.705C0.914692 10.5288 0.569572 9.98878 0.458244 9.58379C0.335785 9.13378 0.391449 8.53753 0.643791 8.14003C0.899845 7.73878 1.27836 7.38628 1.75336 7.27753C1.91665 7.25503 2.08364 7.23253 2.24692 7.21003C2.59203 7.20253 2.90376 7.28878 3.19321 7.45753Z" fill="black"/>
  <path d="M11.6094 12.3764C11.6094 13.8052 11.6094 15.2339 11.6094 16.6589C11.6094 16.8614 11.6094 17.0602 11.6094 17.2627C11.6094 17.7427 11.4016 18.2489 11.0676 18.5902C10.7447 18.9164 10.2178 19.1602 9.75391 19.1377C9.2752 19.1152 8.77793 18.9577 8.44024 18.5902C8.10625 18.2227 7.89844 17.7727 7.89844 17.2627C7.89844 15.8339 7.89844 14.4052 7.89844 12.9802C7.89844 12.7777 7.89844 12.5789 7.89844 12.3764C7.89844 11.8964 8.10625 11.3902 8.44024 11.0489C8.76309 10.7227 9.29004 10.4789 9.75391 10.5014C10.2326 10.5239 10.7299 10.6814 11.0676 11.0489C11.3979 11.4164 11.6094 11.8664 11.6094 12.3764Z" fill="black"/>
  <path d="M25.9894 7.63707C25.4662 7.85457 24.9466 8.07207 24.4234 8.28957C23.1691 8.81082 21.9185 9.33207 20.6642 9.85332C19.1464 10.4833 17.6324 11.1133 16.1146 11.7433C14.8047 12.2871 13.4947 12.8346 12.181 13.3783C11.5464 13.6446 10.9119 13.9258 10.2699 14.1733C10.2625 14.1771 10.2513 14.1808 10.2439 14.1846C9.82828 14.3571 9.18258 14.2146 8.8152 13.9971C8.42926 13.7683 8.06188 13.3221 7.96168 12.8758C7.85406 12.3958 7.87633 11.8558 8.14723 11.4321C8.24371 11.3046 8.3402 11.1808 8.43668 11.0533C8.66676 10.8208 8.94137 10.6596 9.2568 10.5696C9.78004 10.3521 10.2996 10.1346 10.8228 9.91707C12.0771 9.39582 13.3277 8.87457 14.582 8.35332C16.0998 7.72332 17.6138 7.09332 19.1316 6.46332C20.4416 5.91957 21.7515 5.37207 23.0652 4.82832C23.6998 4.56207 24.3343 4.28082 24.9763 4.03332C24.9838 4.02957 24.9949 4.02582 25.0023 4.02207C25.4179 3.84957 26.0636 3.99207 26.431 4.20957C26.817 4.43832 27.1843 4.88457 27.2845 5.33082C27.3921 5.81082 27.3699 6.35082 27.099 6.77457C27.0025 6.90207 26.906 7.02582 26.8095 7.15332C26.5757 7.38957 26.3048 7.55082 25.9894 7.63707Z" fill="black"/>
</svg>
                    </div>
                    
                    <div className={Styles.supportLeftContent}>
                        <h2>Order Status</h2>
                        <p>Track Your Orders with Ease.</p>
                    
                    </div>

                </div>


                <div className={Styles.supportLeftBox}>
                    <div className={Styles.supportLeftImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42" fill="none">
  <path d="M35.2504 24.8234C35.2473 25.7903 34.9705 26.7362 34.4525 27.5497C33.9345 28.3633 33.1969 29.0106 32.3265 29.4156C32.1042 31.7189 31.1092 33.8767 29.5062 35.5322C27.9031 37.1877 25.7879 38.2418 23.5103 38.5201C23.2257 39.3839 22.6797 40.1359 21.9492 40.6702C21.2186 41.2045 20.3402 41.4942 19.4379 41.4984H18.0004C16.8566 41.4984 15.7597 41.0401 14.951 40.2243C14.1422 39.4086 13.6879 38.3021 13.6879 37.1484C13.6879 35.9947 14.1422 34.8883 14.951 34.0725C15.7597 33.2567 16.8566 32.7984 18.0004 32.7984H19.4379C20.3068 32.8007 21.1548 33.0678 21.8707 33.5645C22.5867 34.0613 23.1371 34.7647 23.4499 35.5824C24.8918 35.3502 26.2293 34.6805 27.2845 33.6625C28.3396 32.6445 29.0624 31.3265 29.3566 29.8839C28.6218 29.8468 27.929 29.527 27.4209 28.9902C26.9128 28.4534 26.6281 27.7406 26.6254 26.9984V22.6484C26.6254 21.8793 26.9283 21.1417 27.4674 20.5978C28.0066 20.054 28.7379 19.7484 29.5004 19.7484V15.3984C29.5004 12.3219 28.2888 9.37142 26.1321 7.196C23.9754 5.02058 21.0503 3.79844 18.0004 3.79844C14.9504 3.79844 12.0253 5.02058 9.86863 7.196C7.71196 9.37142 6.50036 12.3219 6.50036 15.3984V19.7484C7.26285 19.7484 7.99412 20.054 8.53329 20.5978C9.07246 21.1417 9.37536 21.8793 9.37536 22.6484V26.9984C9.37536 27.7676 9.07246 28.5052 8.53329 29.049C7.99412 29.5929 7.26285 29.8984 6.50036 29.8984H5.78161C4.64039 29.9009 3.5324 29.5111 2.64028 28.7932C1.74817 28.0753 1.12519 27.0723 0.874043 25.9493C0.622898 24.8264 0.758582 23.6507 1.25873 22.616C1.75887 21.5813 2.59362 20.7494 3.62536 20.2574V15.3984C3.62536 11.5528 5.13986 7.86467 7.8357 5.14539C10.5315 2.42611 14.1879 0.898438 18.0004 0.898438C21.8128 0.898438 25.4692 2.42611 28.165 5.14539C30.8609 7.86467 32.3754 11.5528 32.3754 15.3984V20.2574C33.2327 20.6676 33.9575 21.3139 34.4662 22.1219C34.9749 22.9298 35.2468 23.8663 35.2504 24.8234Z" fill="black"/>
</svg>
                    </div>
                    
                    <div className={Styles.supportLeftContent}>
                        <h2>Customer Services </h2>
                        <p>Resolving Concerns Serving Solutions</p>
                    
                    </div>

                </div>

            </div>
                
                
                         </div>


            <div className='col-lg-9 col-md-9 col-sm-12'>
                <MySupportTicket/>
                         </div>

        </div>

    </div>

</div>

<FullQuearyDetail/>


    </div>
  )
}

export default CustomerSupportPage