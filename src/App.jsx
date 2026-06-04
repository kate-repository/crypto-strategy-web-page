import { useEffect, useState } from 'react';
import btcBuyAlert from './resources/BTC buy alarm.png';
import btcBuyLabel from './resources/BTC buy label.png';
import btcSellAlert from './resources/BTC sell alarm.png';
import btcStrategyTester from './resources/BTC strategy tester.png';
import btcWeeklyPrice from './resources/BTC weekly price.png';
import closerChart from './resources/closer-chart2.png';
import inviteOnlyChart from './resources/invite-only  access chart.png';
import inviteOnlyAccess from './resources/invite-only access screenshot.png';

const links = {
  monthly: 'PAYHIP_MONTHLY_LINK_HERE',
  annual: 'PAYHIP_ANNUAL_LINK_HERE',
  payhip: 'PAYHIP_LINK_HERE',
  email: 'info@satsora.com',
};

const navItems = [
  ['How It Works', '#how-it-works'],
  ['Results', '#historical-results'],
  ['Alerts', '#alerts'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
  ['Get Access', '#get-access'],
];

const whyBullets = [
  'Read weekly BTC trend structure clearly',
  'See BUY and SELL labels directly on the chart',
  'Filter out short-term candle noise',
  'Keep decisions focused on higher-timeframe shifts',
  'Configure alerts after a weekly signal confirms',
];

const whyCards = [
  {
    title: 'Weekly BTC trend focus',
    text: 'SatsOra turns higher-timeframe BTC trend structure into clear chart signals instead of reacting to short-term price movement.',
  },
  {
    title: 'BTC-first logic',
    text: 'The indicator is built around Bitcoin weekly analysis. It may be tested on other liquid crypto markets, but BTCUSD remains its primary focus.',
  },
  {
    title: 'Protected indicator logic',
    text: 'The formula, weights, thresholds, and Pine Script source remain private. Access includes the indicator, chart signals, and setup guidance.',
  },
];

const howCards = [
  ['Weekly trend context', 'SatsOra evaluates broader BTC trend structure before displaying a signal.'],
  ['Signal confirmation', 'Proprietary confirmation logic filters short-term movement and focuses on higher-timeframe changes.'],
  ['Clear BUY and SELL labels', 'Confirmed signals display directly on the TradingView chart as clear BUY and SELL labels.'],
  ['Alert-ready workflow', 'Configure separate TradingView alerts for confirmed weekly BUY and SELL signals.'],
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
    title: 'Clear BTC weekly BUY and SELL signals',
    text: 'SatsOra displays clear BUY and SELL labels directly on the BTCUSD weekly chart, keeping attention on major trend shifts instead of daily noise.',
    alt: 'BTCUSD weekly TradingView chart with SatsOra BUY and SELL labels',
    width: 2832,
    height: 1642,
  },
  {
    image: btcBuyLabel,
    title: 'BUY labels after weekly confirmation',
    text: 'Historical examples show how BUY labels appear after the indicator confirms a higher-timeframe change in BTC trend structure.',
    alt: 'BTC chart example showing a SatsOra BUY label near a historical accumulation zone',
    width: 2838,
    height: 1640,
  },
  {
    image: inviteOnlyChart,
    title: 'Private invite-only TradingView access',
    text: "Access is delivered through TradingView's invite-only script system. Once activated, SatsOra appears inside your TradingView indicators.",
    alt: 'TradingView chart showing invite-only SatsOra strategy access',
    width: 2926,
    height: 1468,
  },
];

const transparencyCards = [
  ['Historical results shown', 'Historical TradingView test results are presented with timeframe, capital, assumptions, and risk notes.'],
  ['Protected source logic', 'SatsOra is private and invite-only. Pine Script source code and proprietary indicator logic are not included.'],
  ['No automated trading', 'SatsOra does not place trades, connect to brokers, or use exchange API keys. Users make their own trading decisions.'],
  ['Independent decisions', 'Signals are educational tools, not guarantees. Users remain responsible for risk management and position sizing.'],
];

const credibilityItems = [
  ['No exchange connection', 'No API keys, broker login, or wallet connection required'],
  ['Manual activation', 'Invite-only access is reviewed and added personally'],
  ['Private TradingView script', 'The indicator logic remains protected'],
  ['Transparent limits', 'Historical examples include assumptions and risk notes'],
];

const heroFeatures = [
  ['Weekly Signal Logic', 'Built around the 1W BTC timeframe'],
  ['Clear BUY/SELL Labels', 'Signals appear directly on your TradingView chart'],
  ['No Exchange Connection', 'No API keys, broker login, or automated execution'],
];

const proofCards = [
  ['Fewer signals', 'Designed for weekly trend changes, not constant entries'],
  ['Cleaner decisions', 'BUY and SELL labels appear directly on the chart'],
  ['TradingView-native', 'Use it inside your existing TradingView workflow'],
];

const historicalMetrics = [
  ['Total Return', '+385.21%', 'Historical strategy return', 'positive'],
  ['Net Profit', '+$38,521', 'From a $10,000 simulation', 'positive'],
  ['Max Drawdown', '23.09%', 'Largest historical drawdown', 'neutral'],
  ['Profitable Trades', '90%', '9 winning trades out of 10', 'positive'],
  ['Profit Factor', '11.07', 'Gross profit divided by gross loss', 'positive'],
  ['Estimated CAGR', '~31.1%', 'Approximate annualized return', 'positive'],
];

const historicalAssumptions = [
  'BTCUSD weekly chart',
  'TradingView strategy tester',
  'Aug 1, 2020 – Jun 1, 2026',
  '$10,000 starting capital',
  '10 closed trades',
  'Historical results only',
  'Commissions, slippage, exchange spreads, execution timing, and live trading behavior may affect real results',
];

const accessSteps = [
  ['Purchase access', 'Choose monthly or yearly access.'],
  ['Send your TradingView username', 'This is required to activate the private script.'],
  ['Manual invite-only activation', 'Access is reviewed and added personally.'],
  ['Use inside TradingView', 'Add SatsOra to your chart and configure alerts.'],
];

const riskDisclaimer = 'Educational tool only. SatsOra does not provide financial advice. Crypto trading involves risk, and historical performance does not guarantee future results.';

const includedItems = [
  'Private invite-only TradingView indicator access',
  'BTC-first weekly signal logic built around 1W',
  'Clear BUY and SELL labels directly on chart',
  'Long and short setup visibility',
  'Basic setup guide',
  'Alert setup instructions',
  'Backtest assumptions explained',
  'Future strategy updates while subscribed',
  'Access managed through TradingView',
  'May be tested on other liquid crypto markets',
];

const monthlyFeatures = [
  'Keep this price while your subscription stays active',
  'Private invite-only TradingView indicator access',
  'BTC-first weekly BUY and SELL signal logic',
  'Setup guide included',
  'Basic alert instructions',
  'Cancel according to Payhip/payment provider rules',
  'Later price for new users: $39/month',
];

const annualFeatures = [
  'One year of access',
  'Private TradingView indicator access included',
  'Setup guide included',
  'Basic alert instructions',
  'Indicator updates while active',
  'Renewal price may change in future',
];

const wallets = [
  ['USDT', 'TRC20 or selected network', 'USDT_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
  ['USDC', 'Polygon or selected network', 'USDC_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
  ['BTC', 'Bitcoin', 'BTC_WALLET_ADDRESS_HERE', 'Send exact amount or equivalent'],
];

const faqs = [
  ['What is SatsOra?', 'SatsOra is a private BTC-first TradingView indicator that turns weekly trend structure into clear BUY and SELL labels directly on the chart.'],
  ['How often does it give signals?', 'SatsOra is built around the weekly BTC timeframe. It is designed for fewer, higher-timeframe signals, not daily alerts or scalping entries.'],
  ['Can I use alerts?', 'Yes. Configure separate TradingView alerts for BUY and SELL signals and use "Once per bar close" for confirmed weekly notifications.'],
  ['Is SatsOra an automated trading bot?', 'No. SatsOra is a TradingView indicator. It does not connect to an exchange, does not place trades, and does not require API keys.'],
  ['Does SatsOra guarantee profit?', 'No. SatsOra is an educational TradingView indicator. Crypto trading involves risk, and historical results do not guarantee future performance.'],
  ['Do I get the Pine Script source code?', 'No. SatsOra is delivered as a private invite-only TradingView indicator. The source code, formula, weights, thresholds, and internal logic remain protected.'],
  ['Can I use it for other crypto markets?', 'SatsOra is BTC-first. It may be tested on other liquid crypto markets, but the main positioning and historical results are based on BTCUSD weekly analysis.'],
  ['How should I interpret SELL signals?', 'SatsOra displays BUY and SELL labels. Users may interpret a SELL label as an exit, risk-reduction, or short-side signal based on their own strategy and risk tolerance.'],
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

function ScreenshotFigure({ image, title, text, alt, width, height, loading = 'lazy', fetchPriority, className = '', meta, zoomLabel = 'Click to enlarge chart', onOpen }) {
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
        <span className="zoomHint" aria-hidden="true">{zoomLabel}</span>
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
          <Button href="#get-access">Request Invite-Only Access</Button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="heroCopy">
            <p className="eyebrow">PRIVATE BTC-FIRST TRADINGVIEW INDICATOR</p>
            <h1><span className="headlinePrimary">Bitcoin Weekly Signals</span><span className="headlineLine">Inside TradingView</span></h1>
            <p className="heroLead">
              Turn BTC weekly trend structure into clear BUY and SELL signals directly inside TradingView. SatsOra is designed for traders who want fewer, higher-timeframe signals — not daily noise, scalping alerts, or candle-by-candle reactions.
            </p>
            <div className="buttonRow">
              <Button href="#get-access">Request Invite-Only Access</Button>
              <Button href="#historical-results" variant="secondary">See Historical Results</Button>
            </div>
            <p className="microcopy">Manual activation after payment. TradingView username required.</p>
            <div className="heroFeatureGrid">
              {heroFeatures.map(([title, text]) => (
                <article className="heroFeature" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
          <ScreenshotFigure
            image={closerChart}
            title="Clear BTC weekly BUY and SELL labels inside TradingView."
            text="This example shows how SatsOra displays higher-timeframe signal changes on a BTCUSD weekly chart."
            alt="Weekly BTCUSD TradingView chart showing historical SatsOra BUY and SELL labels."
            width={2048}
            height={1121}
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

        <section className="positioningSection" aria-label="SatsOra positioning">
          <div className="positioningCopy">
            <p className="eyebrow">Higher-timeframe clarity</p>
            <h2>Built for major BTC trend decisions — not market noise.</h2>
            <p>SatsOra is designed for traders who do not want constant alerts. The indicator focuses on higher-timeframe BTC trend changes and displays clear BUY and SELL labels directly inside TradingView.</p>
          </div>
          <div className="positioningCards">
            {proofCards.map(([title, text]) => (
              <article key={title}>
                <span aria-hidden="true"></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section historicalResults" id="historical-results">
          <SectionHeader eyebrow="Historical results" title="BTCUSD Weekly Backtest">
            Historical BTCUSD strategy testing shows how the SatsOra weekly signal logic performed across a multi-year Bitcoin market cycle. The system generated only 10 closed trades from Aug 2020 to Jun 2026, reinforcing its higher-timeframe design.
          </SectionHeader>
          <p className="resultsMeta">BTCUSD <span>·</span> 1W <span>·</span> Aug 1, 2020 – Jun 1, 2026 <span>·</span> $10,000 starting capital</p>
          <div className="historicalMetricsGrid">
            {historicalMetrics.map(([label, value, text, tone]) => (
              <article className={`historicalMetric ${tone}`} key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{text}</small>
              </article>
            ))}
          </div>
          <p className="resultsExplanation">
            Instead of constant signals, SatsOra focuses on major BTC trend zones. This historical test produced 10 closed trades over almost six years. That is intentional. SatsOra is designed to filter out short-term noise and focus on major weekly BTC trend shifts.
          </p>
          <div className="historicalEvidenceGrid">
            <ScreenshotFigure
              image={btcStrategyTester}
              title="TradingView strategy tester screenshot - BTCUSD weekly backtest"
              text="Supporting historical evidence from the TradingView strategy tester."
              alt="TradingView strategy tester screenshot showing the historical SatsOra BTCUSD backtest"
              width={2826}
              height={1120}
              className="resultsScreenshot wideScreenshot"
              meta="Results screenshot"
              zoomLabel="Click to enlarge results"
              onOpen={openScreenshot}
            />
            <article className="comparisonCard">
              <p className="eyebrow">Strategy vs Buy & Hold</p>
              <h3>Same historical BTCUSD window</h3>
              <p>Over the same historical BTCUSD test window, the SatsOra strategy simulation showed approximately +$38,521 net profit, compared with approximately +$10,804 for buy and hold in the TradingView tester screenshot.</p>
              <div className="comparisonValues">
                <div>
                  <span>Strategy test</span>
                  <strong>+$38,521</strong>
                  <small>Historical net profit</small>
                </div>
                <div>
                  <span>Buy & Hold</span>
                  <strong>~+$10,804</strong>
                  <small>Same BTCUSD test window</small>
                </div>
              </div>
              <p className="comparisonDisclaimer">Historical comparison only. Future market conditions may be different.</p>
            </article>
          </div>
          <article className="historicalAssumptions">
            <h3>Backtest assumptions</h3>
            <ul>
              {historicalAssumptions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <p className="riskLine">{riskDisclaimer}</p>
        </section>

        <section className="section compactSection accessOverview" id="how-it-works">
          <SectionHeader eyebrow="Simple, protected delivery" title="How invite-only access works">
            Purchase access, send your TradingView username, and receive manual activation for the private SatsOra indicator. No exchange connection, API key, or password sharing is required.
          </SectionHeader>
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

        <section className="section compactSection" id="for-traders">
          <SectionHeader title="For traders who want fewer, clearer BTC signals">
            SatsOra turns weekly Bitcoin trend structure into direct BUY and SELL labels, giving higher-timeframe traders a focused workflow inside TradingView.
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
          <SectionHeader title="Focus on major BTC trend shifts, not daily market noise.">
            SatsOra filters short-term movement into a clearer weekly signal workflow. The indicator displays Bitcoin BUY and SELL signals directly inside TradingView so traders can evaluate major trend changes without reacting to every candle.
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

        <section className="section band" id="signal-logic">
          <SectionHeader title="How SatsOra turns weekly structure into clear signals" />
          <div className="fourGrid">
            {howCards.map(([title, text], index) => (
              <article className="card featureCard numberedCard" key={title}>
                <span className="cardNumber">{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="warningBox">SatsOra is a TradingView indicator, not an automated trading bot. It does not connect to an exchange or place trades. Every trading decision remains yours.</p>
        </section>

        <section className="section" id="strategy-action">
          <SectionHeader title="See SatsOra in action">
            Historical TradingView examples show how SatsOra displays clear weekly BTC BUY and SELL signals directly on the chart.
          </SectionHeader>
          <div className="screenshotGrid">
            {actionCards.map((card) => <ScreenshotFigure key={card.title} {...card} onOpen={openScreenshot} />)}
          </div>
          <p className="smallDisclaimer">Historical chart examples are for educational and analytical purposes only. They do not guarantee future results.</p>
          <div className="inlineCta">
            <Button href="#pricing">View Pricing</Button>
          </div>
        </section>

        <section className="section compactSection" id="transparent">
          <SectionHeader title="Transparent by design">
            SatsOra is a private indicator with protected logic, visible historical assumptions, clear risk notes, and no automated trade execution.
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
            Configure TradingView alerts for confirmed weekly BUY and SELL signals without connecting an exchange or enabling automated execution.
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
            SatsOra is delivered through TradingView's invite-only script system. After purchase, send your TradingView username and access is reviewed and added manually.
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
          <SectionHeader title="Private indicator access, ready inside TradingView">
            Receive the SatsOra indicator, clear weekly BUY and SELL labels, setup guidance, and an alert-ready workflow inside TradingView.
          </SectionHeader>
          <ul className="includedList">
            {includedItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="warningBox">SatsOra is not an automated trading bot. It does not connect to an exchange, place trades, or require API keys.</p>
        </section>

        <section className="section band" id="pricing">
          <SectionHeader eyebrow="Private indicator access" title="Get private access to the SatsOra TradingView indicator.">
            After purchase, your TradingView username is manually activated for the private SatsOra indicator. Once access is added, you can apply it to your BTC chart and configure TradingView alerts after signal confirmation.
          </SectionHeader>
          <div className="pricingGrid">
            <PricingCard title="Monthly Access" price="$19/month" label="PRIVATE MONTHLY ACCESS" features={monthlyFeatures} cta="Request Invite-Only Access" href={links.monthly} featured />
            <PricingCard title="Annual Access" price="$149/year" label="PRIVATE ANNUAL ACCESS" features={annualFeatures} cta="Request Invite-Only Access" href={links.annual} />
          </div>
          <article className="afterPaymentBox">
            <h3>After payment</h3>
            <ol>
              <li>Choose monthly or yearly access.</li>
              <li>Send the TradingView username that should receive access.</li>
              <li>Invite-only access is reviewed and added personally.</li>
              <li>Add SatsOra to your chart and configure alerts.</li>
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
              <p>Complete checkout using the payment methods available through Payhip, then send your TradingView username for manual activation.</p>
              <div className="buttonRow">
                <Button href={links.monthly}>Monthly Access</Button>
                <Button href={links.annual} variant="secondary">Annual Access</Button>
              </div>
              <a className="textLink" href={links.payhip}>General Payhip checkout fallback</a>
            </article>
            <article className="card paymentCard">
              <h3>Crypto Wallet Transfer</h3>
              <p>Pay manually with crypto, then submit your transaction hash, email, and TradingView username for invite-only activation.</p>
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
          <SectionHeader title="Add clear BTC weekly signals to your TradingView chart.">
            Request private access to SatsOra and use a focused weekly BUY and SELL signal workflow inside TradingView.
          </SectionHeader>
          <div className="buttonRow center">
            <Button href="#get-access">Request Invite-Only Access</Button>
            <Button href="#historical-results" variant="secondary">See Historical Results</Button>
          </div>
          <p className="riskLine finalDisclaimer">{riskDisclaimer}</p>
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
