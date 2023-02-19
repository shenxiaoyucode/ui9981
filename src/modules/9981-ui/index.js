import NumberPlusOrSub from './NumberPlusOrSub'
import CardSlot from './CardSlot'
import Modal from './Modal'
import Stars from './Stars'
import Timeline from './Timeline'
//全部全局注册
const componnets = {
  NumberPlusOrSub,
  CardSlot,
  Modal,
  Stars,
  Timeline
}
export default {
  install(app) {
    for (let cmpt in componnets) { //cmpt是某一组件
      app.component(cmpt, componnets[cmpt]);
    }
  }
}
