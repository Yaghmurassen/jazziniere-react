import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {
  TweenMax,
  TimelineMax,
  Power1,
  Power2,
  Back,
  Expo,
  Power4
} from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default class ScrollMagik extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    scrollAnimation4 = () => {
      const tl = new TimelineMax();

      tl.to(".animation-4", 2, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -2
      });

      const controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        triggerElement: ".animation-2",
        duration: 2000,
        triggerHook: "onLeave"
      })
        .setTween(tl)
        .setPin(".animation-4")
        .addTo(controller);
    };
  }

  render() {
    return <div>Hello</div>;
  }
}
