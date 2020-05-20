<template>
    <div class="chats-container">
        <message />
    </div>
</template>

<script>
import message from '@/components/message.vue'
export default {
    props: ['messages'], // _id.vueにメッセージの値を送る
    components: {
        message
    },
    // mounted () {
    //     console.log(this.messages);
    // }
}
</script>
<style>
.chats-container {
    padding: 16px;
}
</style>
