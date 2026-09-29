// ============================================================
//  EDIT ME: plant details.
//  These are the standard stages of a packaged-water plant.
//  Confirm each one with your plant team before going live,
//  and delete or rename anything Puris does not actually do.
// ============================================================

export const steps = [
  { icon: "tank", title: "Source water intake", text: "Raw water is drawn and held in food-grade stainless steel tanks." },
  { icon: "layers", title: "Sand and carbon filtration", text: "Removes suspended particles, colour and odour." },
  { icon: "filter", title: "Micron filtration", text: "Fine cartridge filters catch what the first stage misses." },
  { icon: "rings", title: "Reverse osmosis", text: "Membrane treatment reduces dissolved impurities." },
  { icon: "uv", title: "UV and ozone treatment", text: "Disinfects the water before it reaches the bottle." },
  { icon: "spark", title: "Mineral addition", text: "Minerals are added back for taste. This is the 'added minerals' on the label." },
  { icon: "bottle", title: "Rinse, fill and cap", text: "Bottles are rinsed, filled and sealed on the bottling line." },
  { icon: "flask", title: "Batch coding and lab check", text: "Batch number, MFG and EXP are printed, and samples are tested." },
];

// Add photos to /public with these exact names and they appear automatically.
export const zones = [
  { icon: "tank", title: "Water treatment", text: "Filtration, RO and disinfection units in one hygienic block.", img: "plant-treatment.jpg" },
  { icon: "bottle", title: "Bottling line", text: "Rinsing, filling and capping in a clean, enclosed area.", img: "plant-bottling.jpg" },
  { icon: "flask", title: "Quality lab", text: "Routine checks on every batch before it is dispatched.", img: "plant-lab.jpg" },
  { icon: "truck", title: "Storage and dispatch", text: "Stacked, batch-tracked and loaded for delivery.", img: "plant-dispatch.jpg" },
];

export const serves = ["Homes", "Offices", "Shops and retail", "Hotels and restaurants", "Weddings and events", "Schools and institutes"];