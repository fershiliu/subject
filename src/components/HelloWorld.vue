<template>
  <div>
    <SlickList
      :lockToContainerEdges="true"
      axis="y"
      lockAxis="y"
      v-model="list"
      class="SortableList"
    >
      <SlickItem v-for="(item, i) in list" :index="i" :key="i">
        <div :class="{ underline: kg == false }" @click="check(i, $event)">
          <div class="item">
            <span>{{ i + 1 }}.</span>
            <input type="text" v-model="list[i]" :disabled="kg" />
            <button @click="del(i)" :disabled="kg">删除</button>
          </div>
          <div style="position: relative;" v-show="kg == false">
            <div class="bottom-unline" :class="{ bottomUnlineCheck: i == check1 }"></div>
          </div>
        </div>
      </SlickItem>
    </SlickList>
    <div v-show="kg == false">
      <input type="text" v-model="msg" class="add" />
      <button @click="add()">添加</button>
    </div>
  </div>
</template>

<script>
import { SlickList, SlickItem } from "vue-slicksort";
export default {
  data() {
    return {
      list: [
        "实现以下效果,视觉可自行美化",
        "点击编辑，所有内容可编辑，可考虑富文本编辑器或者contenteditable",
        "将所有编辑信息按顺序存储在浏览器network中",
        "选项可拖拽顺序",
        "实现基本的CRUD(增删该查)"
      ],
      // 判断是否可编辑
      kg: true,
      // 添加变量
      msg: "",
      // 动画效果判断
      check1: undefined
    };
  },
  methods: {
    // 删除
    del(i) {
      if (this.kg == false) {
        this.list.splice(i, 1);
      }
    },
    // 增加
    add() {
      if (this.msg != "") {
        this.list.push(this.msg);
        this.msg = "";
      } else {
        alert("添加不能为空");
      }
    },
    check(i, e) {
      if (e.target.nodeName == "INPUT") {
        if (this.kg == false) {
          this.check1 = i;
        }
      }
    }
  },
  components: {
    SlickItem,
    SlickList
  },
  watch: {
    list() {
      sessionStorage.setItem("value", this.list);
    }
  },
  mounted() {
    sessionStorage.setItem("value", this.list);
  }
};
</script>

<style>
input {
  border: 0;
  width: 100%;
  outline: none;
}
input:disabled {
  background: #fff;
}
.underline .bottom-unline {
  width: 100%;
  height: 1px;
  background-color: rgb(98, 95, 95);
  margin-top: 8px;
  transition: all 0.4s linear;
}
.item {
  display: flex;
}
.item button {
  width: 10%;
}
.item {
  width: 100%;
  padding: 50px 0 8px 0;
}
.add {
  margin: 20px 0;
  border: 1px solid #000;
}
.bottomUnlineCheck {
  height: 2px !important;
  background-color: #1976d2 !important;
}
</style>
