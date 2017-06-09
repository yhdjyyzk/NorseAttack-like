export default class MathUtil {
   constructor() {

   }

   /**
    * @param curveness > 0 and < 1;
    */
   static getCurvenessPoint(from, to) {
       let median = {
         x: (from.x + to.x) / 2,
         y: (from.y + to.y) / 2
      };

      let d = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
      d = from.y > to.y ? -d : d;
      let k = - (from.x - to.x) / (from.y - to.y); // slope.

      // Calculate control point.
      let x = median.x + d / 4 * Math.cos(Math.atan(k));
      let y = median.y + d / 4 * Math.sin(Math.atan(k));

      return {
         x: x,
         y: y
      };
   }
}