(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{155:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"setting-up-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" Setting up MySQL")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#logging-in"}},[a._v("Logging In")])]),t("li",[t("a",{attrs:{href:"#creating-a-user"}},[a._v("Creating a User")])]),t("li",[t("a",{attrs:{href:"#create-a-database"}},[a._v("Create a Database")])]),t("li",[t("a",{attrs:{href:"#assigning-permissions"}},[a._v("Assigning Permissions")])])])]),t("p"),a._v(" "),t("p",[a._v("MySQL is a core component of Pterodactyl Panel but it can be confusing to setup and use if you've never done so before.\nThis is a very basic tutorial that skims just enough of the surface to set MySQL up and running with the panel.\nIf you're interested in learning more, there are some great tutorials available on the Internet.")]),a._v(" "),t("h2",{attrs:{id:"logging-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-in","aria-hidden":"true"}},[a._v("#")]),a._v(" Logging In")]),a._v(" "),t("p",[a._v("The first step in this process is to login to the MySQL command line where we will be executing some statements to get\nthings setup. To do so, simply run the command below and provide the Root MySQL account's password that you setup when\ninstalling MySQL. If you do not remember doing this, chances are you can just hit enter as no password is set.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql -u root -p\n")])])]),t("h2",{attrs:{id:"creating-a-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a User")]),a._v(" "),t("p",[a._v("For security sake, and due to changes in MySQL 5.7, you'll need to create a new user for the panel. To do so, we want\nto first tell MySQL to use the mysql database, which stores such information.")]),a._v(" "),t("p",[a._v("Next, we will create a user called "),t("code",[a._v("pterodactyl")]),a._v(" and allow logins from localhost which prevents any external connections\nto our database. You can also use "),t("code",[a._v("%")]),a._v(" as a wildcard or enter a numeric IP. We will also set the account password\nto "),t("code",[a._v("somePassword")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("USE")]),a._v(" mysql"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{attrs:{class:"token comment"}},[a._v("# Remember to change 'somePassword' below to be a unique password specific to this account.")]),a._v("\n"),t("span",{attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyl'")]),a._v("@'"),t("span",{attrs:{class:"token number"}},[a._v("127.0")]),t("span",{attrs:{class:"token number"}},[a._v(".0")]),t("span",{attrs:{class:"token number"}},[a._v(".1")]),t("span",{attrs:{class:"token string"}},[a._v("' IDENTIFIED BY '")]),a._v("somePassword'"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"create-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-database","aria-hidden":"true"}},[a._v("#")]),a._v(" Create a Database")]),a._v(" "),t("p",[a._v("Next, we need to create a database for the panel. In this tutorial we will be naming the database "),t("code",[a._v("panel")]),a._v(", but you can\nsubstitute that for whatever name you wish.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" panel"),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"assigning-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assigning-permissions","aria-hidden":"true"}},[a._v("#")]),a._v(" Assigning Permissions")]),a._v(" "),t("p",[a._v("Finally, we need to tell MySQL that our pterodactyl user should have access to the panel database. To do this, simply\nrun the command below. If you plan on also using this MySQL instance as a database host on the Panel you'll want to\ninclude the "),t("code",[a._v("WITH GRANT OPTION")]),a._v(" (which we are doing here). If you won't be using this user as part of the host setup\nyou can remove that.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" panel"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'pterodactyl'")]),t("span",{attrs:{class:"token variable"}},[a._v("@'127.0.0.1'")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{attrs:{class:"token keyword"}},[a._v("OPTION")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),t("span",{attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);