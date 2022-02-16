namespace Template {
    export async function WiderstandsVersteck(): ƒS.SceneReturn {
      console.log("3 WV Scene starting");

      //Texte
      let text = {
      narrator: {
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
      },
      smage: {
        T0001: "Boss i did it!!",
        T0002: "I intercepted the beam and got him out of there!",
        T0003: "My name is ??? this will be a bit much but we have to-",
        T0010: "I intercepted your soul from the beam of death in the Sky and therefore saved you from the Hands of Satan hehe.",
        T0011: "Iam ??? as i already said, and the rest and I call ourselves the ???.",
        T0012: "Quite literally in Hell.",
        T0013: "It's hell, alot to explain but we should really go!",
        T0014: "Finally, Please grab your sword and lets go!",
    },
      general: {
        T0001: "Thats wonderful love, but we really got to get the fuck out of here!",
        T0002: "There's no time!!",
        T0003: "We have to fucking move!",
        T0000: "",
        T0010: "Is he asking Questions? We have to MOVE goddamnit!!",
        T0011: "Save your hospitality for later ???",
        T0012: "",

      },
  };
      // für Platzhalter für komisches Zeug
      //let x: number = 0;
      let askAgain: boolean = true;
      let mageDead: boolean = false; //smage dead?


  /* would like multiple transitions for gewitter effekt :( look discord for ref by jirka 12.03*/
      await ƒS.Location.show(locations.bedroom);
      await ƒS.update(transition.donner1.duration, transition.donner1.alpha, transition.donner1.edge);
      await ƒS.update();
      //await ƒS.update(transition.donner2.duration, transition.donner2.alpha, transition.donner2.edge);
      //await ƒS.update(transition.donner3.duration, transition.donner3.alpha, transition.donner3.edge);
      //await ƒS.update(transition.arcane.duration, transition.arcane.alpha, transition.arcane.edge);
      await ƒS.Sound.play(sound.wvtheme, 0.1, true);
      //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positionPercent(30, 100));

      // 70 für rechten Char, 30 für linken Char
      await ƒS.Character.show(characters.smage, characters.smage.pose.base, ƒS.positionPercent(70, 90));
      await ƒS.update();

      //Introduction von smage und general
      await ƒS.Speech.tell(characters.smage, text.smage.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0002);
      await ƒS.Speech.tell(characters.general, text.general.T0001);
      await ƒS.Speech.tell(characters.smage, text.smage.T0003);
      await ƒS.Speech.tell(characters.general, text.general.T0002);
      await ƒS.Speech.tell(characters.general, text.general.T0003);
      



      //first dialogue option to ask questions
      let firstDialogueElementOptions = {
        iSayDot1: "What the fuk happened?",
        iSayDot2: "Who are all of you??",
        iSayDot3: "Where the hell am I?",
        iSayDot4: "What in Godsname is all of this??",
        iSayDot5: "Ugh okay lets get outta here!"
      };
      
      //you can ask all questions if u want to
      while (askAgain) {
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "WVDialogueOption");
  
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayDot1:
          await ƒS.Speech.tell(characters.smage, text.smage.T0010);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot2:
          //await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.center);
          await ƒS.Speech.tell(characters.smage, text.smage.T0011);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0011);

          break;
        case firstDialogueElementOptions.iSayDot3:
          await ƒS.Speech.tell(characters.smage, text.smage.T0012);
          x++;
          await ƒS.Speech.tell(characters.general, text.general.T0010);

          break;
        case firstDialogueElementOptions.iSayDot4:
          await ƒS.Speech.tell(characters.smage, text.smage.T0013);
          x++;

          break;
        case firstDialogueElementOptions.iSayDot5:
          await ƒS.Speech.tell(characters.smage, text.smage.T0014);
          askAgain = false;
          break;
      }
    }

    //asking all will cost you tho, lol

      if (x == 4 || x > 4) {
        mageDead = true;
      }

      if (mageDead) {                  //she dead - tree
        console.log("Mage died");   
        
        await ƒS.Speech.tell(characters.general, "???, we have to go NOW, this is not a joke!");
        //change smages name to new Name???

        await ƒS.Speech.tell(characters.general, "One scout is missing and that brings up the topic, what the fuck is already out there");
        await ƒS.Speech.tell(characters.smage, "Thats not good...");

        await ƒS.Speech.tell(characters.narrator, "Is this really Hell?");
        await ƒS.Speech.tell(characters.narrator, "This seems so unreal, but the Air is heavy and its way too warm");
        await ƒS.Sound.fade(sound.wvtheme, 0, 1);
        await ƒS.Speech.tell(characters.narrator, "Suddenly you see a drop of what seems to be acid fall to the ground and burn the dirt beneath it.");
        await ƒS.Sound.play(sound.wvthemeBad, 0.1, true);
        await ƒS.Speech.tell(characters.narrator, "Above you an absolute monstrosity of what seems to be a misformed Dog is looking with one of it's big Eyeballs");
        await ƒS.Speech.tell(characters.narrator, "Terrible fear strikes you, what is this creature? How can something look so disgusting?!");

        await ƒS.Speech.tell(characters.smage, "??? Ahhhhhh theres one already hereeeee!!");
        await ƒS.Speech.tell(characters.narrator, "The small Mage grabs her Staff and points it towards the hellish Creature and whispers something you don't seem to understand.");
        await ƒS.Speech.tell(characters.narrator, "Out of nowhere a Beam of ice shoots out of the Tip from the little mages Staff.");
        await ƒS.Speech.tell(characters.narrator, "The creature gets hit and falls to the ground, whimpering in sounds of agony until finally breathing its last breath.");

        await ƒS.Speech.tell(characters.general, "Fuck, it's already to late, ??? cover us, we have to run!!");
        await ƒS.Speech.tell(characters.narrator, "The redhaired girl grabs your arm and nearly rips it off as she seems to drag your unwilling body behind her.");
        await ƒS.Speech.tell(characters.general, "All because you wouldn't fucking listen... GO! We need to move!!");

        await ƒS.Speech.tell(characters.smage, "Captain watchout!!");
        await ƒS.Speech.tell(characters.narrator, "As you try to escape, one of these hell dogs seems to appear out of nowhere.");
        await ƒS.Speech.tell(characters.narrator, "while spotting the first, another one is already running alongside you, in matter of seconds you are surrounded");

        await ƒS.Speech.tell(characters.smage, "Shields up!!");
        await ƒS.Speech.tell(characters.general, "God fucking damnit!");
        await ƒS.Speech.tell(characters.narrator, "The redhaired girl grabs you tight, draws her shield and points it towards the sky.");
        await ƒS.Speech.tell(characters.narrator, "You can't move, but you glance at the small mage that has been left behind to cover us.");
        await ƒS.Speech.tell(characters.narrator, "A bright light shines from her staff, attracting the attention of every single helldog around her.");
        await ƒS.Speech.tell(characters.narrator, "In a big cracking thunder sound she smashes the staff into the ground!");
        await ƒS.Sound.play(sound.boom, 0.3, true);
        await ƒS.Speech.tell(characters.narrator, "Bitterfreezing cold surrounds you in a matter of seconds, you seem to hear a sound of rain... rain in hell?!");
        await ƒS.Speech.tell(characters.narrator, "As you come to realise, a huge storm of icespikes is raining with enourmes speed from the sky.");
        await ƒS.Speech.tell(characters.narrator, "Whining after whining you hear the countless Helldogs around you fall to the ground...");

        await ƒS.Speech.tell(characters.general, "You dumb idiot...");
        await ƒS.Speech.tell(characters.narrator, "The redhaired girl lowers her shield, takes a quick look around and grabs tight.");
        await ƒS.Speech.tell(characters.general, "Now is our time to run.");
        await ƒS.Speech.tell(characters.narrator, "Finally catching your breath, you understand and run, following the redhaired girls path.");
        await ƒS.Speech.tell(characters.narrator, "One last time you turn around, daring a glance at the powerful little mage who seemed to have saved you twice.");
        await ƒS.Speech.tell(characters.narrator, "Only to notice a girl laying on ground, seemingly unconscious.");
        await ƒS.Speech.tell(characters.narrator, "There are Helldogs surrounding her slowly as you scream for the redhaired girl.");
        await ƒS.Speech.tell(characters.narrator, "While noticing she is already looking towards your direction, tears running down her determined Eyes.");
        await ƒS.Speech.tell(characters.narrator, "She knew. You should've known. It's your fault...");

        let secondDialogueElementOptions = {
          iSayDot1: "Run back and help her.",
          iSayDot2: "Stick to the plan",
        };
        let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "WVDialogueOption");

        switch (secondDialogueElement) {
          case secondDialogueElementOptions.iSayDot1:
            await ƒS.Speech.tell(characters.narrator, "With full determination you run back, trying to save the girl that saved you.");
            await ƒS.Speech.tell(characters.narrator, "Yet when you arrived, a horde of helldogs stare at you.");
            await ƒS.Speech.tell(characters.narrator, "Terrified by the view of severed bodyparts spreading across the ground");
            await ƒS.Speech.tell(characters.narrator, "Having a look at the monster appearing right in front of you, chewing on what seems to be an arm, you collapse to the ground.");
            await ƒS.Speech.tell(characters.narrator, "This isn't fair. A pointless Trial.");
            await ƒS.Speech.tell(characters.narrator, "Broken.");

            await ƒS.Speech.tell(characters.narrator, "YOU DIED");
            y++;
            window.addEventListener("load", start); //does this work?? bruh this works. Genius.

            break;
          case secondDialogueElementOptions.iSayDot2:
            await ƒS.Speech.tell(characters.narrator, "Emptyheaded and overwhelmed you do what you've been told.");
            await ƒS.Speech.tell(characters.narrator, "You run...");
            await ƒS.Sound.fade(sound.wvthemeBad, 0, 1);
            break;
        }



      }

      if (!mageDead) {                 //she aint dead - tree
        console.log("Mage diedn't"); 

        await ƒS.Speech.tell(characters.narrator, "The Air is thick and hard to breath, as you look around yourself you notice the intense heat around you.");
        await ƒS.Speech.tell(characters.narrator, "Is this really Hell?");
        
        await ƒS.Speech.tell(characters.general, "Okay ???, let's go, follow the route of those sticks in the ground.");
        await ƒS.Speech.tell(characters.general, "We have to escape quietly, the scouts already saw some minor Demons coming close to us.");
        //change smages name to new Name???
        await ƒS.Speech.tell(characters.smage, "Minor demons are still pretty scary if I might add that. They're smaller but way faster.");
        await ƒS.Speech.tell(characters.smage, "Aaaaand that's why we have to escape quietly, we cant outrun them.");

        await ƒS.Speech.tell(characters.smage, "By the way, what's your name?");
        //inputfield for PName here, how?
        dataForSave.PName = await ƒS.Speech.getInput();
        await ƒS.Speech.tell(characters.smage, "Ohhh " + dataForSave.PName + " is a cute name");
        await ƒS.Speech.tell(characters.smage, "My Name is ???");

        await ƒS.Speech.tell(characters.smage, "Before we go, I have a small gift for you, take this.");
        await ƒS.Speech.tell(characters.smage, "It took alot of work so please don't lose it okay?");
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);
        ƒS.Inventory.add(items.rose);

        await ƒS.Speech.tell(characters.narrator, "Quietly under the orders of ??? the whole group sneaks towards the headquarters...");

      }


      //await ƒS.Character.show(characters.general, characters.general.pose.base, ƒS.positionPercent(30, 90));
      //await ƒS.update();

    }
}