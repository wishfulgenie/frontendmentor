/**
 * Checks if any date input is empty, returns true if empty
 * @param {object} date
 * @param {string} dateLabel
 * @returns {boolean}
 */
export function checkEmptyInput (date, dateLabel) {
  return date[dateLabel] === ''
}

/**
 * Checks if any date input is valid, returns message if invalid, empty string if valid
 * @param {object} date 
 * @param {string} dateLabel 
 * @returns {string}
 */
export function checkValidInput (date, dateLabel) {
  if (dateLabel === 'day') {
    const dayVal = Number(date[dateLabel])
    if (isNaN(dayVal) || dayVal < 1 || dayVal > 31) {
      return 'Must be a valid day'
    }
  }

  if (dateLabel === 'month') {
    const monthVal = Number(date[dateLabel])
    if (isNaN(monthVal) || monthVal < 1 || monthVal > 12) {
      return 'Must be a valid month'
    }
  }

  if (dateLabel === 'year') {
    const yearVal = Number(date[dateLabel])
    if (isNaN(yearVal) || yearVal < 1 || yearVal > 2023) {
      return 'Must be in the past'
    }
  }

  return '';
}
