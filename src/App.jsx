import { useEffect, useState } from 'react';
import btcBuyAlert from './resources/BTC buy alarm.png';
import btcBuyLabel from './resources/BTC buy label.png';
import btcSellAlert from './resources/BTC sell alarm.png';
import btcStrategyTester from './resources/BTC strategy tester.png';
import btcTradeList from './resources/BTC-trade-list.png';
import btcWeeklyPrice from './resources/BTC weekly price.png';
import closerChart from './resources/closer-chart.png';
import inviteOnlyChart from './resources/invite-only  access chart.png';
import inviteOnlyAccess from './resources/invite-only access screenshot.png';
import strategySettings from './resources/strategy settings.png';

const links = {
  monthly: 'PAYHIP_MONTHLY_LINK_HERE',
  annual: 'PAYHIP_ANNUAL_LINK_HERE',
  payhip: 'PAYHIP_LINK_HERE',
  email: 'info@satsora.com',
};

const navItems = [
  ['How It Works', '#how-it-works'],
  ['Results', '#results'],
  ['Alerts', '#alerts'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
  ['Get Access', '#get-access'],
];

const whyBullets = [
  'Reduce emotional decision-making',
  'Focus on weekly BTC market structure',
  'Avoid reacting to every small move',
  'Follow clear BUY and SELL labels',
  'Use alerts when a signal is confirmed',
];

const whyCards = [
  {
    title: 'Weekly market structure focus',
    text: 'SatsOra is built around weekly BTC market behavior, where larger trend and momentum shifts are easier to evaluate than short-term noise.',
  },
  {
    title: 'BTC-first logic',
    text: 'The strategy is designed primarily around Bitcoin, while users may also test it on ETH and other liquid crypto pairs.',
  },
  {
    title: 'Private proprietary model',
    text: 'The exact formula, weights, thresholds, and Pine Script source code remain private. Users receive the signals, chart behavior, and setup guidance.',
  },
];

const howCards = [
  ['Trend context', 'The system analyzes whether broader market conditions support a directional move before showing a signal.'],
  ['Momentum confirmation', 'Signals are filtered through proprietary confirmation logic to reduce reaction to small market noise.'],
  ['BUY and SELL labels', 'Confirmed signals appear directly on the TradingView chart as clean BUY and SELL labels.'],
  ['Alert-ready workflow', 'Users can create separate TradingView alerts for BUY and SELL conditions and receive notifications after weekly confirmation.'],
];

const traderFitItems = [
  'Clear BUY and SELL labels on TradingView',
  'Weekly trend and momentum focused logic',
  'Designed for longer-term positioning, not scalping',
  'Alert-ready workflow for confirmed weekly signals',
  'No broker login, exchange API keys, or password sharing required',
];

const notForItems = [
  'Not for traders expecting certain outcomes',
  'Not for users expecting an automated trading bot',
  'Not for high-frequency or intraday scalping',
  'Not for anyone unwilling to manage risk independently',
];

const actionCards = [
  {
    image: btcWeeklyPrice,
    title: 'Major BTC weekly BUY and SELL zones',
    text: 'SatsOra displays clean BUY and SELL labels directly on the BTCUSD weekly chart, helping users focus on major trend changes instead of short-term noise.',
    alt: 'BTCUSD weekly TradingView chart with SatsOra BUY and SELL labels',
    width: 2832,
    height: 1642,
  },
  {
    image: btcBuyLabel,
    title: 'BUY signals near accumulation zones',
    text: 'BUY labels are designed to appear after confirmed major bottoming conditions, when market conditions may be improving.',
    alt: 'BTC chart example showing a SatsOra BUY label near a historical accumulation zone',
    width: 2838,
    height: 1640,
  },
  {
    image: inviteOnlyChart,
    title: 'Private invite-only TradingView chart access',
    text: "Users receive access through TradingView's invite-only script system. The strategy appears on the chart after access is granted.",
    alt: 'TradingView chart showing invite-only SatsOra strategy access',
    width: 2926,
    height: 1468,
  },
];

const transparencyCards = [
  ['Historical backtest shown', 'The page shows historical TradingView backtest examples with assumptions, including capital, order size, commission, and timeframe.'],
  ['No source code access', 'The strategy is private and invite-only. The Pine Script source code and proprietary logic are not included.'],
  ['No automated trading', 'SatsOra does not place trades, connect to brokers, or use exchange API keys. Users make their own trading decisions.'],
  ['Risk remains yours', 'Signals are analytical tools, not guarantees. Users are responsible for risk management and position sizing.'],
];

const credibilityItems = [
  ['Weekly timeframe', 'Designed for longer-term positioning'],
  ['BTCUSD historical example', 'See how signals appear on the chart'],
  ['Backtest results section', 'Review metrics and assumptions'],
  ['TradingView alerts supported', 'Set alerts after confirmation'],
];

const stats = [
  ['Total PnL', '+385.21%'],
  ['Max drawdown', '23.09%'],
  ['Profitable trades', '90% / 9 of 10'],
  ['Profit factor', '11.073'],
];

const assumptions = [
  'Market: BTCUSD',
  'Timeframe: 1W',
  'Period shown: August 2020 - June 2026',
  'Initial capital: $10,000',
  'Default order size: 50% of equity',
  'Commission: 0.1%',
  'Pyramiding: 0',
  'Slippage: 0 ticks',
  'Margin for long and short positions: 100%',
];

const accessSteps = [
  ['Choose payment method', 'Pay through Payhip or manually with crypto wallet transfer.'],
  ['Send your TradingView username', 'After payment, submit your TradingView username and payment details.'],
  ['Access is activated manually', 'Your username is added to the private invite-only script access list.'],
  ['Add SatsOra to your chart', 'Open TradingView, go to invite-only scripts, and add SatsOra to your BTCUSD weekly chart.'],
];

const includedItems = [
  'Private invite-only TradingView strategy access',
  'BTC-first weekly signal logic',
  'BUY and SELL labels on chart',
  'Long and short setup visibility',
  'Basic setup guide',
  'Alert setup instructions',
  'Backtest assumptions explained',
  'Future strategy updates while subscribed',
  'Access managed through TradingView',
  'Can be tested on ETH and other liquid crypto markets',
];

const monthlyFeatures = [
  'Keep this price while your subscription stays active',
  'Invite-only TradingView access',
  'BTC-first long and short signal logic',
  'Setup guide included',
  'Basic alert instructions',
  'Cancel according to Payhip/payment provider rules',
  'Later price for new users: $39/month',
];

const annualFeatures = [
  'One year of access',
  'TradingView invite-only access included',
  'Setup guide included',
  'Basic alert instructions',
  'Strategy updates while active',
  'Renewal price may change in future',
];

const wallets = [
  ['USDT', 'TRC20 or selected network', 'USDT_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
  ['USDC', 'Polygon or selected network', 'USDC_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
  ['BTC', 'Bitcoin', 'BTC_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
];

const faqs = [
  ['What is SatsOra?', 'SatsOra is a private invite-only TradingView strategy designed to display BTC-first weekly trend signals with BUY and SELL labels on the chart.'],
  ['What timeframe is SatsOra designed for?', 'SatsOra is designed primarily for the weekly timeframe. It is not intended for short-term scalping or high-frequency trading.'],
  ['Can I use alerts?', 'Yes. Users can create separate TradingView alerts for BUY and SELL signals and use "Once per bar close" for confirmed weekly notifications.'],
  ['Do I need to connect my exchange account?', 'No. SatsOra does not require broker login, exchange API keys, or password sharing. Access is handled through TradingView invite-only scripts.'],
  ['Is this financial advice?', 'No. SatsOra is an educational and analytical TradingView strategy tool. It does not provide financial, investment, or trading advice. Users are responsible for their own decisions, position sizing, and risk management.'],
  ['Can results be promised?', 'No. Backtests are historical simulations and future market conditions may be different.'],
  ['Do I get the Pine Script source code?', 'No. SatsOra is provided as a private invite-only TradingView strategy. The source code, formula, weights, thresholds, and internal model logic remain private.'],
  ['Does SatsOra work on ETH or other crypto?', 'SatsOra is BTC-first. Users may test it on ETH and other liquid crypto markets, but results can vary by asset and timeframe.'],
  ['Does it support long and short signals?', 'Yes. SatsOra can show BUY and SELL signals. Users may interpret SELL as an exit, risk-reduction, or short-side signal depending on their own strategy and risk tolerance.'],
  ['Does it place trades automatically?', 'No. SatsOra does not place trades, connect to your broker, or use exchange API keys. It displays signals on TradingView and can be connected to TradingView alerts.'],
  ['How do I get access after payment?', "After payment, submit your TradingView username and payment email or transaction hash. Access is added manually through TradingView's invite-only script system."],
  ['Can I cancel?', 'Payhip subscriptions can be canceled according to Payhip/payment provider rules. Crypto payments are manual and prepaid for the selected period.'],
  ['Do you offer refunds?', 'Because access is delivered digitally through TradingView, refunds are handled case by case and are not guaranteed.'],
];

function Button({ href, children, variant = 'primary' }) {
  return (
    <a className={`button ${variant === 'secondary' ? 'buttonSecondary' : ''}`} href={href}>
      {children}
    </a>
  );
}

function NoBreak({ children }) {
  return <span className="nowrap">{children}</span>;
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="sectionHeader">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function ScreenshotFigure({ image, title, text, alt, width, height, loading = 'lazy', fetchPriority, className = '', meta, onOpen }) {
  const handleOpen = () => {
    onOpen?.({ image, title, alt });
  };

  return (
    <figure className={`screenshotFigure ${className}`}>
      <button className="screenshotFrame" type="button" onClick={handleOpen} aria-label={`Enlarge screenshot: ${title}`}>
        <img src={image} alt={alt} width={width} height={height} loading={loading} decoding="async" fetchPriority={fetchPriority} />
      </button>
      <figcaption>
        {meta && <span className="captionMeta">{meta}</span>}
        <strong>{title}</strong>
        <span>{text}</span>
        <span className="zoomHint" aria-hidden="true">Click to enlarge</span>
      </figcaption>
    </figure>
  );
}

function ScreenshotLightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, onClose]);

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={onClose}>
      <button
        className="lightboxClose"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Close enlarged screenshot"
        autoFocus
      >
        Close
      </button>
      <figure className="lightboxContent" onClick={(event) => event.stopPropagation()}>
        <img src={selectedImage.image} alt={selectedImage.alt} />
        <figcaption>{selectedImage.title}</figcaption>
      </figure>
    </div>
  );
}

function PricingCard({ title, price, label, features, cta, href, featured = false }) {
  return (
    <article className={`pricingCard ${featured ? 'featured' : ''}`}>
      <p className="priceLabel">{label}</p>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <ul className="checkList">
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <Button href={href}>{cta}</Button>
    </article>
  );
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const mailto = `mailto:${links.email}?subject=SatsOra%20TradingView%20Access%20Request&body=Name:%0AEmail:%0ATradingView%20username:%0APayment%20method:%0APayhip%20order%20email%20or%20crypto%20transaction%20hash:%0AMessage:`;
  const openScreenshot = (screenshot) => setSelectedImage(screenshot);
  const closeScreenshot = () => setSelectedImage(null);

  return (
    <>
      <header className="siteHeader">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#top" aria-label="SatsOra home">
            <span>SatsOra</span>
            <small>BTC-first TradingView signals</small>
          </a>
          <div className="navLinks">
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <Button href="#get-access">Get Invite-Only Access</Button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="heroCopy">
            <p className="eyebrow">PRIVATE INVITE-ONLY TRADINGVIEW STRATEGY</p>
            <h1><NoBreak>SatsOra</NoBreak> BTC Weekly Trend Signals for <NoBreak>TradingView</NoBreak></h1>
            <p className="heroLead">
              A BTC-first weekly signal system designed to highlight major BUY and SELL zones on Bitcoin and other liquid crypto markets - without reacting to every candle.
            </p>
            <p>Built for longer-term crypto positioning, not short-term scalping. Signals appear directly on your TradingView chart and can be connected to TradingView alerts after confirmation.</p>
            <div className="buttonRow">
              <Button href="#get-access">Get Invite-Only Access</Button>
              <Button href="#results" variant="secondary">View Backtest Results</Button>
            </div>
            <ul className="heroTrustList">
              <li>Invite-only TradingView access</li>
              <li>Weekly BUY and SELL labels</li>
              <li>Alerts after confirmation</li>
            </ul>
            <p className="microcopy">Manual access activation after payment. TradingView username required.</p>
            <p className="riskLine">Educational tool only. Trading involves risk. Past performance does not guarantee future results.</p>
          </div>
          <ScreenshotFigure
            image={closerChart}
            title="Weekly BTCUSD chart with SatsOra BUY and SELL labels."
            text="Closer TradingView chart example showing how signals appear on major weekly trend zones."
            alt="Weekly BTCUSD TradingView chart showing historical SatsOra BUY and SELL labels."
            width={2784}
            height={1526}
            loading="eager"
            fetchPriority="high"
            meta="Historical example"
            className="heroScreenshot"
            onOpen={openScreenshot}
          />
        </section>

        <section className="credibilityStrip" aria-label="SatsOra product overview">
          <div className="credibilityGrid">
            {credibilityItems.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section compactSection" id="for-traders">
          <SectionHeader title="Built for traders who want clearer weekly BTC structure">
            SatsOra is for crypto traders who want a structured Bitcoin TradingView strategy workflow without reacting to every short-term move.
          </SectionHeader>
          <div className="split">
            <article className="card iconCard">
              <h3>For traders who want</h3>
              <ul className="checkList">
                {traderFitItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="card iconCard">
              <h3>Who SatsOra is not for</h3>
              <ul className="checkList cautionList">
                {notForItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="why">
          <SectionHeader title="Crypto traders do not need more noise. They need structure.">
            Crypto markets move fast, and emotional decisions often lead to late entries, early exits, overtrading, and chasing candles. SatsOra is designed to give traders a structured way to read major BTC trend conditions using clear TradingView crypto strategy signals.
          </SectionHeader>
          <div className="split">
            <ul className="checkList largeList">
              {whyBullets.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="cardGrid">
            {whyCards.map((card) => (
                <article className="card iconCard" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="how-it-works">
          <SectionHeader title="How SatsOra helps you read the market" />
          <div className="fourGrid">
            {howCards.map(([title, text], index) => (
              <article className="card featureCard numberedCard" key={title}>
                <span className="cardNumber">{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="warningBox">SatsOra is not an automated trading bot and does not place trades for you. It is a TradingView strategy tool designed to support your own analysis and decision-making.</p>
        </section>

        <section className="section" id="strategy-action">
          <SectionHeader title="See SatsOra in action">
            Real TradingView examples showing how SatsOra displays major BTC trend signals on the weekly chart.
          </SectionHeader>
          <div className="screenshotGrid">
            {actionCards.map((card) => <ScreenshotFigure key={card.title} {...card} onOpen={openScreenshot} />)}
          </div>
          <p className="smallDisclaimer">Historical chart examples are for educational and analytical purposes only. They do not guarantee future results.</p>
          <div className="inlineCta">
            <Button href="#pricing">View Pricing</Button>
          </div>
        </section>

        <section className="section band" id="results">
          <SectionHeader title="Backtest and performance transparency">
            Performance should be reviewed realistically. Backtests are historical and do not guarantee future results. Results depend on the asset, timeframe, fees, slippage, market conditions, and selected settings.
          </SectionHeader>
          <div className="resultsLayout">
            <ScreenshotFigure
              image={btcStrategyTester}
              title="BTCUSD weekly strategy tester result"
              text="Example BTCUSD weekly backtest from August 2020 to June 2026."
              alt="SatsOra BTC strategy tester historical backtest result"
              width={2826}
              height={1120}
              className="wideScreenshot"
              onOpen={openScreenshot}
            />
            <div className="statsGrid">
              {stats.map(([label, value]) => (
                <article className="statCard" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </div>
          <p>Example BTCUSD weekly backtest from August 2020 to June 2026 showed +385.21% total PnL, 90% profitable trades, 23.09% max drawdown, and an 11.073 profit factor.</p>
          <div className="assumptionsBox">
            <div>
              <h3>Backtest assumptions shown:</h3>
              <ul className="checkList">
                {assumptions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <ScreenshotFigure
              image={strategySettings}
              title="Strategy settings screenshot"
              text="TradingView settings used for the example backtest."
              alt="SatsOra TradingView strategy settings used for backtest"
              width={538}
              height={660}
              className="settingsScreenshot containScreenshot lightScreenshot"
              onOpen={openScreenshot}
            />
          </div>
          <p className="smallDisclaimer">Backtest results are historical and do not guarantee future performance. Trading involves risk. Live results may differ from simulated results because of market conditions, execution, fees, spread, slippage, and user decisions.</p>
          <div className="inlineCta">
            <Button href="#get-access">Get Invite-Only Access</Button>
          </div>
          <details className="tradeDetails">
            <summary>View historical trade list example</summary>
            <ScreenshotFigure
              image={btcTradeList}
              title="BTC historical trade list example"
              text="Historical simulated trades from the TradingView strategy tester."
              alt="BTC historical trade list shown in TradingView strategy tester"
              width={2930}
              height={1292}
              className="wideScreenshot"
              onOpen={openScreenshot}
            />
          </details>
        </section>

        <section className="section compactSection" id="transparent">
          <SectionHeader title="Transparent by design">
            SatsOra is presented as an analytical tool with clear limits, visible assumptions, and no automated trade execution.
          </SectionHeader>
          <div className="fourGrid">
            {transparencyCards.map(([title, text], index) => (
              <article className="card featureCard numberedCard" key={title}>
                <span className="cardNumber">{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="alerts">
          <SectionHeader title="TradingView alerts included">
            SatsOra can be connected to TradingView alerts so users can receive notifications when a weekly BUY or SELL signal is confirmed.
          </SectionHeader>
          <div className="alertGrid">
            <ScreenshotFigure
              image={btcBuyAlert}
              title="BUY alert"
              text='Create a separate SatsOra BUY alert and use "Once per bar close" so notifications are sent only after the weekly signal is confirmed.'
              alt="TradingView alert setup for SatsOra BUY signal"
              width={494}
              height={478}
              className="alertScreenshot containScreenshot lightScreenshot"
              onOpen={openScreenshot}
            />
            <ScreenshotFigure
              image={btcSellAlert}
              title="SELL alert"
              text='Create a separate SatsOra SELL alert and use "Once per bar close" for confirmed weekly SELL notifications.'
              alt="TradingView alert setup for SatsOra SELL signal"
              width={490}
              height={488}
              className="alertScreenshot containScreenshot lightScreenshot"
              onOpen={openScreenshot}
            />
          </div>
          <p className="noteBox">Recommended alert setting: Once per bar close. Recommended interval: 1W.</p>
        </section>

        <section className="section band" id="invite-only">
          <SectionHeader title="Protected invite-only TradingView access">
            SatsOra is delivered through TradingView's invite-only script access system. After payment, users send their TradingView username and payment email. Access is then added manually.
          </SectionHeader>
          <div className="inviteLayout">
            <ScreenshotFigure
              image={inviteOnlyAccess}
              title="Invite-only access screen"
              text="TradingView invite-only script access."
              alt="TradingView invite-only script access screen"
              width={1314}
              height={1012}
              className="inviteScreenshot containScreenshot"
              meta="TradingView invite-only script access"
              onOpen={openScreenshot}
            />
            <div>
              <ul className="trustList">
                {['No broker login required', 'No exchange API keys required', 'No password sharing', 'Source code remains private', 'Access is managed through TradingView'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="stepGrid">
            {accessSteps.map(([title, text], index) => (
              <article className="stepCard" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="what-you-get">
          <SectionHeader title="What you get with access" />
          <ul className="includedList">
            {includedItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="warningBox">This is not an automated trading bot. SatsOra does not place trades for you. It is a TradingView strategy tool designed to support your own analysis and decision-making.</p>
        </section>

        <section className="section band" id="pricing">
          <SectionHeader title="Founding Member Launch Offer">
            Early users can lock in launch pricing before the regular monthly price increases for new users.
          </SectionHeader>
          <div className="pricingGrid">
            <PricingCard title="Monthly Access" price="$19/month" label="FOUNDING MEMBER PRICE" features={monthlyFeatures} cta="Get Invite-Only Access" href={links.monthly} featured />
            <PricingCard title="Annual Launch Access" price="$149/year" label="BEST VALUE FOR EARLY USERS" features={annualFeatures} cta="Get Invite-Only Access" href={links.annual} />
          </div>
          <article className="afterPaymentBox">
            <h3>After payment</h3>
            <ol>
              <li>Complete checkout or crypto payment.</li>
              <li>Send your TradingView username and payment email.</li>
              <li>Your username is added to the invite-only access list.</li>
              <li>Add SatsOra to your TradingView chart.</li>
            </ol>
            <p>Access is activated manually, usually after payment details are checked.</p>
          </article>
          <p className="riskLine">Payhip subscriptions can be canceled according to Payhip/payment provider rules. Crypto payments are manual and prepaid for the selected period.</p>
        </section>

        <section className="section" id="get-access">
          <SectionHeader title="Choose your payment method" />
          <div className="paymentGrid">
            <article className="card paymentCard">
              <h3>Payhip Checkout</h3>
              <p>Use Payhip if you want to pay by card, PayPal, Apple Pay, Google Pay, or other available payment methods depending on checkout settings.</p>
              <div className="buttonRow">
                <Button href={links.monthly}>Monthly Access</Button>
                <Button href={links.annual} variant="secondary">Annual Access</Button>
              </div>
              <a className="textLink" href={links.payhip}>General Payhip checkout fallback</a>
            </article>
            <article className="card paymentCard">
              <h3>Crypto Wallet Transfer</h3>
              <p>Use crypto wallet transfer if you prefer to pay manually with crypto. After sending payment, submit your transaction hash, email, and TradingView username.</p>
              <Button href="#crypto-payment" variant="secondary">Show Crypto Payment Instructions</Button>
            </article>
          </div>
        </section>

        <section className="section band" id="crypto-payment">
          <SectionHeader title="Crypto payment instructions">
            Crypto payments are manual and irreversible. Please check the wallet address and network carefully before sending. Payments sent to the wrong address or wrong network may not be recoverable.
          </SectionHeader>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  {['Currency', 'Network', 'Wallet Address', 'Notes'].map((heading) => <th key={heading}>{heading}</th>)}
                </tr>
              </thead>
              <tbody>
                {wallets.map(([currency, network, wallet, notes]) => (
                  <tr key={currency}>
                    <td>{currency}</td>
                    <td>{network}</td>
                    <td><code>{wallet}</code></td>
                    <td>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <article className="accessFormCard">
            <h3>Submit access request</h3>
            <p className="formHelper">After payment, submit this form so your TradingView username can be added to the invite-only access list. This mailto form uses your email app; backend integration is still needed for an in-page success message.</p>
            <form action={mailto} method="post" encType="text/plain">
              <label>Name<input name="Name" autoComplete="name" /></label>
              <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
              <label>TradingView username<input name="TradingView username" required /></label>
              <label>Payment method<select name="Payment method"><option>Payhip</option><option>Crypto</option></select></label>
              <label>Payhip order email or crypto transaction hash<input name="Payment details" required /></label>
              <label>Message<textarea name="Message" rows="4"></textarea></label>
              <button type="submit">Submit Access Request</button>
            </form>
          </article>
        </section>

        <section className="section" id="faq">
          <SectionHeader title="FAQ" />
          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section finalCta">
          <SectionHeader title="Ready to add SatsOra to your TradingView chart?">
            Get invite-only access to a BTC-first weekly signal strategy designed for clearer long-term crypto trend analysis.
          </SectionHeader>
          <div className="buttonRow center">
            <Button href="#get-access">Get Invite-Only Access</Button>
            <Button href="#results" variant="secondary">View Backtest Results</Button>
          </div>
          <p className="microcopy">Educational tool only. Not financial advice. Past performance does not guarantee future results. Trading involves risk.</p>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="logo" href="#top"><span>SatsOra</span></a>
          <p>This product is independent and is not affiliated with, endorsed by, or sponsored by TradingView.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${links.email}`}>Contact: {links.email}</a>
          <a href="#crypto-payment">Terms of Access</a>
          <a href="#crypto-payment">Privacy Policy</a>
          <a href="#crypto-payment">Refund Policy</a>
          <span>Not affiliated with TradingView</span>
        </nav>
      </footer>
      <ScreenshotLightbox selectedImage={selectedImage} onClose={closeScreenshot} />
    </>
  );
}

export default App;
