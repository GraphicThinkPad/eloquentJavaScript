- roads
- buildGraph (maybe?)
- roadGraph - no
- VillageState (I guess state should be something)
- runRobot
- randomPick
- randomRobot
- mailRoute
- routeRobot
- findRoute
- goalOrientedRobot

Modules...hm. I think buildGraph would be its own module, and like the man said,
instead of having to split the array manually, I'd have it take arrays of arrays of 
two strings each, the from and the to. It would then build a graph from that data.

RoadGraph would be its own thing. I guess all the VillageStates would live in their
own module and would just be accessed via that.

randomPick would also be its own module! Robots would be their own modules too. or would
it be better if they each had their own module?

And finally, the routefinder would be its own module and it would also be djkstra's.

Whoops--I forgot the dependencies. But I feel I got a feel for them, so all is well.