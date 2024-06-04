/**
 * Checks if any date input is empty, returns true if empty
 * @param {object} date
 * @param {string} dateLabel
 * @returns {boolean}
 */
export function checkEmptyInput (date, dateLabel) {
  return date[dateLabel] === ''
}


