import Config from '../../Config';
import Link from './Link';
import Circle from 'zrender/src/graphic/shape/Circle';
import Group from 'zrender/src/container/Group';

export default class Tail {
    constructor(opts) {
        this.link = opts['link'] || null;
        this.size = opts['size'] || 2;
        this.during = opts['during'] || Config.animationDefaultDuring;
        this.loop = opts['loop'];
        this.callback = opts['callback'];
    }

    render() {
        let g = new Group();

        for(let index = 60; index > 0; index--) {
            let c = new Circle({
                shape: {
                    cx: 0,
                    cy: 0,
                    r: this.size
                },
                style: {
                    fill: `rgba(255, 255, 255, ${index * 0.003})`
                },
                position: [0, 0]
            });

            g.add(c);
        }

        if(this.link) {
            g.animate('', this.loop)
                .when(this.during, {
                    position: [1, 0]
                })
                .during((i, t) => {
                    let tmp = t;

                    for(let index = 0; index < g.childCount(); index++) {
                        if(tmp >= 0) {
                            let child = g.childAt(index);

                            if(tmp >= 0.98) {
                                let pos = this.link.pointAt(1);
                                child.position = pos;
                                child.style.opacity = 0;
                                continue;
                            }

                            let pos = this.link.pointAt(tmp);
                            child.position = pos;
                            child.style.opacity = 1;
                        }

                        tmp -= 0.005;
                    }
                })
                .start(Config.animationEasing)
                .done(this.callback);
        }

        return g;
    }
}