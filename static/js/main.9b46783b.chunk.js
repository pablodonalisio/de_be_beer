(this["webpackJsonpde-be-beer"]=this["webpackJsonpde-be-beer"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(21),s=c.n(r),i=(c(29),c(30),c(0)),o=function(e){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("h1",{className:"brand",children:"De_Be_Beer"}),Object(i.jsxs)("div",{className:"navbar-links",children:[Object(i.jsx)("a",{href:"/de_be_beer",className:"navbar-link",children:"Home"}),Object(i.jsx)("a",{href:"/de_be_beer/products",className:"navbar-link",children:"Productos"})]})]})},j=c(22),b=c(3),d=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"sticker",children:[Object(i.jsxs)("p",{className:"sticker-text",children:["Disfruta de las mejores juntadas con amigos.",Object(i.jsx)("br",{}),"Nosotros te llevamos la bebida!"]}),Object(i.jsx)("img",{src:"https://www.infocampo.com.ar/wp-content/uploads/2019/04/cerveza-argentina.jpg",alt:"Fiesta con amigos",className:"sticker-image"})]})})},l=c(24),m=c(8),u=[{itemID:1,name:"Cerveza IPA",brand:"Andes",image:"https://hudson.grupoelnene.com.ar/6866-home_default/cerveza-andes-origen-ipa-lt.jpg",price:"240,00"},{itemID:2,name:"Cerveza Rubia",brand:"Andes",image:"http://maxerfoods.com/wp-content/uploads/2021/01/cerveza-andes-rubia-1.jpg",price:"200,00"},{itemID:3,name:"Cerveza Roja",brand:"Andes",image:"https://tudeliveryonline.com.ar/tienda/wp-content/uploads/2020/08/roja.jpg",price:"220,00"},{itemID:4,name:"Cerveza Negra",brand:"Andes",image:"https://www.supereldesafio.com.ar/wp-content/uploads/2020/09/1674-ANDES-CERVEZA-NEGRA-1000-CM.jpg",price:"220,00"},{itemID:5,name:"Vino malbec",brand:"Vi\xf1as de Balbo",image:"https://jumboargentina.vteximg.com.br/arquivos/ids/204132-750-750/Vino-Vi%C3%91as-De-Balbo-Borgo%C3%B1a-Vino-Tinto-Vi%C3%91as-De-Balbo-Borgo%C3%91a-1125-Cc-1-40525.jpg?v=636383662319070000",price:"180,00"},{itemID:6,name:"Vino malbec",brand:"La Iride",image:"https://www.infinitybrands.pe/wp-content/uploads/2019/07/La-Iride-Reserva-Malbe-.jpg",price:"250,00"},{itemID:7,name:"Gaseosa lim\xf3n",brand:"Pritty",image:"https://jumboargentina.vteximg.com.br/arquivos/ids/339438-750-750/Pritty-LimOn-15-L-1-236731.jpg?v=636393804479000000",price:"120,00"},{itemID:8,name:"Gaseosa cola",brand:"Coca Cola",image:"https://bemyshopper.com/wp-content/uploads/2015/05/304859-600x600-A-1.jpg",price:"150,00"}],p=c(12),O=c(10),h=function(e){var t=e.product,c=Object(n.useState)("1"),a=Object(m.a)(c,2),r=a[0],s=a[1];return Object(i.jsxs)("div",{className:"container-card",children:[Object(i.jsx)("img",{src:t.image,alt:t.name}),Object(i.jsxs)("div",{className:"card-footer",children:[Object(i.jsxs)("div",{className:"product-description",children:[Object(i.jsx)("p",{children:t.name}),Object(i.jsx)("p",{children:t.brand}),Object(i.jsxs)("p",{children:["Precio: $",t.price]})]}),Object(i.jsxs)("div",{className:"quantity-box",children:[Object(i.jsx)("input",{type:"number",min:"1",defaultValue:"1",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("button",{type:"button",onClick:function(){return e.addProduct(t,r)},children:Object(i.jsx)(p.a,{icon:O.b})})]})]})]})},x=function(e){var t=Object(n.useState)([]),c=Object(m.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(0),o=Object(m.a)(s,2),j=o[0],b=o[1],d=e.products,l=e.removeProduct;return Object(n.useEffect)((function(){r(d.map((function(e){return Object(i.jsxs)("div",{className:"content",children:[Object(i.jsxs)("p",{children:[e.name,"(x",e.quantity,")",Object(i.jsx)("button",{type:"button",onClick:function(){return l(e)},className:"delete-button",children:Object(i.jsx)(p.a,{icon:O.c})})]}),Object(i.jsxs)("p",{children:["$",e.price]})]},e.itemID)})))}),[d,l]),Object(n.useEffect)((function(){b(d.reduce((function(e,t){return console.log(t.quantity),e+parseInt(t.price)*parseInt(t.quantity)}),0))}),[d]),Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsx)("h2",{children:"Cart"}),Object(i.jsxs)("div",{className:"cart-content content-header",children:[Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:"Item"})}),Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:"Precio"})})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{}),a,Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("p",{children:"Total"}),Object(i.jsxs)("p",{children:["$",j.toString()]})]})]}),Object(i.jsx)("button",{type:"button",className:"pagar",children:Object(i.jsx)(p.a,{icon:O.a})})]})},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1],r=function(e,t){e.quantity=t,0===c.filter((function(t){return t.itemID===e.itemID})).length?a([].concat(Object(l.a)(c),[e])):a(c.map((function(c){return c.itemID===e.itemID&&(c.quantity=t),c})))};return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"products-container",children:u.map((function(e){return Object(i.jsx)(h,{product:e,addProduct:r},e.itemID)}))}),Object(i.jsx)(x,{products:c,removeProduct:function(e){a(c.filter((function(t){return e.itemID!==t.itemID})))}})]})},g=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/de_be_beer/",component:d}),Object(i.jsx)(b.a,{path:"/de_be_beer/products",component:v})]})})};s.a.render(Object(i.jsxs)(a.a.StrictMode,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(g,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9b46783b.chunk.js.map