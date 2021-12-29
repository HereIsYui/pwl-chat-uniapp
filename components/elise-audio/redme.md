## 参数

| url      | audioColor | durationS       | audioId         |                                               |
| -------- | ----------- | -------------- | -------------- | ----------------------------------------------------- |
| 音频链接 | 背景颜色  | 音频长度 | 组件id | 

## 使用方法

```javascript
//html
<template>
  <elise-audio
    audioId="audio1"
    :url="url"
    audioColor="#68d7bb"
    :durationS="5"
  ></elise-audio>
</template>

//js
<script>
import eliseAudio from '@/components/elise-audio/elise-audio.vue'
export default {
    components: {eliseAudio},
    data() {
        return{
            url: ''
        }
    },
    methods: {
      //暂停播放-
      onPauseAudio(){
        uni.$emit('stop')
      }
    },
} 
</script>

```

