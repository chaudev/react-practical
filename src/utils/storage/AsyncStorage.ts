// common/utils/storage/AsyncStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Lưu một giá trị vào AsyncStorage
 * @param {string} key - Khóa để lưu trữ giá trị
 * @param {string} value - Giá trị cần lưu trữ
 * @returns {Promise<void>}
 */
export const saveToStorage = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error('Error saving to AsyncStorage:', error)
  }
}

/**
 * Lấy giá trị từ AsyncStorage dựa trên khóa
 * @param {string} key - Khóa để truy xuất giá trị
 * @returns {Promise<string | null>} - Giá trị từ AsyncStorage hoặc null nếu không tồn tại
 */
export const getFromStorage = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (error) {
    console.error('Error getting from AsyncStorage:', error)
    return null
  }
}

/**
 * Xóa một giá trị từ AsyncStorage dựa trên khóa
 * @param {string} key - Khóa của giá trị cần xóa
 * @returns {Promise<void>}
 */
export const removeFromStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.error('Error removing from AsyncStorage:', error)
  }
}

/**
 * Xóa tất cả giá trị từ AsyncStorage
 * @returns {Promise<void>}
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error)
  }
}
