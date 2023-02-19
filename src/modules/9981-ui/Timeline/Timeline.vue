<template>
  <p id="showTimeline" class="timeline"></p>
  <div class=".timeline-year"></div>
</template>

<script>
import { onMounted } from "vue";
function create_year(data) {
  console.log(data);
  let m = getObj(data);
  m.sort((a, b) => b.time - a.time);
  let years = fenzu(m);
  let timeline = document.createElement("div");
  timeline.className = "timeline";
  for (let year of years) {
    let timeline_year = document.createElement("ul");
    timeline_year.className = "timeline-year";
    let tmp_year = document.createElement("div");
    tmp_year.className = "year";
    tmp_year.innerText = year[0].year;
    timeline_year.appendChild(tmp_year);
    for (let i of year) {
      let a = new TimelineDay(i);
      timeline_year.appendChild(a.gethtml());
    }
    timeline.appendChild(timeline_year);
  }
  return timeline;
}
function fenzu(lis) {
  lis.sort((a, b) => b.year - a.year);
  let tmp = lis[0].year;
  let tmplis = [];
  let res = [];
  for (let i in lis) {
    if (lis[i].year === tmp) {
      tmplis.push(lis[i]);
    } else {
      tmp = lis[i].year;
      res.push(tmplis);
      tmplis = [lis[i]];
    }
  }
  res.push(tmplis);
  return res;
}
function getObj(data) {
  data = Array.from(data);
  let obj = [];
  console.log(data);
  console.log(data[1]);
  for (let key in data) {
    console.log(data[key]);
    console.log("********");
    let tmp = {};
    let a = data[key];
    console.log(a);
    tmp.title = a.title;
    tmp.link = a.url;
    tmp.time = new Date(a.time * 1000);
    tmp.year = tmp.time.getFullYear();
    console.log("............");
    console.log(tmp);
    obj.push(tmp);
    console.log(tmp);
  }
  return obj;
}
class TimelineDay {
  constructor(obj) {
    let yuefen =
      "一月、二月、三月、四月、五月、六月、七月、八月、九月、十月、十一、十二".split(
        "、"
      );
    this.title = obj.title;
    this.time = obj.time;
    this.month = yuefen[this.time.getMonth()];
    this.day = this.time.getDate();
    this.link = obj.link || null;
  }
  gethtml() {
    let li = document.createElement("li");
    li.className = "timeline-year-day";
    let tem = `<a href=".#data/${this.link}" class="main">
                <div class="time"><span class="month">${this.month}</span>
                <span class="day">${this.day}日</span></div>
                <div class="title">${this.title}</div>
                </a>`;
    li.innerHTML = tem;
    return li;
  }
}
function showline(data) {
  let s = document.querySelector("#showTimeline");
  s.appendChild(create_year(data));
}
export default {
  props: {
    title: {
      type: String,
      default: "默认",
    },
    datas: {
      type: Object,
    },
  },
  setup(props) {
    onMounted(() => {
      setTimeout(() => {
        let data = JSON.parse(JSON.stringify(props.datas));
        showline(data);
      }, 100);
    });
  },
  data() {
    return {
      greeting: "Hello",
    };
  },
};
</script>

<style>
.timeline {
  color: red;
}
.timeline a:visited,
.timeline a:hover,
.timeline a {
  color: rgb(92, 124, 247);
  text-decoration: none;
}
.timeline-year {
  position: relative;
  margin: 0 2rem;
  padding: 1rem;
  text-align: left;
}
@media (min-width: 900px) {
  .timeline-year {
    margin: 0 auto;
    width: 850px;
  }
}
.timeline-year .year {
  color: rgb(92, 124, 247);
  font-size: 30px;
  font-weight: 700;
  display: block;
  height: 30px;
  line-height: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.timeline-year::after {
  content: "";
  border-left: 1px solid gray;
  position: absolute;
  top: calc(2rem + 65px);
  bottom: calc(2rem + 40px);
  left: calc(2rem + 6px);
  z-index: 1;
}
.timeline-year-day {
  display: flex;
  align-items: center;
  margin: 1rem;
}
.timeline-year-day::before {
  content: "";
  display: block;
  width: 8px !important;
  height: 8px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: rgb(255, 88, 111);
  z-index: 10;
  flex: 0 0 auto;
}
.timeline-year-day .main {
  display: flex;
  align-items: center;
  border-radius: 15px;
  background-color: #fff;
  padding: 10px 10px;
  margin-left: 1rem;
  flex: 1 1 auto;
  box-shadow: 10px 10px 15px 5px rgba(8, 12, 223, 0.1);
}
.timeline-year-day .main .time {
  font-size: 1rem;
  flex-basis: 32px;
  text-align: center;
  padding: 10px;
  flex: 0 0 3rem;
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.timeline-year-day .main .time .day {
  font-size: 16px;
}
.timeline-year-day .main .title {
  flex-grow: 1;
  box-sizing: border-box;
  border-left: 1px solid gray;
  line-height: 2rem;
  padding-left: 1rem;
  color: grey;
}
</style>
