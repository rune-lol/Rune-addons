import PogObject from "PogData"

const pogObject = new PogObject("Rune-addons", {
  chestWireFrameOn: false,
  chestWireFrameColor: [1, 1, 1, 1],
  chestWireFrameThickness: 2,
  chestWireFrameRange: 10,
  chestWireFrameRenderer: 0, // 0 = legit, 1 = esp
  autoPowderFlex: false,
  autoPowderFlexAmount: 3000,
  autoPowderFlexChannel: 1, //0 = all chat, 1 = party chat, 2 = guild chat, 3 = officer
  autoPowderCope: false,
  autoPowderCopeAmount: 200,
  autoPowderCopeChannel: 1 //0 = all chat, 1 = party chat, 2 = guild chat, 3 = officer
});

let command = register("command", (...args = []) => {
  args.forEach((item) => {
    // idk why this is here, but if i don't put it here it breaks so i'm leaving it?
  });

  if (args.length == 0) {
    ChatLib.chat("Usage: /runeaddons [option] [value(s)]");
  }

  switch (args[0]) {
    case "chestWireFrame":
        if (args.length == 2) {
          if (args[1] == "on") {
            pogObject.chestWireFrameOn = true;
            pogObject.save();
            ChatLib.chat("&6[rune-addons] &2&lENABLED &r&7chestWireframe");
          } else {
            pogObject.chestWireFrameOn = false;
            pogObject.save();
            ChatLib.chat("&6[rune-addons] &c&lDISABLED &r&7chestWireframe");
          }
        } else {
          printDefaultHelpChat()
        }
      break;
    case "chestWireFrameColor":
      if (args.length == 4) {
        let red = parseFloat(args[1]);
        let green = parseFloat(args[2]);
        let blue = parseFloat(args[3]);

        if (red == NaN || green == NaN || blue == NaN) {
          printDefaultHelpChat()
        }

        pogObject.chestWireFrameColor = [min(red, 1), min(green, 1), min(blue, 1), 1];
        pogObject.save();

        ChatLib.chat(`&6[rune-addons] &7Set chestWireFrameColor to &eRed: ${min(red, 1)}, Green: ${min(green, 1)}, Blue: ${min(blue, 1)}, Opacity: 1`);
      } if (args.length == 5) {
        let red = parseFloat(args[1]);
        let green = parseFloat(args[2]);
        let blue = parseFloat(args[3]);
        let opacity = parseFloat(args[4]);

        if (red == NaN || green == NaN || blue == NaN || opacity == NaN) {
          printDefaultHelpChat();
        }

        pogObject.chestWireFrameColor = [min(red, 1), min(green, 1), min(blue, 1), min(opacity, 1)];
        pogObject.save();

        ChatLib.chat(`&6[rune-addons] &7Set chestWireFrameColor to &eRed: ${min(red, 1)}, Green: ${min(green, 1)}, Blue: ${min(blue, 1)}, Opacity: ${min(opacity, 1)}`);
      } else {
        printDefaultHelpChat()
      }
      break;
    case "chestWireFrameThickness":
      if (args.length == 2) {
        let thickness = parseInt(args[1]);

        if (thickness == NaN) {
          printDefaultHelpChat();
        }

        pogObject.chestWireFrameThickness = max(thickness, 2);
        pogObject.save();
        ChatLib.chat(`&6[rune-addons] &7Set chestWireFrameThickness to &e${max(thickness, 2)}`);
      }
      break;
    case "chestWireFrameRange":
      if (args.length == 2) {
        let range = parseFloat(args[1]);

        if (range == NaN) {
          printDefaultHelpChat();
        }

        pogObject.chestWireFrameRange = min(range, 25);
        pogObject.save();
        ChatLib.chat(`&6[rune-addons] &7Set chestWireFrameRange to &e${min(range, 25)}`);
      }
      break;
    case "chestWireFrameRenderer":
      if (args.length == 2) {
        if (args[1] == "esp") {
          pogObject.chestWireFrameRenderer = 1;
          pogObject.save();
          ChatLib.chat("&6[rune-addons] &r&7set chestWireFramRenderer to &eESP");
          ChatLib.chat("&6[rune-addons] &r&cDISCLAIMER: this is not officially allowed on multiplayers servers like hypixel, &r&4&luse at your own risk&r&c.");
        } else {
          pogObject.chestWireFrameRenderer = 0;
          pogObject.save();
          ChatLib.chat("&6[rune-addons] &r&7set chestWireFramRenderer to &elegit");
        }

        pogObject.chestWireFrameRange = min(range, 25);
        pogObject.save();
        ChatLib.chat(`&6[rune-addons] &7Set chestWireFrameRange to &e${min(range, 25)}`);
      }
      break;
    case "autoPowderFlex":
        if (args.length == 2) {
          if (args[1] == "on") {
            pogObject.autoPowderFlex = true;
            pogObject.save();
            ChatLib.chat("&6[rune-addons] &2&lENABLED &r&7autoPowderFlex");
          } else {
            pogObject.autoPowderFlex = false;
            pogObject.save();
            ChatLib.chat("&6[rune-addons] &c&lDISABLED &r&7autoPowderFlex");
          }
        } else {
          printDefaultHelpChat()
        }
        break;
    case "autoPowderFlexAmount":
      if (args.length == 2) {
        let amount = parseInt(args[1]);

        if (amount == NaN) {
          printDefaultHelpChat();
        }

        pogObject.autoPowderFlexAmount = amount;
        pogObject.save();
        ChatLib.chat(`&6[rune-addons] &7Set autoPowderFlexAmount to &e${amount}`);
      }
      break;
    case "autoPowderFlexChannel":
      if (args.length == 2) {
        switch (args[1]) {
          case "all":
            pogObject.autoPowderFlexChannel = 0;
            pogObject.save();
            ChatLib.chat(`&6[rune-addons] &7Set autoPowderFlexChannel to &e0 (all)`);
            break;
          case "party":
            pogObject.autoPowderFlexChannel = 1;
            pogObject.save();
            ChatLib.chat(`&6[rune-addons] &7Set autoPowderFlexChannel to &e1 (party)`);
            break;
          case "guild":
            pogObject.autoPowderFlexChannel = 2;
            pogObject.save();
            ChatLib.chat(`&6[rune-addons] &7Set autoPowderFlexChannel to &e2 (guild)`);
            break;
          default:
            ChatLib.chat("Something went wrong?!");
            break;
        }
      }
      break;
      case "autoPowderCope":
          if (args.length == 2) {
            if (args[1] == "on") {
              pogObject.autoPowderCope = true;
              pogObject.save();
              ChatLib.chat("&6[rune-addons] &2&lENABLED &r&7autoPowderCope");
            } else {
              pogObject.autoPowderCope = false;
              pogObject.save();
              ChatLib.chat("&6[rune-addons] &c&lDISABLED &r&7autoPowderCope");
            }
          } else {
            printDefaultHelpChat()
          }
          break;
      case "autoPowderCopeAmount":
        if (args.length == 2) {
          let amount = parseInt(args[1]);

          if (amount == NaN) {
            printDefaultHelpChat();
          }

          pogObject.autoPowderCopeAmount = amount;
          pogObject.save();
          ChatLib.chat(`&6[rune-addons] &7Set autoPowderCopeAmount to &e${amount}`);
        }
        break;
      case "autoPowderCopeChannel":
        if (args.length == 2) {
          switch (args[1]) {
            case "all":
              pogObject.autoPowderCopeChannel = 0;
              pogObject.save();
              ChatLib.chat(`&6[rune-addons] &7Set autoPowderCopeChannel to &e0 (all)`);
              break;
            case "party":
              pogObject.autoPowderCopeChannel = 1;
              pogObject.save();
              ChatLib.chat(`&6[rune-addons] &7Set autoPowderCopeChannel to &e1 (party)`);
              break;
            case "guild":
              pogObject.autoPowderCopeChannel = 2;
              pogObject.save();
              ChatLib.chat(`&6[rune-addons] &7Set autoPowderCopeChannel to &e2 (guild)`);
              break;
            default:
              ChatLib.chat("Something went wrong?!");
              break;
          }
        }
        break;
    default:
      printDefaultHelpChat()
    }
}).setCommandName("runeaddons");
command.setAliases(["ra", "rune"]);

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } if (num1 => num2) {
    return num2;
  }
}

function max(num1, num2) {
  if (num1 < num2) {
    return num2;
  } if (num1 => num2) {
    return num1;
  }
}

function printDefaultHelpChat() {
  ChatLib.chat("&6Rune-addons &7command: &e/runeaddons &7(alias: &era&7, &erune&7)");
  ChatLib.chat("&eoption: &7\"chestWireFrame\" &8[on, off]");
  ChatLib.chat("&eoption: &7\"chestWireFrameColor\" &8[red 0-1] [green 0-1] [blue 0-1] [opacity 0-1 (optional)]");
  ChatLib.chat("&eoption: &7\"chestWireFrameThickness\" &8[thickness 0-10]");
  ChatLib.chat("&eoption: &7\"chestWireFrameRange\" &8[range 0-25]");
  ChatLib.chat("&eoption: &7\"chestWireFrameRenderer\" &8[esp, legit] (esp is &r&4&lUSE AT OWN RISK&r&8)");
  ChatLib.chat("&eoption: &7\"autoPowderFlex\" &8[on, off]");
  ChatLib.chat("&eoption: &7\"autoPowderFlexAmount\" &8[amount]");
  ChatLib.chat("&eoption: &7\"autoPowderFlexChannel\" &8[all, party, guild]");
}

register("chat", (amount, powderType, event) => {
  if (!pogObject.autoPowderFlex) {return;}
  let powderAmnt = parseInt(amount);

  if (powderAmnt == NaN) {
    return;
  } if (powderAmnt >= pogObject.autoPowderFlexAmount) {
    ChatLib.chat(pogObject.autoPowderFlexChannel);
    switch (pogObject.autoPowderFlexChannel) {
      case 0:
        ChatLib.command(`ac You received +${amount} ${powderType} Powder`)
        break;
      case 1:
        ChatLib.command(`pc You received +${amount} ${powderType} Powder`)
        break;
      case 2:
        ChatLib.command(`gc You received +${amount} ${powderType} Powder`)
        break;
    }
  }
}).setCriteria("You received +${amount} ${powderType} Powder");

register("chat", (amount, powderType, event) => {
  if (!pogObject.autoPowderCope) {return;}
  let powderAmnt = parseInt(amount);

  if (powderAmnt == NaN) {
    return;
  }
  if (powderAmnt <= pogObject.autoPowderCopeAmount) {
    ChatLib.chat(pogObject.autoPowderCopeChannel);
    switch (pogObject.autoPowderCopeChannel) {
      case 0:
        ChatLib.command(`ac You received +${amount} ${powderType} Powder (copium)`)
        break;
      case 1:
        ChatLib.command(`pc You received +${amount} ${powderType} Powder (copium)`)
        break;
      case 2:
        ChatLib.command(`gc You received +${amount} ${powderType} Powder (copium)`)
        break;
    }
  }
}).setCriteria("You received +${amount} ${powderType} Powder");

function drawWireChestFrame(locX, locY, locZ) {
  // render west face
  Tessellator.begin(2).translate(locX, locY, locZ)
    .colorize(pogObject.chestWireFrameColor[0], pogObject.chestWireFrameColor[1], pogObject.chestWireFrameColor[2], pogObject.chestWireFrameColor[3],)
    .pos(0.0625, 0, 0.0625)
    .pos(0.0625, 0.875, 0.0625)
    .pos(0.0625, 0.875, 0.9375)
    .pos(0.0625, 0, 0.9375)
    .draw();

  // render east face
  Tessellator.begin(2).translate(locX, locY, locZ)
    .colorize(pogObject.chestWireFrameColor[0], pogObject.chestWireFrameColor[1], pogObject.chestWireFrameColor[2], pogObject.chestWireFrameColor[3],)
    .pos(0.9375, 0, 0.0625)
    .pos(0.9375, 0.875, 0.0625)
    .pos(0.9375, 0.875, 0.9375)
    .pos(0.9375, 0, 0.9375)
    .draw();

  // render top face
  Tessellator.begin(2).translate(locX, locY, locZ)
    .colorize(pogObject.chestWireFrameColor[0], pogObject.chestWireFrameColor[1], pogObject.chestWireFrameColor[2], pogObject.chestWireFrameColor[3],)
    .pos(0.0625, 0.875, 0.9375)
    .pos(0.9375, 0.875, 0.9375)
    .pos(0.9375, 0.875, 0.0625)
    .pos(0.0625, 0.875, 0.0625)
    .draw();

  // render bottom face
  Tessellator.begin(2).translate(locX, locY, locZ)
    .colorize(pogObject.chestWireFrameColor[0], pogObject.chestWireFrameColor[1], pogObject.chestWireFrameColor[2], pogObject.chestWireFrameColor[3],)
    .pos(0.0625, 0, 0.9375)
    .pos(0.9375, 0, 0.9375)
    .pos(0.9375, 0, 0.0625)
    .pos(0.0625, 0, 0.0625)
    .draw();
}

register("renderWorld", (event) => {
  if (!pogObject.chestWireFrameOn) {return;}
  let tileEntities = World.getAllTileEntities();
  let chests = [];

  tileEntities.forEach((item) => {
    if (item.getBlockType().getID() == new BlockType("minecraft:chest").getID()) {
      chests.push(item);
    }
  });


  chests.forEach((chest) => {
    let playerX = Player.getX();
    let playerY = Player.getY();
    let playerZ = Player.getZ();

    let chestX = chest.getX();
    let chestY = chest.getY();
    let chestZ = chest.getZ();

    let distance = Math.sqrt((chestX - playerX)**2 + (chestZ - playerZ)**2 + (chestY - playerY)**2)

    if (distance < pogObject.chestWireFrameRange) {
      GL11.glDisable(GL11.GL_TEXTURE_2D);
      if (pogObject.chestWireFrameRenderer == 1) {
        GL11.glDisable(GL11.GL_DEPTH_TEST);
      }
      GL11.glLineWidth(pogObject.chestWireFrameThickness);

      drawWireChestFrame(chestX, chestY, chestZ);

      GL11.glEnable(GL11.GL_DEPTH_TEST);
      GL11.glEnable(GL11.GL_TEXTURE_2D);
    }
  });
});
