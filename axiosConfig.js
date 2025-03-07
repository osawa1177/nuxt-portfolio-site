// axiosConfig.js
import axios from 'axios';

// ユーザー名とパスワードを設定
const username = 'yourUsername';
const password = 'yourPassword';
const token = btoa(`${username}:${password}`);

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // あなたのAPIのベースURL
  headers: {
    'Authorization': `Basic ${token}`,
    'X-MICROCMS-API-KEY': '30183846baae4f1b83f172788a157b38e70a' // 必要に応じて追加のヘッダーを設定
  }
});

export default axiosInstance;
