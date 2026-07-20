export const wholesalePricingDB = {
  "lost-mary": { base: 7.00, tier5: 6.50, tier10: 6.10, tier30: 5.80 },
  "death-row-5000": { base: 7.00, tier5: 6.50, tier10: 6.10, tier30: 5.80 },
  "death-row": { base: 8.00, tier5: 7.00, tier10: 6.70, tier30: 6.40 },
  "dummy-vape": { base: 9.00, tier5: 7.20, tier10: 6.80, tier30: 6.20 },
  "tyson": { base: 9.00, tier5: 7.20, tier10: 6.80, tier30: 6.20 },
  "moti-duo": { base: 10.00, tier5: 7.70, tier10: 7.30, tier30: 6.90 },
  "rab-beats": { base: 11.00, tier5: 7.90, tier10: 7.60, tier30: 7.10 },
  "chris-brown": { base: 12.00, tier5: 8.20, tier10: 7.90, tier30: 7.50 },
  "pyne-pod": { base: 15.00, tier5: 9.00, tier10: 8.70, tier30: 8.40 },
  "nimbox": { base: 17.00, tier5: 11.20, tier10: 10.80, tier30: 10.50 },
  "esencia-nimbox": { base: 8.00, tier5: 6.90, tier10: 6.60, tier30: 6.20 },
  "wefume": { base: 20.00, tier5: 11.50, tier10: 11.00, tier30: 10.80 },
  "solo-bar": { base: 19.00, tier5: 12.00, tier10: 11.30, tier30: 11.00 },
  "esencia-solo-bar": { base: 8.00, tier5: 7.00, tier10: 6.60, tier30: 6.20 },
  "nevux": { base: 21.00, tier5: 13.00, tier10: 12.50, tier30: 11.00 },
  "beco": { base: 13.00, tier5: 9.90, tier10: 8.55, tier30: 8.22 }
};

export const getPriceForQuantity = (item, totalCartQuantity) => {
  let slug = '';
  
  // Determinar el slug dependiendo si es una esencia (ID generado) o un producto base (Nombre)
  if (item.id && String(item.id).startsWith('esencia-')) {
    slug = item.id;
  } else {
    // Si es un producto base, su id en cart es numérico. Usamos el nombre para generar el slug.
    slug = item.name.toLowerCase().replace(/\s+/g, '-');
  }

  // Corrección para coincidir con la base de datos entregada
  if (slug === 'rabbeats') slug = 'rab-beats';

  const tiers = wholesalePricingDB[slug];
  
  // Fallback al precio original si no existe en la BD
  if (!tiers) return item.price;

  const qtyToEvaluate = totalCartQuantity !== undefined ? totalCartQuantity : item.quantity;

  if (qtyToEvaluate >= 30) return tiers.tier30;
  if (qtyToEvaluate >= 10) return tiers.tier10;
  if (qtyToEvaluate >= 5) return tiers.tier5;
  return tiers.base;
};
