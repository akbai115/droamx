
import React from 'react';
import { motion } from 'framer-motion';

const text = `
DROAM IS NOT A CITY
IT’S A DECISION

NOT TO ESCAPE THE WORLD
BUT TO STOP COPYING IT

WE BUILT TOO TALL
WE BUILT TOO SHARP
WE BUILT TO WATCH EACH OTHER

DROAM GOES LOW
DROAM GOES SOFT
DROAM GOES QUIET

NO STAIRS
NO GLASS
NO CORNERS THAT TRAP THE MIND

ONLY CURVES
ONLY GROUND
ONLY MOTION WITHOUT ARRIVAL

EVERYTHING TOUCHES THE EARTH
EVERYTHING CAN BE WALKED
EVERYTHING CAN BE RESTED ON

YOU DON’T CLIMB HERE
YOU FLOW

DROAM IS SINGLE LEVEL
BECAUSE NO ONE IS ABOVE
NO ONE IS BELOW

STATUS ENDS AT THE FLOOR

THIS IS NOT LUXURY
THIS IS RELIEF

LUXURY IS NOT NEEDING
LUXURY IS NOT RUSHING
LUXURY IS NOT PERFORMING

PODS, NOT PALACES

SLEEP
EAT
THINK
PRAY
CREATE

EACH SEPARATE
EACH HONEST
EACH OPTIONAL

NO WINDOWS
BECAUSE WE STOPPED STARING OUT

LIGHT COMES FROM ABOVE
LIKE FORGIVENESS

DIFFUSED
SOFT
ENOUGH

DROAM DOES NOT SELL YOU A VIEW
DROAM GIVES YOU TIME

THIS IS WHY IT STARTS EMPTY

NO MAP
NO PROMISE
NO GRAND OPENING

ONLY ENTRY

PHASE ONE IS NOT BUILDING
PHASE ONE IS BELIEF

IF YOU DON’T GET IT
IT’S NOT FOR YOU

WE ARE NOT LOOKING FOR EVERYONE
WE ARE LOOKING FOR THOSE
TIRED OF SHARP EDGES

TIRED OF GLASS
TIRED OF BEING SEEN BEFORE BEING READY

DROAM IS A PLACE
WHERE IDEAS CAN LIE DOWN

WHERE MOVEMENT IS PRAYER
WHERE WALKING IS ENOUGH

THIS IS NOT UTOPIA
THIS IS UNLEARNING

THE PLAN IS SIMPLE

REMOVE THE NOISE
REMOVE THE HEIGHT
REMOVE THE RUSH

WHAT’S LEFT
IS HUMAN AGAIN

DROAM
IS NOT COMING

IT IS WAITING
`;

const Manifest: React.FC = () => {
  const lines = text.trim().split('\n');

  return (
    <div className="manifest-container manifest-mask absolute inset-0 z-[200] overflow-y-auto no-scrollbar pt-[45vh] pb-[45vh]">
      <div className="max-w-xl mx-auto px-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 0.5, y: 0 },
              }}
              className={`text-[8.5px] sm:text-[9px] font-light tracking-[0.55em] leading-[4] uppercase ${
                line.trim() === "" ? "h-16" : ""
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Manifest;
