<template>
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
</template>

<script>
export default {
    name: 'DiscussDefault',
    props: {
        msg: String
    }
}
</script>


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
    background: #4A4141;;
    height: 100vh;
    padding: 20px;
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

</style>