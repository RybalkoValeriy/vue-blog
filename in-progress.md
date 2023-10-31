db scheme: https://mysql.tutorials24x7.com/blog/guide-to-design-a-database-for-blog-management-in-mysql 


todo:
 - [x] get project example + import vue 2 doc from work OneNoe acc
 - [x] init mock server to get data
 - [x] resolve issue with load topics * app
 - [x] create link to open by topic - articles
 - [ ] show Articles by singed UserId, show user in panel as logIn User
 - [ ] delay load items in topic-articles / to use load spinner
 - [ ] app link to use profile?
 - [ ] use ArticleDetails to show one opened article
 - [ ] articles entity load from signed-in user
 - [x] continue add the loadingAllTopics on load app.
 - [ ] consider to move API from express to .net EF/dapper and local db?

bootstrap:
    https://bootstrap-vue.org/docs/components/list-group#list-group

 note: 
    - load initiate: 
        - app.ts 
            field targetEntity
            @action loadTargetEntity from Service and @mutation set targetEntity + @action loadCommon(){this.loadEntity}
        - app.vue
            on async created invoke AppModule.loadCommon
        - targetEntity.vue
            use getter to get targetEntity from AppModule.targetEntity
    - nested routes:


