(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1llF":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));t("XfO3"),t("HEwt"),t("tUrg");var l=t("q1tI"),n=t.n(l),s=t("1g+t"),r=t("kOA+"),c=t.n(r),i=t("Z8j+"),o=t("N9pq"),m=t.n(o),u=t("41Cq"),g=t("/4kY"),d="2351134387";a.default=function(e){var a=e.pageContext,t=a.currentPage,l=a.numPages,r=e.data,o="/blogs/"+(t+1),d=t-1==1?"/blogs":"/blogs/"+(t-1);return n.a.createElement(s.a,null,n.a.createElement(g.a,{title:"Blogs"}),n.a.createElement("section",{className:m.a.blog},n.a.createElement(u.a,{title:"lastest",subtitle:"posts"}),n.a.createElement("div",{className:m.a.center},r.posts.edges.map((function(e){var a=e.node;return n.a.createElement(i.a,{key:a.contentful_id,blog:a})}))),n.a.createElement("section",{className:m.a.links},t>=2?n.a.createElement(c.a,{fade:!0,to:d,className:m.a.link},"Prev"):null,Array.from({length:l},(function(e,a){return n.a.createElement(c.a,{fade:!0,to:"/blogs/"+(0===a?"":a+1),key:a,className:a+1===t?m.a.link+" "+m.a.active:""+m.a.link},a+1)})),t<3?n.a.createElement(c.a,{fade:!0,to:o,className:m.a.link},"Next"):null)))}},"Z8j+":function(e,a,t){"use strict";t("tUrg");var l=t("q1tI"),n=t.n(l),s=t("6Cab"),r=t.n(s),c=t("9eSz"),i=t.n(c),o=t("kOA+"),m=t.n(o);a.a=function(e){var a=e.blog,t=a.slug,l=a.title,s=a.image,c=a.published;return n.a.createElement("article",{className:r.a.blog},n.a.createElement("div",{className:r.a.imgContainer},n.a.createElement(i.a,{fluid:s.fluid,className:r.a.img,alt:"single post"}),n.a.createElement(m.a,{fade:!0,className:r.a.link,to:"/blog/"+t},"View"),n.a.createElement("h6",{className:r.a.date},c)),n.a.createElement("div",{className:r.a.footer},n.a.createElement("h4",null,l)))}}}]);
//# sourceMappingURL=component---src-template-blog-list-template-component-jsx-519f172787555059fbf0.js.map