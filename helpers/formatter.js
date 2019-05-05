/* eslint-disable import/prefer-default-export */

/**
 * Format string or number to currency format
 *
 * @param {string|number} value - Value you want to convert
 * @returns
 */
export const toCurrency = value => {
  const castedValue = typeof value === "string" ? value : `${value}`;
  return `Rp ${castedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
};
