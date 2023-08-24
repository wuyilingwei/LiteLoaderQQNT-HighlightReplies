# LiteLoaderQQNT-HighlightReplies
# 目前接手代为维护

### 功能
高亮右键消息后的“回复”，“撤回”和“删除”选项
<del>没错就是这么简单</del>

### 实现
MutationObserver 监听 DOM 的变化。当 span.q-context-menu-item__text 元素发生变化时，检查其内容是否为 "回复"，如果是，则将其父节点的颜色设置为绿色，删除和撤回同理

### 使用方法
git clone或者复制插件文件夹到LiteLoaderQQNT\plugins文件夹下

LiteLoaderQQNT本体：[LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)
