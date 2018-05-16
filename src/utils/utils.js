export function formatStringToNumber (value, isComma = true) {
  if (typeof value === 'undefined' || value === null || value === '0') {
    return '0'
  }
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  })
  return formatter.format(value).replace(/,/g, isComma ? ',' : '.')
}