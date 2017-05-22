import Config from '../Config';
import MathUtil from '../util/math-util';
import BezierCurve from 'zrender/src/graphic/shape/BezierCurve';
import Group from 'zrender/src/container/Group';

export default class Link {
   constructor(opts) {
      this.from = opts['from'] || 0;
      this.to = opts['to'] || 0;
      this.curveness = opts['curveness'] || 0; // greater than 0 and less than 1. If 0, it is a stright line.
      this.loop = opts['loop'];
      this.callback = opts['callback'];
      this.lineWidth = opts['lineWidth'] || 1;
      this.stroke = opts['stroke'] || 'rgba(255, 255, 0, 1)';
      this.lineJoin = opts['lineJoin'] || 'round';
      this.lineCap = opts['lineCap'] || 'round';
      this.during = opts['during'] || Config.animationDefaultDuring;
   }

   render() {
      let { from, to } = this;
      let cp = MathUtil.getCurvenessPoint(this.from, this.to, this.curveness);

      let link = new BezierCurve({
         shape: {
            x1: from.x,
            y1: from.y,
            x2: to.x,
            y2: to.y,
            cpx1: cp.x,
            cpy1: cp.y
         },
         style: {
            stroke: this.stroke,
            lineWidth: this.lineWidth,
            fill: null,
            lineJoin: this.lineJoin,
            lineCap: this.lineCap
         }
      });

      return link;
   }
}