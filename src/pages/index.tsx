import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { useState } from "react"
import { useAccount, useBalance } from "wagmi"

export default function Home() {
   const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = useState(false)
   const [isConnectHighlighted, setIsConnectHighlighted] = useState(false)

   const { address } = useAccount()

	//useBalance
	const {data: balanceData} = useBalance({
		address: address,
	})

   const closeAll = () => {
      setIsNetworkSwitchHighlighted(false)
      setIsConnectHighlighted(false)
   }
   return (
      <>
         <Head>
            <title>WalletConnect | Next Starter Template</title>
            <meta name='description' content='Generated by create-wc-dapp' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <header>
            <div
               className={styles.backdrop}
               style={{
                  opacity:
                     isConnectHighlighted || isNetworkSwitchHighlighted ? 1 : 0,
               }}
            />
            <div className={styles.header}>
               <div className={styles.logo}>
                  <Image
                     src='/logo.svg'
                     alt='WalletConnect Logo'
                     height='32'
                     width='203'
                  />
               </div>
            </div>
         </header>
         <main className={styles.main}>
            <div className={styles.wrapper}>
               <div className={styles.container}>
                  <h1>Wagmi Test WEB3 Project</h1>
                  <div className={styles.content}>
                     <w3m-network-button />
                     <w3m-button />
					 {address ? <p>Your adress: <span className={styles.item}>{address}</span></p> : ''}
			   		 {balanceData ? <p>Balance: {balanceData?.formatted} {balanceData?.symbol} </p>: ''}
                  </div>
               </div>
               <div className={styles.footer}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.5}
                     stroke='currentColor'
                     height={16}
                     width={16}
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                     />
                  </svg>
                  <a
                     href='https://docs.walletconnect.com/web3modal/react/about?utm_source=next-starter-template&utm_medium=github&utm_campaign=next-starter-template'
                     target='_blank'
                  >
                     Check out the full documentation here
                  </a>
               </div>
            </div>
         </main>
      </>
   )
}
