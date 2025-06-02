import React from "react";

const services = [
  {
    title: "Rcruitment for Overseas Jobs",
    desc: "Connecting skilled workers with reputable employers globally.",
  },
  {
    title: "Visa Endorsement",
    desc: "Authenticating credentials for global recognition.",
  },
  {
    title: "Emigration Assistance",
    desc: "Guiding you through every step of lawful overseas employment.",
  },
  {
    title: "Document Attestation",
    desc: "Authenticating credentials for global recognition.",
  },
  {
    title: "Air Ticketing",
    desc: "Seamless flight bookings for your overseas placement journey.",
  },
];

const PAGE_PADDING_LEFT = 276;
const PAGE_PADDING_RIGHT = 276;
const PAGE_PADDING_TOP = 64;
const PAGE_PADDING_BOTTOM = 64;
const CARD_GAP = 26;
const SECTION_HEIGHT = 710;
const CARD_WIDTH = 350;
const CARD_HEIGHT = 620;
const VISIBLE_MAP_WIDTH = `calc(100vw - ${PAGE_PADDING_LEFT + PAGE_PADDING_RIGHT}px)`;
const VISIBLE_MAP_HEIGHT = SECTION_HEIGHT - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM;
const TOTAL_MAP_WIDTH = CARD_WIDTH * 5 + CARD_GAP * 4;
const TOTAL_MAP_HEIGHT = CARD_HEIGHT;

export default function WhatWeDo() {
  return (
    <div className="font-sans text-gray-800">
      {/* What We Do Section */}
      <section className="h-[710px] w-screen bg-[#565656] flex flex-col justify-start relative pl-[100px] pt-[48px] pb-[32px]">
        <div className="relative z-10 flex flex-col h-full w-full p-0 m-0">
          <h2 className="text-white text-3xl font-normal mb-8 text-left">What we do</h2>
          <div className="flex flex-row w-full h-full items-stretch justify-stretch gap-x-[24px] overflow-x-auto hide-scrollbar p-0 m-0 relative z-10" style={{minHeight: '0'}}>
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[350px] lg:w-1/5 h-full rounded-xl flex flex-col justify-between p-8 relative overflow-hidden ${i === 0 ? 'ml-[0px]' : ''} ${i === services.length - 1 ? 'mr-[100px]' : ''}`}
                style={{
                  backgroundImage: `url('/worldmapscroll.svg')`,
                  backgroundSize: `${TOTAL_MAP_WIDTH}px ${CARD_HEIGHT}px`,
                  backgroundPosition: `-${i * (CARD_WIDTH + CARD_GAP)}px 0`,
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#232323',
                }}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-8 leading-snug">{service.title}</h3>
                  </div>
                  <div className="flex flex-col items-end justify-end h-full">
                    <p className="text-white text-base font-normal leading-relaxed mt-auto mb-2 text-right">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
