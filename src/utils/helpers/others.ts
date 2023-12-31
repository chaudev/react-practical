// common/utils/helpers/others.ts

/**
 * Hàm kiểm tra một giá trị có phải là số nguyên không
 * @param {any} value - Giá trị cần kiểm tra
 * @returns {boolean} - Trả về true nếu giá trị là số nguyên, ngược lại là false
 */
export const isInteger = (value: any): boolean => Number.isInteger(value)

/**
 * Hàm sinh số ngẫu nhiên trong một khoảng cho trước
 * @param {number} min - Giá trị nhỏ nhất trong khoảng
 * @param {number} max - Giá trị lớn nhất trong khoảng
 * @returns {number} - Số ngẫu nhiên trong khoảng [min, max]
 */
export const getRandomNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Hàm kiểm tra một giá trị có phải là mảng không
 * @param {any} value - Giá trị cần kiểm tra
 * @returns {boolean} - Trả về true nếu giá trị là mảng, ngược lại là false
 */
export const isArray = (value: any): boolean => Array.isArray(value)

/**
 * Hàm sắp xếp mảng theo thứ tự tăng dần
 * @param {number[]} arr - Mảng cần sắp xếp
 * @returns {number[]} - Mảng sau khi sắp xếp
 */
export const sortAscending = (arr: number[]): number[] => [...arr].sort((a, b) => a - b)

/**
 * Sắp xếp mảng theo thứ tự giảm dần
 * @param {Array} array - Mảng cần sắp xếp
 * @returns {Array} - Mảng sau khi sắp xếp giảm dần
 */
export const sortDescending = (array: Array<number>): Array<number> => {
  return [...array].sort((a, b) => b - a)
}

/**
 * Hàm kiểm tra một chuỗi có chứa ký tự số không
 * @param {string} str - Chuỗi cần kiểm tra
 * @returns {boolean} - Trả về true nếu chuỗi có chứa số, ngược lại là false
 */
export const containsNumber = (str: string): boolean => /\d/.test(str)
