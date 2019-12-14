/**
 * @author/作者 进击の橙子君
 * @date/时间 2019/12/1 23:25
 * @Licenses/协议 GPLv3 此代码使用GPLv3协议，未经许可禁止修改。
 */

/**
 * 用来实现国际化功能的语言库和网站其它数据
 */
var Lang = {
    zh:{
        message:{
            userNotInput:"请输入",
            loginSuccess:"登录成功",
            logoutSuccess:"注销成功",
            updateLangSuccess:"修改语言成功",
            loading:"请稍后...",
            notOpen:"未开放...",
            noMore:"没有更多内容咯",
            searching:"查找中..."
        },
        login:{
            logo:"GO SEE 登录",
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
            info:"它是北欧最美之地，被描述为“美得令人窒息的地方”。挪威罗弗敦群岛，一个陌生而遥远的名字，" +
            "但到过这里的人无不为之倾倒，只要你看到过罗弗敦群岛的照片，它就会成为令你魂牵梦绕的美景天堂。",
            videoPlayState:"播放",
            videoPauseState:"暂停",
            videoText:"去看吧，带上喜欢的人！"
        },
        top:{
            title:"热门目的地",
            data:[
                {
                    title:'发呆腾冲',
                    info:'腾冲是著名的侨乡、文献之邦和翡翠集散地，也是省级历史文化名城。腾冲在西汉时称滇越，大理国中期设腾冲府。',
                    imgSrc:'images/目的地/2.jpg',
                    label:'中国'
                },
                {
                    title:'镰仓物语',
                    info:'镰仓是神奈川县的一个临海的城市，一座有近千年历史的古城。镰仓兴建于公元12世纪，作为当时的政治中心，佛教文化繁荣。',
                    imgSrc:'images/目的地/6.jpg',
                    label:'日本'
                },
                {
                    title:'微醺平安京',
                    info:'平安京寓意“和平与安定之都”，模仿的是中国隋唐时代的长安和洛阳，建筑群呈长方形排列，朱雀路为轴，贯通南北。',
                    imgSrc:'images/目的地/7.jpg',
                    label:'日本'
                },
                {
                    title:'北欧冰雪秘境',
                    info:'令人神往的雪山峡谷、令人窒息的美丽挪威！',
                    imgSrc:'images/目的地/11.jpg',
                    label:'北欧'
                },
                {
                    title:'清迈清莱',
                    info:'清迈为泰国北部城市，环境优美，气候凉爽，以玫瑰花著称，素有“泰北玫瑰”的雅称。',
                    imgSrc:'images/目的地/12.jpg',
                    label:'泰国'
                }
            ]
        },
        notes:{
            title:"旅行游记",
            data:[
                {
                    title:"腾冲之行",
                    info:"我对云南的热爱源于的名字--“彩云之南”是每个人对的亲密称呼。当我第一次踏足这片土地时，我感到了天地造化无处不在的奇迹，无论是孩子般变化的天气，还是千姿百态的动植物，少数名族的风情万种、数不胜数的美丽风景……这里所有的一切，都让我对云南产生了深厚的感情。",
                    imgSrc:"images/目的地/2.jpg",
                    time:"2019/10/20"
                },
                {
                    title:"我爱哈尔滨",
                    info:"中央大街北起松花江防洪纪念塔，南至经纬街，全长1450米，宽21.34米。其中车行方石路为10.8米宽，踩着长方形的面包石，漫步在这条异域风情的街道，仿佛回到了百年前的哈尔滨，吃一根地地道道的马迭尔冰棍，午餐可以去华梅西餐厅品一下西餐。",
                    imgSrc:"images/目的地/1.jpg",
                    time:"2019/11/20"
                },
                {
                    title:"我去日本啦",
                    info:"镰仓是神奈川县的一个临海的城市，一座有近千年历史的古城。镰仓兴建于公元12世纪，作为当时的政治中心，佛教文化繁荣。",
                    imgSrc:"images/目的地/6.jpg",
                    time:"2019/12/20"
                }
            ]
        },
        hotel:{
            title:"酒店",
            text:"和月亮共眠，跟太阳说早上好。",
            data:[
                {
                    title:"普吉岛玛里娜度假酒店",
                    info:"普吉岛玛里娜度假酒店身处卡伦海滩的南岬，坐拥宁静安谧的地理位置，旨在带您逃离城市的繁杂与喧嚣，探寻内心的宁静与放松。",
                    imgSrc:"images/目的地/h1.jpg",
                    label:"泰国",
                },
                {
                    title:"普吉岛阳光海滩度假酒店",
                    info:"普吉岛阳光海滩度假酒店坐落在美丽的芭东海滩沿岸，享有巴东湾的全景，距离海滩仅数步之遥。",
                    imgSrc:"images/目的地/h2.jpg",
                    label:"泰国",
                },
                {
                    title:"舞滨日和酒店",
                    info:"下榻开业于2017-01-01的舞滨日和酒店(Hiyori Hotel Maihama)，感受东京的独特魅力。",
                    imgSrc:"images/目的地/h3.jpg",
                    label:"日本",
                },
                {
                    title:"大阪心斋桥格兰多酒店",
                    info:"大阪心斋桥格兰多酒店身处热闹繁华的大阪市中心心斋桥，地理位置十分优越，仅需短暂步行即可抵达地铁站长堀桥站及日本桥站，为您的出行带来无限便利。",
                    imgSrc:"images/目的地/h4.jpg",
                    label:"日本",
                },
                {
                    title:"和颐至尊酒店",
                    info:"酒店位于南京路步行街中心位置、地处南京路步行街上，毗邻人民广场、杜莎夫人蜡像馆、城隍庙、豫园、外滩、淮海路商圈、隔江眺望东方明珠、环球金融中心。",
                    imgSrc:"images/目的地/h5.jpg",
                    label:"中国",
                },
                {
                    title:"塔麦瓦公寓",
                    info:"若想要游览弗拉季高加索，塔麦瓦公寓将会是一个不错的的住宿之选。",
                    imgSrc:"images/目的地/h6.jpg",
                    label:"俄罗斯",
                },
                {
                    title:"卡里尼娜街度假屋",
                    info:"对于想要捕捉弗拉季高加索城市风采的旅客来说，卡里尼娜街度假屋是一个理想的选择。",
                    imgSrc:"images/目的地/h7.jpg",
                    label:"俄罗斯",
                },
            ]
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
                        imgSrc:"images/目的地/1.jpg",
                        name:"雪乡童话|哈尔滨长白山",
                        tag:"雪乡|渔猎冬捕|畅玩滑雪|天然温泉|全程5星酒店",
                        link:"detail.html",
                        desc:{
                            title:"雪乡童话|哈尔滨长白山",
                            info:"哈尔滨，别称冰城，是黑龙江省省会、副省级市、哈尔滨都市圈核心城市，国务院批复确定的中国东北地区重要的中心城市、国家重要的制造业基地 [1] 。截至2018年，全市下辖9个区、7个县、代管2个县级市，总面积53100平方千米，建成区面积435.28平方千米，2018年末户籍总人口951.5万人 [2] ，占全国土地面积的0.55%，全国总人口的0.7%",
                            look:"看看这里有些什么",
                            content:[
                                "体验1  值得私藏的冰雪秘境：镜泊湖体验冬捕文化，长白山探秘云顶天宫",
                                "体验2  2种方式穿越林海雪原：传统马拉爬犁PK雪地摩托的速度与激情",
                                "体验3  全程3重温泉体验：长白山自溢天然温泉水，享受“神水”级疗愈",
                                "体验4  1秒穿越东方莫斯科：打卡网红地标，迷失冰雪世界",
                                "体验5  万达雪场不限时畅玩：43条雪道，覆盖新手级至冬奥会标准",
                                "体验6  大东北的轻奢度假范儿：全程5星酒店，一次品鉴万豪、洲际、凯悦三大酒店集团旗下甄选"
                            ],
                        }
                    },
                    {
                        imgSrc:"images/目的地/2.jpg",
                        name:"发呆腾冲",
                        tag:"热气球|非遗皮影|北海湿地|珍稀温泉氡氟泉|全程好宿|瑜伽",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/3.jpg",
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
                        imgSrc:"images/目的地/4.jpg",
                        name:"初见东瀛 | 日本",
                        tag:"温泉酒店|独栋町屋|特色餐食|和服体验|新干线",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/5.jpg",
                        name:"寻味本州 | 东京大阪",
                        tag:"米其林怀石·蟹道乐·箱根温泉·汤豆腐·山梨定食",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/6.jpg",
                        name:"镰仓物语 | 东京",
                        tag:"灌篮高手|1天自由活动|市区酒店",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/7.jpg",
                        name:"微醺平安京 | 京都",
                        tag:"山崎酒厂参观|清酒品鉴|和风町屋|露天温泉|米其林",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/8.jpg",
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
                        imgSrc:"images/目的地/9.jpg",
                        name:"冰与火的浪漫 | 芬兰冰岛",
                        tag:"蓝湖温泉·冰川徒步·岩石教堂·出海观鲸·特色鹿肉餐",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/10.jpg",
                        name:"北欧童话",
                        tag:"圣诞老人村·紫水晶矿·狗拉雪橇·破冰船·冰洞探险·蓝湖",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/11.jpg",
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
                        imgSrc:"images/目的地/12.jpg",
                        name:"风之梦秸丨清迈清莱",
                        tag:"泰服体验·网红咖啡馆·梦秸山·黑白庙·松德寺",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/13.jpg",
                        name:"瑶亚落日丨普吉岛",
                        tag:"海景餐厅·西蒙人妖秀·ATV·神仙半岛·私人泳池",
                        link:"",
                    },
                    {
                        imgSrc:"images/目的地/14.jpg",
                        name:"真情基马拉丨普吉岛",
                        tag:"2晚基马拉·海上音乐趴·网红海景秋千·米其林·迷失绿洲",
                        link:"",
                    }
                ]
            }
        ],
        ticket:{
            airline:"国际航空",
            userInfo:"用户信息",
            info:"填写你的信息",
            btn:"搜索",
            fromAirport:"起飞机场",
            toAirport:"降落机场",
            fromTime:"起飞时间",
            phone:"手机号",
            name:"名字",
            id:"证件号",
            fromAirportValue:"",
            toAirportValue:"",
            fromTimeValue:"",
            phoneValue:"",
            nameValue:"",
            idValue:"",
            ticketList:"机票列表",
            help:"如果你需要帮助，请联系我们",
            tickets:[]
        },
        about:{
            title:"About us",
            siteInfo:"网站简介",
            siteContent:"GO SEE的中文翻译是去看，这是个带有引导意味的网站名，告诉用户人生就是要" +
            "去听，去看，去感受。网站采用简洁大方的设计格调加上引人入胜的动效，力求更好用户体验。",
            position:{
                title:"定位",
                titleTran:"POSITION",
                content:"集分享，浏览，推荐旅游地点于一身，创造旅游一体化服务。",
            },
            concept:{
                title:"理念",
                titleTran:"CONCEPT",
                content:"创新，创造更好的用户体验，让用户体验的旅游的快乐。",
            },
            norm:{
                title:"规范",
                titleTran:"NORM",
                content:"一致流畅的体验，统一的设计风格。",
            },

        }
    },
    cn:{
        message:{
            userNotInput:"please input ",
            loginSuccess:"login success",
            logoutSuccess:"logout success",
            updateLangSuccess:"update lang success",
            loading:"loading...",
            notOpen:"not open...",
            noMore:"no more",
            searching:"searching..."
        },
        login:{
            logo:"GO SEE LOGIN",
            username:"username",
            password:"password",
            btn:"LOGIN",
        },
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
            info:"It is the most beautiful place in Northern Europe and is described as \"a breathtaking place\". Lofoten Islands, Norway, a strange and distant name, " +
            "but people who have been here are all overwhelmed. As long as you have seen pictures of Lofoten Islands, it will become a beautiful paradise for you.",
            videoPlayState:"play",
            videoPauseState:"pause",
            videoText:"Go see, bring someone you like!",
        },
        top:{
            title:"TOP DESTINATION",
            data:[
                {
                    title:'Tengchong',
                    info:'Tengchong is a famous hometown of overseas Chinese, a state of literature, and a jade distribution center. It is also ' +
                    'a provincial historical and cultural city. Tengchong was called Yunnan and Vietnam in the Western Han Dynasty, and Tengchong House was set up in the middle of Dali.',
                    imgSrc:'images/目的地/2.jpg',
                    label:'China'
                },
                {
                    title:'Kamakura',
                    info:'Kamakura is a seaside city in Kanagawa Prefecture, an ancient city with a history of nearly 1,000 years. Built in the 12th century, Kamakura ' +
                    'was a political center at the time, and Buddhist culture flourished.',
                    imgSrc:'images/目的地/6.jpg',
                    label:'Japan'
                },
                {
                    title:'Heiankyo',
                    info:'Ping Anjing means "the capital of peace and stability", which imitates Changan and Luoyang in the Sui and Tang Dynasties of China. The buildings are arranged in a rectangular ' +
                    'shape, with Suzaku Road as its axis, which runs from north to south.',
                    imgSrc:'images/目的地/7.jpg',
                    label:'Japan'
                },
                {
                    title:'Nordic',
                    info:'Amazing snow mountain canyons, breathtakingly beautiful Norway!',
                    imgSrc:'images/目的地/11.jpg',
                    label:'Nordic'
                },
                {
                    title:'Chiang Rai',
                    info:'Chiang Mai is a northern city in Thailand. It has a beautiful environment and a cool climate. ' +
                    'It is famous for its roses and is known as the "Thai North Rose".',
                    imgSrc:'images/目的地/12.jpg',
                    label:'Thailand'
                }
            ]
        },
        notes:{
            title:"NOTES",
            data: [
                {
                    title: "Tengchong's Trip",
                    info: "The name of my love for Yunnan-\" South of Colorful Clouds \"is the intimate title of everyone. When I first set foot on this land, I felt the miracle of heaven and earth everywhere, no matter Is it child-like changing weather, or animals and plants in a variety of ways, minority ethnic styles, countless beautiful scenery ... Everything here has made me have a deep feeling for Yunnan. ",
                    imgSrc: "images/目的地/2.jpg",
                    time: "2019/10/20"
                },
                {
                    title: "I love Harbin",
                    info: "Central Street starts from Songhua River Flood Control Memorial Tower in the north, and reaches Jingwei Street in the south, with a total length of 1,450 meters and a width of 21.34 meters. Among them, Fangshi Road is 10.8 meters wide, and it is walking on this exotic style while stepping on a rectangular breadstone. The street seems to be back to Harbin a hundred years ago, eating an authentic Madiel popsicles, and lunch at Huamei Western Restaurant for Western food. ",
                    imgSrc: "images/目的地/1.jpg",
                    time: "2019/11/20"
                },
                {
                    title: "I'm going to Japan",
                    info: "Kamakura is a seaside city in Kanagawa Prefecture, an ancient city with a history of nearly 1,000 years. Kamakura was built in the 12th century AD, and as a political center at that time, Buddhist culture flourished.",
                    imgSrc: "images/目的地/6.jpg",
                    time: "2019/12/20"
                }
            ]
        },
        hotel:{
            title:"HOTEL",
            text:"Find a good place to sleep well.",
            data:[
                {
                    title: "Marina Resort Phuket",
                    info: "Marina Resort Phuket is located on the southern headland of Karon Beach, in a peaceful and peaceful location, designed to take you out of the complexity and hustle and bustle of the city, and explore the inner peace and relaxation.",
                    imgSrc: "images/目的地/h1.jpg",
                    label: "Thailand",
                },
                {
                    title: "Phuket Sun Beach Resort",
                    info: "Phuket Sunny Beach Resort is located along the beautiful Patong Beach and offers panoramic views of Patong Bay, just steps away from the beach.",
                    imgSrc: "images/目的地/h2.jpg",
                    label: "Thailand",
                },
                {
                    title: "Mihama Sun Hotel",
                    info: "Stay at Hiyori Hotel Maihama, which opened on January 01, 2017 and feel the unique charm of Tokyo.",
                    imgSrc: "images/目的地/h3.jpg",
                    label: "Japan",
                },
                {
                    title: "Grand Hotel Osaka Shinsaibashi",
                    info: "Grand Hotel Osaka Shinsaibashi is located in the bustling downtown of Shinsaibashi, Osaka, with a very good location. It is only a short walk from the subway stations Nagahama Station and Nihonbashi Station. Bring unlimited convenience. ",
                    imgSrc: "images/目的地/h4.jpg",
                    label: "Japan",
                },
                {
                    title: "Heyi Supreme Hotel",
                    info: "The hotel is located in the center of Nanjing Road Pedestrian Street, on Nanjing Road Pedestrian Street, adjacent to People's Square, Madame Tussauds Museum, City God Temple, " +
                    "Yuyuan Garden, the Bund, Huaihai Road Commercial Circle, overlooking the Oriental Pearl Tower and the World Financial Center across the river.",
                    imgSrc: "images/目的地/h5.jpg",
                    label: "China",
                },
                {
                    title: "Tamaywa Apartments",
                    info: "If you want to visit Vladikavkaz, Tamaeva Apartments will be a great place to stay.",
                    imgSrc: "images/目的地/h6.jpg",
                    label: "Russia",
                },
                {
                    title: "Carlinina Street Holiday House",
                    info: "Carinina Street Holiday House is an ideal choice for travelers who want to capture the style of Vladikavkaz city.",
                    imgSrc: "images/目的地/h7.jpg",
                    label: "Russia",
                },
            ]
        },
        foot:{
            map:"SITE MAP"
        },
        destination: [
            {
                title: "China",
                info: "The People's Republic of China, commonly known as China, is a socialist country located in East Asia and the capital is located in Beijing." +
                " The estimated land area of ​​China's territory is approximately 9.6 million square kilometers. The third or fourth largest country by total area ",
                data: [
                    {
                        imgSrc: "images/目的地/1.jpg",
                        name: "Xuexiang Fairy Tale | Harbin Changbai Mountain",
                        tag: "Xuexiang | Fishing, Hunting and Winter Fishing | Playing Skis | Natural Hot Springs | Five-Star Hotel",
                        link: "detail.html",
                        desc: {
                            title: "Xuexiang Fairy Tale | Changbai Mountain in Harbin",
                            info: "Harbin, nicknamed Bingcheng, is the capital of Heilongjiang Province, a sub-provincial city, and a core city of the Harbin metropolitan area. " +
                            "It is an important central city in Northeast China and an important national manufacturing base approved by the State Council [1]. As of 2018 The city has" +
                            " 9 districts, 7 counties, and 2 county-level cities under its management, with a total area of ​​53,100 square kilometers and a built-up area " +
                            "of ​​435.28 square kilometers. At the end of 2018, the total registered population was 9.515 million people [2], occupying land across the country 0.55% of the area, 0.7% of the total population of the country ",
                            look: "Look at what's here",
                            content: [
                                "Experience 1 Secret of ice and snow worthy of privacy: Experience the culture of winter fishing in Jingbo Lake, and explore the Genting Temple in Changbai Mountain",
                                "Experience 2 2 ways to cross the forest sea snowfield: the speed and passion of traditional Mara sledge PK snowmobile",
                                "Experience 3 full 3 hot spring experience: Changbai Mountain overflows natural hot spring water and enjoys\" Shenshui \"level healing",
                                "Experience 4 1 second through the East Moscow: punch the net red landmark, get lost in the ice and snow world",
                                "Experience unlimited play at 5 Wanda Snow Resort: 43 snow trails, covering novice to Winter Olympic standards",
                                "Experience 6 luxury resorts in Northeast China: 5-star hotels throughout the trip, once tasting the selection of Marriott, Intercontinental and Hyatt Hotels"
                            ],
                        }
                    },
                    {
                        imgSrc: "images/目的地/2.jpg",
                        name: "Dad Tengchong",
                        tag: "Hot air balloon | Non-heritage shadow shadow | Beihai wetland | Rare hot springs Fluorine spring | Good stay all over the place | Yoga",
                        link: "",
                    },
                    {
                        imgSrc: "images/目的地/3.jpg",
                        name: "Youhua Lijiang | Guilin",
                        tag: "Longji Terrace · Samsung Cruise · Yinziyan · Gudong Waterfall · Yulong River Drifting",
                        link: "",
                    }
                ]
            },
            {
                title: "Japan",
                info: "The country name means\" the country of sunrise \". It is an island country located in East Asia. It consists of 6,852 islands including the Japanese archipelago, the Ryukyu Islands and the Izu-Ogasawara Islands.",
                data: [
                    {
                        imgSrc: "images/目的地/4.jpg",
                        name: "Homizu Higashi | Japan",
                        tag: "Hot spring hotel | Dongdong Machiya | Special meals | Kimono experience | Shinkansen",
                        link: "",
                    },
                    {
                        imgSrc: "images/目的地/5.jpg",
                        name: "Search for Honshu | Tokyo Osaka",
                        tag: "Michelin Kaise, Crab Dole, Hakone Onsen, Soup Tofu, Yamanashi Set Meal",
                        link: "",
                    },
                    {
                        imgSrc: "images/目的地/6.jpg",
                        name: "Kamakura Story | Tokyo",
                        tag: "Slam Dunk Master | 1 Day Free Activity | Urban Hotel",
                        link: "",
                    },
                    {
                        imgSrc: "images/目的地/7.jpg",
                        name: "Weiji Heiankyo | Kyoto",
                        tag: "Yamazaki Winery Tour | Sake Tasting | Wakafujiya | Open-air Hot Spring | Michelin",
                        link: "",
                    },
                    {
                        imgSrc: "images/目的地/8.jpg",
                        name: "Japanese-style Machiya | Kansai, Japan",
                        tag: "Kimono experience | Sushi making | Machiya experience || Kimono experience | Universal Studios",
                        link: "",
                    }

                ]
            },
            {
                title: "Nordic",
                info: "Abbreviation for northern Europe, around Leres Scandinavia, there are countries: Denmark, Finland, Iceland, Norway, Sweden.",
                data: [
                {
                    imgSrc: "images/目的地/9.jpg",
                    name: "The romance of ice and fire | Finland and Iceland",
                    tag: "Blue Lake Hot Spring · Glacier Trekking · Rock Church · Whale Watching · Special Venison Meal",
                    link: "",
                },
                {
                    imgSrc: "images/目的地/10.jpg",
                    name: "Nordic fairy tale",
                    tag: "Santa Claus Village · Amethyst Mine · Dog Sled · Icebreaker · Ice Cave Adventure · Blue Lake",
                    link: "",
                },
                {
                    imgSrc: "images/目的地/11.jpg",
                    name: "Nordic Ice and Snow",
                    tag: "Finland sauna · king king crab · glass house · icebreaker · dog sled · snowmobile",
                    link: "",
                }
            ]
        },
        {
            title: "Thailand",
            info: "It is a constitutional monarchy in Southeast Asia. The capital and largest city is Bangkok. Thailand is bordered by Laos and Cambodia in the east, Siam Gulf and Malaysia in the south, Myanmar and the Andaman Sea in the west, and one of the founding members of the Association of Southeast Asian Nations.",
            data: [
                {
                    imgSrc: "images/目的地/12.jpg",
                    name: "Wind Dream Straw 丨 Chiang Mai Chiang Rai",
                    tag: "Thai service experience, Internet cafe, Meng straw mountain, Black and white temple, Songde temple",
                    link: "",
                },
                {
                    imgSrc: "images/目的地/13.jpg",
                    name: "Yoya Sunset 丨 Phuket",
                    tag: "Seaview restaurant, Simon Simon show, ATV, Immortal Peninsula, private pool",
                    link: "",
                },
                {
                    imgSrc: "images/目的地/14.jpg",
                    name: "True Kimala 丨 Phuket",
                    tag: "2 nights in Kimara · Sea Music Party · Net Red Seascape Swing · Michelin · Lost Oasis",
                    link: "",
                }
            ]
        }
    ],
        ticket:{
            airline:"airline",
            userInfo:"USER INFO",
            info:"fill in your information",
            btn:"SEARCH",
            fromAirport:"FROM AIRPORT",
            toAirport:"TO AIRPORT",
            fromTime:"FROM TIME",
            phone:"PHONE NUMBER",
            name:"NAME",
            id:"ID NUMBER",
            fromAirportValue:"",
            toAirportValue:"",
            fromTimeValue:"",
            phoneValue:"",
            nameValue:"",
            idValue:"",
            ticketList:"TICKET LIST",
            help:"if you need help, please contact us",
            tickets:[]
        },
        about: {
            title: "About us",
            siteInfo: "Site Info",
            siteContent: "GO SEE Chinese translation is to see, this is a website name with guiding meaning, telling users that life is what they want" +
            "Listen, see, and feel. The site uses a simple and elegant design style and engaging dynamic effects to strive for a better user experience.",
            position: {
                title: "Positioning",
                titleTran: "",
                content: "Combining sharing, browsing, and recommending travel destinations, creating integrated tourism services",
            },
            concept: {
                title: "Idea",
                titleTran: "",
                content: "Innovation to create a better user experience and make the user experience the joy of travel",
            },
            norm: {
                title: "Specifications",
                titleTran: "",
                content: "Consistent and smooth experience, unified design style.",
            },

        }
    }
}