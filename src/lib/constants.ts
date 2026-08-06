export const SITE = {
  name: 'GST Calculator India',
  title: 'GST Calculator Online - Free GST Calculation Tool',
  description:
    'Free online GST calculator for India. Add or remove GST, calculate CGST, SGST, and IGST instantly. Fast, accurate, and mobile-friendly.',
  url: 'https://gst-calculator-india.com',
  email: 'contact@gst-calculator-india.com',
  locale: 'en-IN',
} as const;

export const GST_RATES = [0, 5, 12, 18, 28] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Calculator' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'What is GST?',
    answer:
      'GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India. It replaced multiple cascading taxes and is administered by the central and state governments.',
  },
  {
    question: 'How do I add GST to a price?',
    answer:
      'Enter the base price (excluding GST), select the applicable GST rate, and choose "Add GST". The calculator will show the GST amount and the final price including tax.',
  },
  {
    question: 'How do I remove GST from a price?',
    answer:
      'Enter the GST-inclusive price, select the GST rate, and choose "Remove GST". The calculator will reverse-calculate the original price and the GST component.',
  },
  {
    question: 'What is the difference between CGST, SGST, and IGST?',
    answer:
      'For intra-state transactions (within the same state), GST is split equally into CGST (Central GST) and SGST (State GST). For inter-state transactions, the full tax is charged as IGST (Integrated GST).',
  },
  {
    question: 'What are the current GST rates in India?',
    answer:
      'Common GST slabs are 0%, 5%, 12%, 18%, and 28%. Some items may have special rates or exemptions. Always verify the applicable rate for your specific product or service.',
  },
  {
    question: 'Is this calculator accurate for business use?',
    answer:
      'This calculator uses standard GST formulas and is suitable for quick estimates. For official filings, invoices, and compliance, consult a qualified tax professional or chartered accountant.',
  },
] as const;
