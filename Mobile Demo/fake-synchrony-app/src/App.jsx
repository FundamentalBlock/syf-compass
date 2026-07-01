import { useEffect, useState } from 'react'

function Loading({ onFinish }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // fade in
    const t1 = setTimeout(() => setVisible(true), 50)
    // stay visible for 1800ms, then fade out
    const t2 = setTimeout(() => setVisible(false), 1850)
    // after fade-out (duration 700ms) finish
    const t3 = setTimeout(() => onFinish(), 2600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onFinish])

  return (
    <div className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center space-x-4">
        <img src="/synchrony%20logo.png" alt="synchrony logo" className="w-8 h-auto object-contain" />
        <div className="text-3xl font-medium tracking-wide">synchrony</div>
      </div>
    </div>
  )
}

function AccountCard({ title, balance, due }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-base font-semibold text-slate-900">{title}</h4>
          <p className="text-sm text-slate-500 mt-2">Current Balance</p>
          <p className="mt-2 text-2xl font-bold">{balance}</p>
          <div className="h-1 w-16 bg-amber-300 mt-2 rounded" />
          <p className="mt-3 text-sm text-slate-500">Payment Due <span className="font-semibold">{due}</span></p>
        </div>
          <div className="flex flex-col items-end">
            <div className="w-16 h-10 mb-2 rounded-lg bg-slate-100 flex items-center justify-center text-xl">💳</div>
            <div className="text-sm text-slate-400">xxxx 3456</div>
          </div>
      </div>
    </div>
  )
}

function Home({ onMoreClick }) {
  return (
    <div className="w-full max-w-[390px] h-[844px] rounded-[42px] shadow-2xl overflow-hidden relative bg-gradient-to-b from-[#114455] to-[#0f3b4a]">
      <div className="px-6 pt-8 pb-4">
        <h2 className="text-3xl text-white font-semibold">Good Morning</h2>
      </div>

      <div className="px-4 space-y-4 pb-28">
        <AccountCard title="Synchrony Home™" balance="$500.00" due="Oct 25" />
        <AccountCard title="CareCredit" balance="$300.00" due="Oct 30" />
        <AccountCard title="Verizon" balance="$100.00" due="Nov 3" />
      </div>

      <nav className="absolute bottom-0 left-0 right-0 border-t border-slate-700 bg-[#0c3a44] px-6 py-3 flex items-center justify-between text-sm text-slate-200">
        <div className="flex flex-col items-center text-amber-300 font-semibold">
          <span className="text-2xl mb-1">🏦</span>
          <span>Accounts</span>
        </div>
        <div className="flex flex-col items-center text-slate-200">
          <span className="text-2xl mb-1">$</span>
          <span>Payments</span>
        </div>
        <div className="flex flex-col items-center text-slate-200">
          <span className="text-2xl mb-1">🛍️</span>
          <span>Marketplace</span>
        </div>
        <button type="button" onClick={onMoreClick} className="flex flex-col items-center text-slate-200 focus:outline-none">
          <span className="text-2xl mb-1">⋯</span>
          <span>More</span>
        </button>
      </nav>
    </div>
  )
}

function More({ onShopClick, onBack }) {
  return (
    <div className="w-full max-w-[390px] h-[844px] rounded-[42px] shadow-2xl overflow-hidden relative bg-gradient-to-b from-[#114455] to-[#0f3b4a]">
      <div className="px-6 pt-8 pb-4 flex items-center justify-between">
        <button onClick={onBack} className="text-slate-200 text-sm opacity-80 hover:opacity-100">Back</button>
        <h2 className="text-3xl text-white font-semibold">More</h2>
        <div className="w-10" />
      </div>

      <div className="px-4 space-y-4 pb-28">
        <div className="rounded-3xl bg-slate-900/80 p-5 shadow-sm border border-slate-700">
          <div className="text-sm text-slate-400 uppercase tracking-[0.2em]">App</div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold text-white">Shop</div>
              <div className="text-sm text-slate-400 mt-1">Browse Amazon inside Synchrony</div>
            </div>
            <button onClick={onShopClick} className="rounded-2xl bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200">
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AmazonShop({ onBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9ac5e7] px-4 py-6">
      <div className="w-full max-w-[390px] h-[844px] rounded-[42px] shadow-2xl overflow-hidden relative bg-white">
        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="relative z-10 h-full flex flex-col">
          <header className="bg-[#131921] px-5 py-4 flex items-center justify-between">
            <button onClick={onBack} className="text-slate-200 text-sm opacity-80 hover:opacity-100">Back</button>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#ff9900]">amazon</span>
              <span className="text-sm text-slate-200">prime</span>
            </div>
            <div className="w-10" />
          </header>

          <div className="px-5 py-4 bg-[#232f3e]">
            <div className="rounded-md bg-slate-800 text-slate-300 px-3 py-2 text-sm">Search Amazon</div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-100 text-slate-900">
            <section className="rounded-3xl bg-[#ffd814] p-5">
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-[0.15em]">Today's Deals</div>
              <div className="mt-3 text-2xl font-bold">Shop deals on top favorites</div>
              <div className="mt-4 h-40 rounded-3xl bg-slate-300 flex items-center justify-center text-slate-500">Banner image placeholder</div>
            </section>

            <section className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Sponsored</div>
                  <div className="text-lg font-semibold mt-2">Top picks for you</div>
                </div>
                <button className="rounded-full bg-[#febd69] px-3 py-1 text-sm font-semibold">See all</button>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="grid grid-cols-[95px_minmax(0,1fr)] gap-3 items-center">
                  <div className="h-24 rounded-3xl bg-slate-300 flex items-center justify-center text-slate-500">Image</div>
                  <div>
                    <div className="text-sm font-semibold">Everyday Essentials</div>
                    <div className="text-sm text-slate-500 mt-1">Save on household favorites.</div>
                  </div>
                </div>
                <div className="grid grid-cols-[95px_minmax(0,1fr)] gap-3 items-center">
                  <div className="h-24 rounded-3xl bg-slate-300 flex items-center justify-center text-slate-500">Image</div>
                  <div>
                    <div className="text-sm font-semibold">Electronics Deals</div>
                    <div className="text-sm text-slate-500 mt-1">Fast shipping and low prices.</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <div className="text-lg font-semibold">Trending on Amazon</div>
              <div className="grid gap-3">
                {['Echo Dot', 'Wireless Headphones', 'Kitchen Mixer'].map((item) => (
                  <div key={item} className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="h-28 rounded-3xl bg-slate-300 flex items-center justify-center text-slate-500">Image</div>
                    <div className="mt-3 text-sm font-semibold">{item}</div>
                    <div className="mt-1 text-sm text-slate-500">From Amazon</div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold">$19.99</span>
                      <button className="rounded-xl bg-[#ffd814] px-3 py-2 text-sm font-semibold">Buy</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [showHome, setShowHome] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [showShop, setShowShop] = useState(false)

  if (!showHome) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#9ac5e7]">
        <div className="w-full max-w-[390px] h-[844px] rounded-[42px] shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f3b4a] to-[#0b2b35]" />
          <Loading onFinish={() => setShowHome(true)} />
        </div>
      </div>
    )
  }

  if (showShop) {
    return <AmazonShop onBack={() => setShowShop(false)} />
  }

  if (showMore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#9ac5e7]">
        <More onShopClick={() => setShowShop(true)} onBack={() => setShowMore(false)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9ac5e7]">
      <Home onMoreClick={() => setShowMore(true)} />
    </div>
  )
}

export default App
