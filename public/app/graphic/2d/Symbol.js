import Config from '../../Config';
import Group from 'zrender/src/container/Group';
import Path from 'zrender/src/tool/path';

export default class Symbol {
   constructor(opts) {
      this.path = opts['path'] || '';
      this.scale = opts['scale'] || [1, 1];
      this.lineWidth = opts['lineWidth'] || 1;
      this.stroke = opts['stroke'] || 'rgba(255, 255, 0, 1)';
      this.fill = opts['fill'] || 'rgba(255, 255, 0, 0.3)';
      this.link = opts['link'] || null; // null的时候仅生成symbol.
      this.during = opts['during'] || Config.animationDefaultDuring;
      this.loop = opts['loop'];
      this.callback = opts['callback'];
   }

   render() {
      let symbol = Path.createFromString(this.path,
         {
            style: {
               lineWidth: this.lineWidth,
               stroke: this.stroke,
               fill: this.fill
            },
            scale: this.scale
         });

      let { x, y, width, height } = symbol.getBoundingRect();
      symbol.position = [-x * this.scale[0] - width * this.scale[0] / 2, -y * this.scale[1] - height * this.scale[1] / 2];
      let g = new Group();
      g.add(symbol);

      if(this.link) {
         g.animate('', this.loop)
            .when(this.during, {
               position: [1, 0]
            })
            .during((i, t) => {
               let pos = this.link.pointAt(t);
               let tangent = this.link.tangentAt(t);

               g.position = pos;
               g.rotation = -Math.PI / 2 - Math.atan2(tangent[1], tangent[0]);
            })
            .start(Config.animationEasing)
            .done(this.callback);
      }

      return g;
   }
}