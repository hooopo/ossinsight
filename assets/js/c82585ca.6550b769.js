"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7263],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=u(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64312:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Build a Better Github Insight Tool in a Week? A True Story",date:new Date("2022-06-20T00:00:00.000Z"),authors:["winkyao","fendy"],tags:["tidb"],image:"./how-different-db-handle-github-data.jpg",description:"The story about how we build the ossinsight project, including how we deal with the historical and real-time huge data, the database solutions and so on.",keywords:["tidb","ranking","github","database","github archive","gitHub metrics"]},l=void 0,u={permalink:"/blog/why-we-choose-tidb-to-support-ossinsight",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/why-we-choose-tidb-to-support-ossinsight/index.mdx",source:"@site/blog/why-we-choose-tidb-to-support-ossinsight/index.mdx",title:"Build a Better Github Insight Tool in a Week? A True Story",description:"The story about how we build the ossinsight project, including how we deal with the historical and real-time huge data, the database solutions and so on.",date:"2022-06-20T00:00:00.000Z",formattedDate:"June 20, 2022",tags:[{label:"tidb",permalink:"/blog/tags/tidb"}],readingTime:9.39,truncated:!1,authors:[{name:"Wink Yao",title:"Head of Community & Developer Ecosystem Team at PingCAP.",url:"https://twitter.com/golangwink",imageURL:"https://github.com/winkyao.png",key:"winkyao"},{name:"Fendy Feng",title:"Technical Content Developer",url:"https://github.com/septemberfd",imageURL:"https://github.com/septemberfd.png",key:"fendy"}],nextItem:{title:"Love, Code, and Robot \u2014 Explore robots in the world of code",permalink:"/blog/say-thanks-to-github-robots"}},c={image:a(14320).Z,authorsImageUrls:[void 0,void 0]},d=[{value:"Headache 1: we need both historical and real-time data.",id:"headache-1-we-need-both-historical-and-real-time-data",children:[],level:2},{value:"Headache 2: the data is huge!",id:"headache-2-the-data-is-huge",children:[],level:2},{value:"Headache 3: We have a &quot;pushy&quot; PM!",id:"headache-3-we-have-a-pushy-pm",children:[],level:2},{value:"How we deal with analytical queries with SQL",id:"how-we-deal-with-analytical-queries-with-sql",children:[{value:"Analyze a GitHub collection: JavaScript frameworks",id:"analyze-a-github-collection-javascript-frameworks",children:[],level:3}],level:2},{value:"Feedback: People love it!",id:"feedback-people-love-it",children:[],level:2},{value:"Lessons learned",id:"lessons-learned",children:[],level:2}],h={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In early January 2022, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ngaut1"},"Max"),", our CEO, a big fan of open-source, asked if my team could build a small tool to help us understand all the open-source projects on GitHub; and, that if everything worked well, we should open the API to help open source developers to build better insights. In fact, GitHub continuously publishes the public events in its open-source world through the open API. (Thank you and well done! Github). We can certainly learn a lot from the data!  "),(0,i.kt)("p",null,"I was excited about this project until Max said: \u201cYou\u2019ve only got one week.\u201d Well, the boss is the boss! Although time was tight and we were faced with multiple head-aching problems, I decided to take up this challenge. "),(0,i.kt)("h2",{id:"headache-1-we-need-both-historical-and-real-time-data"},"Headache 1: we need both historical and real-time data."),(0,i.kt)("p",null,"After some quick research, we found ",(0,i.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GHArchive"),", an open-source project that collects and archives all GitHub data from 2011 and updates it hourly. By the way, a lot of open-source analytical tools such as CNCF's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cncf/devstats"},"Devstats")," rely on GH Archive, too. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Thanks to GH Archive, we found the data source.")),(0,i.kt)("p",null,"But there's another problem: hourly data is good, but not good enough. We wanted our data to be updated in real time\u2014or at least near real time. We decided to directly use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/activity/events"},"GitHub event API"),", which collects all events that have occurred within the past hour. "),(0,i.kt)("p",null,"By combining the data from the GH Archive and the GitHub event API, we can gain streaming, real-time event updates."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub event updates",src:a(13625).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"GitHub event updates")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"headache-2-the-data-is-huge"},"Headache 2: the data is huge!"),(0,i.kt)("p",null,"After we decompressed all the data from GH Archive, we found there were more than 4.6 billion rows of GitHub events. That\u2019s a lot of data!  We also noticed that about 300,000 rows were generated and updated each hour."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The data volume of GitHub events occurred after 2011",src:a(46717).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"The data volume of GitHub events occurred after 2011")),(0,i.kt)("br",null),(0,i.kt)("p",null,"The database solution would be tricky here. Our goal is to build an application that provides real-time data insights based on a continuously growing dataset. So, scalability is a must. NoSQL databases can provide good scalability, but what follows is how to handle complex analytical queries. Unfortunately, NoSQL databases are not good at that. "),(0,i.kt)("br",null),(0,i.kt)("center",null,(0,i.kt)("img",{width:"50%",src:a(22077).Z,alt:"Scalability vs SQL"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Another option is to use an OLAP database such as ClickHouse. ClickHouse can handle the analytical workload very well, but it is not designed for serving online traffic. If we chose it, we would need another database for the online traffic. "),(0,i.kt)("br",null),(0,i.kt)("center",null,(0,i.kt)("img",{width:"50%",src:a(46361).Z,alt:"OLAP vs Online Serving"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"What about sharding the database and then building an extract, transform, load (ETL) pipeline to synchronize the new events to a data warehouse? This sounds workable."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How a sharded database solution can handle the GitHub data",src:a(44359).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"How a sharded database solution can handle the GitHub data")),(0,i.kt)("br",null),(0,i.kt)("p",null,"According to our product manager's (PM\u2019s) plan, we needed to do some repo-specific or user-specific analysis. Although the total data volume was huge, the number of events was not too large for a single project or user. This meant using the secondary indexes in RDBMS would be a good idea. But, if we decided to use the above architecture, we had to be careful in selecting the database sharding key. For example, if we use ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," as the sharding key, then queries based on ",(0,i.kt)("inlineCode",{parentName:"p"},"repo_id")," will be very tricky. "),(0,i.kt)("p",null,"Also, we're not experts on Kafka and data warehouses, mastering and building such an infrastructure in just one week was a very difficult task for us."),(0,i.kt)("p",null,"The choice is obvious now, and don't forget PingCAP is a database company! TiDB seems a perfect fit for this, and it's a good chance to eat our own dog food. So, why not using TiDB! :) "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If we use TiDB, can we get:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SQL support, including complex & flexible queries? \u2611\ufe0f "),(0,i.kt)("li",{parentName:"ul"},"Scalability?  \u2611\ufe0f "),(0,i.kt)("li",{parentName:"ul"},"Secondary index support for fast lookup? \u2611\ufe0f "),(0,i.kt)("li",{parentName:"ul"},"Capability for online serving? \u2611\ufe0f ")),(0,i.kt)("p",null,"Wow! It seems we got a winner! "),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"By using the secondary index, TiDB scanned 29,639 rows (instead of 4.6 billion rows) GitHub events in 4.9 ms",src:a(5644).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"By using the secondary index, TiDB scanned 29,639 rows (instead of 4.6 billion rows) GitHub events in 4.9 ms")),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To choose a database to support an application like OSS Insight, we think TiDB is a great choice.")," Plus, its simplified technology stack means a faster go-to-market and faster delivery of my boss' assignment. "),(0,i.kt)("p",null,"After we used TiDB, we got a simplified architecture as shown below. "),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simplified architecture after we use TiDB",src:a(14320).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"Simplified architecture after we use TiDB")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"headache-3-we-have-a-pushy-pm"},'Headache 3: We have a "pushy" PM!'),(0,i.kt)("p",null,"Just as the subtitle indicates, we have a very \u201cpushy\u201d PM, which is not always a bad thing. :)  His demands kept extending, from the single project analysis at the very beginning to the comparison and ranking of multiple repositories, and to other multidimensional analysis such as the geographical distribution of stargazers and contributors. What\u2019s more pressing was that the deadlines stayed unchanged!!! "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We had to keep a balance between the growing demands and the tight deadlines.")),(0,i.kt)("p",null,"To save time, we built our website using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"Docusaurus"),", an open source static site generator in React with scalability, rather than building a site from scratch. We also used ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts"},"Apache Echarts"),", a powerful charting library, to turn analytical results into good-looking and easy-to-understand charts. "),(0,i.kt)("p",null,"We chose TiDB as the database to support our website, and it perfectly supports SQL. This way, our back-end engineers could write SQL commands to handle complex and flexible analytical queries with ease and efficiency. Then, our front-end engineers would just need to display those SQL execution results in the form of good-looking charts. "),(0,i.kt)("p",null,"Finally, we made it. We prototyped our tool in just one week, and named it ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"OSS Insight"),", short for open source software insights. We continued to fine-tune it, and it was ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/blog/explore-deep-in-4.6-billion-github-events/"},"officially released")," on May 3. "),(0,i.kt)("h2",{id:"how-we-deal-with-analytical-queries-with-sql"},"How we deal with analytical queries with SQL"),(0,i.kt)("p",null,"Let's use one example to show you how we deal with complex analytical queries. "),(0,i.kt)("h3",{id:"analyze-a-github-collection-javascript-frameworks"},"Analyze a GitHub collection: JavaScript frameworks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/"},"OSS Insight")," can analyze popular GitHub collections by many metrics including the number of stars, issues, and contributors. Let\u2019s identify which JavaScript framework has the most issue creators.\nThis is an analytical query that includes aggregation and ranking. To get the result, we only need to execute one SQL statement: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT\n   /*+ read_from_storage(tiflash[ge]) */\n   ci.repo_name  AS repo_name,\n   COUNT(distinct actor_login) AS num\nFROM\n   github_events ge\n   JOIN collection_items ci ON ge.repo_id = ci.repo_id\n   JOIN collections c ON ci.collection_id = c.id\nWHERE\n   type = 'IssuesEvent'\n   AND action = 'opened'\n   AND c.id = 10005\n   -- Exclude Bots\n   and actor_login not like '%bot%'\n   and actor_login not in (select login from blacklist_users)\nGROUP BY 1\nORDER BY 2 DESC\n;\n")),(0,i.kt)("p",null,"In the statement above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"collections")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"collection_items")," tables store the data of all GitHub repository collections in various areas. Each table has 30 rows. To get the order of issue creators, we need to associate the repository ID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection_items")," table with the real, 4.6-billion-row ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," table as shown below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nmysql> select * from collection_items where collection_id = 10005;\n+-----+---------------+-----------------------+-----------+\n| id  | collection_id | repo_name             | repo_id   |\n+-----+---------------+-----------------------+-----------+\n| 127 | 10005         | marko-js/marko        | 15720445  |\n| 129 | 10005         | angular/angular       | 24195339  |\n| 131 | 10005         | emberjs/ember.js      | 1801829   |\n| 135 | 10005         | vuejs/vue             | 11730342  |\n| 136 | 10005         | vuejs/core            | 137078487 |\n| 138 | 10005         | facebook/react        | 10270250  |\n| 142 | 10005         | jashkenas/backbone    | 952189    |\n| 143 | 10005         | dojo/dojo             | 10160528  |\n...\n30 rows in set (0.05 sec)\n\n")),(0,i.kt)("p",null,"Next, let's look at the execution plan. TiDB is compatible with MySQL syntax, so its execution plan looks very similar to that of MySQL."),(0,i.kt)("p",null,"In the figure below, notice the parts in red boxes. The data in the table ",(0,i.kt)("inlineCode",{parentName:"p"},"collection_items")," is read through ",(0,i.kt)("inlineCode",{parentName:"p"},"distributed[row]"),", which means this data is processed by TiDB\u2019s row storage engine, TiKV. The data in the table ",(0,i.kt)("inlineCode",{parentName:"p"},"github_events")," is read through ",(0,i.kt)("inlineCode",{parentName:"p"},"distributed[column]"),", which means this data is processed by TiDB\u2019s columnar storage engine, TiFlash. TiDB uses both row and columnar storage engines to execute the same SQL statement. This is so convenient for OSS Insight because it doesn\u2019t have to split the query into two statements. "),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TiDB execution plan",src:a(12137).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"TiDB execution plan")),(0,i.kt)("br",null),(0,i.kt)("p",null,"TiDB returns the following result: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------------------+-------+\n| repo_name             | num   |\n+-----------------------+-------+\n| angular/angular       | 11597 |\n| facebook/react        | 7653  |\n| vuejs/vue             | 6033  |\n| angular/angular.js    | 5624  |\n| emberjs/ember.js      | 2489  |\n| sveltejs/svelte       | 1978  |\n| vuejs/core            | 1792  |\n| Polymer/polymer       | 1785  |\n| jquery/jquery         | 1587  |\n| jashkenas/backbone    | 1463  |\n| ionic-team/stencil    | 1101  |\n...\n30 rows in set\nTime: 7.809s\n\n")),(0,i.kt)("p",null,"Then, we just need to draw ",(0,i.kt)("a",{parentName:"p",href:"https://ossinsight.io/blog/deep-insight-into-js-framework-2021/#which-javascript-framework-have-the-widest-feedback-sources"},"the result")," with Apache Echarts into a more visualized chart as shown below. "),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JavaScript frameworks with the most issue creators",src:a(18973).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"JavaScript frameworks with the most issue creators")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Note: You can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"REQUEST INFO")," on the upper right side of each chart to get the SQL command for each result. "),(0,i.kt)("h2",{id:"feedback-people-love-it"},"Feedback: People love it!"),(0,i.kt)("p",null,"After we released OSS Insight on May 3, we have received loud applause on social media, via emails and private messages, from many developers, engineers, researchers, and people who are passionate about the open source community in various companies and industries. "),(0,i.kt)("p",null,"I am more than excited and grateful that so many people find OSS Insight interesting, helpful, and valuable. I am also proud that my team made such a wonderful product in such a short time. "),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Applause given by developers and organizations on Twitter-1",src:a(1740).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Applause given by developers and organizations on Twitter-1",src:a(20514).Z})),(0,i.kt)("center",null,(0,i.kt)("em",null,"Applause given by developers and organizations on Twitter")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"lessons-learned"},"Lessons learned"),(0,i.kt)("p",null,"Looking back at the process we used to build this website, we have learned many mind-refreshing lessons."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"First, quick doesn\u2019t mean dirty, as long as we make the right choices.")," Building an insight tool in just one week is tricky, but thanks to those wonderful, ready-made, and open source projects such as TiDB, Docusaurus, and Echarts, we made it happen with efficiency and without compromising the quality.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Second, it\u2019s crucial to select the right database\u2014especially one that supports SQL.")," TiDB is a distributed SQL database with great scalability that can handle both transactional and real-time analytical workloads. With its help, we can process billions of rows of data with ease, and use SQL commands to execute complicated real-time queries. Further, using TiDB means we can leverage its resources to go to market faster and get feedback promptly.  "),(0,i.kt)("p",null,"If you like our project or are interested in joining us, you\u2019re welcome to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/pingcap/ossinsight"},"submit your PRs"))," to our GitHub repository. You can also follow us on ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/OSSInsight"},"Twitter")," for the latest information. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"-join-our-workshop"},"\ud83d\udccc Join our workshop"),(0,i.kt)("p",{parentName:"div"},"If you want to get your own insights, you can ",(0,i.kt)("a",{parentName:"p",href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm"},"join our workshop")," and try using TiDB to support your own datasets. "))))}p.isMDXComponent=!0},46361:function(e,t,a){t.Z=a.p+"assets/images/olap-onlineserving-03810db566390b7bc6ba64795d38cb4d.jpg"},22077:function(e,t,a){t.Z=a.p+"assets/images/scalability-SQL-12b452ba1fa4589f2015130d7e288e4e.jpg"},13625:function(e,t,a){t.Z=a.p+"assets/images/github-events-updates-6c6100189f6858b1b4343d44df726690.gif"},46717:function(e,t,a){t.Z=a.p+"assets/images/github-events-d130f5c10c334e1f07e6cde39c6b3349.png"},14320:function(e,t,a){t.Z=a.p+"assets/images/how-different-db-handle-github-data-92e620aac66788ec6e978e1cfaeed7dc.jpg"},18973:function(e,t,a){t.Z=a.p+"assets/images/javascript-framework-rankings-f91505022d70d4d69843f540e901284a.png"},44359:function(e,t,a){t.Z=a.p+"assets/images/sharded-architecture-070fca836b2fb68da975955761225df8.png"},12137:function(e,t,a){t.Z=a.p+"assets/images/tidb-execution-plan-2-23e0c22fed94ffd403235404b9f6a115.png"},5644:function(e,t,a){t.Z=a.p+"assets/images/tidb-scanned-kennytm-6a8dbeb9e3269be73c059a3b64b0b2c1.png"},1740:function(e,t,a){t.Z=a.p+"assets/images/twitter-1-d3408d8f6225239a4782593122893a9a.png"},20514:function(e,t,a){t.Z=a.p+"assets/images/twitter-2-b8aa16778120ad2c4fe9fc181fd0fc4d.jpg"}}]);