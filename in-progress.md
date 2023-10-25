example: https://mysql.tutorials24x7.com/blog/guide-to-design-a-database-for-blog-management-in-mysql 


todo:
 - [x] get project example + import vue 2 doc from work OneNoe acc
 - [x] init mock server to get data
 - [x] resolve issue with load topics * app
 - [ ] create link to open by topic - articles
 - [ ] use ArticleDetails to show one opened article
 - [ ] articles entity load from signed-in user
 - [x] continue add the loadingAllTopics on load app.


 note: 
    - load initiate: 
        - app.ts 
            field targetEntity
            @action loadTargetEntity from Service and @mutation set targetEntity + @action loadCommon(){this.loadEntity}
        - app.vue
            on async created invoke AppModule.loadCommon
        - targetEntity.vue
            use getter to get targetEntity from AppModule.targetEntity


