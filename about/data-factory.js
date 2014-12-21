/**
 * Created by garry.gibson on 03/12/14.
 */
var myApp = angular.module('blogApp');


myApp.factory('AboutData',function AboutData($http){

    return {

        searchAbout: function searchAbout(query, callback) {
            $http.get('http://www.sneakyninja.net/api/about')
                .success(function (data) {
                    callback(null,data);
                })
                .error(function (e) {
                    callback(e);
                });
        }

    }

});

myApp.factory('LocalAboutData',function(){


    articles = {"nodes":[{"node":{"title":"About","Body":"A Long Time Ago....Long before the term \"social media\" was coined, people didn't use the likes of Facebook, Twitter or Instagram to get their content out. Instead we set up blogs. Whilst considered quaint by todays yoof, I prefer them as although it may be slightly more effort to add content, that content remains mine once I publish it.There'll be no nasty surprises as social media giant X changes their licence terms and suddenly takes ownership of it all, nor will there be strange adverts littering the place nor the acidental posting of private comments for the world to see.In addition, this site is my little playground where I get to tinker with things (aka breaking things)Why SneakyNinja, and what's with the logo?Back when Quake was the game du jour, we had mini LAN parties involving four or five of us, and we each had to chose a player name instead of PLAYER. Owning to the way I snuck about in-game, and the fact that at the time I was taking Ninjutsu lessons, the name 'SneakyNinja' came to mind and has stuck ever since.I know it's not cool, but I've been using that moniker for nearly twenty years and I'm not about to change it now! (Besides, all the cool names are taken now.)As for the logo, it's an outline of a LEGO Ninja Minifig :-)[[{\"type\":\"media\",\"view_mode\":\"media_preview\",\"fid\":\"152\",\"attributes\":{\"alt\":\"\",\"class\":\"media-image\",\"height\":\"180\",\"width\":\"180\"}}]]\u00a0"}}]};   return articles;
});