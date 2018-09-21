# 咨询 - news
> baseURL: prod: https://api.vpgame.com

* ## 新闻列表

> API: news/mix
>
> method: GET

| 参数(是否必须) | 说明 | 类型 |
| :------| :------: | ------: |
| game_type * | dota / csgo / lol / ow / pubg | int |
| Accept-Language * | zh_CN / en_US / ru_RU | string |
| data_key * | 时间戳 | int |
| limit	 | 数量 | int |
| search | 搜索关键字 | string |

gameType: 

* dota2 = 1
* lol = 2
* csgo = 6
* ow = 3
* pubg = 5

```js
// status: 200

{
  "data": [
    {
      "author": "string,作者",
      "description": "string,文章图集SEO页面描述",
      "type": "string,类型：article文章，gallery图集，video视频，column专栏",
      "title": "string,标题",
      "data_key": "integer,分页标记",
      "content": "string,内容",
      "post_time": "string,格式化后的发布时间",
      "article": {
        "cover": "string,封面图",
        "view": "string,浏览量",
        "author": "string,作者",
        "comment": "string,评论数",
        "id": "integer",
        "title": "string,标题",
        "content": "string,内容",
        "post_time": "string,发布时间"
      },
      "play_time": "string,视频播放时长",
      "cover": "string,封面图",
      "view": "integer,阅读数",
      "update_time": "string,格式化后的更新时间（专栏）",
      "comment": "integer,评论数",
      "id": "integer",
      "keyword": "string,文章图集SEO关键词",
      "articles": "integer,专栏文章数",
      "gallery": {
        "images": [
          {}
        ],
        "count": "string,图集总数"
      }
    }
  ],
  "paing": {
    "total": "integer",
    "offset": "integer",
    "limit": "integer"
  }
}

```

***

* ## 专栏列表

> API: news/columns
>
> method: GET

| 参数(是否必须) | 说明 | 类型 |
| :------| :------: | ------: |
| game_type * | dota / csgo / lol / ow / pubg | int |
| Accept-Language * | zh_CN / en_US / ru_RU | string |
| limit	 | 数量(init: 10) | int |
| offset	 | 偏移量(init: 0) | int |
| search | 搜索关键字 | string |

```js
// status: 200

{
  "data": [
    {
      "cover": "string,封面图",
      "view": "integer,浏览数",
      "update_time": "string,格式化后的更新时间",
      "is_collected": "boolean,是否收藏",
      "comment": "integer,评论数",
      "tag": "string,专栏标签",
      "id": "integer",
      "collection": "integer,收藏数",
      "title": "string,标题",
      "articles": "integer,文章数",
      "content": "string,内容"
    }
  ],
  "paging": {
    "total": "integer",
    "offset": "integer",
    "limit": "integer"
  }
}
```

***

* 视频列表

***

* 图集详情
