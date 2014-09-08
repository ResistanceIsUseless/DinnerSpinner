if (Meteor.isClient) {
  Template.Eathere.greeting = function () {
    return "Choose a type of meal:";
  };
var HomeMeals = Array(
'Roast chicken',
'Steak and rice',
'Tri Tip',
'Lasagna',
'Breaded chicken',
'Cream cheese pasta shells',
'Baked lemon chicken',
'Cajun shrimps',
'Skillet baked cheesy pasta',
'Mac an cheese',
'Baked potatoes',
'Broccoli cheese soup',
'Chili',
'Pasta w/ vodka sauce',
'Beef stroganoff',
'Pulled pork',
'Waffles');
  
var eatOutarr = Array(
'"http://www.yelp.com/biz/india-palace-alameda">India Palace',
'"http://www.yelp.com/biz/homeroom-oakland">Homeroom',
'"http://www.yelp.com/biz/boulevard-burger-castro-valley">BLVD Burger',
'"http://www.yelp.com/biz/china-garden-restaurant-castro-valley">China Garden',
'"http://www.yelp.com/biz/cheese-steak-shop-castro-valley">Cheese Steak',
'"http://www.yelp.com/biz/vals-burgers-hayward">Vals',
'"http://www.yelp.com/biz/hang-ten-boiler-alameda">Hang Ten Broiler'
);
  
  Template.eatOut.events({
    'click input': function () {
      //var mealout = eatOutarr[Math.floor(Math.random()*eatOutarr.length)]
      var mealout = Random.choice(eatOutarr);
    $( "p" ).replaceWith( "<p><a href="+mealout+"</a></p>" );
    }
  });


  Template.Eathere.events({
    'click input': function () {
      //var meal = HomeMeals[Math.floor(Math.random()*HomeMeals.length)]
      var meal = Random.choice(HomeMeals);
     // var gawkerValue = Random.choice(data);
      //console.log(data);
      console.log(gawkerValue);
    $( "p" ).replaceWith( "<p>"+meal+"</p>" );
    }
  });
}
//if (Meteor.isServer) {
 // Meteor.startup(function () {
//stuff goes here
  //});
//}



