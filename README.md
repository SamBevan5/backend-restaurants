# Hungry 4 More - A searchable database of Boston area restaurants

Link to the live app on Netlify:

https://relaxed-euclid-da4898.netlify.app/

Link to the database on Heroku:

https://project3-restaurants-app.herokuapp.com/


## Setup:
What started as a project to catalog our favorite WWF wrestlers from the 80's turned into a searchable database of Boston area restaurants. That's quite a change, and apart from a failed experiment with a real-estate API, this was our passion project. Two of the three group members live in the Boston area (the third is in Austin, TX), so this would be a useful and entertaining endeavor. We found an API we thought was robust (Zomato), and started wireframing the function, look, and feel of our final product.  
  
## Execution:
After roughly coding the front and back ends we had an app that seemed to work. It didn't do anything useful, but it worked. Once we delved into the API, the problems mounted. We were limited to 20 return items from our API call, the return is nested peculiarly, and half the entries didn't even have thumbnails. This was an inauspicious start to the app that could revolutionize restaurant searching. We successfully increased search capacity to 100, but this maximum was determined by Zomato, so our hands were tied. Once able to disect the return data, we were able to organize in a way to maximize it's use to us. We also filtered for only those restaurants with a picture to display. 

After tackling the API we maneuvered our components in the front that are routed with React. We designed a fetching sidebar used to drill down the cuisine choice. The header accurate switches between pages of this SPA. Finally, the Favorites list keeps track of restaurants selected by each user, and contains links to additional information on the restaurant. 

The backend is fairly standard, but finds use for two models (restaurants and users) with RESTful routes inclusive. It's also where the majority of the authorization/authentication is housed. This bit proved tricky trying to enforce authorization without breaking usefullness. It was very difficult to get the full stack in unison. At times we had multiple users accidentally sharing favorites, automatic user logins, and at one point no way to effectively logout. Perserverence prevailed as we were able to deploy a fully functioning app that met our demands. 
  
## Conclusion
With auth taking as much effort and time as the rest, we had little resources to add in the "nice to have" features. Ideally, we could find a better API that is still cost effective (free) and allows more utilization of its calls. It's a distract to see that there were >10k search result, but are only presented 100, after wrestling just to get that many. Seeing as one of us is from Austin, we originally wanted to show restaurants in both of these cities, with some clever-rhyming-pun in the title. Maybe in the future this can be implemented, but is severely limited byt the API. In the end, we built an app that is fully functional, easy to use, looks professional, and we're quite proud of.
