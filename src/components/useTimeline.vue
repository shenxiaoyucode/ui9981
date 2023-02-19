<template>
    <div>
        <br /><br /><br />
        <p>时间线组件</p>
        <p>支持点击通过链接跳转</p>
        <Modal :title="title" :datas="datas"></Modal>
    </div>
</template>
<script>
import Modal from '../modules/9981-ui/Timeline'
export default {
    name: "useTimeline",
    data() {
        return {
            title: 'success',
            datas: [
                // 接收一个数据
                {
                    "title": "今日目标",
                    "topic": "生活",
                    "time": 1666221065,
                    "label": [
                        "日常",
                        "规划"
                    ],
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                },
                {
                    "title": "替换元素",
                    "topic": "",
                    "label": [],
                    "time": 1698054324,
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                },
                {
                    "title": "监听位置事件",
                    "topic": "",
                    "label": [],
                    "time": 1666259124,
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                },
                {
                    "title": "表单元素美化",
                    "topic": "",
                    "label": [],
                    "time": 1642671924,
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                },
                {
                    "title": "要做的事情",
                    "topic": "",
                    "label": [],
                    "time": 1676724327,
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                },
                {
                    "title": "高项错题记录",
                    "topic": "",
                    "label": [],
                    "time": 1666251965,
                    "markdown": "这里可以写简单介绍",
                    "url": "/"
                }
            ]
        }
    },
    setup() {
        const modalConfirm = () => {
            console.log('Modal Confirm');
        }
        const modalClose = () => {
            console.log('Modal Close');
        }
    },
    components: {
        Modal
    }
}
</script>
<style></style>