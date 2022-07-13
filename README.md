# newsApi

A News API where user can add different news ,get all news together,get news by KEYWORDS,get news by TITLE,get news by AUTHOR.Also added the feature of CACHING where 
data get stored for 3 minutes.

For STARTING the application: USE NPM START (PACKAGES NEEDED ARE==>mongoose,expres,apicache)


For GETTING NEWS the user can use===>http://localhost:7007/news
For GETTING NEWS through KEYWORDS the user can use===>http://localhost:7007/news/{title,author}
The User can get N numbers of articles as PAGINATION also works==>http://localhost:7007/news?page={}&size={}
The Caching property works 3 MINUTES.


