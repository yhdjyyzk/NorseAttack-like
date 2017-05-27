import RadialGradient from 'zrender/src/graphic/RadialGradient';

export default class Config {
   static animationDefaultDuring = 3000; //默认动画时间
   static animationEasing = 'linear'; //默认缓动函数
   static pointAnimateDuring =3000; //圆点动画时间

   static wsServer = 'ws://localhost:9000';

   static gradient = new RadialGradient(0.5, 0.5, 0.5, [
            {
                offset: 0,
                color: 'rgba(255, 255, 0, 0)'
            },
            {
                offset: 0.65,
                color: 'rgba(255, 255, 0, 0)'
            },
            {
                offset: 0.65,
                color: 'rgba(255, 255, 0, 0)'
            },
            {
                offset: 1,
                color: 'rgba(255, 255, 0, 1)'
            }
        ]);
}