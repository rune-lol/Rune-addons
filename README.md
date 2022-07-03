# rune-addons
This is a ctjs module for 1.8.9 minecraft 

## Commands
Only one command: /runeaddons (or /ra, /rune)
It has some subcommands, all with different categories!
Subcommand [arg1] [arg2]

### ChestWireFrame
This will highlight all chests arround you, helping u to powdermine if ur a blind mole like me.

chestWireFrame [on, off] 
This is really simple, it enables or disables the wireFrameRenderer

chestWireFrameColor [red 0-1] [green 0-1] [blue 0-1] [opacity 0-1 (optional)]
It allows you to change the color of the outline of the wireframe

chestWireFrameThickness [thickness 0-10]
Allows you to change the thickness of the wire in the wireFrame

chestWireFrameRange [range 0-25]
Allows you to change the range at which chests are highlighted

option: "chestWireFrameRenderer" [esp, legit] (esp is USE AT OWN RISK)
Allows you to change the renderer for the wireframe, if esp is selected you will see the wireframe trough walls, as the depth check is disabled. This is for debugging purposes, using it to your advantage in an enviroment where it is not allowed is obviously use at your own risk.

### autoPowderFlex
This will automatically send a message containing that you just dropped a large amount of powder in guild/party/all chat

autoPowderFlex [on, off]
Enables or disables the feature

autoPowderFlexAmount [amount]
Sets the minimum amount at which the the feature will trigger, and flex you drop

autoPowderFlexChannel [all, party, guild]
Sets the channel in which to brag, all chat, party chat or guild chat. Guild chat is the default.

### autoPowderCope
This works exactly the same as autoPowderFlex except it uses a maximum value at which it won't trigger anymore. Use the asme subcommands with 'Cope' instead of 'Flex'
