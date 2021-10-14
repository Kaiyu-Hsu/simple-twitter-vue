# simple-twitter 專案

## 專案介紹

以前後端分離模式開發。  
**前端: Vue 2**  
**後端: Express + MySQL** 

模仿 twitter 社群平台介面，完成有 CRUD 功能的社群平台網頁。  
佈署網頁 ➡ https://armogo.github.io/simple-twitter-vue/

### 帳號權限

- User 帳號: 登入前台

```
種子帳號:
user1@example.com
user2@example.com
user3@example.com
user4@example.com
user5@example.com
user6@example.com

密碼:
12345678
```

- Admin 帳號: 登入後台管理介面

```
種子帳號:
root@example.com

密碼:
12345678
```

## 功能

### CRUD 操作

- **C**: 註冊新 user 帳號、發布新推文、回覆推文、推文按讚、新增跟隨 user、
- **R**: 瀏覽推文、瀏覽 user 資訊、瀏覽跟隨者/跟隨中清單
- **U**: 變更 user 個人資料、
- **D**: 取消跟隨 user、刪除推文( 使用 admin 帳號登入後台操作 )

### 開發中的功能 ( 使用 `socket.io` ):

- 動態通知
- 公開聊天室
- 私人訊息

## 開發成員

### ✨ 前端

- Kaiyu Hsu  
  https://github.com/Kaiyu-Hsu
- Armogo

### ✨ 後端 ( repo https://github.com/Armogo/twitter-api-2020.git )

- Rex Turagon  
  https://github.com/Turagon
- Ruby Tsai  
  https://github.com/rubytsaitw  

</br >  

# Clone 專案

## 開啟終端機(Terminal) cd 到存放專案本機位置並執行:
```
git clone https://github.com/Armogo/simple-twitter-vue.git //clone 專案到本地端

cd simple-twitter-vue-main  //切換至專案資料夾
```
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
