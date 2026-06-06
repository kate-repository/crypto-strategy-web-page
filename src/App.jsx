import { useEffect, useState } from 'react';
import btcStrategyTester from './resources/BTC strategy tester.png';
import btcAddressQr from './resources/btc-address.jpg';
import closerChart from './resources/closer-chart2.png';
import ethAddressQr from './resources/eth-address.jpg';
import satsoraLogo from './resources/satsora-logo.png';

const links = {
  email: 'info@satsora.com',
};

const accessRequestSubject = 'SatsOra crypto payment / access request';
const accessRequestEndpoint = `https://formsubmit.co/ajax/${links.email}`;

const navItems = [
  ['Results', '#historical-results'],
  ['How It Works', '#how-it-works'],
  ['Included', '#what-you-get'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
];

const heroFeatures = [
  ['BTC-first logic', 'Built around Bitcoin weekly market structure.'],
  ['Clear weekly labels', 'BUY and SELL signals appear directly on your chart.'],
  ['No exchange connection', 'No API keys, wallet connection, or automated trading.'],
];

const problemCards = [
  ['Less noise', 'Designed around higher-timeframe BTC moves.'],
  ['Fewer decisions', 'Only major weekly signal changes matter.'],
  ['Clear chart workflow', 'Signals, alerts, and review happen inside TradingView.'],
];

const historicalMetrics = [
  ['Total return', '+385.21%', 'Historical strategy return', 'positive'],
  ['Net profit', '+$38,521', 'From a $10,000 simulation', 'positive'],
  ['Max drawdown', '23.09%', 'Largest historical drawdown', 'neutral'],
  ['Closed trades', '10', 'August 2020 to June 2026', 'neutral'],
  ['Profitable trades', '90%', '9 winning trades out of 10', 'positive'],
  ['Profit factor', '11.07', 'Gross profit divided by gross loss', 'positive'],
  ['Estimated CAGR', '~31.1%', 'Approximate annualized return', 'positive'],
];

const historicalAssumptions = [
  'BTCUSD weekly chart',
  'TradingView strategy tester',
  'August 1, 2020 - June 1, 2026',
  '$10,000 starting capital',
  '10 closed trades',
  'Historical results only',
];

const howCards = [
  ['Weekly BTC structure', 'The indicator focuses on higher-timeframe Bitcoin movement.'],
  ['Signal confirmation', 'Short-term noise is filtered before a signal appears.'],
  ['Clear BUY/SELL labels', 'Confirmed signal changes display directly on the chart.'],
  ['Alert-ready workflow', 'You can configure TradingView alerts for confirmed weekly signals.'],
];

const traderFitItems = [
  'Clear BUY and SELL labels on TradingView',
  'Higher-timeframe BTC trend analysis',
  'Fewer, more meaningful signal changes',
  'Alert-ready weekly signals',
  'No exchange or broker connection',
  'Manual control over every trade decision',
];

const notForItems = [
  'Automated trading',
  'Scalping or high-frequency signals',
  'Hidden "magic" entries without risk management',
  'Financial advice or managed trading',
];

const accessSteps = [
  ['Purchase access', 'Choose monthly or yearly access.'],
  ['Enter your TradingView username', 'This is required to activate the private TradingView script.'],
  ['Manual invite-only activation', 'Access is reviewed and added personally.'],
  ['Use SatsOra on TradingView', 'Add SatsOra to your chart and configure alerts.'],
];

const accessTimingText = 'Access is granted manually within a maximum of 24 hours after payment and receipt of your TradingView username.';

const includedItems = [
  'Private invite-only TradingView indicator access',
  'BTC-first weekly signal logic',
  'Clear BUY and SELL labels on chart',
  'Long and short signal visibility',
  'Basic setup guide',
  'TradingView alert setup instructions',
  'Backtest assumptions explained',
  'Future indicator updates while subscribed',
  'Manual access support after payment',
];

const acceptedCryptoPayments = [
  ['BTC', 'Bitcoin network only'],
  ['ETH', 'Ethereum network only'],
  ['USDT', 'Ethereum network only / ERC-20'],
  ['USDC', 'Ethereum network only / ERC-20'],
];

const cryptoPaymentCards = [
  {
    title: 'Bitcoin payment',
    text: 'Use this QR code only for BTC sent on the Bitcoin network.',
    image: btcAddressQr,
    alt: 'Bitcoin payment QR code and address for SatsOra',
    warning: 'Send BTC only on the Bitcoin network.',
  },
  {
    title: 'Ethereum / ERC-20 payment',
    text: 'Use this QR code for ETH, USDT, or USDC sent on the Ethereum network. USDT and USDC must be sent as ERC-20 tokens.',
    image: ethAddressQr,
    alt: 'Ethereum payment QR code and address for SatsOra',
    warning: 'Send ETH, USDT, or USDC only on the Ethereum network. USDT and USDC must be ERC-20 tokens.',
  },
];

const cryptoPaymentSteps = [
  ['Choose your plan', 'Select Monthly Access or Yearly Access.'],
  ['Send payment', 'Use only one of the displayed QR/payment addresses and the correct network.'],
  ['Submit your details', 'Send your TradingView username, email, selected plan, payment currency, and transaction hash.'],
  ['Receive TradingView access', 'Access is granted manually within a maximum of 24 hours after payment confirmation and receipt of your TradingView username.'],
];

const riskDisclaimer = 'Educational tool only. SatsOra does not provide financial advice. Crypto trading involves risk, and historical performance does not guarantee future results.';

const privacyPolicyIntro = [
  'SatsOra is operated by Sparkbyte Solutions Ltd, Cyprus. This Privacy Policy explains how we collect, use, and protect personal information when you visit satsora.com, request access, purchase SatsOra access, or contact us.',
  'SatsOra is a private TradingView indicator access service. It is educational software and does not provide financial advice, investment advice, brokerage services, or trade execution.',
];

const privacyPolicySections = [
  {
    heading: '1. Information we collect',
    paragraphs: ['We may collect the following information:'],
    bullets: [
      'Name and email address when you contact us, request access, or complete a purchase.',
      'TradingView username when needed to manually activate invite-only access.',
      'Payment and billing information processed through Payhip and its payment providers.',
      'Order information, subscription status, and purchase history.',
      'Messages you send to us for support or access requests.',
      'Basic website and technical data such as browser type, device type, pages visited, referral source, and approximate location where analytics or advertising measurement tools are used.',
    ],
    afterBullets: ['We do not store full card numbers or full payment card details on our website.'],
  },
  {
    heading: '2. How we use your information',
    paragraphs: ['We use your information to:'],
    bullets: [
      'Provide and manage SatsOra access.',
      'Manually activate TradingView invite-only access.',
      'Process purchases, subscriptions, renewals, refunds, and customer support.',
      'Send important service messages related to your access or payment.',
      'Respond to questions and support requests.',
      'Maintain website security and prevent abuse.',
      'Improve the website, product, and customer experience.',
      'Comply with accounting, tax, legal, and regulatory obligations.',
    ],
  },
  {
    heading: '3. Legal basis for processing',
    bullets: [
      'Contract: to provide the product or service you purchased or requested.',
      'Legal obligation: to keep required business, tax, and accounting records.',
      'Legitimate interest: to operate, protect, and improve SatsOra.',
      'Consent: where consent is required, such as for optional marketing or certain cookies.',
    ],
  },
  {
    heading: '4. Payments and third-party services',
    paragraphs: [
      'Payments are processed through Payhip and its payment providers. These providers may collect and process payment, billing, tax, and fraud-prevention information according to their own privacy policies.',
      'SatsOra may also rely on third-party services for hosting, analytics, advertising measurement, email communication, and customer support.',
      'TradingView access requires a TradingView username. Your use of TradingView is subject to TradingView’s own terms and privacy policy.',
    ],
  },
  {
    heading: '5. Cookies and analytics',
    paragraphs: [
      'The website may use essential cookies and similar technologies needed for website functionality, payment flow, security, analytics, and advertising measurement.',
      'You can control cookies through your browser settings. Blocking some cookies may affect website functionality or checkout tracking.',
    ],
  },
  {
    heading: '6. Sharing of information',
    paragraphs: ['We do not sell your personal information.', 'We may share information only when necessary with:'],
    bullets: [
      'Payment processors and checkout providers.',
      'Website hosting and technical service providers.',
      'Analytics, advertising, and measurement providers.',
      'Professional advisers such as accountants or legal advisers.',
      'Authorities where required by law.',
    ],
  },
  {
    heading: '7. Data retention',
    paragraphs: [
      'We keep personal information only as long as needed for the purposes described in this Privacy Policy, including product access, customer support, business records, tax records, legal compliance, and dispute prevention.',
      'When information is no longer needed, we delete it or anonymise it where reasonably possible.',
    ],
  },
  {
    heading: '8. Your privacy rights',
    paragraphs: ['Depending on your location and applicable law, you may have the right to:'],
    bullets: [
      'Request access to your personal information.',
      'Request correction of inaccurate information.',
      'Request deletion of your information.',
      'Request restriction of processing.',
      'Object to certain processing.',
      'Request data portability.',
      'Withdraw consent where processing is based on consent.',
      'Lodge a complaint with a data protection authority.',
    ],
    afterBullets: ['To make a privacy request, contact us using the contact details on the website.'],
  },
  {
    heading: '9. Security',
    paragraphs: ['We use reasonable technical and organisational measures to protect personal information. However, no website, payment system, or internet transmission is completely secure.'],
  },
  {
    heading: '10. Children',
    paragraphs: ['SatsOra is not intended for children. We do not knowingly collect personal information from children.'],
  },
  {
    heading: '11. Changes to this Privacy Policy',
    paragraphs: ['We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date.'],
  },
  {
    heading: '12. Contact',
    paragraphs: ['For privacy questions or requests, contact SatsOra through the contact details provided on satsora.com.'],
  },
];

const refundPolicyIntro = [
  'SatsOra is a digital subscription product that provides manual invite-only access to a private TradingView indicator. There is no physical product to return.',
  'This Refund Policy explains when refunds may be available and how subscription cancellations work.',
];

const refundPolicySections = [
  {
    heading: '1. Product type',
    paragraphs: [
      'SatsOra provides access to a private TradingView indicator for educational and informational purposes only.',
      'SatsOra does not provide financial advice, investment advice, trading advice, brokerage services, account management, or trade execution. SatsOra does not guarantee profits, trading results, market performance, or specific outcomes.',
    ],
  },
  {
    heading: '2. Before access is activated',
    paragraphs: [
      'If you purchase SatsOra access and request a refund before your TradingView access has been manually activated, you may request a full refund.',
      'To request a refund before activation, contact us as soon as possible and include:',
    ],
    bullets: [
      'The email used for purchase.',
      'Your order or receipt number.',
      'Your TradingView username, if already provided.',
    ],
  },
  {
    heading: '3. After access is activated',
    paragraphs: [
      'Once invite-only TradingView access has been manually activated, the digital service has started.',
      'After access has been activated, payments are generally non-refundable for the current billing period, except where required by applicable law or where we are unable to provide the purchased access.',
      'Refunds are not provided because of:',
    ],
    bullets: [
      'Trading losses or market performance.',
      'A change of mind after access has been activated.',
      'Not using the product after activation.',
      'Not understanding TradingView.',
      'Personal device, browser, internet, or TradingView account issues outside our control.',
      'Disagreement with historical examples, signal timing, or market behaviour.',
      'Expecting guaranteed profit or guaranteed results.',
    ],
  },
  {
    heading: '4. Subscription cancellation',
    paragraphs: [
      'You may cancel your subscription to stop future renewals.',
      'Cancelling a subscription stops future billing but does not automatically refund the current paid period.',
      'Access may remain active until the end of the paid billing period unless a refund is issued or access is removed for policy reasons.',
    ],
  },
  {
    heading: '5. Monthly access',
    paragraphs: [
      'Monthly access is billed for the selected monthly period.',
      'After access has been activated, the current monthly period is generally non-refundable. You may cancel before the next renewal to avoid future charges.',
    ],
  },
  {
    heading: '6. Yearly access',
    paragraphs: [
      'Yearly access is billed for the selected yearly period at the discounted early access price.',
      'After access has been activated, the yearly payment is generally non-refundable, except where required by applicable law or where we are unable to provide the purchased access.',
    ],
  },
  {
    heading: '7. Duplicate payments and payment errors',
    paragraphs: ['If you believe you were charged twice by mistake, contact us with your order details. Verified duplicate payments or clear payment errors will be reviewed and refunded where appropriate.'],
  },
  {
    heading: '8. Failure to activate access',
    paragraphs: [
      accessTimingText,
      'If we cannot activate your access within a reasonable time after receiving the correct TradingView username, you may request a refund.',
    ],
  },
  {
    heading: '9. Legal withdrawal rights',
    paragraphs: [
      'Where applicable law gives you a mandatory right of withdrawal or refund, we will respect that law.',
      'For digital content or digital services, withdrawal rights may be affected once access has started, especially when immediate access has been requested or digital delivery has begun.',
    ],
  },
  {
    heading: '10. How to request a refund',
    paragraphs: ['To request a refund, contact us through the contact details provided on satsora.com and include:'],
    bullets: [
      'Purchase email.',
      'Order or receipt number.',
      'TradingView username.',
      'Reason for the request.',
    ],
    afterBullets: ['We aim to review refund requests within 5 business days.'],
  },
  {
    heading: '11. Access removal after refund',
    paragraphs: ['If a refund is issued, SatsOra may remove TradingView access to the private indicator.'],
  },
  {
    heading: '12. Chargebacks and disputes',
    paragraphs: ['Please contact us before opening a payment dispute. Most access, billing, and username issues can be resolved faster by support.'],
  },
  {
    heading: '13. Policy changes',
    paragraphs: ['We may update this Refund Policy from time to time. The updated version will be posted on this page with a new “Last updated” date.'],
  },
];

const termsOfAccessIntro = [
  'These Terms of Access explain the basic conditions for purchasing and using SatsOra, a private invite-only TradingView indicator operated by Sparkbyte Solutions Ltd.',
  'By purchasing or requesting access, you acknowledge that SatsOra is educational chart analysis software and does not provide financial advice, brokerage services, account management, or trade execution.',
];

const termsOfAccessSections = [
  {
    heading: '1. Product access',
    paragraphs: [
      'SatsOra provides manual invite-only access to a private TradingView indicator. Access requires a valid TradingView username.',
      'Access is added manually after payment and review. Activation is usually completed within 24 hours after the correct TradingView username is provided, but timing may vary.',
    ],
  },
  {
    heading: '2. Educational use only',
    paragraphs: [
      'SatsOra is provided for educational and informational chart analysis only.',
      'SatsOra does not provide financial advice, investment advice, trading advice, tax advice, legal advice, brokerage services, managed trading, or automated execution.',
    ],
  },
  {
    heading: '3. Trading risk',
    paragraphs: [
      'Crypto trading involves substantial risk. You are responsible for every trade decision, position size, risk limit, and account outcome.',
      'Historical examples, screenshots, backtests, and comparisons do not guarantee future performance. Live results can differ because of commissions, spreads, slippage, execution timing, market conditions, TradingView settings, and user decisions.',
    ],
  },
  {
    heading: '4. Private indicator logic',
    paragraphs: [
      'SatsOra is delivered as a private invite-only TradingView indicator. Pine Script source code, proprietary logic, formulas, weights, thresholds, and internal methods are not included.',
      'You may not copy, reverse engineer, resell, redistribute, sublicense, or attempt to reproduce the indicator logic.',
    ],
  },
  {
    heading: '5. Account responsibility',
    paragraphs: [
      'You are responsible for maintaining access to your TradingView account and for entering the correct TradingView username during checkout or support communication.',
      'SatsOra is independent and is not affiliated with, endorsed by, or sponsored by TradingView.',
    ],
  },
  {
    heading: '6. Payments, renewals, and cancellation',
    paragraphs: [
      'Subscription checkout payments, renewals, and cancellations are handled through the checkout provider and its payment processors.',
      'Manual crypto payments, when offered, are irreversible and must be confirmed carefully before sending. Wallet details are provided only through direct request flow.',
    ],
  },
  {
    heading: '7. Refunds',
    paragraphs: [
      'Refunds are handled according to the Refund Policy. Digital access is normally non-refundable after activation, except where required by law or stated otherwise in the Refund Policy.',
    ],
  },
  {
    heading: '8. Contact',
    paragraphs: ['For access, billing, or support questions, contact SatsOra using the contact details on the website.'],
  },
];

function LegalSection({ heading, paragraphs = [], bullets = [], afterBullets = [] }) {
  return (
    <section className="legalSection">
      <h2>{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {bullets.length > 0 && (
        <ul className="legalList">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {afterBullets.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

function LegalPage({ title, lastUpdated, intro, sections }) {
  return (
    <>
      <header className="siteHeader">
        <nav className="nav legalNav" aria-label="Legal navigation">
          <a className="logo headerLogo" href="/" aria-label="SatsOra home">
            <img className="headerLogoIcon" src={satsoraLogo} alt="" width="32" height="32" />
            <span className="headerLogoText">
              <strong>SatsOra</strong>
              <small>BTC-first TradingView signals</small>
            </span>
          </a>
          <a className="legalBackLink" href="/">Back to Home</a>
        </nav>
      </header>
      <main className="legalPage">
        <div className="legalWrap">
          <p className="eyebrow">{title}</p>
          <h1 className="legalTitle">{title}</h1>
          <p className="legalUpdated">{lastUpdated}</p>
          <article className="legalCard">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {sections.map((section) => (
              <LegalSection key={section.heading} {...section} />
            ))}
          </article>
          <div className="legalBackRow">
            <a className="legalBackLink" href="/">Back to Home</a>
          </div>
        </div>
      </main>
    </>
  );
}

const faqs = [
  ['What is SatsOra?', 'SatsOra is a private invite-only TradingView indicator built around BTC weekly signal logic. It displays BUY and SELL labels directly on your chart.'],
  ['How often does it give signals?', 'SatsOra is designed for weekly BTC trend changes, not constant alerts. Historical testing produced only 10 closed trades from August 2020 to June 2026.'],
  ['Can I use alerts?', 'Yes. You can configure TradingView alerts for confirmed weekly BUY and SELL signals. Recommended setting: Once per bar close on the 1W timeframe.'],
  ['Is SatsOra an automated trading bot?', 'No. SatsOra does not connect to an exchange, place trades, or manage positions. Every decision remains yours.'],
  ['Does SatsOra guarantee profit?', 'No. Historical results do not guarantee future performance. Crypto trading involves risk.'],
  ['Do I get the Pine Script source code?', 'No. SatsOra is a private invite-only indicator. The source code and proprietary logic are not included.'],
  ['Can I use it for other crypto markets?', 'SatsOra is BTC-first. You may test it visually on other liquid crypto markets, but the product is positioned around Bitcoin weekly analysis.'],
  ['How do I get access after payment?', accessTimingText],
  ['Can I cancel?', 'Yes, if using subscription checkout, cancellation should follow the checkout provider’s subscription management process.'],
  ['Do you offer refunds?', 'Digital access is normally non-refundable after activation, unless required by law or stated otherwise in the Refund Policy.'],
];

const payhipMonthlyUrl = 'https://payhip.com/order?link=5uOK4&pricing_plan=lKzy6vE5BX';
const payhipYearlyUrl = 'https://payhip.com/order?link=5uOK4&pricing_plan=V6B73q2pBr';

function Button({ href, children, variant = 'primary', onClick }) {
  return (
    <a className={`button ${variant === 'secondary' ? 'buttonSecondary' : ''}`} href={href} onClick={onClick}>
      {children}
    </a>
  );
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

function ScreenshotFigure({ image, title, text, alt, width, height, loading = 'lazy', fetchPriority, decoding = 'async', className = '', meta, zoomLabel = 'Click to enlarge chart', onOpen }) {
  const handleOpen = () => {
    onOpen?.({ image, title, alt });
  };

  return (
    <figure className={`screenshotFigure ${className}`}>
      <button className="screenshotFrame" type="button" onClick={handleOpen} aria-label={`Enlarge screenshot: ${title}`}>
        <img src={image} alt={alt} width={width} height={height} loading={loading} decoding={decoding} fetchPriority={fetchPriority} />
      </button>
      <figcaption>
        {meta && <span className="captionMeta">{meta}</span>}
        <strong>{title}</strong>
        <span>{text}</span>
        <button className="zoomHint zoomHintButton" type="button" onClick={handleOpen} aria-label={`Enlarge screenshot: ${title}`}>
          {zoomLabel}
        </button>
      </figcaption>
    </figure>
  );
}

function ScreenshotLightbox({ selectedImage, onClose }) {
  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
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

function PricingCard({ title, price, label, description, note, cta, href, onClick, featured = false }) {
  return (
    <article className={`pricingCard ${featured ? 'featured' : ''}`}>
      {label && <p className="priceLabel">{label}</p>}
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="pricingDescription">{description}</p>
      <Button href={href} onClick={onClick}>{cta}</Button>
      {note && <p className="pricingNote">{note}</p>}
    </article>
  );
}

function handlePayhipCheckout(url, event) {
  event.preventDefault();

  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url);
    return;
  }

  window.location.href = url;
}

function getAccessRequestMailto(formData = new FormData()) {
  const body = [
    ['Name', formData.get('Name')],
    ['Email', formData.get('email')],
    ['TradingView username', formData.get('TradingView username')],
    ['Selected plan', formData.get('Selected plan')],
    ['Payment currency', formData.get('Payment currency')],
    ['Transaction hash', formData.get('Transaction hash')],
    ['Message', formData.get('Message')],
  ]
    .map(([label, value]) => `${label}: ${value || ''}`)
    .join('\n');

  return `mailto:${links.email}?subject=${encodeURIComponent(accessRequestSubject)}&body=${encodeURIComponent(body)}`;
}

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [accessFormStatus, setAccessFormStatus] = useState({ type: 'idle', message: '' });
  const [accessRequestMailto, setAccessRequestMailto] = useState(getAccessRequestMailto());
  const [cryptoRequestOpen, setCryptoRequestOpen] = useState(() => (
    typeof window !== 'undefined' && window.location.hash === '#crypto-request'
  ));
  const openScreenshot = (screenshot) => setSelectedImage(screenshot);
  const closeScreenshot = () => setSelectedImage(null);
  const handleAccessRequestSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fallbackMailto = getAccessRequestMailto(formData);
    setAccessRequestMailto(fallbackMailto);

    if (formData.get('_honey')) {
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    payload._subject = accessRequestSubject;
    payload._template = 'table';
    payload._captcha = 'false';
    payload._url = window.location.href;

    setAccessFormStatus({ type: 'submitting', message: 'Sending access request...' });

    try {
      const response = await fetch(accessRequestEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Access request failed with status ${response.status}`);
      }

      form.reset();
      setAccessRequestMailto(getAccessRequestMailto());
      setAccessFormStatus({
        type: 'success',
        message: 'Your crypto payment details have been prepared. After sending payment, make sure your transaction hash and TradingView username are sent to info@satsora.com. Access is granted manually within a maximum of 24 hours after payment confirmation.',
      });
    } catch (error) {
      console.error(error);
      setAccessFormStatus({
        type: 'error',
        message: 'The automatic email submit failed. Please send the request by email instead.',
      });
    }
  };

  return (
    <>
      <header className="siteHeader">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo headerLogo" href="#top" aria-label="SatsOra home">
            <img className="headerLogoIcon" src={satsoraLogo} alt="" width="32" height="32" />
            <span className="headerLogoText">
              <strong>SatsOra</strong>
              <small>BTC-first TradingView signals</small>
            </span>
          </a>
          <div className="navLinks">
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <Button href="#pricing">Get SatsOra Access</Button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="heroCopy">
            <p className="eyebrow">Private BTC-first TradingView indicator</p>
            <h1>Bitcoin Weekly BUY/SELL Signals for TradingView</h1>
            <p className="heroLead">
              SatsOra helps BTC traders follow major weekly trend shifts with clear BUY and SELL labels directly on the TradingView chart - without exchange connection, API keys, or automated execution.
            </p>
            <div className="buttonRow">
              <Button href="#pricing">Get SatsOra Access</Button>
              <Button href="#historical-results" variant="secondary">View Historical Results</Button>
            </div>
            <p className="microcopy">Private invite-only TradingView indicator. Manual activation after payment. TradingView username required.</p>
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
            title="BTC weekly chart workflow"
            text="SatsOra displays higher-timeframe signal changes directly on a BTCUSD TradingView chart."
            alt="Weekly BTCUSD TradingView chart showing SatsOra BUY and SELL labels."
            width={2048}
            height={1121}
            loading="eager"
            fetchPriority="high"
            meta="BTCUSD weekly"
            className="heroScreenshot"
            onOpen={openScreenshot}
          />
        </section>

        <section className="section problemSection">
          <SectionHeader title="Stop reacting to every Bitcoin candle">
            Most traders do not lose because they lack information. They lose because the market gives them too much information - daily noise, emotional candles, late entries, and constant second-guessing.
          </SectionHeader>
          <p className="sectionLead">
            SatsOra is built for a slower, cleaner BTC workflow. It focuses on weekly trend changes, not intraday noise, so you can review major BUY and SELL zones with more discipline.
          </p>
          <div className="proofGrid">
            {problemCards.map(([title, text]) => (
              <article className="card proofCard" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section historicalResults" id="historical-results">
          <SectionHeader eyebrow="Historical results" title="Historical BTCUSD weekly backtest">
            Historical TradingView strategy testing shows how the SatsOra weekly signal logic performed across a multi-year Bitcoin market cycle. The test produced only 10 closed trades from August 2020 to June 2026, reflecting the system's higher-timeframe design.
          </SectionHeader>
          <p className="resultsMeta">BTCUSD <span>|</span> 1W <span>|</span> August 1, 2020 - June 1, 2026 <span>|</span> $10,000 starting capital</p>
          <div className="historicalMetricsGrid">
            {historicalMetrics.map(([label, value, text, tone]) => (
              <article className={`historicalMetric ${tone}`} key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{text}</small>
              </article>
            ))}
          </div>
          <p className="riskLine subtleRisk">{riskDisclaimer} Live results can differ because of commissions, spreads, slippage, execution timing, market conditions, and user decisions.</p>
          <ScreenshotFigure
            image={btcStrategyTester}
            title="TradingView strategy tester screenshot - BTCUSD weekly backtest"
            text="Supporting historical evidence from the TradingView strategy tester."
            alt="TradingView strategy tester screenshot showing the historical SatsOra BTCUSD backtest"
            width={2826}
            height={1120}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="resultsScreenshot wideScreenshot lightScreenshot"
            meta="Results screenshot"
            zoomLabel="Click to enlarge results"
            onOpen={openScreenshot}
          />
        </section>

        <section className="section comparisonSection" id="strategy-vs-buy-hold">
          <SectionHeader title="Strategy vs Buy & Hold">
            Over the same historical BTCUSD test window, the SatsOra strategy simulation showed approximately +$38,521 net profit, compared with approximately +$10,804 for Buy & Hold in the TradingView tester screenshot.
          </SectionHeader>
          <div className="comparisonLayout">
            <article className="comparisonCard">
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
            <article className="historicalAssumptions compactAssumptions">
              <h3>Backtest assumptions</h3>
              <ul>
                {historicalAssumptions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
          <p className="riskLine compactRisk">Historical results only. Not financial advice.</p>
        </section>

        <section className="section band" id="how-it-works">
          <SectionHeader title="How SatsOra works">
            SatsOra reads Bitcoin's weekly trend structure and displays confirmed BUY and SELL labels directly on your TradingView chart.
          </SectionHeader>
          <div className="stepGrid">
            {howCards.map(([title, text], index) => (
              <article className="stepCard" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="warningBox">SatsOra is an analytical indicator, not an automated trading bot. It does not place trades or connect to an exchange.</p>
        </section>

        <section className="section compactSection" id="for-traders">
          <SectionHeader title="Built for patient BTC traders">
            SatsOra is for traders who want a cleaner weekly Bitcoin workflow instead of constant market noise.
          </SectionHeader>
          <div className="split fitSplit">
            <article className="card iconCard">
              <h3>Best for traders who want:</h3>
              <ul className="checkList">
                {traderFitItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="card iconCard">
              <h3>Not suitable for traders who want:</h3>
              <ul className="checkList cautionList">
                {notForItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="what-you-get">
          <SectionHeader title="What is included" />
          <ul className="includedList includedPanel">
            {includedItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="section foundersPricing" id="pricing">
          <div className="pricingIntro">
            <div>
              <img className="pricingLogo" src={satsoraLogo} alt="SatsOra logo" width="56" height="56" loading="lazy" />
              <p className="eyebrow">Founder access</p>
              <h2>Founder pricing is open</h2>
              <p>Get early access to the private SatsOra TradingView indicator before the public launch price increases.</p>
            </div>
          </div>
          <div className="pricingGrid foundersPricingGrid">
            <PricingCard
              title="Monthly Access"
              price="€19 / month"
              description="Flexible access to SatsOra with monthly renewal."
              cta="Start Monthly Access"
              href={payhipMonthlyUrl}
              onClick={(event) => handlePayhipCheckout(payhipMonthlyUrl, event)}
            />
            <PricingCard
              title="Yearly Access"
              label="Best value"
              price="€149 / year"
              description="Best value for traders who want longer-term access."
              cta="Get Yearly Access"
              href={payhipYearlyUrl}
              onClick={(event) => handlePayhipCheckout(payhipYearlyUrl, event)}
              featured
            />
          </div>
          <p className="earlyAccessNote">{accessTimingText}</p>
        </section>

        <section className="section compactSection" id="invite-only">
          <SectionHeader title="How invite-only access works">
            Purchase access, enter your TradingView username, and receive manual activation for the private SatsOra indicator.
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
          <p className="noteBox">{accessTimingText}</p>
        </section>

        <section className="section" id="payment-method">
          <SectionHeader title="Choose your payment method" />
          <div className="paymentGrid">
            <article className="card paymentCard">
              <h3>Card checkout</h3>
              <p>Pay securely through checkout and enter your TradingView username.</p>
              <Button href={payhipMonthlyUrl} onClick={(event) => handlePayhipCheckout(payhipMonthlyUrl, event)}>Start Card Checkout</Button>
            </article>
            <article className="card paymentCard">
              <h3>Manual crypto payment</h3>
              <p>Available on request. Crypto payments are manual and irreversible. Always confirm the correct network and wallet address before sending.</p>
              <button className="button buttonSecondary" type="button" onClick={() => setCryptoRequestOpen((isOpen) => !isOpen)}>
                Request Crypto Payment Details
              </button>
            </article>
          </div>
          {cryptoRequestOpen && (
            <article className="cryptoPanel" id="crypto-request">
              <div className="cryptoPanelHeader">
                <p className="eyebrow">Manual crypto payment</p>
                <h3>Crypto payment instructions</h3>
                <p>
                  Manual crypto payments are available in BTC, ETH, USDT, and USDC. Please check the currency, network, and address carefully before sending. Crypto payments are irreversible and payments sent to the wrong address or wrong network may not be recoverable.
                </p>
              </div>

              <div className="cryptoWarningBox">
                <strong>Important:</strong>
                <span>BTC is accepted only on the Bitcoin network. ETH, USDT, and USDC are accepted only through the Ethereum network. USDT and USDC must be sent as ERC-20 tokens. Use only the network stated for each payment card.</span>
              </div>

              <section className="cryptoSubsection" aria-labelledby="accepted-crypto-payments">
                <h4 id="accepted-crypto-payments">Accepted crypto payments</h4>
                <div className="acceptedCryptoGrid">
                  {acceptedCryptoPayments.map(([currency, network]) => (
                    <article key={currency}>
                      <strong>{currency}</strong>
                      <span>{network}</span>
                    </article>
                  ))}
                </div>
              </section>

              <section className="cryptoSubsection" aria-label="Crypto QR payment cards">
                <div className="cryptoQrGrid">
                  {cryptoPaymentCards.map((card) => (
                    <article className="cryptoQrCard" key={card.title}>
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                      <div className="cryptoQrFrame">
                        <img src={card.image} alt={card.alt} loading="eager" decoding="sync" />
                      </div>
                      <p className="cryptoCardWarning">{card.warning}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="cryptoSubsection paymentAmountBox" aria-labelledby="payment-amount">
                <h4 id="payment-amount">Payment amount</h4>
                <div className="paymentAmountGrid">
                  <div>
                    <span>Monthly Access:</span>
                    <strong>€19 equivalent</strong>
                  </div>
                  <div>
                    <span>Yearly Access:</span>
                    <strong>€149 equivalent</strong>
                  </div>
                </div>
                <p>For crypto payments, send the equivalent amount at the time of payment. Network fees are the buyer's responsibility. Because crypto prices and network fees can change, access is activated after manual payment verification.</p>
              </section>

              <section className="cryptoSubsection" aria-labelledby="crypto-payment-steps">
                <h4 id="crypto-payment-steps">Payment steps</h4>
                <div className="cryptoStepsGrid">
                  {cryptoPaymentSteps.map(([title, text], index) => (
                    <article className="stepCard" key={title}>
                      <span>{index + 1}</span>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="accessFormCard cryptoRequestCard" aria-labelledby="crypto-access-form">
                <h4 id="crypto-access-form">Submit crypto payment details</h4>
                <p className="formHelper">After payment, submit your transaction hash and TradingView username so access can be verified manually. This form sends the details to {links.email}.</p>
                <form onSubmit={handleAccessRequestSubmit}>
                  <input className="honeypotField" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <label>Name<input name="Name" autoComplete="name" /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                  <label>TradingView username<input name="TradingView username" autoComplete="off" required /></label>
                  <label>Selected plan<select name="Selected plan" required><option>Monthly Access</option><option>Yearly Access</option></select></label>
                  <label>Payment currency<select name="Payment currency" required><option>BTC</option><option>ETH</option><option>USDT ERC-20</option><option>USDC ERC-20</option></select></label>
                  <label>Transaction hash<input name="Transaction hash" autoComplete="off" required /></label>
                  <label>Message<textarea name="Message" rows="4"></textarea></label>
                  <button type="submit" disabled={accessFormStatus.type === 'submitting'}>
                    {accessFormStatus.type === 'submitting' ? 'Sending...' : 'Submit Crypto Payment Details'}
                  </button>
                  <p className={`formStatus ${accessFormStatus.type}`} role="status" aria-live="polite">
                    {accessFormStatus.message}
                    {accessFormStatus.type === 'error' && (
                      <> <a href={accessRequestMailto}>Email {links.email}</a></>
                    )}
                  </p>
                </form>
              </section>
            </article>
          )}
        </section>

        <section className="section" id="faq">
          <SectionHeader title="FAQ" />
          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>
                  {answer}
                  {question === 'Do you offer refunds?' && <> <a className="inlineTextLink" href="/refund-policy">Read the Refund Policy.</a></>}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="section finalCta">
          <SectionHeader title="Ready to trade Bitcoin with a cleaner weekly signal workflow?">
            SatsOra gives you private TradingView access to BTC-first weekly BUY and SELL labels, designed for traders who want fewer signals, clearer structure, and full manual control.
          </SectionHeader>
          <div className="buttonRow center">
            <Button href={payhipYearlyUrl} onClick={(event) => handlePayhipCheckout(payhipYearlyUrl, event)}>Get Yearly Access</Button>
            <Button href={payhipMonthlyUrl} variant="secondary" onClick={(event) => handlePayhipCheckout(payhipMonthlyUrl, event)}>Start Monthly Access</Button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="logo" href="/"><span>SatsOra</span></a>
          <p>SatsOra is operated by Sparkbyte Solutions Ltd. Educational chart analysis only. Not financial advice. Past performance does not guarantee future results.</p>
          <p>This product is independent and is not affiliated with, endorsed by, or sponsored by TradingView.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${links.email}`}>Contact: {links.email}</a>
          <a href="/terms-of-access">Terms of Access</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/refund-policy">Refund Policy</a>
        </nav>
      </footer>
      <ScreenshotLightbox selectedImage={selectedImage} onClose={closeScreenshot} />
    </>
  );
}

function App() {
  const pathname = typeof window === 'undefined'
    ? '/'
    : window.location.pathname.replace(/\/index\.html$/, '').replace(/\/+$/, '') || '/';

  if (pathname === '/privacy-policy') {
    return (
      <LegalPage
        title="Privacy Policy"
        lastUpdated="Last updated: 4 June 2026"
        intro={privacyPolicyIntro}
        sections={privacyPolicySections}
      />
    );
  }

  if (pathname === '/refund-policy') {
    return (
      <LegalPage
        title="Refund Policy"
        lastUpdated="Last updated: 4 June 2026"
        intro={refundPolicyIntro}
        sections={refundPolicySections}
      />
    );
  }

  if (pathname === '/terms-of-access') {
    return (
      <LegalPage
        title="Terms of Access"
        lastUpdated="Last updated: 6 June 2026"
        intro={termsOfAccessIntro}
        sections={termsOfAccessSections}
      />
    );
  }

  return <HomePage />;
}

export default App;
