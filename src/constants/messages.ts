export const MESSAGES = {
  ERROR: {
    GENERIC: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
    NETWORK: 'Không thể kết nối tới máy chủ.',
    UNAUTHORIZED: 'Phiên đăng nhập đã hết hạn.',
    FORBIDDEN: 'Bạn không có quyền truy cập.',
    NOT_FOUND: 'Không tìm thấy dữ liệu.',
    VALIDATION: 'Dữ liệu nhập vào không hợp lệ.',
  },
  SUCCESS: {
    LOGIN: 'Đăng nhập thành công.',
    LOGOUT: 'Đã đăng xuất.',
    REGISTER: 'Đăng ký thành công.',
    SAVE: 'Lưu thành công.',
    UPDATE: 'Cập nhật thành công.',
    DELETE: 'Đã xoá.',
  },
  CONFIRM: {
    DELETE: 'Bạn có chắc chắn muốn xoá?',
    LOGOUT: 'Bạn có chắc chắn muốn đăng xuất?',
  },
} as const;
