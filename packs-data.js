// Pack Board data. Edit this file to update the board — index.html only renders it.
//
// Every status is one of: "todo" (not started) | "wip" (in progress) | "done" | "rejected"
//
// release: "YYYY-MM-DD" (deadline, or the release date once out), or null
// type:    "Paid" | "Free" | null (not decided yet)
// stages:  { production, promo, stores, mkt }, each { status } and/or { items: { <name>: status | [status, "YYYY-MM-DD"] } }
//          With items only, the stage status is derived: any rejected -> rejected, all done -> done,
//          anything started -> wip, else todo. A { status } next to items overrides that.
//          Stores items use store keys: fab, unity, cgtrader (wip = submitted, waiting for approval).
// fab:     Fab listing URL (the title links to it)
// preview: path relative to index.html (16:9, 960x540 jpg); null = placeholder
// Pack outline: green = all stages done, red = something rejected, otherwise none.
// Order on the page: least ready first (by current stage, not started before in progress), newest date first within the same step.
//
// Published packs below were taken from the Fab seller page on 2026-11-02 and marked done.

window.PACKS_UPDATED = "2026-11-02";

// Default checklist of each stage (what the hover popover lists)
const CHECKLIST = {
  production: ["Models", "Textures", "Unity / Unreal / FBX", "Validation"],
  promo: ["Screens", "Video"],
  stores: ["fab", "unity", "cgtrader"],
  mkt: ["Website", "Social"],
};
// stage(id, status) = that stage's checklist with every item at one status
const stage = (id, s) => ({ items: Object.fromEntries(CHECKLIST[id].map(k => [k, s])) });

const DONE = { production: stage("production", "done"), promo: stage("promo", "done"), stores: stage("stores", "done"), mkt: stage("mkt", "done") };
// Free packs already on Fab, Unity Asset Store still reviewing
const WAITING_UNITY = { ...DONE, stores: { items: { fab: "done", unity: "wip", cgtrader: "done" } } };
const IN_PRODUCTION = {
  production: { items: { "Models": "wip", "Textures": "todo", "Unity / Unreal / FBX": "todo", "Validation": "todo" } },
  promo: stage("promo", "todo"),
  stores: stage("stores", "todo"),
  mkt: stage("mkt", "todo"),
};

window.PACKS = [
  // --- in progress ---
  {
    name: "Last Wizard FREE", type: "Free", kind: "Stylized Fantasy Castle", release: "2026-11-06",
    preview: "previews/lastwizard_free_knight.jpg",
    stages: {
      production: stage("production", "done"),
      promo: stage("promo", "done"),
      stores: { status: "wip", items: { fab: "todo", unity: "todo", cgtrader: "todo" } },
      mkt: stage("mkt", "todo"),
    },
  },
  { name: "Liminal Spaces", type: null, kind: "Office & Liminal Spaces Modular Kit", release: "2026-11-06", preview: "previews/liminal_spaces.jpg", stages: IN_PRODUCTION },
  { name: "Hotwheels", type: null, kind: "Toy Race Track & Monster Trucks", release: "2026-11-06", preview: "previews/hotwheels.jpg", stages: IN_PRODUCTION },
  { name: "80s Motel FREE", type: "Free", kind: "Modular Environment Kit", release: null, preview: "previews/motel80s_free.jpg", stages: IN_PRODUCTION },

  // --- published on Fab ---
  { name: "Egyptian Slot Symbols", type: "Paid", kind: "9 Slot Machine Icons", release: "2026-10-29", preview: "previews/fab/33a71c1b.jpg", fab: "https://www.fab.com/listings/33a71c1b-7265-447c-8d68-38488c1680c4", stages: DONE },
  { name: "Egyptian Slot Win Pop-Ups", type: "Paid", kind: "Big Win, Mega Win, Free Spins", release: "2026-10-29", preview: "previews/fab/27d16e2e.jpg", fab: "https://www.fab.com/listings/27d16e2e-9e2a-478b-876d-2d9c256f6f0d", stages: DONE },
  { name: "Egyptian Slot Game Characters", type: "Paid", kind: "Anubis and Bastet", release: "2026-10-29", preview: "previews/fab/71643cc7.jpg", fab: "https://www.fab.com/listings/71643cc7-b97e-4d26-935a-3491ee40c6d8", stages: DONE },
  { name: "Dine & Dash FREE", type: "Free", kind: "Retro American Diner Exterior with Neon and Parking Lot", release: "2026-10-28", preview: "previews/fab/274e7e43.jpg", fab: "https://www.fab.com/listings/274e7e43-a078-4679-a3df-67fec9b10d63", stages: WAITING_UNITY },
  { name: "Stick Together FREE", type: "Free", kind: "Campfire, Axe, Log and Camp Food", release: "2026-10-29", preview: "previews/fab/afcaf183.jpg", fab: "https://www.fab.com/listings/afcaf183-4a9f-4a68-8256-94dfe7d7baa9", stages: WAITING_UNITY },
  { name: "Buff Blast FREE", type: "Free", kind: "Low Poly Modular Gun Kit, Stylized Pistol and Assault Rifle", release: "2026-10-29", preview: "previews/fab/44e8d675.jpg", fab: "https://www.fab.com/listings/44e8d675-3c73-4216-9b2a-1d886d0888bb", stages: WAITING_UNITY },
  { name: "Retro Repair FREE", type: "Free", kind: "Y2K Virtual Pet with 19 Detachable Parts", release: "2026-10-28", preview: "previews/fab/646ef4c0.jpg", fab: "https://www.fab.com/listings/646ef4c0-b74c-4fa5-83ab-25083a8c7972", stages: WAITING_UNITY },
  { name: "Cold Nine FREE", type: "Free", kind: "Morgue Room Starter Kit with Tiled Walls and Exam Chair", release: "2026-10-29", preview: "previews/fab/f5642a25.jpg", fab: "https://www.fab.com/listings/f5642a25-14c3-46d1-b3ce-14bc1f115ab1", stages: WAITING_UNITY },
  { name: "Principal Evil FREE", type: "Free", kind: "Abandoned Horror School Classroom", release: "2026-10-28", preview: "previews/fab/3413925d.jpg", fab: "https://www.fab.com/listings/3413925d-2524-478b-a6ff-c5763f28e406", stages: WAITING_UNITY },
  { name: "Gas & Dash FREE", type: "Free", kind: "Modular Gas Station Convenience Store with Interior", release: "2026-10-29", preview: "previews/fab/6b6bc838.jpg", fab: "https://www.fab.com/listings/6b6bc838-0399-4ab9-9bec-e02174520790", stages: WAITING_UNITY },
  { name: "Stylized Characters Bundle", type: "Paid", kind: "Male and Female Rigged Animated Warriors", release: "2026-10-23", preview: "previews/fab/1fef34f5.jpg", fab: "https://www.fab.com/listings/1fef34f5-1e53-4439-a81a-49245c183a2f", stages: DONE },
  { name: "Stylized Male Character", type: "Paid", kind: "Rigged Animated Heavy Warrior with Two-Handed Hammer", release: "2026-11-02", preview: "previews/fab/e967e235.jpg", fab: "https://www.fab.com/listings/e967e235-db36-4f4a-b9e4-a4a1bccf5dd0", stages: DONE },
  { name: "Cold Nine", type: "Paid", kind: "Morgue Horror Interior, Autopsy Room and Cold Storage", release: "2026-10-15", preview: "previews/fab/b25e7969.jpg", fab: "https://www.fab.com/listings/b25e7969-8795-4589-b396-418e8940caa9", stages: DONE },
  { name: "Dine & Dash", type: "Paid", kind: "American Diner, 50s Retro Neon Interior and Exterior", release: "2026-10-09", preview: "previews/fab/08207ccd.jpg", fab: "https://www.fab.com/listings/08207ccd-351c-4b94-af1c-a2007d072494", stages: DONE },
  { name: "Principal Evil", type: "Paid", kind: "Haunted School, Modular Horror Classroom and Corridor Kit", release: "2026-10-09", preview: "previews/fab/ffa2400c.jpg", fab: "https://www.fab.com/listings/ffa2400c-699f-45f4-ba30-84b00ced613d", stages: DONE },
  { name: "Gas & Dash", type: "Paid", kind: "Night Gas Station and Convenience Store Environment", release: "2026-10-09", preview: "previews/fab/ecb28ee1.jpg", fab: "https://www.fab.com/listings/ecb28ee1-94b6-410f-a572-184c25e6726c", stages: DONE },
  { name: "Last Wizard", type: "Paid", kind: "Stylized Fantasy Castle and Characters, Co-op Friendslop Kit", release: "2026-10-08", preview: "previews/fab/089ec61c.jpg", fab: "https://www.fab.com/listings/089ec61c-4cff-4d4e-ac6f-c74e1aecac4e", stages: DONE },
  { name: "USAAF Fighter Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-08", preview: "previews/fab/5f4495c2.jpg", fab: "https://www.fab.com/listings/5f4495c2-ad0c-4c84-8883-0b56ba0804e2", stages: DONE },
  { name: "Retro Repair", type: "Paid", kind: "Y2K Electronics Kit, 6 Gadgets with Detachable Parts", release: "2026-10-09", preview: "previews/fab/fe975f9c.jpg", fab: "https://www.fab.com/listings/fe975f9c-6d1e-44d1-815f-3b8d1debfa86", stages: DONE },
  { name: "WW2 Pilots Collection", type: "Paid", kind: "8 Rigged Character Pack", release: "2026-10-01", preview: "previews/fab/31ce7018.jpg", fab: "https://www.fab.com/listings/31ce7018-a57e-4b6e-b3e3-9421c83cf1c8", stages: DONE },
  { name: "US Army Pilot", type: "Paid", kind: "Low Poly WW2 Character", release: "2026-10-01", preview: "previews/fab/8e2bbd2c.jpg", fab: "https://www.fab.com/listings/8e2bbd2c-5845-4bde-b408-1d188a6534ec", stages: DONE },
  { name: "Japanese Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/7005c646.jpg", fab: "https://www.fab.com/listings/7005c646-4dc4-4ffd-ab0b-5cb5e5b8f866", stages: DONE },
  { name: "RAF Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/8c12a31e.jpg", fab: "https://www.fab.com/listings/8c12a31e-b84e-4637-b4ae-c4534026f033", stages: DONE },
  { name: "ROCAF China Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/2107b20d.jpg", fab: "https://www.fab.com/listings/2107b20d-7698-4201-9ebe-a001c823ced5", stages: DONE },
  { name: "USSR Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/cc8e6851.jpg", fab: "https://www.fab.com/listings/cc8e6851-48b3-458b-8ca4-82f4d72d52d8", stages: DONE },
  { name: "USAAF Bomber Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/7f52f892.jpg", fab: "https://www.fab.com/listings/7f52f892-6fa8-46fb-94b5-72807139c1fd", stages: DONE },
  { name: "AVG Pilot", type: "Paid", kind: "Rigged WW2 Character", release: "2026-10-01", preview: "previews/fab/804248cf.jpg", fab: "https://www.fab.com/listings/804248cf-7fe2-424d-bce3-66aa5f66c60e", stages: DONE },
  { name: "Messerschmitt Me-262", type: "Paid", kind: "Low Poly WW2 Jet Fighter Airplane", release: "2026-09-30", preview: "previews/fab/3b711fb3.jpg", fab: "https://www.fab.com/listings/3b711fb3-f34f-4e73-9787-111f36490b0e", stages: DONE },
  { name: "Buff Blast", type: "Paid", kind: "Stylized Weapons Pack, Cartoon Guns and Grenades", release: "2026-10-09", preview: "previews/fab/a4bd3cbe.jpg", fab: "https://www.fab.com/listings/a4bd3cbe-2d20-43fd-ba6a-bd12afe4266e", stages: DONE },
  { name: "Republic P-47D Thunderbolt", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-30", preview: "previews/fab/d54da672.jpg", fab: "https://www.fab.com/listings/d54da672-a3ab-416e-b838-bf1489a4a13a", stages: DONE },
  { name: "Stick Together", type: "Paid", kind: "Forest Survival Camp, Camping Props, Trees and Terrain", release: "2026-10-09", preview: "previews/fab/14d38ead.jpg", fab: "https://www.fab.com/listings/14d38ead-2996-4286-b4b9-17716949f309", stages: DONE },
  { name: "Nakajima Ki-43 Hayabusa", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-29", preview: "previews/fab/e28b886c.jpg", fab: "https://www.fab.com/listings/e28b886c-4103-49b2-bbcf-4dee3eb4c42e", stages: DONE },
  { name: "80s Motel", type: "Paid", kind: "Modular Environment Kit with Palm Trees and Car", release: "2026-10-09", preview: "previews/fab/752ee250.jpg", fab: "https://www.fab.com/listings/752ee250-eede-4d40-8e62-e428c791b3ee", stages: DONE },
  { name: "Curtiss P-40E Warhawk", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-24", preview: "previews/fab/6167b4c7.jpg", fab: "https://www.fab.com/listings/6167b4c7-c460-4b29-b868-ffcca172a23c", stages: DONE },
  { name: "Nakajima Ki-84 Hayate", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-24", preview: "previews/fab/a3918985.jpg", fab: "https://www.fab.com/listings/a3918985-e034-43a7-850a-4049fc1c2e66", stages: DONE },
  { name: "Curtiss C-46 Commando", type: "Paid", kind: "Low Poly WW2 Transport Airplane", release: "2026-09-24", preview: "previews/fab/2130e00f.jpg", fab: "https://www.fab.com/listings/2130e00f-acce-4cc8-9b78-17ced06bf026", stages: DONE },
  { name: "Republic P-43 Lancer", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-24", preview: "previews/fab/c11c1cd2.jpg", fab: "https://www.fab.com/listings/c11c1cd2-c56a-4702-81fd-09370330582a", stages: DONE },
  { name: "Messerschmitt Bf-109E", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/af99d3b4.jpg", fab: "https://www.fab.com/listings/af99d3b4-df6c-4ae1-83e2-d7c0f28f646c", stages: DONE },
  { name: "Hawker Hurricane Mk.2B", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/20b745d7.jpg", fab: "https://www.fab.com/listings/20b745d7-8dd1-496d-87bc-9cbb450647b0", stages: DONE },
  { name: "Supermarine Spitfire Mk.Vc", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/72e9ccc6.jpg", fab: "https://www.fab.com/listings/72e9ccc6-9f0d-4d83-a3f3-8f1bc785102e", stages: DONE },
  { name: "Brewster F2A Buffalo", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/a0da541c.jpg", fab: "https://www.fab.com/listings/a0da541c-e1d8-4a6f-a4bf-2eee529fbac7", stages: DONE },
  { name: "North American P-51D Mustang", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/c7de8fe2.jpg", fab: "https://www.fab.com/listings/c7de8fe2-59dd-499a-848a-8f42dace87dd", stages: DONE },
  { name: "Nakajima Ki-44 Shoki", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/a16b0cd3.jpg", fab: "https://www.fab.com/listings/a16b0cd3-4737-4ee2-bfb8-924bdcfc48b3", stages: DONE },
  { name: "Nakajima Ki-27 Nate", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/f97a56ae.jpg", fab: "https://www.fab.com/listings/f97a56ae-2246-4664-878e-7873e813884c", stages: DONE },
  { name: "Curtiss P-40B Tomahawk", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/840a3ca1.jpg", fab: "https://www.fab.com/listings/840a3ca1-d4f8-498e-bc5d-c89347c79ba3", stages: DONE },
  { name: "Polikarpov I-16", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-23", preview: "previews/fab/93e9bbc3.jpg", fab: "https://www.fab.com/listings/93e9bbc3-5727-4b9e-b498-1be9b1aff95c", stages: DONE },
  { name: "IAF Pilot", type: "Free", kind: "Rigged WW2 Character", release: "2026-09-22", preview: "previews/fab/4782e2d0.jpg", fab: "https://www.fab.com/listings/4782e2d0-67f7-466b-be85-f8aa044576c4", stages: DONE },
  { name: "WW2 Aircraft Bundle II", type: "Paid", kind: "9 Airplanes, 37 Liveries", release: "2026-09-22", preview: "previews/fab/c9ba12ba.jpg", fab: "https://www.fab.com/listings/c9ba12ba-dab1-401b-91f8-36d8f27d9fbd", stages: DONE },
  { name: "WW2 Aircraft Bundle", type: "Paid", kind: "10 Airplanes, 47 Liveries", release: "2026-10-02", preview: "previews/fab/ae957d9f.jpg", fab: "https://www.fab.com/listings/ae957d9f-a48d-4b1f-9e20-a81987b948e8", stages: DONE },
  { name: "Lockheed P-38 Lightning", type: "Free", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-22", preview: "previews/fab/a93dbf09.jpg", fab: "https://www.fab.com/listings/a93dbf09-e163-483b-8db0-82c9b12962a4", stages: DONE },
  { name: "North American B-25 Mitchell", type: "Paid", kind: "Low Poly WW2 Bomber Airplane", release: "2026-09-20", preview: "previews/fab/7991a838.jpg", fab: "https://www.fab.com/listings/7991a838-7596-4a19-99b7-6fd483ee3946", stages: DONE },
  { name: "Mitsubishi A6M2 Zero", type: "Paid", kind: "Low Poly WW2 Fighter Airplane", release: "2026-09-12", preview: "previews/fab/d9b66f45.jpg", fab: "https://www.fab.com/listings/d9b66f45-41ef-4c45-8e2d-6527b2934d2f", stages: DONE },
  { name: "Doomsday Pickup Truck", type: "Free", kind: "Drivable Post-Apocalyptic Vehicle", release: "2026-09-09", preview: "previews/fab/d89201ed.jpg", fab: "https://www.fab.com/listings/d89201ed-5de8-437c-9b91-3af2d913421a", stages: DONE },
  { name: "Bighorn Sheep Ram", type: "Paid", kind: "Low Poly Rigged Animated Male Sheep", release: "2026-08-25", preview: "previews/fab/615c4863.jpg", fab: "https://www.fab.com/listings/615c4863-12e4-48f7-9e2c-758dd3efa967", stages: DONE },
  { name: "Stylized Female Character", type: "Paid", kind: "Rigged Animated Hand Painted Fantasy Warrior", release: "2026-09-10", preview: "previews/fab/1a3097e6.jpg", fab: "https://www.fab.com/listings/1a3097e6-0ec5-407a-8bd4-e5d2e96adc02", stages: DONE },
  { name: "Egyptian Slot Game Art Kit", type: "Paid", kind: "Symbols, Characters, Pop-Ups", release: "2026-08-08", preview: "previews/fab/06ebb71e.jpg", fab: "https://www.fab.com/listings/06ebb71e-284a-4a89-b669-3317ad1bbf8f", stages: DONE },
  { name: "Free Egyptian Slot Game Art", type: "Free", kind: "Symbols, Wild, Character", release: "2026-08-08", preview: "previews/fab/e548f500.jpg", fab: "https://www.fab.com/listings/e548f500-fbc4-4ebf-9423-52b5278799ce", stages: DONE },
  { name: "Post Apocalyptic Motorcycle", type: "Free", kind: "Rigged Off Road Enduro Bike", release: "2026-08-02", preview: "previews/fab/2ba45f8e.jpg", fab: "https://www.fab.com/listings/2ba45f8e-de1d-40c0-b306-3d68839f3d32", stages: DONE },
  { name: "Turnstile Fare Gate 3D Model", type: "Free", kind: "Subway Vending Machine", release: "2026-07-30", preview: "previews/fab/8e96e3cc.jpg", fab: "https://www.fab.com/listings/8e96e3cc-c578-46af-a4fe-e3e72b292bc7", stages: DONE },
  { name: "Stylized Nature Environment Pack", type: "Paid", kind: "Windmill, Rocks, Grass", release: "2026-08-18", preview: "previews/fab/f06be20c.jpg", fab: "https://www.fab.com/listings/f06be20c-1299-43c0-9dce-b58c327dd6be", stages: DONE },
  { name: "Realistic Grey Wolf 3D Model", type: "Paid", kind: "Rigged Animated", release: "2026-06-16", preview: "previews/fab/f397c884.jpg", fab: "https://www.fab.com/listings/f397c884-8617-4159-ae52-ba237ec19aa7", stages: DONE },
  { name: "Realistic Llama 3D Model", type: "Paid", kind: "Rigged Animated", release: "2026-06-16", preview: "previews/fab/eb9a3146.jpg", fab: "https://www.fab.com/listings/eb9a3146-0ab2-4a46-a60a-c126a67ddea5", stages: DONE },
  { name: "Realistic Sheep 3D Model", type: "Paid", kind: "Rigged Animated", release: "2026-06-16", preview: "previews/fab/aefa829a.jpg", fab: "https://www.fab.com/listings/aefa829a-f897-4cfe-8122-ea6055835aea", stages: DONE },
  { name: "Realistic Red Fox 3D Model", type: "Paid", kind: "Rigged Animated", release: "2026-06-16", preview: "previews/fab/0083c9e4.jpg", fab: "https://www.fab.com/listings/0083c9e4-2df3-4feb-abd4-1cac57ac640a", stages: DONE },
  { name: "Realistic Grizzly Bear 3D Model", type: "Paid", kind: "Rigged Animated", release: "2026-06-15", preview: "previews/fab/ee29e243.jpg", fab: "https://www.fab.com/listings/ee29e243-07f5-4e2a-bec8-8e0416a9d5d3", stages: DONE },
  { name: "Low Poly Cow 3D Model", type: "Free", kind: "Holstein Dairy Rigged Animated", release: "2026-06-11", preview: "previews/fab/01a64d14.jpg", fab: "https://www.fab.com/listings/01a64d14-45b2-461c-ad7e-f35f8199406c", stages: DONE },
  { name: "Realistic 3D Animal Pack", type: "Paid", kind: "Shepherd Valley", release: "2026-08-22", preview: "previews/fab/21ea4236.jpg", fab: "https://www.fab.com/listings/21ea4236-931b-4723-b446-1036af60f7b9", stages: DONE },
  { name: "Labrador Retriever 3D Dog Model", type: "Paid", kind: "Other", release: "2026-04-07", preview: "previews/fab/5fde5afb.jpg", fab: "https://www.fab.com/listings/5fde5afb-0c1c-4912-85c3-d496978a0505", stages: DONE },
  { name: "Border Collie 3D Dog Model", type: "Paid", kind: "Other", release: "2026-06-01", preview: "previews/fab/15734f08.jpg", fab: "https://www.fab.com/listings/15734f08-e5cb-4c49-827f-a167abde6015", stages: DONE },
  { name: "Beagle 3D Dog Model", type: "Paid", kind: "Other", release: "2026-04-06", preview: "previews/fab/ee7ab3e3.jpg", fab: "https://www.fab.com/listings/ee7ab3e3-c266-4516-a9c5-a597684eb398", stages: DONE },
  { name: "American Cocker Spaniel 3D Dog Model", type: "Paid", kind: "Other", release: "2026-04-06", preview: "previews/fab/dc41493e.jpg", fab: "https://www.fab.com/listings/dc41493e-3221-4503-b7aa-36ddc8867c72", stages: DONE },
  { name: "German Shepherd 3D Dog Model", type: "Free", kind: "Mammals", release: "2026-04-02", preview: "previews/fab/5ffcabde.jpg", fab: "https://www.fab.com/listings/5ffcabde-3356-4d75-b98e-580825f15e47", stages: DONE },
  { name: "Golden Retriever 3D Dog Model", type: "Paid", kind: "Mammals", release: "2026-04-02", preview: "previews/fab/26ddbbf1.jpg", fab: "https://www.fab.com/listings/26ddbbf1-08dd-4da3-81e0-a36c8dd22815", stages: DONE },
  { name: "Papillon 3D Dog Model", type: "Paid", kind: "Mammals", release: "2026-04-02", preview: "previews/fab/dd975a83.jpg", fab: "https://www.fab.com/listings/dd975a83-22d5-48d6-b0a2-17ebc5831e76", stages: DONE },
  { name: "English Cocker Spaniel 3D Dog Model", type: "Paid", kind: "Other", release: "2026-04-02", preview: "previews/fab/da8d9d61.jpg", fab: "https://www.fab.com/listings/da8d9d61-8b50-43bc-8640-a67eeaf60341", stages: DONE },
  { name: "Post Apocalyptic Truck 3D Model", type: "Paid", kind: "Cars & Trucks", release: "2026-04-01", preview: "previews/fab/190cbe40.jpg", fab: "https://www.fab.com/listings/190cbe40-2fd5-4c21-b67d-a0d9b24fd163", stages: DONE },
  { name: "Post Apocalyptic 3D Cars Pack", type: "Paid", kind: "Cars & Trucks", release: "2026-09-08", preview: "previews/fab/a7b0d8df.jpg", fab: "https://www.fab.com/listings/a7b0d8df-0f7b-4b12-a6af-d51154d0e9e9", stages: DONE },
  { name: "Post Apocalyptic Bike 3D Model", type: "Paid", kind: "Bicycles & Motorcycles", release: "2026-08-18", preview: "previews/fab/18803588.jpg", fab: "https://www.fab.com/listings/18803588-a094-4f3d-af99-513d6d27f026", stages: DONE },
  { name: "Post Apocalyptic Buggy 3D Model", type: "Paid", kind: "Cars & Trucks", release: "2026-03-30", preview: "previews/fab/2e69b208.jpg", fab: "https://www.fab.com/listings/2e69b208-d708-4a14-8922-fb2c9638aa74", stages: DONE },
  { name: "Sherman Terrier 3D Dog Model", type: "Paid", kind: "Other", release: "2026-03-26", preview: "previews/fab/754403a3.jpg", fab: "https://www.fab.com/listings/754403a3-627a-424e-a666-e5988e61c272", stages: DONE },
  { name: "Sci-fi 3D Stylized Fish Model", type: "Paid", kind: "Animals", release: "2026-03-26", preview: "previews/fab/875be860.jpg", fab: "https://www.fab.com/listings/875be860-3ad8-41c6-a82f-88ea2942c9f1", stages: DONE },
  { name: "Black Labrador 3D Dog Model", type: "Paid", kind: "Mammals", release: "2026-03-26", preview: "previews/fab/a55bcafb.jpg", fab: "https://www.fab.com/listings/a55bcafb-b75f-499c-bbb4-b1329d361f96", stages: DONE },
  { name: "Australlian Shepherd 3D Dog Model", type: "Paid", kind: "Other", release: "2026-03-26", preview: "previews/fab/2d27c231.jpg", fab: "https://www.fab.com/listings/2d27c231-026b-4606-8a18-ece886e6e372", stages: DONE },
  { name: "Sheltie 3D Dog Model", type: "Paid", kind: "Mammals", release: "2026-03-26", preview: "previews/fab/4253bc99.jpg", fab: "https://www.fab.com/listings/4253bc99-dbc6-444e-8b32-0294f2bd4598", stages: DONE },
  { name: "Fantasy 3D Fish Model", type: "Paid", kind: "Animals", release: "2026-03-25", preview: "previews/fab/7bad93b0.jpg", fab: "https://www.fab.com/listings/7bad93b0-6c61-4387-82ab-402026048ae0", stages: DONE },
  { name: "Realistic 3D Dog Pack", type: "Paid", kind: "Mammals", release: "2026-03-25", preview: "previews/fab/a1910b03.jpg", fab: "https://www.fab.com/listings/a1910b03-c432-4992-ad1e-22f6b0ea0c97", stages: DONE },
  { name: "Coral Reef and Seaweed 3D Models", type: "Paid", kind: "Aquatic", release: "2026-03-25", preview: "previews/fab/f6472efd.jpg", fab: "https://www.fab.com/listings/f6472efd-b292-4143-9139-e2d4ac2d26e4", stages: DONE },
  { name: "3D Underwater Rocks Pack", type: "Paid", kind: "Rocks & Stones", release: "2026-03-25", preview: "previews/fab/6d9219eb.jpg", fab: "https://www.fab.com/listings/6d9219eb-4cd9-47f2-b64b-9b6d08dde26f", stages: DONE },
  { name: "Stylized Crab 3D Model", type: "Paid", kind: "Animals", release: "2026-03-25", preview: "previews/fab/7e81366f.jpg", fab: "https://www.fab.com/listings/7e81366f-12fa-47dd-8c30-ad8b989cbbd0", stages: DONE },
  { name: "First Person Shooter Underwater Asset Pack", type: "Paid", kind: "Vehicles & Transportation", release: "2026-03-25", preview: "previews/fab/270d60f2.jpg", fab: "https://www.fab.com/listings/270d60f2-551d-4b90-afce-e474dcf05163", stages: DONE },
  { name: "Stylized Sci Fi Mech Robot Asset", type: "Free", kind: "Mechanical & Robots", release: "2026-03-25", preview: "previews/fab/59d748a6.jpg", fab: "https://www.fab.com/listings/59d748a6-0510-4470-b440-7b3b0d896f72", stages: DONE },
  { name: "Isometric Underwater Environment Asset Pack", type: "Paid", kind: "Aquatic", release: "2026-03-25", preview: "previews/fab/24d2ba49.jpg", fab: "https://www.fab.com/listings/24d2ba49-f3fa-43f4-9038-622926c89158", stages: DONE },
  { name: "Subway Realm", type: "Paid", kind: "Game-Ready NYC Metro Station Environment", release: "2026-09-01", preview: "previews/fab/168942e8.jpg", fab: "https://www.fab.com/listings/168942e8-6b95-4640-98c6-631c8789c114", stages: DONE },
  { name: "Stylized Cyberpunk Props and Animated Character", type: "Paid", kind: "Characters & Creatures", release: "2026-02-03", preview: "previews/fab/13fbd352.jpg", fab: "https://www.fab.com/listings/13fbd352-d27a-4fa6-a5f0-8375f4536547", stages: DONE },
  { name: "Defense Line", type: "Paid", kind: "Ultimate Pack", release: "2026-02-09", preview: "previews/fab/ea15742d.jpg", fab: "https://www.fab.com/listings/ea15742d-fd59-4469-862b-87a3f7480946", stages: DONE },
  { name: "Last Guns", type: "Paid", kind: "Apocalyptic Wheels", release: "2026-09-08", preview: "previews/fab/c97566c2.jpg", fab: "https://www.fab.com/listings/c97566c2-0c92-4f25-b15f-defb9e4ebbc4", stages: DONE },
  { name: "Stylized Cyberpunk 3D Animated Character", type: "Paid", kind: "Humans", release: "2026-02-03", preview: "previews/fab/52ffcbac.jpg", fab: "https://www.fab.com/listings/52ffcbac-693f-441c-8ff6-302f40b489dd", stages: DONE },
  { name: "Stylized Cyberpunk City Props", type: "Paid", kind: "Street / Road", release: "2026-02-03", preview: "previews/fab/0ac24f42.jpg", fab: "https://www.fab.com/listings/0ac24f42-aced-4c4d-9826-0a9cdc19633a", stages: DONE },
];
