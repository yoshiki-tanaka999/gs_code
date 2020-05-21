<template>
    <div class="app-layout">
        <div class="sidebar-layout">
<!-- sidebar要素 -->
                <div class="sidebar">
                    <div class="sidebar_footer"> 
                        <p>スレッド一覧</p>
                        <!-- ボタンクリックで新チャンネル作成(firebaseに登録する) -->
                        <!-- <button type="button" class="btn btn-default  " data_but="btn-xs" v-on="channelAdd"><i class='fa fa-plus-circle'></i> add</button> -->
                    </div>
                    <div class="sidebar_channel">
                        <p id="general">
                            #general
                            <!-- <nuxt-link :to="`/channels/${channel.id}`">{{ "# " + channel.name }}</nuxt-link> -->
                            <!-- <router-link to="/channels">チャンネル名</router-link> -->
                        </p>
                        <p id="random">#random</p>
                    </div>
                <!-- <p v-if="isAuthenticated" class="logout" v-on:click="logout">ログアウト</p> -->
                </div>
        </div>
        <div class="main-content">
            <div class="chats-layout">
                <DiscussDefault msg="Welcome to Your Vue.js App"/>
                    <div class="chats-container">
<!-- messages要素 -->
                            <div class="chat-container">
                                <!-- <div class="thumbnail-container">
                                <img v-bind:src="message.user.thumbnail" />
                                </div> -->
<!-- message要素 -->
                                <div class="message-container">
                                    <!-- <div class="user-name">{{ displayName }}</div> -->
                                    <div class="message">{{ message }}</div>
                                </div>
                            </div>
                </div>
            </div>
            <div class="input-layout">
<!-- 送信フォーム -->
                    <div class="input-container">
                        <textarea></textarea>
                    </div>
            </div>
        </div>
    </div>
</template>








<script>
// message要素（削除予定）
export default {
    props: ['message'],
    computed: {
        displayName() {
            return "@" + this.message.user.name
        }    
    }
}


// import messages from '@/components/messages.vue'
// import ChatForm from '@/components/ChatForm.vue'
// import sidebar from '@/components/sidebar.vue'

// export default {
//     name: 'DiscussDefault',
//     components: {
//         messages, ChatForm, sidebar
//     },
// }
</script>

//   import { db, firebase } from '~/plugins/firebase'
// export default {
//   data () {
//     return {
//       channels: []
//     }
//   },
//   // ■ログアウト問題：vuex問題が解決されれば解決できる
//     // computed: {
//     // isAuthenticated() {
//     //   return this.$store.getters.isAuthenticated
//     // }
//   // },
//   // methods: {
//   //       logout() {
//   //     firebase.auth().signOut()
//   //       .then(() => {
//   //         window.alert('ログアウトに成功！')
//   //       })
//   //       .catch((e) => {
//   //         window.alert('ログアウトに失敗しました')
//   //         console.log(e)
//   //       })
//   //   }
//   // },
//   mounted() {
//     db.collection('channels').get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         this.channels.push({id: doc.id, ...doc.data()})
//       })
//       console.log(this.channels)
//     })
//   },
//   // methods: {
//   //   channelAdd: function (event) {
//   //     this.
//   //   }
//   // }
// }


<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}
.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}
.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}
.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
.app-layout {
    display: flex;
}
.sidebar {
    width: 300px;
    background: #2c3e50;
    height: 100vh;
    padding: 0 30px;
}
.sidebar p {
    color: #DDDDDD;
    padding-top: 4px;
}
.main-content {
    width: 100%;
    background: #F1F1F1;
    height: 100vh;
}
.logout {
    position: absolute;
    bottom: 10px;
    cursor: pointer;
}
.sidebar_footer {
    display: flex;
    justify-content: space-between;
}
.sidebar_footer button {
    border-radius: 10px ;
}

.sidebar_channel {
    text-align: left;
    color: #DDDDDD;
    padding-top: 4px;
}

.main-content {
    width: 100%;
    height: 100vh;
    background-color: #F1F1F1;
}

/* 追加部分 */
.chats-layout {
    overflow: scroll;
    height: 90%;
}

.input-layout {
    height: 10%;
}

</style>


// メッセージ
<style>
.chats-container {
    padding: 16px;
}
.chat-container {
    display: flex;
    padding: 8px;
}
.thumbnail-container {
    margin-right: 16px;
}
.thumbnail-container img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
}
.user-name {
    font-weight: bold;
}
</style>

// メッセージズ
<style>
.chats-container {
    padding: 16px;
}
</style>



// 送信フォーム
<style scoped>
.input-layout {
    position: relative;
    max-width: 100%;
    /* height: 100%; */
}
.input-container {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    bottom: 0;
}
textarea {
    width: 100%;
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