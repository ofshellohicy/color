/**
 * 常量文件
 */

const ROOT_DOMAIN = 'https://imcoding.org/Color/';             // 根域名
const ROOT_DOMAIN2 = 'https://junlink.cn/Color/';

const USER_LOGIN = ROOT_DOMAIN2 + 'User/login';                 // 用户登录
const GET_ADOBE_COLORS = ROOT_DOMAIN2 + 'Adobe/getAdobeColors'; // 随机获取Adobe配色方案
const SAVE_USER_COLORS = ROOT_DOMAIN2 + 'User/saveColor';       // 保存用户配色方案
const GET_USER_COLORS = ROOT_DOMAIN2 + 'User/getColor';         // 获取用户配色方案
const DELETE_USER_COLORS = ROOT_DOMAIN2 + 'User/deleteColor';   // 删除用户配色方案
const UPDATE_USER_COLORS = ROOT_DOMAIN2 + 'User/saveColor';   // 更新用户配色方案
const ABOUT_CONTENT = ROOT_DOMAIN2 + 'Config/about';            // 获取关于信息

module.exports = {
    USER_LOGIN,         // 用户登录
    GET_ADOBE_COLORS,   // 随机获取Adobe配色方案 
    SAVE_USER_COLORS,   // 保存用户配色方案
    GET_USER_COLORS,    // 获取用户配色方案
    DELETE_USER_COLORS, // 删除用户配色方案
    UPDATE_USER_COLORS, // 更新用户配色方案
    ABOUT_CONTENT,      // 获取关于信息
};