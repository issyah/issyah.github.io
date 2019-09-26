(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{181:function(e,t){e.exports={attributes:{title:"Free Hosting For Your Personal Website",url:"free-hosting-for-your-personal-website",date:"17 Sep 2019",online:!0,description:"So you are about to embark on a whole new journey into the industry. You have finally graduated but you have no experience. You want to spice up your resume but can't afford to buy a hosting service and domain to host your personal website. How do you even show your capabilities? Github has the answer.",img:"/images/portfolio.svg"},html:'<p>If you have been working with multiple projects with different developers, you have probably heard of Github. If you are new to development and writing codes, you might want to learn more about <a href="https://git-scm.com">Git</a> and <a href="https://github.com">Github</a> first.</p>\n<p>A piece of quick information about Github but you can totally skip this part.</p>\n<div class="well">\n<p>Github is basically a web GUI version of Git and a whole lot more. You can create your projects there and track changes done by other teams or even yourself. Git can even be used if you\'re a solo developer. You can create small updates or features by creating a new \'branch\' from the main project.</p>\n<p>With this workflow, the master/main \'branch\' won\'t be affected by any changes made by the newly created \'branch\'. This is ideal as any code changes are isolated on this new branch and won\'t affect the master \'branch\'. Once you are completely satisfied with the changes, you can simply merge the create branch to the master branch and you are all set! I highly recommend learning about git if you have no experience with it.</p>\n</div>\n<h2>Github Pages</h2>\n<hr>\n<p><img src="https://i.ytimg.com/vi/2MsN8gpT6jY/maxresdefault.jpg" alt="Github Pages"></p>\n<p>The feature in Github we are going to look at is Github Pages. Github Pages allows you to host your projects under your username (yourusername.github.io). You can only host static websites, meaning projects written in server languages such as PHP, Java or Ruby won\'t work.</p>\n<p>Your repository (folder project) on Github <strong>needs</strong> to be public as well, meaning other developers/users will be able to see your project and codes. In our situation, it is ideal that your source code is public so your potential employer can see what you can do and what you are capable of.</p>\n<blockquote>\n<p>You should never upload any important or confidential information.</p>\n</blockquote>\n<h2>Create A Github Account</h2>\n<hr>\n<p>Create an account with <a href="https://github.com">Github</a> if you don\'t have one. Choose the free plan and get your email verified!</p>\n<p><img src="/images/github-signup.jpeg" alt="Github Page"></p>\n<h2>Create A New Repository</h2>\n<hr>\n<p>Once you have set up your account, go ahead and <a href="https://github.com/new">Create a new repository</a>. The repository name should be :</p>\n<p><strong>yourusername.github.io</strong></p>\n<p>where <strong>yourusername</strong> is the user name you have created for Github. <strong>yourusername</strong> must match the user name you have created with Github or else, it won\'t work. Also, make sure it is set to public. Github won\'t be able to publish your site if it is set to private.</p>\n<p><img src="/images/github-new-repo.jpg" alt="Github New Repo"></p>\n<h2>Create A New File (index.html)</h2>\n<hr>\n<p>Go to your repository and click on <em>create new file</em>.</p>\n<p><img src="/images/create-new-file.jpg" alt="Github New File"></p>\n<p>Name the file <strong>index.html</strong> and add a <code>&lt;h2&gt;</code> tag with <strong>Hello World</strong> and <em>commit new file</em>.</p>\n<p><img src="/images/hello-world.jpg" alt="Github Hello World"></p>\n<h2>Test Your New Site!</h2>\n<hr>\n<p>Go to your browser and enter <strong>yourusername.github.io</strong>. You should see the site live now!</p>\n<p><img src="/images/test-website.jpg" alt="Github Page Hello World"></p>\n<p>If you still can\'t see your site, fret not. We may need to publish the site to Github Pages. On your repository, go to settings.</p>\n<p><img src="/images/settings.jpg" alt="Github Settings"></p>\n<p>Under <strong>Github Pages</strong> , <strong>source</strong>, use the dropdown and select <strong>master</strong> as the source.</p>\n<p><img src="/images/source.jpg" alt="Source"></p>\n<p>You are all set to build your new site! This is the most basic way to get your site up and running. You can upload your static files here and start working on it! However, we did not fully utilise the capabilities of Git in this example like cloning the repository to your local machine. You can even push your changes up to the repository as well using terminal or Github Desktop without the need to upload the files again and again.</p>\n'}},185:function(e,t,o){var map={"./free-hosting-for-your-personal-website.md":181};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=185},201:function(e,t,o){"use strict";o.r(t);o(108);var r,n=o(40),l=(o(17),o(14),o(29),o(4)),h={transition:"slide",asyncData:(r=Object(l.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o(185),r=t.keys().map((function(e){var o=e.match(/\/(.+)\.md$/);return Object(n.a)(o,2)[1],t(e)})),e.abrupt("return",{articles:r});case 3:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),methods:{},head:function(){return{title:"Issyah Ismail - Articles"}}},c=o(10),component=Object(c.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full p-4 sm:p-0 sm:w-10/12 md:w-1/2 mx-auto md:min-h-screen mt-10"},[o("h1",{staticClass:"text-5xl font-bold"},[e._v("Articles")]),e._v(" "),o("p",[e._v("Guide Articles and some other stuff.")]),e._v(" "),e.articles.length?e._l(e.articles,(function(article){return o("div",{staticClass:"rounded-lg overflow-hidden mt-10"},[article.attributes.img?o("div",{staticClass:"bg-green-500 p-5"},[o("nuxt-link",{attrs:{to:article.attributes.online?"/articles/"+article.attributes.url:""}},[o("img",{staticClass:"w-auto h-64 mx-auto",attrs:{src:article.attributes.img,alt:"Image Article"}})])],1):e._e(),e._v(" "),o("div",{staticClass:"py-4 px-8 bg-gray-100 text-black"},[o("nuxt-link",{attrs:{to:article.attributes.online?"/articles/"+article.attributes.url:""}},[o("h1",{staticClass:"text-3xl font-light"},[e._v(e._s(article.attributes.title))])]),e._v(" "),o("h4",{staticClass:"text-gray-500 text-sm"},[e._v(e._s(article.attributes.date))]),e._v(" "),o("p",{staticClass:"mt-4"},[e._v(e._s(article.attributes.description))]),e._v(" "),o("div",{staticClass:"mt-8 text-right"},[article.attributes.online?[o("nuxt-link",{staticClass:"rounded-full px-10 p-2 border bg-red-500 block md:inline-block text-center hover:bg-red-600",attrs:{to:"/articles/"+article.attributes.url}},[e._v("Read Article")])]:[e._v("\n                        Article coming soon.\n                    ")]],2)],1)])})):e._e()],2)}),[],!1,null,null,null);t.default=component.exports}}]);