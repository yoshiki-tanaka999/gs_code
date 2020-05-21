// 送信フォーム周り
// 現在ここでログイン認証をしてしまっている
// ログインページを作成し、遷移させたい
<template>
    <div class="input-container">
        <textarea></textarea>
    </div>
</template>
<script>
// import { db, firebase } from '~/plugins/firebase'
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
// export default {
//     data() {
//         return {
//             // dialogVisible: false,
//             text: null
//         }
//     },
//     methods: {
//             // openLoginModal () {
//             //     this.dialogVisible = true
//             // },
//             addMessage(event) {
//             if(this.keyDownedForJPConversion(event)) { return }
//             const channelId = this.$route.params.id
//             db.collection('channels').doc(channelId).collection('messages').add({ 
//                 text: this.text,
//                 createdAt: new Date().getTime(),
//             }).then(() => {
//                 console.log(this.text);
//                 console.log(this.createAt);
//                 this.text = null
//             })
//         },
//         keyDownedForJPConversion (event) {
//             const codeForConversion = 229
//             return event.keyCode === codeForConversion
//         },
//         // login() {
//         //     // window.alert('ログインしてくださいな')
//         //     const provider = new firebase.auth.GoogleAuthProvider()
//         //     firebase.auth().signInWithPopup(provider)
//         //     .then((result) => {
//         //         const user = result.user 
//         //         console.log(user)
//         //         this.dialogVisible = false
//         //         }).catch((error) => {
//         //         window.alert(error)
//         //         })
//         // }
//     }
// }
// </script>  

<style scoped>
.input-container {
    max-width: 70%;
    padding: 10px;
    height: 100%;
    justify-content: flex-end;
}
textarea {
    width: 70%;
    height: 100%;
}
.image-container {
    display: flex;
    justify-content: center;
}
img {
    width: 70%;
    cursor:pointer;
}
</style>