/**
 * Created by garry.gibson on 02/12/14.
 */
var myApp = angular.module('blogApp');


myApp.factory('SneakyData',function SneakyData($http){

    return {

        searchSneaky: function searchSneaky(query, callback) {
           // $http.get('http://www.sneakyninja.net/api/blogentries')
            $http.get('http://localhost:9000/articles/')
                .success(function (data) {
                    callback(null,data);
                })
                .error(function (e) {
                    callback(e);
                });
        }

    }

});

myApp.factory('LocalData',function(){


    articles = {"nodes":[{"node":{"Body":" It\u2019s been almost a year since I waffled on about the then new iPhone 5 and what else people might want from a phone.\nNow the iPhone 5S has been out for a bit, here\u2019s what I reckon.\nI previously wondered what else they could add in terms of hardware, and in the end they added three new features:\n- Fingerprint reader- M7 co-processor chip- Faster CPU\nSoftware-wise, you might have noticed that Apple also released iOS7.\nNow, so what - you may well ask. Taken individually these new features seem like a bit of a gimmick in the case of fingerprint reader and only slight updates in the cases of the coprocessor and faster CPU.\nBut I think they\u2019re just laying the groundwork for bigger and scarier things.\nAs Apple realised before anyone else (apart from maybe Amazon), it\u2019s not about the individual devices; it\u2019s about the infrastructure and reducing the friction involved when relieving customers of their cash.\nWith the new fingerprint scanner, assuming it\u2019s accurate enough in real-world use, they\u2019ve combined the devices in our pockets with our credit card details to produce walking points of sale. Tack on the new iBeacon bluetooth stuff and they\u2019re about to make in-store tracking and payments as easy as Amazon made it online.\nThe new M7 chip basically takes care of capturing and processing all the data from the various gyroscopic, compass and accelerometer sensors in the phone, even when asleep, freeing up the CPU and preserving battery life. If basic gyroscopic sensors were good enough to navigate Lancaster bombers across Europe during WW2, imagine what the ones in an iPhone can do. All the time. Whilst it\u2019s asleep. Some say scary, I say cool, a phone that knows when you\u2019re driving and doesn\u2019t disturb you.\nGlueing all this together are the more boring features of the faster CPU and the new APIs in iOS7. Non-techies might not care but having more CPU power available means a lot more potential in terms of app functionality and the new iOS APIs make it easier to extract that functionality.\nI think the new iPhone is greater than the sum of it\u2019s parts and with my tin-foil hat on I know that its ultimate aim is to relieve me of (more) money, but I\u2019m still quite looking forward to seeing what developers make of it\u2019s new capabilities.\u00a0\n ","Post date":"December 27, 2013 - 22:20","Title":"iPoint of Sale"}},{"node":{"Body":" It seems that people are disappointed with the new iPhone 5 release. Apart from Samsung that is, they seem quite pleased by it.\u00a0I think both viewpoints are down to the lack of hardware features that make for great news headlines. The article writers wanted more to shout about, and Samsung are relieved that there isn't anything more to shout about.\nThe thing is though, I don't know what other hardware they could have added. The screen is now 16:9 and a decent resolution, it has 4G capability, a whizzy enough processor and a decent camera capable of full HD video capture. Without sounding like a troll, what's missing?\nI suspect a lot of the negative attitudes (lack of traffic attracting headline-grabbing features aside) is down to the apparent lack of freedom. Yes, you have to use iTunes, yes you need Apple TV to connect to use Airplay and yes, you have to use the App store to buy stuff. The thing is, I like that. We're a Mac household. We don't have a household Windows PC that we all use - just MacBooks, iPhones and an iPad. So I quite like the way they all 'just work' with each other.\nI understand that the lack of tinkering options and being 'forced' to use Apple stuff is a deal breaker for others, and that's cool. But their deal breaker is exactly the reason I like it. I don't want 15 different ways to be able to do something, with the option of adding more - I just want one way that works.\n ","Post date":"February 12, 2013 - 20:13","Title":"iPhone5? We want MORE!"}},{"node":{"Body":" Having removed the car based content from this site and moved it to Owners Diary, I thought I'd carry on with this content-type specialisation stuff and create somewhere for me to rant as well.\nhttp://www.outburst.me\nThere it is. An outlet for my rantings that will hopefully result in this site evolving into something with a line of content that is more considered, thoughtful and less shouty.\nYeah, right.\n ","Post date":"September 8, 2012 - 19:13","Title":"Outburst, me?"}},{"node":{"Body":" I just realised that I've been throwing all my words onto a different site recently which is why it's been a bit quiet around here.\nAs my car related ramblings had started to take over this site I thought it best to give them a home of their own. And then I thought others might want to do the same thing, and so Owners Diary was born\nhttp://www.ownersdiary.co.uk\nWhilst the entries at the moment are car related, there's no reason why other vehicles can't be included. The idea is to also have it remind you when things like MOT and insurance are due, once I get the basics sorted.\nIt's in closed beta at the moment, but please drop me a mail/tweet/comment/facebook post if you'd like an account to play with.\n ","Post date":"June 11, 2011 - 17:46","Title":"Why So Quiet?"}},{"node":{"Body":"/sites/www.sneakyninja.net/files/images/bmw_m_logo.png","Post date":"October 10, 2010 - 16:29","Title":"Things that make you go M..mm?"}}]};

    return articles;
});