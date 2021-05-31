const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You snap awake. You dozed off while debugging janky code your co-worker Frank wrote. After zoning out for a few more seconds, you decide you should probably do something...',
        options: [
            {
                text: 'Continue looking for the bugs',
                nextText: 2
            },
            {
                text: 'Go back to sleep',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'You go back to sleep. Eventually you wake to startling screams. You look around at the chaos that has unfolded while you dozed on your keyboard. Before you know it, a blood covered Frank is on you and knocks you to the floor. You vision fades as he eats you to death. That’s what you get for sleeping on the job.',
        options: [
          {
            text: 'Restart',
            nextText: -1
          }
        ]
      },
      {
          id: 2,
          text: 'You spend a few more hours going over the code. Its hard to imagine how Frank could have messed up the code this much. You should probably try something new.',
          options: [
              {
                  text: 'Continue messing with the code',
                  nextText: 4
              },
              {
                  text: 'Go flirt with the receptionist',
                  nextText: 5
              }
          ]
      },
      {
          id: 4,
          text: 'You can’t take anymore. You’ve been staring at the screen for hours and cant find the issue. Next thing you know you hear startling screams. Before you know it a blood covered Frank is on you and knocks you to the floor. Your vision fades as he eats you to death. You really should have taken a break instead of working yourself to death.',
          options: [
              {
                  text:'Restart',
                  nextText: -1
              }
          ]
      },
      {
          id: 5,
          text: 'You walk up to reception and see Anna, the girl you’ve been crushing on since she first started a year ago. You still can’t quite believe how beautiful she is.',
          options: [
              {
                  text: 'Use a sexual innuendo',
                  nextText: 6
              },
              {
                  text: 'Start some small talk',
                  nextText: 7
              },
              {
                  text: 'Realize she is out of your league and sulk back to your desk',
                  nextText: 8
              }
          ]
      },
      {
          id: 6,
          text: 'Right as you deliver your punch line to a rather dirty joke, you instantly realize that was a poor choice given the disgusted look on Anna’s face. It seems Tom from HR agrees, who promptly takes you to his office. After some much-needed reflection on your actions Tom thinks a write up is in order. In the meantime, he says you should head back to your desk. As you walk past reception again, Anna gives you yet another disgusted look. Distracted, you don’t even notice a blood covered Frank running at you. He knocks you to the ground and eats you to death. Sexual Harassment is never okay.',
          options: [
              {
                  text: 'Restart',
                  nextText: -1
              }
          ]
      },
      {
          id: 7,
          text: 'After some small talk Anna asks if you would like to go join her for lunch. It seems you subtle bragging about your Super Mario Kart skills really did the trick.',
          options: [
              {
                  text: 'Decline, lets be honest, its only going to end in heartbreak',
                  nextText: 8
              },
              {
                  text: 'Go on a lunch date with her',
                  nextText: 9
              }
          ]
      },
      {
          id:8,
          text: 'You think about how she’s way out of your league and you and head back to your desk. Being lost in thoughts of your own lack of self-confidence you don’t notice the exposed LAN cable on the floor. You trip hitting your head on Frank’s desk. The world goes black. You should really keep an eye out for hazards in the workplace. Accidents can happen to anyone!',
          options: [
              {
                  text:'Restart',
                  nextText: -1
              }
          ]
      },
      {
          id: 9,
          text: 'You and Anna are enjoying an amazing conversation over lunch together. Distracted by her angelic laughter you almost don’t notice the zombie running directly at you. It seems a zombie apocalypse has broken out between getting your appetizers and waiting for the entrees’. What a terrible way to end a lunch date.',
          options: [
              {
                  text:'Look for a weapon',
                  nextText: 10
              },
              {
                  text:'Panic',
                  nextText: 11
              },
              {
                  text:'Charge at the Zombie with reckless abandon',
                  nextText: 12
              }
          ]
      },
      {
          id: 10,
          text:'The only weapon you see is a rather dull steak knife, but its better than nothing. You grab it just as the zombie makes its final lurch towards you and instinct kicks in. You stab the zombie right in the head. It promptly falls lifeless to the ground with a thud. Anna looks shocked at the turn of events.',
          options: [
              {
                  text: 'Calm Anna the best you can',
                  nextText: 13
              },
              {
                  text: 'Gloat about your zombie killing prowess to impress Anna',
                  nextText: 14
              }

          ]
      },
      {
          id: 11,
          text:'You panic, then promptly die from the Zombie eating you. Apparently someone’s never read The Hitchhiker’s Guide to the Galaxy..',
          options: [
              {
              text:'Restart',
              nextText: -1
              }
          ]
      },
      {
          id: 12,
          text:'You jump over the table and charge at the zombie. Chips and Salsa go everywhere as you stumble over the table and the Zombie lands on you and begins eating you to death. We did say the phrase reckless abandon… What did you think would happen?',
          options: [
              {
              text:'Restart',
              nextText: -1
              }
          ]
      },
      {
          id: 13,
          text: 'After calming Anna the best you can you decided the office is the nearest safe place to be right now. On the way you see Frank, who made that programming nightmare you spend all morning trying to debug. Turns out he’s a zombie now.',
          options: [
              {
                  text: 'Continue to the office',
                  nextText: 15
              },
              {
                  text: 'Get revenge on Frank for having terrible syntax in his code, besides, hes just a zombie...',
                  nextText: 16
              }
          ]
      },
      {
          id: 14,
          text: 'As you boast about your amazing zombie killing skills, you notice a little too late that there was a lot more than just one. Before you know it a horde is on you and there is nothing you can do as they eat you to death and Anna looks on in horror. One shouldn’t brag about killing zombies, when there are zombies to be killed.',
          options: [
              {
                    text: 'Restart',
                    nextText: -1
              }
          ]
      },
      {
          id: 15,
          text: 'You amazingly make it back to the office, mainly because the author is tired of create a plot, just in time to help your coworkers brace the door. The next few days are chaos, but, living off Cheetos and Mtn Dew from the vending machines, you’re able to hold out until the National Guard get control of the situation and rescue from the office. Anna, being impressed by your heroics, asks you out for a second date. Hopefully you’re as good at Super Mario Kart as you boasted.',
          options: [
              {
                  text: 'You did it! Play again?',
                  nextText: -1
              },
              {
                  text: 'No, seriously.. you dont have a choice. Play again',
                  nextText: -1
              }
          ]

      },
      {
          id: 16,
          text: 'You rush over and decided to take out some aggression on Frank. So many hours you wasted because he decided to write sloppy code. As you run towards him, you trip over a raised crack in the sidewalk and hit your head quite hard. While unconscious and helpless Frank decides your brains might be quite tasty. Revenge proves its own executioner.',
          options: [
              {
                  text: 'Restart',
                  nextText: -1
              }
          ]
      }


    ]

  

startGame()