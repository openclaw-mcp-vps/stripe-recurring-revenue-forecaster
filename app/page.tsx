export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For Solo SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict MRR Growth from{' '}
          <span className="text-[#58a6ff]">Stripe Data</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account and instantly see MRR forecasts, churn patterns, and growth trajectories — no spreadsheets required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Forecasting — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: 'MRR Forecast', desc: '12-month projection' },
            { stat: 'Churn Analysis', desc: 'Monthly & cohort view' },
            { stat: 'CSV Export', desc: 'Share with investors' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{item.stat}</div>
              <div className="text-[#8b949e] text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect unlimited Stripe accounts',
              'MRR & ARR forecasting dashboards',
              'Churn rate & cohort analysis',
              'Growth trajectory modeling',
              'Exportable PDF & CSV reports',
              'Stripe webhook auto-sync',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secured by Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You provide a read-only Stripe API key. We pull your subscription and invoice data to calculate MRR, churn, and growth metrics — we never store your raw payment data.',
            },
            {
              q: 'How accurate are the forecasts?',
              a: 'Forecasts are based on your historical growth rate, churn patterns, and current MRR. The more data you have, the more accurate the 12-month projection becomes.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your Lemon Squeezy customer portal at any time. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} MRR Forecaster. All rights reserved.
      </footer>
    </main>
  )
}
