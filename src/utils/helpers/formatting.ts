// common/utils/helpers/formatting.ts
import dayjs from 'dayjs'

/**
 * Định dạng một đối tượng Date thành chuỗi ngày tháng (DD/MM/YYYY)
 * @param {Date} date - Đối tượng Date cần định dạng
 * @returns {string} - Chuỗi ngày tháng (ví dụ: 'DD/MM/YYYY')
 */
export const formatDateString = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY')
}

/**
 * Định dạng một đối tượng Date thành chuỗi thời gian và ngày tháng (HH:mm DD/MM/YYYY)
 * @param {Date} date - Đối tượng Date cần định dạng
 * @returns {string} - Chuỗi thời gian và ngày tháng (ví dụ: 'HH:mm DD/MM/YYYY')
 */
export const formatDateTimeString = (date: Date): string => {
  return dayjs(date).format('HH:mm DD/MM/YYYY')
}

/**
 * Chuyển đổi số nguyên thành chuỗi với định dạng số cách nhau bởi dấu chấm phẩy
 * @param {number} number - Số nguyên cần chuyển đổi
 * @returns {string} - Chuỗi số với định dạng (ví dụ: '1.000.000')
 */
export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

/**
 * Chuyển đổi chuỗi số có dấu chấm phẩy thành số nguyên
 * @param {string} formattedNumber - Chuỗi số có dấu chấm phẩy (ví dụ: '1.000.000')
 * @returns {number} - Số nguyên
 */
export const parseFormattedNumber = (formattedNumber: string): number => {
  const stringWithoutCommas = formattedNumber.replace(/,/g, '')
  return parseInt(stringWithoutCommas, 10)
}

/**
 * Hàm chuyển đổi một chuỗi thành chuỗi viết hoa
 * @param {string} str - Chuỗi cần chuyển đổi
 * @returns {string} - Chuỗi sau khi chuyển đổi thành viết hoa
 */
export const toUpperCase = (str: string): string => str.toUpperCase()

/**
 * Chuyển đổi chuỗi thành chuỗi viết thường
 * @param {string} inputString - Chuỗi cần chuyển đổi
 * @returns {string} - Chuỗi sau khi chuyển đổi thành viết thường
 */
export const toLowerCase = (inputString: string): string => {
  return inputString.toLowerCase()
}

/**
 * Chuyển một mảng thành chuỗi, nối các phần tử bằng dấu phẩy
 * @param {Array} array - Mảng cần chuyển đổi
 * @returns {string} - Chuỗi được tạo ra từ mảng (ví dụ: '1,2,3')
 */
export const arrayToStringWithCommas = (array: Array<any>): string => {
  return array.join(',')
}

/**
 * Chuyển chuỗi có dấu phẩy thành mảng các số nguyên
 * @param {string} commaSeparatedString - Chuỗi có dấu phẩy (ví dụ: '1,2,3')
 * @returns {Array} - Mảng các số nguyên được tạo ra từ chuỗi (ví dụ: [1,2,3])
 */
export const parseStringToArray = (commaSeparatedString: string): Array<number> => {
  return commaSeparatedString.split(',').map(item => parseInt(item.trim(), 10))
}
