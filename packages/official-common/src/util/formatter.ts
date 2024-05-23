// 实现一个数字金额转换成千分位格式的函数，并且保留两位小数
const formatMoney = (value: number): string => {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export {
  formatMoney,
};
