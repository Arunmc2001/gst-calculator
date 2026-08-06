export type GSTMode = 'add' | 'remove';
export type TaxType = 'intra' | 'inter';

export interface GSTInput {
  amount: number;
  rate: number;
  mode: GSTMode;
  taxType: TaxType;
}

export interface GSTResult {
  originalPrice: number;
  gstAmount: number;
  finalPrice: number;
  cgst: number;
  sgst: number;
  igst: number;
}

export function calculateGST({ amount, rate, mode, taxType }: GSTInput): GSTResult {
  if (amount <= 0 || rate < 0) {
    return emptyResult();
  }

  const r = rate / 100;

  if (mode === 'add') {
    const gstAmount = round(amount * r);
    const finalPrice = round(amount + gstAmount);
    return splitTax(amount, gstAmount, finalPrice, taxType);
  }

  const originalPrice = round(amount / (1 + r));
  const gstAmount = round(amount - originalPrice);
  return splitTax(originalPrice, gstAmount, amount, taxType);
}

function splitTax(
  original: number,
  gst: number,
  final: number,
  type: TaxType,
): GSTResult {
  if (type === 'inter') {
    return {
      originalPrice: original,
      gstAmount: gst,
      finalPrice: final,
      cgst: 0,
      sgst: 0,
      igst: gst,
    };
  }

  const half = round(gst / 2);
  return {
    originalPrice: original,
    gstAmount: gst,
    finalPrice: final,
    cgst: half,
    sgst: round(gst - half),
    igst: 0,
  };
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

function emptyResult(): GSTResult {
  return {
    originalPrice: 0,
    gstAmount: 0,
    finalPrice: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
  };
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
