import Image from "next/image";
import { AiTwotoneSetting } from "react-icons/ai";

// FACTORY ADD FUJI TESTNET --> 0x2A9011Ec7d90721Cb6d6E7C222177D9E97C0CfA4

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border hover:bg-zinc-400 cursor-pointer lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Connect Wallet
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex animate-pulse place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://portfolio-jayendra.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            By Jayendra Madaram
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-[720px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-green-500 before:to-transparent before:blur-lg before:content-[''] after:absolute after:-z-10 after:h-[380px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-600 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <div className='absolute translate-x-1/5 top-1/3 w-1/3'>
        <div className='border  backdrop-blur-3xl w-11/12  rounded-xl'>
          {/**
           * Flex col
           * topBar
           * Token1 : Toke in input + token icon + token address +
           *  reverse token feilds button
           * Token2 : Token out
           * SwapButton [ approve + AMM Swap ]
           * Price Prediction by polling for both tokens setTimeOut 2sec
           * trigger price pred only after enterring val for one token [token1 choosen , token 2 choosen , token 1 edited]
           */}
          <div className='border-b flex items-center px-8 py-5 mb-2 border-gray-400 justify-between'>
            <div className='text-lg font-bold'>Swap Assets </div>
            <div className='hover:text-gray-500 hover:rotate-90 hover:scale-110 transition-transform cursor-pointer'>
              <AiTwotoneSetting size={30} />
            </div>
          </div>
          <div className='w-full flex justify-between'>
            <div>
              <div>INPUT + PLACE HOLDER</div>
              <div>Percentrage In</div>
            </div>
            <div>
              <div>Token Symbol + addr Concat</div>
              <div>Token Liquidity</div>
            </div>
          </div>
          <div className=' flex'>
            <div>LEFTLINE</div>
            <div>MIDDLE BUTTON</div>
            <div>RIGHT LINE</div>
          </div>
          <div className='w-full flex justify-between'>
            <div>
              <div>INPUT + PLACE HOLDER</div>
              <div>Ratio x*y=k</div>
            </div>
            <div>
              <div>Token Symbol + addr Concat</div>
              <div>Token Liquidity</div>
            </div>
          </div>
          <div className='w-full flex justify-center'>SWAP BUTTON</div>
        </div>
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Explore Pools{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore Available Pools Or Create New Pools / Add liquidity
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Swap{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Swap Tokens Using our AMM following [x*y = k]
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Token Action{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Mint exisitng Tokens to your address or Creat New Ones
          </p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About / Docs{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn How this project is Built and eplore Others
          </p>
        </a>
      </div>
    </main>
  );
}

// FUJI TESTNET

// OG contract
// 0xb87E90cdc7905FC002D5a5c764d1bc519FAd3d9E

/**
 * Token 1
 * 0x165deEe517c585c492903A8543f8BE464e789c18
 *
 * Token 2
 * 0x1D4d09F552812F108a53075976b82FAFAe3869C7
 *
 * Pool address
 * 0x74c63B8e62b22E365Cca42A74E510d6c4F102AFb
 */
