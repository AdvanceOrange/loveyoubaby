/**
 * @author/作者 进击の橙子君
 * @date/时间 2019/12/1 23:25
 * @Licenses/协议 GPLv3 此代码使用GPLv3协议，未经许可禁止修改。
 * License Copyright: Copyright © 2007 Free Software Foundation, Inc.
 * License License: "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed." (www.gnu.org/licenses/gpl-3.0.en.html).
 * License Contact: Free Software Foundation (fsf.org).
 */


/**
 * 用来实现国际化功能的语言库和其它数据
 */
var Lang = {
    zh:{
        login:{
            logo:"GO SEE/登录",
            username:"用户名",
            password:"密码",
            btn:"登录",
        },
        nav:{
            logo:"GO SEE",
            home:"主页",
            destination:"目的地",
            hotel:"酒店",
            ticket:"机票",
            notes:"游记",
            about:"关于",
            contact:"联系",
            user_menu:{
                language:"英文",
                logout:"注销",
            }
        },
        typedString:[
            "接下来你要去哪？",
            "欢乐白天和黑夜精灵会找到你。",
            "爱旅游, <span style='color:#d14836'>❤</span>IT。"
        ],
        search:{
            placeholder:"输入...",
            btn:"搜索"
        },
        like:{
            title:"你喜欢这里吗?",
            videoPlayState:"播放",
            videoPauseState:"暂停",
            videoText:"去看吧，带上喜欢的人！"
        },
        top:{
            title:"热门目的地"
        },
        notes:{
            title:"旅行游记"
        },
        hotel:{
            title:"酒店",
            text:"和月亮共眠，跟太阳一同起床。"
        },
        foot:{
          map:"网站导航"
        },

        destination:[
            {
                title:"中国",
                info:"中华人民共和国，通称中国，是位于东亚的社会主义国家，首都位于北京。中国领土陆地面积估约960万平方千米，是世界上纯陆地面积第二大、陆地面积第三大、总面积第三大或第四大的国家",
                data:[
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dc0de501a290.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"雪乡童话|哈尔滨长白山",
                        tag:"雪乡|渔猎冬捕|畅玩滑雪|天然温泉|全程5星酒店",
                        link:"contact.html",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dd61f7613686.jpeg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"发呆腾冲",
                        tag:"热气球|非遗皮影|北海湿地|珍稀温泉氡氟泉|全程好宿|瑜伽",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5d83443ad017f.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"游画漓江 | 桂林",
                        tag:"龙脊梯田·三星游船·银子岩·古东瀑布·遇龙河漂流",
                        link:"",
                    }
                ]
            },
            {
                title:"日本",
                info:"国名意为“日出之国”，是位于东亚的岛屿国家，由日本列岛、琉球群岛和伊豆－小笠原群岛等6,852座岛屿组成，面积约37.8万平方公里",
                data:[
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dc4df5b3bc29.jpeg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"初见东瀛 | 日本",
                        tag:"温泉酒店|独栋町屋|特色餐食|和服体验|新干线",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5da7fefd29e97.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"寻味本州 | 东京大阪",
                        tag:"米其林怀石·蟹道乐·箱根温泉·汤豆腐·山梨定食",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dc378dca9462.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"镰仓物语 | 东京",
                        tag:"灌篮高手|1天自由活动|市区酒店",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dbbf7e4ae01a.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"微醺平安京 | 京都",
                        tag:"山崎酒厂参观|清酒品鉴|和风町屋|露天温泉|米其林",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5ddf82cb7ce98.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"和风町屋 | 日本关西",
                        tag:"和服体验|寿司制作|町屋体验||和服体验|环球影城",
                        link:"",
                    }

                ]
            },
            {
                title:"北欧",
                info:"欧洲北部个简称，勒勒斯堪的纳维亚半岛周围，有国家：丹麦、芬兰、冰岛、挪威、瑞典。",
                data:[
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5ddf8201e2cc2.jpeg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"冰与火的浪漫 | 芬兰冰岛",
                        tag:"蓝湖温泉·冰川徒步·岩石教堂·出海观鲸·特色鹿肉餐",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5b7699920f4e4.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"北欧童话",
                        tag:"圣诞老人村·紫水晶矿·狗拉雪橇·破冰船·冰洞探险·蓝湖",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dda26996a4e2.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"北欧冰雪秘境",
                        tag:"芬兰桑拿·捕捞帝王蟹·玻璃屋·破冰船·狗拉雪橇·雪地摩托",
                        link:"",
                    }
                ]
            },
            {
                title:"泰国",
                    info:"是东南亚的君主立宪制国家，首都及最大城市为曼谷。泰国国土东临老挝和柬埔寨，南接暹罗湾和马来西亚，西靠缅甸和安达曼海，东南亚国家联盟创始国之一。",
                data:[
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5cd638d686444.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"风之梦秸丨清迈清莱",
                        tag:"泰服体验·网红咖啡馆·梦秸山·黑白庙·松德寺",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dba4d5f0546a.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"瑶亚落日丨普吉岛",
                        tag:"海景餐厅·西蒙人妖秀·ATV·神仙半岛·私人泳池",
                        link:"",
                    },
                    {
                        imgSrc:"https://product-ssl-qiniu.bmtrip.com/product_5dd79ddbd8b91.jpg?imageMogr2/gravity/Center/thumbnail/!670x440r/crop/670x440",
                        name:"真情基马拉丨普吉岛",
                        tag:"2晚基马拉·海上音乐趴·网红海景秋千·米其林·迷失绿洲",
                        link:"",
                    }
                ]
            }
        ]
    }
    ,
    cn:{
        nav:{
            logo:"GO SEE",
            home:"HOME",
            destination:"DESTINATION",
            hotel:"HOTEL",
            ticket:"TICKET",
            notes:"NOTES",
            about:"ABOUT",
            contact:"CONTACT",
            user_menu:{
                language:"CHINESE",
                logout:"LOGOUT",
            }
        },
        typedString:[
            "Where will you go next?",
            "Happy day and night elves will find you.",
            "I love travel, <span style='color:#d14836'>❤</span>IT."
        ],
        search:{
            placeholder:"Start Typing...",
            btn:"GO"
        },
        like:{
            title:"LIKE HERE?",
            videoPlayState:"play",
            videoPauseState:"pause",
            videoText:"Go see, bring someone you like!",
        },
        top:{
            title:"TOP DESTINATION"
        },
        notes:{
            title:"NOTES"
        },
        hotel:{
            title:"HOTEL",
            text:"Find a good place to sleep well."
        },
        foot:{
            map:"SITE MAP"
        },

        destination:[
            {
                l:"Various definitions of Northern Europe often include the Nordic countries, and may also include some or all of the Baltic states, the British Isles, northern Germany, northern Belarus and northwest Russia.",
                title:"JAPAN",
                info:"The kanji that make up Japan's name mean 'sun origin', and it is often called the \"Land of the Rising Sun\"."
            }
        ]

    }
}