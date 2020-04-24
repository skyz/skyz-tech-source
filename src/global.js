import { notification } from 'antd';
import i18n from './i18n';

module.exports = {
  fail_notification: error => {
    console.log(error);
    if (error.status < 500) {
      Object.keys(error.data).map((key, index) => {
        notification['error']({
          duration: 6,
          message: i18n.t('error'),
          description: `${key}: ${error.data[key]}`,
        });
      });
    } else {
      notification['error']({
        duration: 6,
        message: i18n.t('error'),
        description: i18n.t('error_occured'),
      });
    }
  },

  dateDiffInDays: (d1, d2) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    let a = new Date(d1);
    let b = new Date(d2);
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
};
