export default class MathUtil {
   constructor() {

   }

   /**
    * @param curveness > 0 and < 1;
    */
   static getCurvenessPoint(from, to, curveness) {
      let median = {
         x: (from.x + to.x) / 2,
         y: (from.y + to.y) / 2
      };

      // 计算垂直平分线的方程
      let k = - (from.x - to.x) / (from.y - to.y);
      let b = median.y - k * median.x;

      let x = median.x + curveness * Math.abs(from.x - to.x) / 2;
      let y = k * x + b;

      return {
         x: x,
         y: y
      };
   }
}