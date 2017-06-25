import Config from '../../Config';
import Circle from 'zrender/src/graphic/shape/Circle';
import Group from 'zrender/src/container/Group';

export default class AnimatePoint {
    constructor(opts) {
        this.r = opts['r'] || 0;
        this.x = opts['x'] || 0;
        this.y = opts['y'] || 0;
        this.fill = opts['fill'] || 'rgba(255, 255, 0, 1)';
        this.lineWidth = opts['lineWidth'] || 2;
        this.during = opts['during'] || Config.pointAnimateDuring;
        this.loop = opts['loop'];
        this.callback = opts['callback'] || (() => { });
    }

    render() {
        let outterCircleNum = 3; // 动态环的个数
        let maxRaduis = this.r * 3; //外环最大半径
        let g = new Group();

        // for(let index = 0; index < outterCircleNum; index++) {
            // let centerPoint = new Circle({
            //     shape: {
            //         cx: this.x,
            //         cy: this.y,
            //         // r: this.r
            //         r: 0
            //     },
            //     style: {
            //         fill: this.fill,
            //         stroke: 'none'
            //     }
            // });

            // centerPoint.animateShape(this.loop)
            //     .delay(index / outterCircleNum * this.during)
            //     .when(this.during, {
            //         r: this.r
            //     })
            //     .start(Config.animationEasing)
            //     .done(this.callback);

            // centerPoint.animateStyle(this.loop)
            //     .delay(index / outterCircleNum * this.during)
            //     .when(this.during - 200, {
            //         opacity: 1
            //     })
            //     .when(this.during, {
            //         opacity: 0
            //     })
            //     .start(Config.animationEasing)
            //     .done(this.callback);

            // g.add(centerPoint);
        // }

        // 生成环
        for(let index = 0; index < outterCircleNum; index++) {
           let circleShape = new Circle({
              shape: {
                 cx: this.x,
                 cy: this.y,
                 r: this.r
              },
              style: {
                 fill: 'none',
                 stroke: this.fill,
                 lineWidth: this.lineWidth,
              },
              hoverable: false
           });

           circleShape.animateShape(this.loop)
              .when(this.during, {
                 r: maxRaduis
              })
              .delay(this.during / (outterCircleNum) * index)
              .start(Config.animationEasing)
              .done(this.callback);

           circleShape.animateStyle(this.loop)
              .when(this.during, {
                 opacity: 0,
                 lineWidth: 3
              })
              .delay(this.during / (outterCircleNum) * index)
              .start(Config.animationEasing)
              .done(this.callback);

           g.add(circleShape);
        }

        return g;
    }
}